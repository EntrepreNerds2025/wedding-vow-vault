

# Funeral Page: Section Reordering + Image Replacements

## Changes Summary

Four updates to `src/pages/FuneralLivestreaming.tsx`:

### 1. Replace Hero Banner Image (Section 1)
- Copy `Ideas-for-Celebration-of-Life.webp` (grandpa smiling in group hug) to `src/assets/funeral/`
- Import and use it as the hero image instead of `download.webp`

### 2. Replace "Why Livestream a Funeral" Image (Section 4)
- Copy `grandma-names-we-love-jpg.webp` (grandmother with grandchild) to `src/assets/funeral/`
- Import and use it to replace the current Unsplash stock photo in the two-column layout

### 3. Move Video Experience Section (Section 11) up to right after "Why Livestream a Funeral" (Section 4)
- Cut the entire Video Experience section (lines ~355-413) including the Vimeo embed and Zoom vs Dream Streams comparison
- Place it immediately after the "Why Livestream a Funeral" section

### 4. Move Spiritual Leader Section (Section 8) to after Packages (Section 9)
- Cut the Spiritual Leader section (lines ~252-275)
- Place it after the Our Packages section

### New Section Order:
1. Hero Banner (new grandpa image)
2. Quote + Intro
3. Banner - Dream and Grieve
4. Why Livestream a Funeral (new grandma image)
5. **Video Experience** (moved up from position 11)
6. We're here to help you
7. What Makes Dream Streams Unique
8. Family Photo
9. Our Packages
10. **Spiritual Leader** (moved down from position 8)
11. Ready to Get Started CTA
12. Final CTA

### Files Modified:
- `src/pages/FuneralLivestreaming.tsx` -- reorder sections + update image imports

### Assets Copied:
- `Ideas-for-Celebration-of-Life.webp` -> `src/assets/funeral/`
- `grandma-names-we-love-jpg.webp` -> `src/assets/funeral/`

