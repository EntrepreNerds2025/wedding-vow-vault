import { sendTemplateEmail } from '../_shared/transactional-email-templates/send-email.ts'

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const LABELS: Record<string, [string, string][]> = {
  wedding: [
    ['bride_name', "Bride's Name"], ['groom_name', "Groom's Name"], ['email', 'Email'], ['phone', 'Phone'],
    ['wedding_date', 'Wedding Date'], ['ceremony_time', 'Ceremony Time'], ['venue_address', 'Venue Address'],
    ['package_interest', 'Package Interest'], ['add_ons', 'Add-Ons'], ['internet_situation', 'Internet Situation'],
    ['how_heard', 'How They Heard'], ['promo_code', 'Promo Code'], ['message', 'Message'],
  ],
  funeral: [
    ['full_name', 'Full Name'], ['email', 'Email'], ['phone', 'Phone'], ['event_date', 'Date'],
    ['start_time', 'Start Time'], ['location', 'Location'], ['how_heard', 'How They Heard'], ['message', 'Message'],
  ],
}
LABELS.other = LABELS.funeral

// simple per-instance rate limit
const hits = new Map<string, number[]>()

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { headers: cors })
  const json = (b: unknown, s = 200) =>
    new Response(JSON.stringify(b), { status: s, headers: { ...cors, 'Content-Type': 'application/json' } })
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] ?? 'unknown'
    const now = Date.now()
    const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000)
    if (recent.length >= 5) return json({ error: 'Too many submissions, please try again later.' }, 429)
    hits.set(ip, [...recent, now])

    const body = await req.json()
    const type = String(body?.inquiry_type ?? '')
    const labels = LABELS[type]
    if (!labels) return json({ error: 'Invalid inquiry type' }, 400)

    const str = (v: unknown) =>
      (Array.isArray(v) ? v.map(String).join(', ') : v == null ? '' : String(v)).trim().slice(0, 2000)
    const email = str(body.email)
    const time = str(type === 'wedding' ? body.ceremony_time : body.start_time)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) return json({ error: 'Invalid email' }, 400)
    if (!time) return json({ error: 'Start time is required' }, 400)
    if (!str(body.phone)) return json({ error: 'Phone is required' }, 400)

    const fields = labels.map(([k, label]) => ({ label, value: str(body[k]) })).filter((f) => f.value || f.label.includes('Time'))
    const name = type === 'wedding' ? `${str(body.bride_name)} & ${str(body.groom_name)}` : str(body.full_name)
    if (!name.replace('&', '').trim()) return json({ error: 'Name is required' }, 400)
    const typeLabel = type === 'wedding' ? 'Wedding' : type === 'funeral' ? 'Funeral' : 'Other'

    await sendTemplateEmail('contact-inquiry', 'info@dreamstreams.ca', {
      templateData: { inquiryType: typeLabel, name, fields },
      idempotencyKey: `contact-inquiry-${crypto.randomUUID()}`,
    })
    return json({ success: true })
  } catch (e) {
    console.error('submit-contact-inquiry error', e)
    return json({ error: 'Could not send your inquiry. Please email info@dreamstreams.ca.' }, 500)
  }
})
