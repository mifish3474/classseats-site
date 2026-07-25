# ClassSeats Current UI Site Update Plan

This is the working checklist for updating the public ClassSeats site so screenshots, videos, instructions, and product language match the current app UI.

## Goals

- Replace old UI screenshots and videos with current UI media.
- Update setup and workflow instructions so teachers are not guided through outdated flows.
- Keep the current site structure unless a page-by-page review shows a clear need to change it.
- Keep pricing/free-access language consistent:
  - Free through September 1, 2026.
  - Free 45-day trial after that.
  - Always-free tier available.
- Preserve legal/privacy accuracy while only changing policy text when product behavior has actually changed.

## Open Questions

- What does the current first-run/onboarding flow look like?
- Is initial setup still desktop/laptop-first, or can teachers now start comfortably on mobile?
- What are the current names of the primary app views and actions?
- Which features are included in the always-free tier?
- Which features require the paid/full feature set?
- Do we have fresh screenshots/videos, or should we capture new media from the current app?
- Should the external Google Doc setup guide stay linked, be replaced, or be removed until refreshed?

## Current Pages

### Home Page

File: `index.html`

Status: Not started

Current concerns:
- Hero screenshot uses old UI: `media/hero-image.png`.
- "See it in action" section uses old media:
  - `media/generate-groups.mp4`
  - `media/flashcards-composite.png`
  - `media/projection-view.png`
  - `media/attendance-view.png`
- Feature copy may reference old workflows or labels.
- FAQ and JSON-LD should stay aligned with visible content.

Planned updates:
- Replace hero media with current UI screenshot or video.
- Refresh alt text for new media.
- Update feature/workflow copy to match the current app.
- Replace or remove outdated "See it in action" cards.
- Confirm FAQ accuracy.

### Get Started Page

File: `get-started.html`

Status: Not started

Current concerns:
- Setup page likely has the highest risk of misleading users.
- Embedded videos use old UI:
  - `media/generate-groups.mp4`
  - `media/ClassSeats-60Seconds.mp4`
- Copy says setup starts on a computer and takes about 2 minutes.
- Inline mobile visitor script rewrites setup instructions.
- External Google Doc setup guide likely contains old screenshots and demos.

Planned updates:
- Rewrite setup instructions to match the current onboarding flow.
- Replace old videos or temporarily remove them.
- Confirm desktop/mobile setup guidance.
- Update dynamic phone-specific messaging.
- Decide what to do with the external setup guide link.

### Pricing Page

File: `pricing.html`

Status: Initial free/trial wording updated

Current concerns:
- Free/trial/always-free messaging has been updated, but Free vs Pro details are still not defined.
- Paid plan language should be reviewed once tier details are final.

Planned updates:
- Add or revise Free vs Pro feature details when available.
- Confirm early adopter and standard pricing.
- Make the always-free tier concrete enough to set expectations.

### District IT Page

File: `district.html`

Status: Not started

Current concerns:
- No screenshots or videos.
- Product behavior language should be checked against the current app.
- Deployment, sync, and storage descriptions must remain accurate.

Planned updates:
- Confirm Google Drive sync language.
- Confirm local-first and telemetry language.
- Confirm mobile/desktop deployment language.

### Privacy Policy

File: `privacy.html`

Status: Not started

Current concerns:
- No screenshots or videos.
- Mentions classroom data, photos, audio, notes, attendance, Google Drive sync, email verification, telemetry, and account deletion.

Planned updates:
- Only update if current product behavior differs from the policy.
- Confirm Google Drive disconnect behavior.
- Confirm photos/audio and telemetry descriptions.

### FERPA Page

File: `ferpa.html`

Status: Not started

Current concerns:
- No screenshots or videos.
- Product behavior and data handling claims should be checked for accuracy.

Planned updates:
- Confirm storage, sync, student account, telemetry, and redisclosure language.

### Terms Of Service

File: `terms.html`

Status: Not started

Current concerns:
- No screenshots or videos.
- Mentions local-first storage, optional Google Drive sync, email verification, fees, availability, and account deletion.

Planned updates:
- Only update if current product behavior or pricing terms differ.

### Account Deletion Page

File: `account-deletion.html`

Status: Not started

Current concerns:
- No screenshots or videos.
- Mentions classroom files, student photos, student audio, notes, attendance records, and seating charts.

Planned updates:
- Confirm deletion language still matches account/license/trial behavior.

### Updates Page

File: `updates.html`

Status: Not started

Current concerns:
- No screenshots or videos.
- Mostly newsletter signup and global site chrome.

Planned updates:
- Confirm copy is still useful.
- Update only if broader messaging changes require it.

## Media Inventory

### Used Media To Review Or Replace

- `media/hero-image.png`
- `media/generate-groups.mp4`
- `media/ClassSeats-60Seconds.mp4`
- `media/flashcards-composite.png`
- `media/projection-view.png`
- `media/attendance-view.png`

### Unused Media To Review

- `media/classseats-demo.mp4`
- `media/group-generation-demo.mp4`
- `media/flashcard-image.png`

### Keep Unless Branding Changes

- `classseats-icon.png`
- `media/Marty.jpg`

## Suggested Update Order

1. Home page.
2. Get Started page.
3. Replacement media and external setup guide.
4. Pricing page feature/tier details.
5. District, privacy, FERPA, terms, and account deletion accuracy pass.
6. Updates page and global nav/footer consistency pass.
7. Sitemap, metadata, alt text, and final QA.

## QA Checklist

- Search for references to old UI labels, steps, and media.
- Search for stale pricing/free-access wording.
- Confirm all current media files are referenced correctly.
- Confirm unused old media can be removed or archived.
- Preview desktop and mobile layouts.
- Verify image alt text and video labels.
- Confirm JSON-LD FAQ matches visible FAQ.
- Run `git diff --check`.

