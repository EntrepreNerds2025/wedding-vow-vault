

# Funeral Livestreaming Page

## Overview
Create `src/pages/FuneralLivestreaming.tsx` to replicate the original funeral services page, and wire it up at `/funerallivestreaming`.

## Page Sections (top to bottom, matching the screenshot)

### 1. Hero Banner
- Full-width image of elderly people embracing (use Unsplash stock photo matching the warm, emotional tone)

### 2. Quote + Intro Section
- Inspirational quote: "You never know how strong you are until being strong is the only choice you have"
- Introductory paragraph about funeral livestreaming services
- "Learn More" button linking to `/pricing`

### 3. Banner - "Dream and Grieve with Unlimited Attendees"
- Full-width image with overlay text, showing a funeral/memorial setting

### 4. Why Livestream a Funeral Section
- Two-column layout: image of grandmother with child on left, text on right
- Explains why families choose livestreaming for memorial services
- Decorative copper accent shape

### 5. "We're here to help you." Section
- Text about Dream Streams' compassionate approach to funeral livestreaming
- "Learn More" button

### 6. "What Makes Dream Streams Unique?" Section
- Grid of images showing the custom webpage, laptop mockup, and device views
- Demonstrates the professional viewing experience guests receive

### 7. Family Photo Section
- Large emotional family gathering photo with decorative copper blob shapes

### 8. "You may also be a Spiritual Leader..." Section
- Addresses funeral directors, spiritual leaders, and other professionals
- Explains how Dream Streams can partner with them

### 9. "Our Packages" Section
- Package cards displayed in a grid:
  - **Gold Package**: Full-service with short film, custom webpage, video invite
  - **Silver Package**: Mid-tier option
  - **Basic**: Entry-level option
- Each card with copper accent styling and feature list

### 10. "Ready to Get Started?" CTA
- Copper-accented call to action with contact button

### 11. Video Experience Section
- "Because your guests' live viewing experience really does matter"
- Vimeo embed: `https://player.vimeo.com/video/1169120409`
- Zoom icon and 1-hour icon comparison showing Dream Streams vs standard Zoom

### 12. Final CTA Section
- "Contact Us" button linking to `/contact`

## Files to Modify

- **Create**: `src/pages/FuneralLivestreaming.tsx`
- **Modify**: `src/App.tsx` - Update `/funerallivestreaming` route to use the new component

## Technical Details

- Follows the same component structure as `Services.tsx` (Helmet, Header, Footer wrapper)
- Uses the existing design system: Playfair Display headings, Rubik body, navy/copper/cream palette
- Decorative copper blob shapes done with CSS border-radius or inline SVG (matching the original site's organic shapes)
- Unsplash stock images for funeral/memorial/family scenes that match the emotional tone of the original
- Vimeo embed ID: `1169120409`
- All buttons link to `/contact` or `/pricing` as appropriate
- SEO: Helmet with funeral livestreaming title and meta description

