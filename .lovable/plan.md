

# Funeral Page Cleanup + Contact Page Updates

## 1. Contact Page: Reorder dropdown (Contact.tsx)

Change the dropdown order from Funeral/Wedding/Other to **Wedding/Funeral/Other**, and update the default redirect so `/contact` goes to `/contact/weddings` instead of `/contact/funerals`.

**Files:** `src/pages/Contact.tsx` (reorder SelectItems), `src/App.tsx` (change redirect target), also update the `serviceConfig` default fallback from `"funerals"` to `"weddings"`.

## 2. Funeral Page: Replace hero banner image (FuneralLivestreaming.tsx)

Copy the uploaded image (`Funeral_New_Banner.png`) into `src/assets/funeral/` and import it to replace the current `heroFuneral` image in the hero banner section (section 1, line 97).

## 3. Funeral Page: Delete sections

Remove these 5 sections from `FuneralLivestreaming.tsx`:

- **Section 2 (lines 105-123):** "You never know how strong you are" quote + intro text
- **Section 3 (lines 126-137):** "Dream and Grieve with Unlimited Attendees" banner
- **Section 7 (lines 251-282):** "What Makes Dream Streams Unique?" with 4 image cards
- **Section 8 (lines 285-303):** Family photo / everyone holding hands
- **Section 12 (lines 422-432):** Bottom "Contact Us" button bar

The remaining sections (Why Livestream, Video Experience, We're Here to Help, Packages, Spiritual Leaders, Ready to Get Started CTA) stay as-is.

## Files to modify
- `src/pages/FuneralLivestreaming.tsx` -- replace banner image, delete 5 sections
- `src/pages/Contact.tsx` -- reorder dropdown items
- `src/App.tsx` -- update `/contact` redirect to `/contact/weddings`

## File to copy
- `user-uploads://Funeral_New_Banner.png` to `src/assets/funeral/Funeral_New_Banner.png`

