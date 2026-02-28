

# Funeral Page Updates: Hero Image + Pricing Layout

## 1. Replace Hero Banner

Swap the current Unsplash stock photo hero with the uploaded sparklers/celebration image (`download.webp`). Copy it to `src/assets/funeral/` and import it.

## 2. Redesign Packages Section

Replace the current 3-column card grid with an alternating side-by-side layout matching the original site screenshot:

- **Gold Package** -- image on left, details + price on right -- $1,300
- **Silver Package** -- details + price on left, image on right -- $900
- **Bronze Package** -- image on left, details + price on right -- $600

Each package row separated by a horizontal divider line.

### Package images (copied to `src/assets/funeral/`):
- Gold: `download.webp` (sparklers celebration) with "Gold Package" text overlay
- Silver: `raising-a-toast.webp` (champagne toast) with "Silver Package" text overlay
- Bronze: `celebration-of-life-memorial-venue-las-vegas.webp` (heart stone) with "Bronze Package" text overlay

### Updated package details (from the screenshot):

**Gold Package - $1,300**
- Celebration of Life/Service Streaming
- Event Flyer Creation
- Unlimited Viewers
- 30 minute Planning Session
- 3-4 Camera Angles with Mobile Capabilities (switching angles, to give a dynamic stream)
- Pre-record Slideshow
- Include Dream Thank You Video (Provided by you)
- Include Dream Story Video (Edited by Us)
- Dream Page - Custom Landing Page
- USB Stick
- Professional Wireless Input microphones, post-amplifying
- Live Chat Capability
- Internet Provided if Needed
- 7-10 Business Days HD Footage Delivery

**Silver Package - $900**
- Celebration of Life/Service Streaming
- Youtube or Zoom
- Event Flyer Creation
- Unlimited Viewers
- 2 Camera Angles with Mobile Capabilities (switching angles to give a dynamic stream)
- Include Dream Thank You Video (Provided by you)
- Pre-record Slideshow
- Professional Audio with wireless Lavaliers post-amplifying
- Live Chat Capability
- Internet Provided if Needed
- 7-10 Business Days HD Footage Delivery

**Bronze Package - $600**
- Celebration of Life/Funeral Streaming
- Youtube Only
- Unlimited Viewers
- 1 Camera Angle
- Professional Audio post-amplifying
- Live Chat Capability
- Venue Wifi Required
- 7-10 Business Days HD Footage Delivery

## Files

**Assets to copy (3 images):**
- `user-uploads://download.webp` -> `src/assets/funeral/download.webp`
- `user-uploads://raising-a-toast.webp` -> `src/assets/funeral/raising-a-toast.webp`
- `user-uploads://celebration-of-life-memorial-venue-las-vegas.webp` -> `src/assets/funeral/celebration-of-life-memorial-venue-las-vegas.webp`

**Files to modify:**
- `src/pages/FuneralLivestreaming.tsx` -- replace hero image source + completely redesign the packages section (section 9) to use the alternating image/details layout with prices

