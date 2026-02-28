

# Dream Streams: Full Site Audit and SEO Migration Plan

## SEO Migration Strategy (Protecting Your Rankings)

Your concern about domain migration is valid. Here's what needs to happen to protect your SEO:

### URL Slug Mapping (Current Squarespace vs New Site)

The current live site uses these URLs, and most already match. One critical mismatch needs fixing:

| Live Site (Squarespace) | New Site | Status |
|---|---|---|
| `/home` | `/home` | Matches |
| `/about` | `/about` | Matches |
| `/pricing` | `/pricing` | Matches |
| `/portfolio` | `/portfolio` | Matches |
| `/faq` | `/faq` | Matches |
| `/testimonials` | `/testimonials` | Matches |
| `/funerallivestreaming` | `/funerallivestreaming` | Matches |
| `/contact` | `/contact/weddings` | Needs redirect |
| `/contact2` | `/contact/funerals` | **Missing** - needs redirect |
| `/additional-services` | `/services/additional` | **Mismatch** - needs redirect |
| `/services` (doesn't exist on live) | `/services` | New page, no SEO risk |

### Page Title Matching (SEO Critical)

Current live site titles vs your new titles - these should match to preserve rankings:

| Page | Live Site Title | New Site Title | Action |
|---|---|---|---|
| Home | "Dream Streams \| Wedding Live Streaming \| Toronto, Ontario" | Same | OK |
| About | "Live Stream Wedding Videographer \| Toronto, Ontario" | "About Us \| Dream Streams - Wedding Livestreaming Toronto" | **Update to match** |
| Pricing | "Wedding Live Stream Pricing \| Toronto, Ontario" | "Pricing & Packages \| Dream Streams" | **Update to match** |
| FAQ | "FAQ" | "FAQ \| Dream Streams" | OK (improved) |
| Portfolio | "Portfolio" | "Portfolio \| Dream Streams" | OK (improved) |
| Funeral | "Toronto Funeral and Celebration of Life Livestreaming" | Needs checking | **Update to match** |
| Contact | "Contact \| Dream Streams" | "Contact Us \| Dream Streams" | Close enough |

---

## Issues Found in Audit

### 1. Critical SEO Issues

- **No sitemap.xml** - Must add `public/sitemap.xml` listing all pages with `dreamstreams.ca` URLs
- **robots.txt missing Sitemap directive** - Needs `Sitemap: https://dreamstreams.ca/sitemap.xml`
- **Canonical URL inconsistency** - Live site canonical is `https://www.dreamstreams.ca/` (with `www`), new site uses `https://dreamstreams.ca` (without `www`). Pick one and be consistent. Recommendation: use `https://dreamstreams.ca` and set up www redirect
- **Missing 301 redirects** for old Squarespace URLs:
  - `/additional-services` should redirect to `/services/additional`
  - `/contact2` should redirect to `/contact/funerals`
- **Missing og-image.jpg** in `/public` folder (referenced in `index.html` meta tags)
- **Page titles don't match** live site (About, Pricing, Funeral pages)

### 2. Layout / CSS Issues

- **App.css leftover** - `src/App.css` still has Vite boilerplate (`max-width: 1280px`, `padding: 2rem`, `text-align: center` on `#root`). This constrains the full-width layout and adds unwanted padding. Must be cleaned up.
- **Services page** uses a stock Unsplash image URL (external dependency) instead of a local asset for the "Commitment" section

### 3. Mobile Responsiveness Concerns

- **Hero video section** (`HeroSection.tsx`) - iframe sizing with `w-[177.77vh]` may not render well on all mobile devices
- **Pricing hero grid** - 2x2 on mobile (`grid-cols-2`) may be too tight on small screens
- **Footer** email link may overflow on very narrow screens
- **Testimonials** - alternating image left/right layout needs verification on mobile (images should stack above text)

### 4. Missing Functionality

- **No 301 redirect handling** for legacy Squarespace URLs (`/additional-services`, `/contact2`, `/graduations-and-award-shows`)
- Contact page redirects `/contact` to `/contact/weddings` but Squarespace has separate `/contact` and `/contact2` pages

---

## Implementation Plan

### Task 1: Fix SEO Page Titles to Match Live Site
Update `<Helmet>` titles on About, Pricing, and Funeral pages to match the current live Squarespace titles exactly.

### Task 2: Add Sitemap and Update robots.txt
Create `public/sitemap.xml` with all page URLs using `dreamstreams.ca` domain. Add `Sitemap:` directive to `robots.txt`.

### Task 3: Add Legacy URL Redirects
Add React Router redirects for old Squarespace URLs:
- `/additional-services` to `/services/additional`
- `/contact2` to `/contact/funerals`
- `/graduations-and-award-shows` to `/services/additional`

### Task 4: Clean Up App.css
Remove the Vite boilerplate styles from `src/App.css` that constrain layout width and add unwanted padding/centering.

### Task 5: Add Canonical URLs to All Pages
Ensure every page has a `<link rel="canonical">` tag. Currently missing on FAQ and Testimonials pages.

### Task 6: Mobile Responsiveness Fixes
- Verify and fix hero video sizing on mobile
- Ensure pricing grid doesn't get too cramped
- Test testimonial card stacking

---

## SEO Migration Checklist (When You Switch the Domain)

When you're ready to point `dreamstreams.ca` to this new site:

1. **Set up both `dreamstreams.ca` and `www.dreamstreams.ca`** in Lovable's domain settings, with one as primary (the other will redirect)
2. **Keep the same URL structure** - all slugs match, plus redirects for the ones that changed
3. **Submit the new sitemap** to Google Search Console after migration
4. **Monitor Search Console** for crawl errors in the first 2 weeks
5. The matched page titles, canonical URLs, and meta descriptions will help Google understand it's the same site at the same URLs, preserving your rankings

