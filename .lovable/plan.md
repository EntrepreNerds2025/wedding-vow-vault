

# Services Dropdown + Wedding Services Page

## 1. Add Services Dropdown to Navigation

Replace the flat "SERVICES" nav link in the Header with a dropdown menu containing:
- **Weddings** -> `/services/weddings` (same page as clicking "Services" directly)
- **Funerals** -> `/funerallivestreaming`
- **Grad and Award Shows** -> `/services/grad-award-shows`
- **Additional Services** -> `/services/additional`

Clicking "SERVICES" itself will also navigate to `/services` (which shows the weddings page).

The dropdown will use the existing Radix `DropdownMenu` component already installed. On mobile, the dropdown items will appear inline in the hamburger menu as indented sub-items.

## 2. Create the Wedding Services Page

New file: `src/pages/Services.tsx` -- matching the reference screenshot layout:

### Hero Section
- Full-width wedding photo banner (reuse the existing hero video or a static image approach matching the original site)

### Welcome / Intro Section
- "Welcome to Dream Streams!" heading with the tagline
- Paragraph about wedding livestreaming services
- "Learn More" button linking to `/pricing`

### Commitment Section
- Wedding ring close-up image with decorative copper accent shape overlay
- "Our Commitment to You" text block with "Contact Us" button

### Benefits Section ("Leave the Work and Worry to Us")
- 4 benefit cards: Come One Come All, High Quality Streaming, Worry Free, Above and Beyond
- "Contact Us" button at bottom

### What Makes Dream Streams Unique Section
- 3-image slider/carousel using the uploaded photos:
  - `breathe_8.webp` ("dream story" - A Short Film)
  - `breathe_7.webp` ("dream thank-you" - Pre-Recorded Thank-You Video)
  - `breathe_9.webp` ("dream page" - Custom Webpage)
  - `breathe_6.webp` ("dream invite" - Exclusive Video Guest Invitation)
- Using the existing `embla-carousel-react` package

### Why Livestream Your Wedding Section (new content)
- Additional reasons section with compelling points about why livestreaming is valuable:
  - Include elderly/distant relatives, COVID/health concerns, destination weddings, military families, etc.

### Video Showcase Section
- "What does a Gold Package look like?" heading
- Vimeo embed: `https://player.vimeo.com/video/924622427`

### CTA Section
- "Ready to Get Started?" with copper accent
- "Let's Chat!" button linking to `/contact`

## 3. Update Routing

In `App.tsx`:
- `/services` -> `<Services />`
- `/services/weddings` -> `<Services />` (same component)
- `/funerallivestreaming` -> placeholder for now
- `/services/grad-award-shows` -> placeholder for now
- `/services/additional` -> placeholder for now

## 4. Copy Assets

Copy the 4 uploaded product images to `src/assets/services/`:
- `breathe_6.webp`, `breathe_7.webp`, `breathe_8.webp`, `breathe_9.webp`

## Technical Details

**Files to create:**
- `src/pages/Services.tsx` - Main services/weddings page

**Files to modify:**
- `src/components/layout/Header.tsx` - Replace "SERVICES" flat link with dropdown (desktop: hover/click dropdown, mobile: expandable sub-menu)
- `src/App.tsx` - Add new routes

**Assets to copy:**
- 4 images to `src/assets/services/`

**Dependencies used:**
- `@radix-ui/react-dropdown-menu` (already installed)
- `embla-carousel-react` (already installed) for the image slider
- Existing design system (Playfair Display headings, Rubik body, navy/copper/cream palette)

