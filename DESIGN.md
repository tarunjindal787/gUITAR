---
name: Mountain Culture Guitar Lessons
description: A dark/light alternating editorial landing page for a guitar-lesson business, built for trust and clarity.
colors:
  dark: "#0D131D"
  darker: "#020617"
  dark-card: "#161F2E"
  dark-line: "#334155"
  dark-card-border: "rgba(255,255,255,0.08)"
  light: "#F8FAFC"
  card-white: "#FFFFFF"
  border-light: "#E2E8F0"
  charcoal: "#0F172A"
  muted: "#64748B"
  muted-light: "#94A3B8"
  accent: "#00E5FF"
  accent-deep: "#00B3CC"
  accent-light: "#99F0FF"
typography:
  display:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "clamp(1.875rem, 5vw, 4.5rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.02em"
  display-light:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "clamp(1.875rem, 5vw, 4.5rem)"
    fontWeight: 300
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  brush:
    fontFamily: "Caveat, cursive"
    fontSize: "clamp(3rem, 6vw, 5rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "0.1em"
rounded:
  md: "8px"
  xl: "12px"
  2xl: "16px"
  3xl: "24px"
  full: "9999px"
spacing:
  sm: "16px"
  md: "32px"
  lg: "48px"
  xl: "80px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.dark}"
    rounded: "{rounded.full}"
    padding: "16px 36px"
  card-light:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.2xl}"
    padding: "32px"
  card-dark:
    backgroundColor: "{colors.dark-card}"
    textColor: "#ffffff"
    rounded: "{rounded.3xl}"
    padding: "40px"
---

# Design System: Mountain Culture Guitar Lessons

## Overview

**Creative North Star: "The Night Studio, Under Electric Light"**

*(Third identity, replacing "The Botanical Studio" (cream/sage/mauve/slate) on 2026-10-16. The dark/light alternating structure has held since then; the accent hue itself changed on 2026-10-19 — see "The accent's history" below. The prior light identity is retired; treat it as evidence, not lineage.)*

The page alternates dark and light sections like a studio at night: the hero and pricing sections go dark-slate with a single high-contrast electric-cyan accent doing all the signaling, while "Why Us," Locations, and testimonials stay crisp and bright for readability and relief. The rhythm itself communicates something: dark sections hold the decisions that matter most (the offer, the price), light sections hold the proof and explanation — Locations moved to light on 2026-10-16 per explicit client request, since the map and trust banner read as proof, not decision. Trust is built through specificity — a real map, real stats, real testimonials — not through decoration.

**The accent's history (all 2026-10-19, same day):** the accent started as site-wide amber (#F59E0B). A client request introduced a separate hero-only coral (#FF6B35), then revised that same hero-only token to Electric Cyan (#00E5FF) a few rounds later. A follow-up request then clarified the client actually wanted cyan **everywhere**, flagging specific non-hero elements (the top announcement bar, the header CTA) still showing the old amber as a defect. At that point the distinction was retired: `brandAmber` itself now equals Electric Cyan, so every section uses the same one accent again — there is no remaining hero-only exception. `heroAccent` still exists as an alias of the same value, kept only so the hero's own class names don't need touching again; don't let the two tokens diverge without an equally explicit request.

**Key Characteristics:**
- Strict section-level alternation (restored 2026-10-16, per explicit client sequence): Hero (dark) → About Your Instructor (light) → Why Us/Features (dark) → Pricing (light) → Locations (dark, high-trust) → Practice Tools teaser (light) → Reviews (dark) → FAQ (light) → Footer CTA/Footer (dark, fixed closing anchor, not part of the alternation). Every one of the 8 main content sections strictly alternates dark/light/dark/light in page order; only the Footer CTA + Footer stay dark as a deliberate, bounded exception at the very end.
- One accent color (Electric Cyan) carries every call-to-action and highlight across both dark and light sections — never diluted with a second competing hue
- Dark sections use `brandDarkCard` surfaces with a semi-transparent white-alpha border, never pure black-on-black
- Light sections use true white cards on an off-white (`#F8FAFC`) ground with a visible but quiet `#E2E8F0` border
- Hero carries a small set of confirmed, deliberate glow/motion accents (ambient cyan backlight, sparkle flourishes, a gradient CTA with an inset highlight) — see Elevation & Depth. (The hero's status badge, mentioned in earlier revisions of this doc, no longer exists — removed 2026-10-19, see Navigation below.)

## Colors

Two neutral families (dark slate, off-white) plus exactly one accent (Electric Cyan) that never competes with a second hue for attention.

### Primary Accent
- **Electric Cyan** (#00E5FF, deep #00B3CC, light tint #99F0FF): Every CTA, every highlighted price, every "this is the one" signal, on both dark and light backgrounds. This is a deliberate one-accent system — resist adding a second accent hue. Contrast verified: 11.6:1 cyan-on-dark-navy, 11.6:1 navy-on-cyan-button (both clear AA). White text on cyan only reaches 1.54:1 — every cyan button uses dark navy text, never white.

### Dark Neutrals
- **Dark** (#0D131D): Hero and pricing section background.
- **Darker** (#020617): Locations and footer background — the "deepest" sections, reserved for trust/closing moments.
- **Dark Card** (#161F2E, darkened from #1E293B on 2026-10-19 for more depth against its border): Card surfaces sitting on dark sections.
- **Dark Line** (#334155): Structural dividers and standalone borders (header bottom edge, section rules) — *not* card borders; see below.
- **Dark Card Border** (`rgba(255,255,255,0.08)`, added 2026-10-19): Every `bg-brandDarkCard` card's own border is now this semi-transparent white hairline instead of the solid Dark Line color — a "glass edge" that reads as depth rather than a hard rule. Applied via Tailwind's `border-white/[0.08]` on all 24 existing dark-card instances; any new dark card should use the same pairing (`bg-brandDarkCard border border-white/[0.08]`), not `border-brandDarkLine`.

### Light Neutrals
- **Light** (#F8FAFC): Features and testimonials section background.
- **Card White** (#FFFFFF): Every card on a light section.
- **Border Light** (#E2E8F0): Card borders and dividers on light sections.
- **Charcoal** (#0F172A): Primary text on light sections (same value as the dark background — this is intentional: it's the system's one "ink," used as background in dark mode and as text in light mode).
- **Muted / Muted Light**: Secondary text — `#64748B` on light sections, `#94A3B8` (lighter, for sufficient contrast) on dark sections. Never use the light-section muted value on a dark background or vice versa.

### Named Rules
**The One-Accent Rule.** Electric Cyan is the system's only accent color, uniformly across every section. It appears on both dark and light sections, which is what makes the alternating rhythm read as one coherent system rather than two different sites stitched together. (This rule briefly had a hero-only exception on 2026-10-19 — see "The accent's history" in the Overview — superseded the same day when the client clarified the intent was a full accent change, not a hero-only one.)

## Typography

**Display Font:** Montserrat · **Body Font:** Inter · **Brush/Signature Font:** Caveat

**Character:** Montserrat carries headlines in a mixed-case, mixed-weight voice. Inter stays quiet for body copy. Caveat appears exactly once per hero as the system's single handwritten moment (carried over from the prior identity, recolored to navy-on-cyan-swatch).

### Hierarchy
- **Display** (900): Section headlines — white on dark sections, charcoal on light sections.
- **Display Light** (300): The hero masthead's connective words ("Turn", "Into A") against the heavy emphasis word — see the Weight Contrast Rule.
- **Brush** (700, cursive): The one hand-marked hero word.
- **Body / Label**: As documented in the frontmatter.

### Named Rules
**The Weight Contrast Rule.** The hero masthead mixes a thin (300) connective weight against the system's heavy (900) emphasis weight. Section headings elsewhere stay single-weight 900.

**The One Brush Rule.** Caveat marks one word in the hero and nowhere else.

## Layout

A `max-w-7xl` centered container runs the page. Sections alternate dark/light in strict sequence (see Overview); there is no gradient or soft transition between them — the hard cut between a dark and light section is part of the rhythm, not a flaw to soften. Cards never nest a second bordered/backgrounded box for ordinary content.

## Elevation & Depth

Mostly flat with real shadows: cards on both dark and light sections use a thin border plus a soft offset-and-blur shadow for lift, never a colored halo as the *default* depth cue. The hero is a confirmed, bounded exception (2026-10-16): it carries a small set of deliberate glow/motion accents — a soft radial cyan backlight behind the headline (originally amber, then briefly coral, now cyan — see the Overview's accent history), hand-drawn SVG sparkle flourishes near the brush word and photo, and a gradient CTA with an inset highlight. These were requested twice, explicitly, by the client after an initial decline — they are a confirmed hero-only flourish, not license to add glow elsewhere. (The gradient-ring status badge with a live-status pulse mentioned in earlier revisions of this section no longer exists — removed 2026-10-19.)

### Shadow Vocabulary
- **Card rest** (`shadow-sm`, neutral): Default card elevation, dark or light.
- **Card featured** (`shadow-xl`/`shadow-2xl` + thick cyan border): The one featured card per section (pricing's $250 package, the featured testimonial).
- **Hero ambient accents**: Radial cyan/slate glow blobs, sparkle SVGs, inset-highlight CTA — hero only.

### Named Rules
**The Hero-Only Glow Rule.** Ambient glow and sparkle accents are a deliberate, confirmed hero flourish. Every other section stays on flat, neutral elevation (border + shadow only) — with one confirmed exception: the featured $250 pricing card carries a soft cyan glow shadow, requested explicitly across two separate rounds (2026-10-17, color updated 2026-10-19 with the rest of the accent), the same confirmation pattern that established the hero exception itself.

This rule governs *persistent, ambient* glow (always-on decoration), not momentary hover feedback. On 2026-10-19 a client request for "slick hover states... subtle glowing shadows" on buttons site-wide was implemented as a brief, interaction-only cyan shadow-bloom on `:hover` (every previously-bare primary button: mobile menu CTA, both Locations "Book ... Slot" buttons, the booking-modal success close button, and the sticky mobile bar CTA) — the glow exists only while hovered/active, never at rest, so it doesn't reintroduce ambient glow outside the hero.

**The Honest-Pulse Rule.** The hero's status-badge pulse marks a real, currently-true state ("accepting students right now"), never a fabricated live-updating feed. No animation should imply real-time data that isn't actually checked.

## Shapes

Generous rounding — `rounded-2xl`/`rounded-3xl` on cards, fully `rounded-full` pills and buttons. Borders are thin (1px) on both dark and light cards; a featured element gets a thicker (2-4px) cyan border instead of a heavier shadow.

## Components

### Floating Glass Elements (2026-10-19)
The header and both modals already used `backdrop-blur-md` (Tailwind's 12px blur) over a semi-transparent dark background — true glassmorphism, just not previously named as a pattern. Extended the same treatment to the two other floating/overlay elements that were previously solid: the hero's decorative chord-tag badge (`bg-brandDarkCard/75 backdrop-blur-md border-white/[0.08]`) and the Find-Your-Fit floating quiz trigger (`bg-brandDark/75 backdrop-blur-md border-white/10`, both desktop and mobile variants). Any new floating badge or overlay card should follow this same semi-transparent-dark + blur-md + white-alpha-border recipe rather than a solid card background.

### Buttons
- **Primary (action):** Solid Electric Cyan, dark navy text — every "Book a Lesson" button, on both dark and light sections.
- **Secondary (on dark):** `bg-white/10` with a `brandDarkLine` border, white text — the casual-tier button on the dark pricing section.
- **Hover / Focus:** A -2px lift plus a slightly deeper shade; focus-visible gets a visible ring (cyan on dark backgrounds, with an explicit ring-offset color so it's never invisible against the page).

### Cards
- **Light section cards:** White background, `border-light` border, charcoal text.
- **Dark section cards:** `dark-card` background, semi-transparent white-alpha border (`border-white/[0.08]`), white/slate-300 text.
- **Featured card:** Thicker cyan border + deeper shadow, regardless of light or dark context.

### Navigation
- **Style (superseded 2026-10-17):** The header is now a dark glassmorphic bar (`bg-brandDark/80 backdrop-blur-md border-white/10`) at all times, per explicit client direction — superseding the prior "header stays white/translucent" rule. Nav links get an animated cyan underline on hover, plus a scroll-spy active state (`.nav-link.active`) driven by an `IntersectionObserver` keyed to each section's id.
- **No status badge anywhere on the page (2026-10-17 → 2026-10-19):** A compact "Accepting New Students" badge was added next to the logo, then explicitly removed the same day as header clutter. It briefly lived on in the Hero content column and the Footer's "Booking & Availability" column, but both were removed in later rounds (hero: 2026-10-19 explicit request; footer: the same day, as part of a footer restructure down to 3 columns that dropped the whole "Booking & Availability" column). There is currently no live-status badge on the page at all — don't re-add one without new client direction.

### Find Your Fit Quiz (signature component, new 2026-10-17)
A floating bottom-right widget opening a 2-step modal (style, then plan) that recommends a pricing tier and hands off into the real booking modal with that option pre-selected. Pure client-side logic — no fabricated data or made-up recommendations beyond the user's own two answers.

### Genre & Skill Cards (signature component, updated 2026-10-17)
A grid of genre cards (Acoustic, Electric, Rock, Blues, Pop, Folk, Metal) in the Why Us section, each with a one-line generic skill descriptor (e.g. "Power chords & rhythm") and a decorative guitar-pick SVG watermark. Deliberately generic — no specific song titles, riff names, or learning-outcome timelines, since none have been confirmed with the client; this was re-requested with "sample riffs" language in a later round and the boundary was held.

### Trust Banner (removed 2026-10-19)
A row of pill badges on the dark Locations section (10+ years experience, 5.0★ rating, no locked-in contracts) was removed as part of a site-wide text-density pass — by the time a visitor reached the Locations section, those same three facts had already been stated in the hero pills, hero stat cards, and the Instructor card's trust bullets. The underlying facts are still correct and still live in those earlier sections; this entry stays here as history so the component isn't re-added as "missing."

### Interactive Map (signature component, new)
A Google Maps iframe embed (no API key required) centered on "Penrith NSW Australia" — the area with a real, confirmed dedicated studio. The Blue Mountains service area does not get its own map pin, since there is no fixed studio address there to honestly represent (it's described via its suburb list instead).

## Do's and Don'ts

### Do:
- Do keep Electric Cyan as the system's only accent color across every section.
- Do keep the dark/light alternation strict and literal — it's the structural idea of this redesign.
- Do keep the hero's glow/pulse/sparkle accents bounded to the hero; don't let them creep into other sections.
- Do state only confirmed facts in the trust banner; treat any new compliance/certification claim as requiring explicit client confirmation before publishing.
- Do keep the map embed scoped to the area with a real studio; don't fabricate a pin for a service area that doesn't have one.

### Don't:
- Don't add a second accent hue competing with Electric Cyan.
- Don't soften the hard cut between dark and light sections with a gradient transition — that's a different system, not a refinement of this one.
- Don't stack two bordered/backgrounded containers inside each other for ordinary content.
- Don't animate a status indicator to suggest a live, continuously-updating feed when the underlying fact is just true/false.
