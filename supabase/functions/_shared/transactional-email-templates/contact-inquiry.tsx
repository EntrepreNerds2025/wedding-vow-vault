import * as React from 'npm:react@18.3.1'
import { Body, Container, Head, Heading, Html, Preview, Section, Text, Hr } from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  inquiryType?: string
  fields?: { label: string; value: string }[]
}

const Email = ({ inquiryType = 'Contact', fields = [] }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New {inquiryType} inquiry from the Dream Streams website</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New {inquiryType} Inquiry</Heading>
        <Hr style={hr} />
        {fields.map((f, i) => (
          <Section key={i} style={{ marginBottom: '12px' }}>
            <Text style={label}>{f.label}</Text>
            <Text style={value}>{f.value || '—'}</Text>
          </Section>
        ))}
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (d: Record<string, any>) => `New ${d.inquiryType ?? 'Contact'} Inquiry${d.name ? ` – ${d.name}` : ''}`,
  displayName: 'Contact inquiry (to Dream Streams)',
  to: 'info@dreamstreams.ca',
  previewData: {
    inquiryType: 'Funeral',
    name: 'Jane Doe',
    fields: [
      { label: 'Full Name', value: 'Jane Doe' },
      { label: 'Email', value: 'jane@example.com' },
      { label: 'Start Time', value: '10:30 AM' },
    ],
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Rubik, Arial, sans-serif' }
const container = { padding: '24px 28px', maxWidth: '600px' }
const h1 = { color: '#1a365d', fontFamily: 'Georgia, serif', fontSize: '24px', margin: '0 0 12px' }
const hr = { borderColor: '#B08D57', margin: '12px 0 20px' }
const label = { color: '#C87533', fontSize: '12px', textTransform: 'uppercase' as const, letterSpacing: '1px', margin: '0' }
const value = { color: '#1a365d', fontSize: '15px', margin: '2px 0 0', whiteSpace: 'pre-wrap' as const }
