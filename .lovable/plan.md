

# Contact Pages + Funeral Page Updates + CRM Integration

## Overview
Create a styled contact system with 3 service types (Funeral, Wedding, Other), update the funeral page (banner height, new button, updated links), and connect everything to the Impact Loop CRM.

## 1. Funeral Page Updates (`src/pages/FuneralLivestreaming.tsx`)

- **Banner height**: Change section 3 from `h-[50vh] min-h-[300px]` to `h-[25vh] min-h-[150px]`
- **"Get Started" button**: Add below the text in "Why Livestream a Funeral" (section 4)
- **All buttons**: Update every `Link to="/contact"` and `Link to="/pricing"` to point to `/contact/funerals`

## 2. Contact Page (`src/pages/Contact.tsx`)

A new page matching the uploaded screenshot designs:

- "lets chat." heading in Playfair Display
- Decorative peach/copper organic blob shapes
- Underline-style inputs (bottom border only)
- Service type dropdown at top to switch between Funeral / Wedding / Other

**Funeral Form**: Full Name, Email, Phone, Event Date, Location, How did you hear about us (dropdown), Message, Promo Code

**Wedding Form**: Bride Name, Groom Name, Email, Phone, Wedding Date, Ceremony Time, Venue Address, Package Interest (Bronze/Silver/Gold radio), Add-ons (checkboxes: Dream Story, Dream Thank You, Wedding Highlight Film, Social Media Highlight, Additional 1+ Hour, Reception, Zoom TV Monitor, Drone Operator, None), Internet Connectivity, How heard, Message

**Other Form**: Same layout as Funeral

Each form validates with Zod and POSTs to the CRM on submit with success/error toast feedback.

## 3. CRM Integration

Forms POST directly to:
```text
POST https://oyjbpxdcazamsdtrrmey.supabase.co/functions/v1/receive-dream-streams-inquiry
Headers: apikey: <anon-key>, Content-Type: application/json
```

Payload includes `inquiry_type` ("funeral", "wedding", or "other") plus all form fields. The anon key is publishable and will be stored as a constant in the code.

## 4. Routing (`src/App.tsx`)

- `/contact` redirects to `/contact/funerals`
- `/contact/funerals`, `/contact/weddings`, `/contact/other` render the Contact page with the matching form active

## 5. Header Navigation (`src/components/layout/Header.tsx`)

Update the "CONTACT US" nav link to point to `/contact`.

## Files to Create
- `src/pages/Contact.tsx`

## Files to Modify
- `src/pages/FuneralLivestreaming.tsx` -- banner height, add button, update links
- `src/App.tsx` -- add contact routes
- `src/components/layout/Header.tsx` -- update contact link

