# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary users are parents and adult/teen students across two NSW regions — Penrith and the Blue Mountains (Emu Plains, Jamisontown, Cranebrook, Glenmore Park, St Marys, Glenbrook, Blaxland, Springwood, Hazelbrook, Wentworth Falls, Katoomba, Blackheath) — looking to start or continue guitar lessons. Ages span 6 to 80+, from absolute beginners to experienced players refining technique. They land on this page to evaluate the instructor, see pricing, and book a lesson.

## Product Purpose

A single-page marketing/lead-generation site for "Mountain Culture Guitar Lessons," a local guitar instruction business. It exists to convert visitors into booked lessons via a booking modal, communicating pricing, location coverage, teaching style, and social proof. Success is a submitted booking/lead request.

## Positioning

Local, personal 1-on-1 guitar tuition (acoustic or electric) across two regions via a dedicated studio (Penrith) plus mobile/in-home lessons (Blue Mountains corridor), with no lock-in contracts, transparent flat pricing, and a practical/song-first teaching approach rather than rigid theory drilling.

## Operating Context

Single-instructor local service business, built and maintained on behalf of a client (this repo's owner is not the business owner). The business operates two delivery modes: a fixed studio in Penrith, and mobile/in-home lessons plus studio access across Blue Mountains townships. Students book via the on-page modal, which the business then follows up on by phone/email within 24 hours.

## Capabilities and Constraints

- Static, single-file HTML page (Tailwind CDN, Google Fonts, Font Awesome via CDN) — no build pipeline, no backend, no framework.
- **Booking form does not submit anywhere.** `handleFormSubmit` only swaps the form for a client-side "success" message; no email, backend, or storage is wired up. This is an open constraint — treat as a known gap, not a working submission pipeline, until future work wires it to a real destination.
- **The hero now carries the instructor photo directly.** The original `image_4c0d25.jpg` reference was missing from the repo; a real photo was later supplied and is now placed in the hero (two-column: photo + decorative circles on the left, content on the right), per the full rebrand on 2026-10-14. The earlier standalone "Meet Your Instructor" section was folded into the hero and no longer exists as a separate section.
- Visual identity history: "Golden Hour Stage" (dark/amber) → "Botanical Studio" (cream/sage/mauve/slate, 2026-10-14) → current dark/light alternating "Night Studio" system (amber accent, 2026-10-16), each a full confirmed rebrand per explicit client direction. See DESIGN.md for the current system; prior identities are retired, not a lineage to preserve.
- **New `technology.html` page** (added 2026-10-16): a simple "Technology Partner" page attributing site development to JobGen.AI, linked from the main footer. Written as original content, not modeled on any specific third-party company's page design.
- **Google Maps embed** in the Locations section (added 2026-10-16): a no-API-key iframe centered on "Penrith NSW Australia" — the area with the real, confirmed dedicated studio. Deliberately not extended to Blue Mountains, which has no fixed studio address to honestly pin.
- **CRO/trust pass (2026-10-16):** Added an "About Your Instructor" section — **structural placeholder only**: real confirmed facts (10+ years, Penrith & Blue Mountains, the real photo) plus an explicit placeholder note for the instructor's actual name/bio, which the client has not yet supplied. No biography or teaching-philosophy quotes were invented. Added a Practice Tools teaser section on the main page linking to the real, working `/practice/` fretboard app — no fabricated downloadable PDFs or chord-chart widgets were added, since no real files for those exist. Added an FAQ accordion whose answers restate only already-published facts (pricing, ages, no lock-in, mobile-lesson coverage) — no new operational policies were invented. Added a sticky mobile booking bar (Book + Call only); a WhatsApp button was deliberately omitted since no real WhatsApp number exists. Reworded hero CTAs to "Book Your $35 Trial Lesson" / "Claim $100 Off The 10-Lesson Pack" (both consistent with confirmed real pricing). Reviews/Testimonials section switched from light to dark styling.
- **Modernization pass (2026-10-17):** Kept the site on its existing static HTML/Tailwind/vanilla-JS stack rather than migrating to React/Framer Motion/client-side routing (client-confirmed decision — the current stack has no build pipeline and deploys directly to GitHub Pages; a framework migration was out of scope for this round). Kept "About Your Instructor," "Practice Tools," etc. as sections on the single scrolling page rather than splitting into separate routed pages (client-confirmed). Split the "About Your Instructor" card into two tabs: "Philosophy & Method" (teaching-approach bullets restating only already-published positioning, e.g. "practical, song-first playing"; the personal bio/philosophy text itself remains the placeholder from the prior round) and "Local Coverage" (region + genre tag summary linking to the full Locations section). Added a "Styles & Genres We Teach" tag row (Acoustic/Electric/Rock/Blues/Pop/Folk/Metal) to the Why Us section — **generic descriptions only, per client confirmation**: no invented specific song titles, riff names, or learning-outcome timelines. Converted the Locations section's suburb lists to individual pill tags. Added 3 confirmed-fact stat chips to the Practice Tools teaser ("Interactive Fretboard," "Video Recaps With 10-Lesson Pack" — scoped correctly to the package that actually includes them, not all bookings — and "Zero Lock-In Contracts"). Rebuilt the footer as a 4-column layout (Brand/Mission, Quick Links, Locations & Coverage, Book/Availability); deliberately did not add a Privacy Policy link since no such page exists. Added a "Find Your Fit" floating quiz widget (bottom-right) with a 2-step modal (Acoustic/Electric, then Single vs. 10-Lesson Pack) that recommends a package and hands off into the real booking modal — pure client-side logic, no fabricated data.

## Brand Commitments

- Business name: **Mountain Culture Guitar Lessons**.
- Service area name split: "Penrith" and "Blue Mountains" regions, referenced individually in nav/copy.
- Existing voice: direct, confident, no-nonsense local-business marketing tone ("No lock-in contracts or surprise costs").
- Footer credit "Powered by JobGen.AI" (linking to jobgen.ai): confirmed by the client as the dev agency/tool that built this site — standard "built by" attribution, not a claimed business partnership.

## Evidence on Hand

Confirmed real by the client and to be preserved as-is in future work:
- Instructor photo (`instructor-photo.jpg`): a real photo of the instructor playing acoustic guitar, cropped by the client's request from a WhatsApp-shared flyer graphic. The crop keeps a small sliver of leftover "ALL SKILL LEVELS WELCOME" text at the left edge — accepted by the client as a known, intentional trade-off rather than a defect. Used in the hero section (2026-10-14).
- Pricing: $35 for a single 30-minute 1-on-1 lesson; $250 for a 10-lesson package (saves $100), billed as "MOST POPULAR."
- Stats: 100+ happy students, 10+ years teaching experience, 5.0★ student rating.
- Testimonials: James D. (Penrith), Michelle C. (Springwood/Blue Mountains), Ben H. (Emu Plains) — each with a 5-star rating and quoted review, as currently written on the page.
- Service area lists for Penrith and Blue Mountains regions, as currently written on the page.

Absent evidence (do not fabricate): a verified "#1" or ranking/award claim for the business (explicitly declined by the client — do not reintroduce); a **WWCC (Working With Children Check) certification claim** (explicitly declined 2026-10-16 — this is a real, legally significant credential in Australia and must not be published without the client confirming the instructor actually holds a current, valid WWCC); confirmation that the 5.0★ rating specifically comes from Google Reviews, or any specific review count (e.g. "25+ reviews") (both explicitly declined 2026-10-16 — keep it as a generic "Student Rating" unless/until confirmed); a **Public Liability Insurance claim** (explicitly declined 2026-10-16 — do not publish without the client confirming current coverage); a **formal satisfaction/money-back guarantee claim** (explicitly declined 2026-10-16 — do not publish without the client confirming a real refund/credit policy exists); the instructor's real name and personal biography/teaching-philosophy copy (not yet supplied — the "About Your Instructor" section is structural placeholder only); real audio/video "before & after" student recordings (none exist — not added); downloadable PDF song cheat-sheets or chord-chart preview widgets (no real files exist — the Practice Tools section links to the real `/practice/` app instead); a live booking submission destination (email address, CRM, or backend endpoint); real social links (Facebook/Instagram/YouTube icons currently point to `#`); a real contact phone number (currently a placeholder `0400000000`); a real WhatsApp contact number (not added to the sticky mobile bar for this reason).

## Product Principles

1. Preserve the no-lock-in, transparent-pricing positioning in any future copy or feature changes — it's a stated differentiator, not incidental wording.
2. Treat the two regions (Penrith studio vs. Blue Mountains mobile/in-home) as distinct operating models, not a single generic "service area."
3. Confirmed pricing, stats, and testimonials are real client facts — do not alter the numbers or quotes without the client's say-so.
4. The booking form's lack of real submission wiring is a standing functional gap, not a cosmetic one — surface it before shipping any change that implies the form "works."
5. This is a lead-gen page for a local service business: every design or content change should be judged by whether it helps a visitor decide and book, not by generic landing-page conventions.
