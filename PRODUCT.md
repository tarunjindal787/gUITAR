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
- Visual identity history: "Golden Hour Stage" (dark/amber) → "Botanical Studio" (cream/sage/mauve/slate, 2026-10-14) → "Night Studio" (dark/light alternating, amber accent, 2026-10-16) → current "Cedar & Clay" (cream canvas, forest green/terracotta two-accent system, 2026-10-16), each a full confirmed rebrand per explicit client direction. A forest-green/terracotta direction was proposed four times across this engagement; the first three times the client explicitly chose to keep the identity then in place, and the fourth time explicitly confirmed the switch via direct question before implementation. See DESIGN.md for the current system; prior identities are retired, not a lineage to preserve.
- **New `technology.html` page** (added 2026-10-16): a simple "Technology Partner" page attributing site development to JobGen.AI, linked from the main footer. Written as original content, not modeled on any specific third-party company's page design.
- **Google Maps embed** in the Locations section (added 2026-10-16): a no-API-key iframe centered on "Penrith NSW Australia" — the area with the real, confirmed dedicated studio. Deliberately not extended to Blue Mountains, which has no fixed studio address to honestly pin.

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

Absent evidence (do not fabricate): a verified "#1" or ranking/award claim for the business (explicitly declined by the client — do not reintroduce); a **WWCC (Working With Children Check) certification claim** (explicitly declined 2026-10-16 — this is a real, legally significant credential in Australia and must not be published without the client confirming the instructor actually holds a current, valid WWCC); confirmation that the 5.0★ rating specifically comes from Google Reviews (keep it as a generic "Student Rating" unless/until confirmed); a live booking submission destination (email address, CRM, or backend endpoint); real social links (Facebook/Instagram/YouTube icons currently point to `#`); a real contact phone number (currently a placeholder `0400000000`).

## Product Principles

1. Preserve the no-lock-in, transparent-pricing positioning in any future copy or feature changes — it's a stated differentiator, not incidental wording.
2. Treat the two regions (Penrith studio vs. Blue Mountains mobile/in-home) as distinct operating models, not a single generic "service area."
3. Confirmed pricing, stats, and testimonials are real client facts — do not alter the numbers or quotes without the client's say-so.
4. The booking form's lack of real submission wiring is a standing functional gap, not a cosmetic one — surface it before shipping any change that implies the form "works."
5. This is a lead-gen page for a local service business: every design or content change should be judged by whether it helps a visitor decide and book, not by generic landing-page conventions.
