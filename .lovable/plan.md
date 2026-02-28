

# Additional Services Page + Navigation Cleanup

## Overview
Create the Additional Services page matching the original Squarespace site screenshot, remove the "Grad and Award Shows" nav item and route, and remove the "Blog" nav item and route.

## 1. Create Additional Services Page (`src/pages/AdditionalServices.tsx`)

A long-form page matching the screenshot layout:

**Hero Section**
- "Additional Services." heading in Playfair Display
- Intro paragraph about additional livestream services
- Decorative copper/orange organic blob shape (top-right, matching site aesthetic)

**"Reach Millions Live" Feature Block**
- Image of a speaker at a conference/event (Unsplash stock photo)
- Copper overlay box with "Reach Millions Live" heading and description text

**"What other live stream services do we offer?" Heading**

**Alternating Image/Text Service Cards** (5 services, alternating image left/right):
1. Corporate and Conference Events -- livestream corporate events, town halls, product launches
2. Funerals and Celebrations of Life -- brief mention linking to the dedicated funeral page
3. Concerts and Festivals -- livestream live music, festivals, performances
4. Religious Settings -- church services, religious ceremonies, spiritual gatherings
5. Concerts/Live Music -- band performances, DJ sets, music events

Each card has a numbered label (e.g., "01 CORPORATE & CONFERENCE EVENTS"), a paragraph of description, and an image. Layout alternates image position per row.

**"And much more:" Section**
- Bulleted list of additional services: Podcasts, Product Launches, Travel and Leisure, Exclusive and Creative Events, Expos and Trade Shows, Webinars
- Right-side text about Dream Streams being multi-faceted, mentioning other offerings (Photography, Videography, etc.)

**"Return on your Investment" Banner**
- Laptop image with copper overlay box containing ROI messaging

**Bottom CTA Section**
- Dark background banner: "Want to reach an unlimited audience.."
- Subtitle about turning events into dynamic livestreamed experiences
- Navigation links (What, Where, Who, Find Us, Contact Us)

## 2. Remove "Grad and Award Shows" (`Header.tsx`, `App.tsx`)

- Delete `{ label: "Grad and Award Shows", path: "/services/grad-award-shows" }` from `serviceSubItems` in Header.tsx
- Delete the `/services/grad-award-shows` route from App.tsx

## 3. Remove "Blog" (`Header.tsx`, `App.tsx`)

- Delete `{ label: "BLOG", path: "/blog" }` from `navItems` in Header.tsx
- Delete the `/blog` route from App.tsx

## 4. Register Additional Services Route (`App.tsx`)

- Import `AdditionalServices` component
- Change the `/services/additional` route from `<Home />` to `<AdditionalServices />`

## Files to Create
- `src/pages/AdditionalServices.tsx` -- Full additional services page

## Files to Modify
- `src/components/layout/Header.tsx` -- Remove "Grad and Award Shows" from dropdown, remove "BLOG" from nav
- `src/App.tsx` -- Remove grad-award-shows and blog routes, register AdditionalServices component

