

# Dream Streams Website Recreation Plan

## Project Overview
Recreate dreamstreams.ca as an exact replica wedding livestream website in Lovable, optimized for SEO with the same URL structure to enable seamless domain migration.

---

## Phase 1: Home Page (Starting Now)

### Header/Navigation
- Logo (Dream Streams script logo - will need to upload or link)
- Navigation: HOME | ABOUT | SERVICES | PRICING | BLOG | FAQ | PORTFOLIO | TESTIMONIALS | CONTACT US
- Social icons (Instagram, Facebook) + Search
- Mobile hamburger menu

### Hero Section
- Full-width background image (elegant wedding details - shoes, jewelry, flowers)
- Embedded video showcase (Vimeo integration)
- Overlay graphics/text

### Welcome Section
- "Welcome to Dream Streams!" heading
- "Wherever. Whenever. Together" tagline
- Description paragraph about wedding livestreaming
- "Learn More" button

### Our Commitment Section
- Split layout with image + decorative border
- "Our commitment to you" text
- Description about quality livestream service
- "Learn More" button

### 4 Benefits Section
- "Leave the work and worry to us" heading
- Grid of 4 numbered benefits:
  1. Come one come all
  2. High Quality Streaming
  3. Worry Free
  4. Above and Beyond
- Contact Us button

### What Makes Us Unique Section
- 4 feature icons with descriptions
- Visual cards/badges

### Video Showcase Section
- "What does a Gold Package look like?" heading
- Embedded Vimeo wedding video
- Decorative elements

### CTA Footer Section
- "Ready to Get Started?" heading
- Description text
- "Let's Chat!" button

### Footer
- Social links
- Copyright
- Contact info

---

## SEO Implementation (Built-In)
- **Title tag**: "Dream Streams | Wedding Live Streaming | Toronto, Ontario"
- **Meta description**: Comprehensive description for search results
- **Canonical URL**: Proper self-referencing canonical tags
- **Semantic HTML**: Proper H1, H2, H3 hierarchy
- **Image alt text**: Descriptive alt tags for all images
- **Structured data**: LocalBusiness + VideoObject schema
- **Open Graph tags**: For social sharing
- **react-helmet-async**: For dynamic meta tag management

---

## URL Structure (Matching Current Site)
| Route | Path |
|-------|------|
| Home | `/home` (with `/` redirecting) |
| About | `/about` |
| Pricing | `/pricing` |
| Portfolio | `/portfolio` |
| FAQ | `/faq` |
| Blog | `/blog` |
| Contact | `/contact` |
| Testimonials | `/testimonials` |

---

## Design System
- **Primary colors**: Navy blue (#1a365d), Copper/Orange accent (#C87533)
- **Fonts**: Playfair Display (headings), Rubik (body text)
- **Style**: Elegant, romantic, professional wedding aesthetic
- **White/cream backgrounds with subtle decorative borders

---

## Future Phases (After Home Page)
1. **About page** - Team bios, company story
2. **Pricing page** - Bronze/Silver/Gold packages + add-ons
3. **FAQ page** - Common questions with accordions
4. **Portfolio page** - Video gallery
5. **Contact page** - Inquiry form (with backend via Supabase)
6. **Testimonials page** - Customer reviews
7. **Blog pages** - If needed

---

## Technical Notes
- Images will be hosted in project or linked externally
- Video embeds via Vimeo iframe
- Contact form will require Lovable Cloud backend (Phase 2)
- Responsive design for all screen sizes
- Sitemap generation for Search Console submission

