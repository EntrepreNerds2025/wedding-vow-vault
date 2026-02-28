

# About Page Build + Social Link Fix

## 1. Fix Social Media Links (Header + Footer)

Update all Instagram and Facebook URLs across the site:
- Instagram: `https://www.instagram.com/dreamstreams.ca`
- Facebook: `https://www.facebook.com/dreamstreams.ca`

Files to update: `Header.tsx` (4 links - desktop + mobile) and `Footer.tsx` (2 links).

## 2. Create the About Page

Based on the reference screenshot, the About page will be built as a new `src/pages/About.tsx` with these sections:

### Hero / Our Story Section
- Left side: Wedding couple photo (`326A8122.webp`) with a decorative copper/orange curved shape overlay in the top-right corner
- Right side: "the dream team." heading in Playfair Display italic, "OUR STORY" copper subtitle, and the origin story paragraph about getting married during a pandemic

### XOXO + Chapters Section
- Centered XOXO candy image (`pexels-karolina-grabowska-4016535.webp`)
- Two-column layout below with "CHAPTER 1" and "CHAPTER 2" (copper headings, body text)

### Chapter 3 Section
- Centered wedding photo with masks (`326A8139.webp`)
- "CHAPTER 3" copper heading and body text centered below

### The Duo Section
- "the duo." heading in Playfair Display italic
- Two portrait photos side by side:
  - Left: `DSC09552.webp` - "Rovann" / Director / Camera Operator
  - Right: `Camesha-0018-web.webp` - "Camesha" / Producer / Administrator

### Assets to Copy
All 5 uploaded photos will be copied into `src/assets/about/`.

## 3. Wire Up the Route

Update `App.tsx` to import and render the new `About` component at `/about` instead of the `Home` placeholder.

## Technical Details

- New file: `src/pages/About.tsx`
- Modified files: `src/App.tsx`, `src/components/layout/Header.tsx`, `src/components/layout/Footer.tsx`
- Assets copied: 5 images to `src/assets/about/`
- The decorative copper curve will be done with CSS/SVG to match the original design
- SEO: Helmet with appropriate title and meta description for the About page

