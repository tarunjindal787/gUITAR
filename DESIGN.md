---
name: Mountain Culture Guitar Lessons
description: A dark/light alternating editorial landing page for a guitar-lesson business, built for trust and clarity.
colors:
  dark: "#0B132B"
  darker: "#070D1C"
  dark-card: "#141F3D"
  dark-line: "#2A3B63"
  dark-card-border: "rgba(255,255,255,0.08)"
  light: "#F8FAFC"
  card-white: "#FFFFFF"
  border-light: "#E2E8F0"
  charcoal: "#0F172A"
  muted: "#64748B"
  muted-light: "#94A3B8"
  accent: "#FFD100"
  accent-deep: "#A67C00"
  accent-text: "#8C6900"
  accent-light: "#FFF3C4"
  hero-glow: "#FFE600"
  hero-teal: "#0E4749"
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

The page alternates dark and light sections like a studio at night: the hero and pricing sections go deep-midnight-blue with a single high-contrast gold accent doing all the signaling, while "Why Us," Locations, and testimonials stay crisp and bright for readability and relief. The rhythm itself communicates something: dark sections hold the decisions that matter most (the offer, the price), light sections hold the proof and explanation — Locations moved to light on 2026-10-16 per explicit client request, since the map and trust banner read as proof, not decision. Trust is built through specificity — a real map, real stats, real testimonials — not through decoration.

**The accent's history:** amber (#F59E0B) → hero-only coral (#FF6B35) → hero-only Electric Cyan (#00E5FF) → site-wide Electric Cyan (all 2026-10-19) → **site-wide Gold + Midnight Blue (2026-10-21)**, this round's explicit client request to extend the hero's new gold/navy banner treatment to the whole site, not just the hero. `brandAmber` has gone from amber-named-but-literally-cyan to finally meaning an actual amber/gold again. See "Site-Wide Rebrand" below for the full color-role breakdown and the contrast work behind it.

**Key Characteristics:**
- Strict section-level alternation (restored 2026-10-16; briefly broken and restored again, same day, 2026-10-19): Hero (dark) → About Your Instructor (light) → Why Us/Features (dark) → Pricing (light) → Locations (dark, high-trust) → Practice Tools teaser (light) → Reviews (dark) → FAQ (light) → Footer (dark, fixed closing anchor). On 2026-10-19 the Instructor section was moved to a dark glassmorphism treatment by explicit request, then reverted back to light later the same day by an equally explicit follow-up request — see "Instructor Card" below for what survived the round trip. The alternation is intact again as of this note. (The separate "Footer CTA" banner this note used to describe was removed entirely 2026-10-19 as duplicate clutter — see Buttons/Components history.)
- One accent color family (Gold, as of 2026-10-21 — previously Electric Cyan) carries every call-to-action and highlight across both dark and light sections — never diluted with a second *interactive* competing hue (the hero headline's extra "Lifelong" glow-yellow and teal brush-stroke are a documented typographic-only exception, not interactive elements)
- Dark sections use `brandDarkCard` surfaces with a semi-transparent white-alpha border, never pure black-on-black
- Light sections use true white cards on an off-white (`#F8FAFC`) ground with a visible but quiet `#E2E8F0` border
- Hero carries a small set of confirmed, deliberate glow/motion accents (ambient gold backlight, sparkle flourishes, a gradient CTA with an inset highlight) — see Elevation & Depth. (The hero's status badge, mentioned in earlier revisions of this doc, no longer exists — removed 2026-10-19, see Navigation below.)

## Colors

Two neutral families (midnight-blue, off-white) plus one gold accent family (three roles, see below) that never competes with a second *interactive* hue for attention.

### Site-Wide Rebrand (2026-10-21): Gold + Midnight Blue
Explicit client request to take the hero banner's gold/navy treatment (shipped earlier the same day, originally scoped to the hero only) and apply it everywhere. This is the third full accent change this project has been through (see "The accent's history" above) and the first time `brandAmber` has actually meant amber.

**Why three gold tokens, not one:** bright gold text/icons on a white background fails AA badly (`#FFD100` on white measures 1.46:1), the same trap this project already hit and fixed once with cyan (see the Instructor Card contrast correction below) — so the single old `brandAmber`/`brandAmberDeep` pair couldn't just be hex-swapped 1:1 without reintroducing that exact bug at a much larger scale. Each token now has one job, each contrast-checked against both page backgrounds it actually appears on:
- **`brandAmber` (#FFD100, bright):** background fills with dark navy text on top (buttons, badges, active tab pills), and decorative fills/icons/borders on **dark** backgrounds only — 12.6:1 there. Never used as standalone text/icon color on a light background.
- **`brandAmberDeep` (#A67C00, medium):** the hover-darken state of amber backgrounds (navy text on it still measures 4.8:1), and the one color used for borders, focus rings, and the global `:focus-visible` outline — chosen specifically because it clears the 3:1 non-text threshold on *both* white (3.8:1) and navy (4.8:1), so one border color works everywhere without a light/dark split.
- **`brandAmberText` (#8C6900, muted, new token):** standalone text and icon color wherever gold appears on a **light** background (section eyebrows, FAQ chevrons, checkmark bullets, coverage pills, the "$250" price) — 5.1:1 on white, comfortably past AA. Replaces every prior light-background use of `brandAmberDeep`-as-text, which was actually failing contrast even before this round (cyan `#00B3CC` on white measured 2.52:1 — an existing, unnoticed gap this rebrand also fixed).
- **`brandAmberLight` (#FFF3C4):** pale gold tint for badge/pill backgrounds on light sections (was a pale cyan tint, `#99F0FF`).

**Dark neutrals moved to match the hero's Midnight Blue** (`brandDark` #0D131D → #0B132B, `brandDarker` #020617 → #070D1C, `brandDarkCard` #161F2E → #141F3D, `brandDarkLine` #334155 → #2A3B63) so every dark section — not just the hero — now reads as the same blue family. All dark-section text colors (white, slate-200/300/400) were re-verified against the new, slightly different navy values; all still clear 6:1+.

`heroAccent`/`heroAccentDeep` are now literal aliases of `brandAmber`/`brandAmberDeep` (same values) rather than a separate cyan pair — keep them in sync if either changes. `heroGold`/`heroGlow`/`heroTeal` remain hero-headline-only tokens for "Music" and "Lifelong" (see Hero Banner Redesign below); don't reuse `heroGlow`/`heroTeal` elsewhere without an equally explicit request.

### Dark Neutrals
- **Dark** (#0B132B): Hero and pricing section background.
- **Darker** (#070D1C): Locations and footer background — the "deepest" sections, reserved for trust/closing moments.
- **Dark Card** (#141F3D): Card surfaces sitting on dark sections.
- **Dark Line** (#2A3B63): Structural dividers and standalone borders (header bottom edge, section rules) — *not* card borders; see below.
- **Dark Card Border** (`rgba(255,255,255,0.08)`, added 2026-10-19): Every `bg-brandDarkCard` card's own border is this semi-transparent white hairline instead of a solid Dark Line color — a "glass edge" that reads as depth rather than a hard rule. Applied via Tailwind's `border-white/[0.08]`; any new dark card should use the same pairing (`bg-brandDarkCard border border-white/[0.08]`), not `border-brandDarkLine`.

### Light Neutrals
- **Light** (#F8FAFC): Features and testimonials section background.
- **Card White** (#FFFFFF): Every card on a light section.
- **Border Light** (#E2E8F0): Card borders and dividers on light sections.
- **Charcoal** (#0F172A): Primary text on light sections (same value as the dark background — this is intentional: it's the system's one "ink," used as background in dark mode and as text in light mode).
- **Muted / Muted Light**: Secondary text — `#64748B` on light sections, `#94A3B8` (lighter, for sufficient contrast) on dark sections. Never use the light-section muted value on a dark background or vice versa.

### Named Rules
**The One-Accent Rule, refined into a Two-Tone Button Hierarchy (2026-10-21, later the same day).** Gold was the system's only interactive accent for most of this day — see Site-Wide Rebrand above — until an explicit client spec asked for a second interactive color (blue) used specifically to signal hierarchy among buttons: **blue means a standard action, amber/gold means the single highest-value action in its context.** This applies only to the specific buttons listed in "Button Hierarchy" below; every icon, pill, badge, link-hover color, and the global focus-visible outline elsewhere on the page is untouched and still gold. The hero headline's "Lifelong" glow-yellow and "Music" teal brush-stroke remain decorative/typographic exceptions, scoped to that one headline, unrelated to this button system.

### Button Hierarchy (2026-10-21)
Explicit client spec, implemented via three reusable CSS classes (`.btn-blue`, `.btn-yellow`, `.btn-ghost-blue`) rather than repeating the gradient/shadow values inline on every button:
- **`.btn-blue`** (`linear-gradient(135deg, #2563EB 0%, #0284C7 100%)`, white text, cyan glow `rgba(14,165,233,0.35)`): the Top Navigation CTA ("Book A Lesson" — header desktop and mobile menu) and the Casual Single Lesson pricing button ("Book $35 Lesson"). White text measures 5.17:1 at the gradient's lighter end and **4.1:1 at the darker end (`#0284C7`) — a hair under the 4.5:1 AA target for normal text.** Flagged rather than silently adjusted, since the client specified these exact hex values; still comfortably readable in practice, but worth knowing if a stricter audit ever flags it.
- **`.btn-yellow`** (`linear-gradient(135deg, #F59E0B 0%, #D97706 100%)`, dark-slate `#0F172A` text, amber glow `rgba(245,158,11,0.35)`): the Hero CTA ("Book $35 Lesson") and the Featured Package pricing button ("Claim $250 Package") — the two single-highest-value actions on the page. Dark text measures 8.31:1 / 5.6:1 against the two gradient stops, both clear AA. Both buttons keep the existing `.hero-cta-pulse` glow-ring animation (its keyframe color was updated from the old gold `#FFD100` to match this new amber, `rgba(245,158,11,...)`, for consistency).
- **`.btn-ghost-blue`** (transparent fill, `1px solid rgba(14,165,233,0.4)` border, filling to the same blue gradient + white text on hover): the top announcement bar's "Save $100..." link (converted from a plain underlined text link into an actual bordered pill to carry this treatment), "Book Penrith Studio Slot," "Book Mountains Slot," and "Try Practice Tools." Base (non-hover) text color is supplied per-instance by the surrounding context (white on the three dark-background instances, `brandCharcoal` on "Try Practice Tools," which sits on a white card) since the ghost state's own background doesn't change text legibility requirements.
- All three classes share a hover treatment: `translateY(-2px) scale(1.02)` lift plus an expanded, color-matched glow (`0 8px 25px`). No `prefers-reduced-motion` guard was added for this hover-only transform, consistent with every other hover lift already in this file (e.g. `hover:-translate-y-0.5` on untouched buttons) — reduced-motion guards in this codebase are reserved for continuous/looping animations (pulse, sparkle), not discrete hover transitions.
- Deliberately **not** touched: the booking-modal submit button, the quiz modal's buttons, the sticky mobile bar's CTA, the FAQ/footer/nav links, and the featured pricing card's own border/badge — none were named in the client's button list, so they stay on the single-gold system rather than guessing how far to extend the two-tone treatment.

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
**The Hero-Only Glow Rule.** Ambient glow and sparkle accents are a deliberate, confirmed hero flourish. Every other section stays on flat, neutral elevation (border + shadow only) — with one confirmed exception: the featured $250 pricing card carries a soft cyan glow shadow, requested explicitly across two separate rounds (2026-10-17, color updated 2026-10-19 with the rest of the accent), the same confirmation pattern that established the hero exception itself. On 2026-10-20 this exception was extended to match: the featured card's own CTA button ("Claim $250 Package") now shares the hero CTA's gradient fill, inset-highlight, and one-time `.hero-cta-pulse` animation — these two buttons (hero + featured pricing) are deliberately the only two with this richer treatment. Don't extend it to the other CTA buttons sitewide (header, mobile menu, sticky bar, location buttons, casual pricing card) — they keep flat-color + hover-glow, which is what keeps the hero and featured-package buttons reading as the two highest-priority actions rather than diluting that signal everywhere.

This rule governs *persistent, ambient* glow (always-on decoration), not momentary hover feedback. On 2026-10-19 a client request for "slick hover states... subtle glowing shadows" on buttons site-wide was implemented as a brief, interaction-only cyan shadow-bloom on `:hover` (every previously-bare primary button: mobile menu CTA, both Locations "Book ... Slot" buttons, the booking-modal success close button, and the sticky mobile bar CTA) — the glow exists only while hovered/active, never at rest, so it doesn't reintroduce ambient glow outside the hero.

**The Honest-Pulse Rule.** The hero's status-badge pulse marks a real, currently-true state ("accepting students right now"), never a fabricated live-updating feed. No animation should imply real-time data that isn't actually checked.

## Shapes

Generous rounding — `rounded-2xl`/`rounded-3xl` on cards, fully `rounded-full` pills and buttons. Borders are thin (1px) on both dark and light cards; a featured element gets a thicker (2-4px) cyan border instead of a heavier shadow.

## Components

### Hero: full-bleed rebuild, REVERTED 2026-10-20
Everything below this note (the full-bleed edge-blended photo, the text-left/photo-right column flip, the "Meet Dan" secondary hero button, the 2-pill badge row) was explicitly undone at the client's request on 2026-10-20, after a prolonged back-and-forth over using AI-generated images as "Dan's" photo in this treatment. The hero is back to its pre-2026-10-19 form: rounded-card photo frame with decorative circles/sparkles/chord-tag, the real `instructor-photo.jpg`, photo-column-first/content-column-second order (both mobile and desktop), 3 pills (Ages 6-80+ / No Lock-In Contracts / 5-Star Rated), and a single primary CTA (no "Meet Dan" button in the hero — that lives only in the Instructor section itself). Do not reintroduce the full-bleed treatment without a new, explicit request — this reversion was deliberate, not a bug.

### Hero Photo: full-bleed, edge-blended (historical — built 2026-10-19, reverted 2026-10-20, see note above)
The hero's photo column dropped its decorative "card" treatment (inset border card, floating circle shapes, drop shadow) for a plainer full-bleed photo with a left-edge gradient fade (`bg-gradient-to-r from-brandDark to-transparent`, desktop only) blending it into the dark hero background. Desktop layout also flipped column order so the text reads left and the photo sits right (`order-2 lg:order-1` content / `order-1 lg:order-2` photo) — mobile still shows the photo first for visual impact, matching the site's established mobile pattern. The hero now has two primary CTAs side by side: the existing cyan "Book $35 Trial Lesson" button plus a new outlined "Meet Dan" button linking to `#instructor`. Dropped the third hero pill ("5-Star Rated") to match an explicit 2-badge spec — the 5.0★ fact still lives in the trust-stat cards directly below.

**Reference-image note:** a second reference image for this round was confirmed, via its filename and a garbled logo text artifact ("MOUNTAIN CULTTRA"), to be AI-generated (Google Gemini), not a real photo as the client had stated earlier — declined to use it as "Dan's" photo, since presenting a synthetic face as a real, named person would misrepresent him. A separate request in the same message asked for a React/JSX component file — declined in favor of keeping this change in `index.html`, consistent with the project's long-settled static-HTML/no-build-pipeline stack (a React/Framer Motion migration has been asked for and declined multiple times previously in this project). Two further AI-generated images of the same fictional "Dan" persona followed in later rounds (same synthetic face, confirmed by filename each time) and were declined for the same reason, including a version with no caption/alt-text naming Dan — declined that too, since placing a fabricated image in his own business's hero, next to a "Meet Dan" button, implies his likeness by context regardless of what the alt text says.

**Hero photo, resolved (2026-10-20):** The hero now uses a real, licensed Unsplash photo (`photo-1758687126741-86737c57c210`, an adult helping a child with acoustic guitar) as generic illustrative atmosphere — explicitly *not* presented as Dan (alt text describes it generically, no name used). The real photo of the real Dan continues to live in the Instructor ("Meet Dan") section further down the page, where it belongs. This is the intentional final pattern: hero sets mood generically, the Instructor section reveals the actual real person.

### Instructor Card: full visual-redesign arc, REVERTED 2026-10-20
The "Meet Your Instructor" card went through a full redesign arc on 2026-10-19 — dark glassmorphism, then light with a guitar-pick border-radius frame, then a proper SVG guitar-body-silhouette clip-path, a floating stat badge replacing the 4-item quick-facts list, the Philosophy tab's bullets becoming 3 stacked feature cards, a decorative fretboard-strings overlay, and (2026-10-20) an added "Hear Dan Play" coming-soon callout. **All of it was explicitly undone on 2026-10-20**, in the same request that reverted the hero's full-bleed redesign, after the prolonged back-and-forth over AI-generated "Dan" images. The section is back to its original pre-2026-10-19 structure: plain rounded photo (no clip-path mask), the original 4-item quick-facts bullet list, the condensed 1-paragraph bio, and the Philosophy tab's plain bullet list (not cards) — on the original `md:` grid breakpoint, not `lg:`. The confirmed real name "Dan" was kept (heading reads "Meet Dan," photo alt text names him) since that's a factual correction, not part of the visual-redesign dispute. The orphaned `guitarBodyClip` SVG `<clipPath>` definition was removed from the document since nothing references it anymore. Do not reintroduce any part of this specific redesign arc without a new, explicit request.

**Lighter redesign, 2026-10-20 (same day, explicit new request):** A second, smaller redesign — explicitly requested again after the full revert above, so not a reintroduction of the retired arc (no dark background, no clip-path/guitar-silhouette photo mask, no fretboard overlay). Kept the section light and on the single cyan accent. Changes: a soft `ambient-glow-amber` blob behind the photo (reusing the hero's existing glow utility rather than inventing a new one) and an offset `brandAmberLight` card-shadow block behind the photo frame; the 4-item quick-facts list became a 2x2 grid of small stat cards (`bg-brandCard border rounded-2xl`), each splitting the existing em-dash-joined phrase across a bold line and a muted line instead of one flat bullet; the "Meet Dan" heading got a small cyan underline accent; the active tab pill switched from flat `bg-brandAmber` to the gradient+shadow treatment used on primary buttons elsewhere (`switchInstructorTab()` was updated to toggle the new class set — keep it in sync if this markup changes again); and both tab panels are now wrapped in a bordered card instead of sitting bare. No copy was added, removed, or reworded — this is a layout/visual pass only.

**Real photo swap, 2026-10-21:** The client supplied a genuine photo (`dan-photo.jpg`, a real WhatsApp-shared photo — filename, lighting, and setting are all consistent with an authentic photograph, not AI-generated — see this project's established standard for distinguishing the two) showing Dan playing acoustic guitar outdoors with the Blue Mountains escarpment visible behind him. It replaces the original cropped-flyer photo (`instructor-photo.jpg`, which stays in use in the Hero section — only the Instructor section's photo changed). The new photo is landscape (1024x572, ~16:9) rather than the original's portrait crop, so the frame changed from `aspect-[4/5]` to `aspect-video` and widened from `max-w-xs` to `max-w-sm` to avoid an awkward crop. Alt text was updated to describe what's actually visible in this photo (acoustic guitar, outdoor setting, Blue Mountains backdrop) rather than reused verbatim from the old portrait.

**Large photo banner + text trim, 2026-10-21 (later the same day):** A follow-up explicit request to make Dan "the central focal point" and to cut down on text density. The photo moved out of the narrow `md:col-span-2` column entirely and became a full-section-width banner above the content grid (`aspect-[16/9] sm:aspect-[2/1]`, `rounded-[1.75rem]`, `shadow-2xl`, `border-4 border-brandCard`) — a much larger, more prominent treatment than fitting a landscape photo into a half-width card. Text was deliberately cut, not reworded: the 4 quick-facts cards dropped their secondary muted sub-line (e.g. "100+ Local Students Taught," "Pay As You Go" no longer appear — the bold headline fact stays), and the Philosophy tab's 3 bullets were trimmed from full explanatory sentences down to just their bold lead phrase ("Song-First Approach," "Custom Roadmap," "Flexible Options" — the colon-and-sentence that followed each is gone). The tab button labels, the "Meet Dan" heading, the bio paragraph, and the entire Local Coverage tab (regions/styles pills, the coverage link) were left untouched, per the explicit instruction to keep headings/paragraphs/tab labels as-is while still cutting overall text. Visible word count for the page went from 965 to 917.

**Reference-image note (2026-10-19, kept for history):** The client pointed to a real Taylor Guitars print campaign ("Step forward. Music is waiting.") as a style reference and asked to "take one photo from this" for use in this section. Declined to extract and republish any of that campaign's photography — it's bespoke, copyrighted photography shot for a different real company's ad campaign, not stock, and using it here would also misrepresent who the actual instructor is.

**A contrast correction made during this round, worth remembering:** the client's spec called for cyan text/icons directly on light backgrounds (cyan badge text, cyan tab-active text on white, cyan "dark cyan" pill text, cyan feature-card icons) in several places. Measured: the site's cyan family (`#00E5FF`/`#00B3CC`) only reaches ~2.4–2.5:1 against white/off-white — it fails even the 3:1 floor for meaningful icons, let alone 4.5:1 for text. Cyan only works as a *background fill with dark text on top* (tab pills, badges) or as *foreground on a dark surface* (verified 11+:1 elsewhere in this file) — never as standalone colored text/icons on a light surface. Every instance in this card uses `brandCharcoal` text/icons instead, with cyan reserved for background tints (`brandAmberLight`), borders, and the active-tab fill.

### Floating Glass Elements (2026-10-19)
The header and both modals already used `backdrop-blur-md` (Tailwind's 12px blur) over a semi-transparent dark background — true glassmorphism, just not previously named as a pattern. Extended the same treatment to the two other floating/overlay elements that were previously solid: the hero's decorative chord-tag badge (`bg-brandDarkCard/75 backdrop-blur-md border-white/[0.08]`) and the Find-Your-Fit floating quiz trigger (`bg-brandDark/75 backdrop-blur-md border-white/10`, both desktop and mobile variants). Any new floating badge or overlay card should follow this same semi-transparent-dark + blur-md + white-alpha-border recipe rather than a solid card background.

### Buttons
- **Primary (action):** Solid Gold (`brandAmber`), dark navy text — every "Book a Lesson" button, on both dark and light sections.
- **Secondary (on dark):** `bg-white/10` with a `brandDarkLine` border, white text — the casual-tier button on the dark pricing section.
- **Hover / Focus:** A -2px lift plus a slightly deeper shade (`brandAmberDeep`); focus-visible gets a visible ring (gold on dark backgrounds, with an explicit ring-offset color so it's never invisible against the page).

### Cards
- **Light section cards:** White background, `border-light` border, charcoal text.
- **Dark section cards:** `dark-card` background, semi-transparent white-alpha border (`border-white/[0.08]`), white/slate-300 text.
- **Featured card:** Thicker cyan border + deeper shadow, regardless of light or dark context.
- **Hover (standard, all cards):** `-translate-y-1` lift + border highlight to cyan + `transition-all duration-300`. The two Pricing cards were a real, found gap (2026-10-20) — every other card type (Features, hero trust-stats, Why Mountain Culture) already had this; Pricing had only an opacity fade and, on the featured card, a desktop-only scale. Added the lift + hover border to both; left the featured card's existing scale effect as an addition on top rather than a replacement.

### Navigation
- **Style (superseded 2026-10-17):** The header is now a dark glassmorphic bar (`bg-brandDark/80 backdrop-blur-md border-white/10`) at all times, per explicit client direction — superseding the prior "header stays white/translucent" rule. Nav links get an animated cyan underline on hover, plus a scroll-spy active state (`.nav-link.active`) driven by an `IntersectionObserver` keyed to each section's id.
- **No status badge anywhere on the page (2026-10-17 → 2026-10-19):** A compact "Accepting New Students" badge was added next to the logo, then explicitly removed the same day as header clutter. It briefly lived on in the Hero content column and the Footer's "Booking & Availability" column, but both were removed in later rounds (hero: 2026-10-19 explicit request; footer: the same day, as part of a footer restructure down to 3 columns that dropped the whole "Booking & Availability" column). There is currently no live-status badge on the page at all — don't re-add one without new client direction.

### Find Your Fit Quiz (new 2026-10-17, simplified to one screen 2026-10-19)
A floating bottom-right widget opening a modal that hands off into the real booking modal with a plan pre-selected. Originally a 2-step sequence (style screen, then a separate plan screen, then a result screen) — collapsed to a single screen on 2026-10-19 so there's no step-transition to get stuck on: style selection is an optional preference (just highlights the chosen button, doesn't advance anything), and picking a plan closes the quiz and opens the booking modal immediately, carrying whatever style was picked (or "Guitar" if none was). Pure client-side logic — no fabricated data or made-up recommendations.

### Genre & Skill Cards (signature component, updated 2026-10-17)
A grid of genre cards (Acoustic, Electric, Rock, Blues, Pop, Folk, Metal) in the Why Us section, each with a one-line generic skill descriptor (e.g. "Power chords & rhythm") and a decorative guitar-pick SVG watermark. Deliberately generic — no specific song titles, riff names, or learning-outcome timelines, since none have been confirmed with the client; this was re-requested with "sample riffs" language in a later round and the boundary was held.

### Why Mountain Culture Cards (replaced a comparison table, 2026-10-19)
A 3-column highlight-card grid (Dedicated Instructor, Custom-Paced, Free Learning Tools) in the Features section. Replaces an earlier 3-row "Mountain Culture vs. Big Franchise Schools" comparison table — same underlying claims, condensed from a table to three one-line cards as part of a text-density pass.

### Trust Banner (removed 2026-10-19)
A row of pill badges on the dark Locations section (10+ years experience, 5.0★ rating, no locked-in contracts) was removed as part of a site-wide text-density pass — by the time a visitor reached the Locations section, those same three facts had already been stated in the hero pills, hero stat cards, and the Instructor card's trust bullets. The underlying facts are still correct and still live in those earlier sections; this entry stays here as history so the component isn't re-added as "missing."

### FAQ Accordion (converted to native `<details>`/`<summary>`, 2026-10-19)
Previously a custom `<div>`/`<button>` pattern driven by a click-listener JS loop toggling a `.hidden` class and `aria-expanded`. Converted to native `<details>`/`<summary>` per explicit request for a more robust, inherently accessible pattern — no JS required for the open/close behavior itself (removed the old "FAQ Accordion" script block entirely). The chevron icon still rotates via Tailwind's `group-open:rotate-180` on the `<details class="group">` wrapper; the default disclosure marker is hidden via `list-none [&::-webkit-details-marker]:hidden` on the `<summary>`.

### Footer CTA banner (removed 2026-10-19)
A full-width dark banner section ("Start playing guitar this week!" + a "Book Your Lesson Now" button) that sat between Reviews/FAQ and the Footer was removed as a duplicate conversion ask — the hero, pricing cards, header CTA, and sticky mobile bar already provide ample booking access without a fourth full section dedicated to the same single action.

### Style-Interest Checkboxes (new 2026-10-19, inspired by a client-supplied reference article)
The booking form's old free-text "Preferred Day / Time & Music Style" field was split in two: a dedicated "Styles You're Interested In" checkbox group (Acoustic/Electric/Rock/Blues/Pop/Folk/Metal, rendered as pill chips) and a separate, now-optional "Preferred Day / Time" text field. Checked state is pure CSS via `:has()` (`.style-check-label:has(.style-check:checked)`) — no JS needed; the underlying `<input type="checkbox">` is visually hidden (`sr-only`) but fully keyboard- and screen-reader-accessible, with its own focus-visible ring on the label. `:has()` has broad modern-browser support; on an unsupported browser the checkboxes still work, they just don't visually highlight when checked (graceful degradation, not a functional break).

### Interactive Map (signature component, new)
A Google Maps iframe embed (no API key required) centered on "Penrith NSW Australia" — the area with a real, confirmed dedicated studio. The Blue Mountains service area does not get its own map pin, since there is no fixed studio address there to honestly represent (it's described via its suburb list instead). Updated 2026-10-20: the embed's container now also carries `aspect-video` (on top of the existing `min-h-[280px]`) so it's a guaranteed fixed-ratio box, not just a min-height one.

### Instructor & Location Tabs — ARIA (added 2026-10-20)
Both tab widgets (Instructor "Philosophy & Method"/"Local Coverage", Locations "Penrith"/"Blue Mountains") previously had no tab-pattern ARIA at all — just styled buttons with `onclick`. Added `role="tablist"` on the button row, `role="tab"` + `aria-selected` + `aria-controls` on each button, and `role="tabpanel"` + `aria-labelledby` on each content panel. `switchInstructorTab()`/`switchTab()` now toggle `aria-selected` alongside the existing class swaps — keep these in sync if either tab's markup changes again.

## Do's and Don'ts

### Do:
- Do keep Gold as the site's only *interactive* accent color (every CTA, link, focus ring, and icon that implies "click this") — the hero headline's extra glow-yellow/teal treatment (see Hero Banner Redesign below) is a typographic exception, not a second interactive color.
- Do keep the three-gold-token split (`brandAmber` bright / `brandAmberDeep` medium / `brandAmberText` muted) rather than collapsing back to two — it's what keeps gold text readable on light backgrounds (see Site-Wide Rebrand above).
- Do keep the dark/light alternation strict and literal — it's the structural idea of this redesign.
- Do keep the hero's glow/pulse/sparkle accents bounded to the hero; don't let them creep into other sections.
- Do state only confirmed facts in the trust banner; treat any new compliance/certification claim as requiring explicit client confirmation before publishing.
- Do keep the map embed scoped to the area with a real studio; don't fabricate a pin for a service area that doesn't have one.

### Don't:
- Don't add a second *interactive* accent hue competing with Gold (buttons, links, focus states). Decorative/typographic color, as used once in the hero headline, is a separate, explicitly-approved exception — don't extend it to new sections without an equally explicit request.
- Don't use `brandAmber` (bright gold) as standalone text or icon color on a light background — it fails AA badly (1.46:1 on white). Use `brandAmberText` there instead.
- Don't soften the hard cut between dark and light sections with a gradient transition — that's a different system, not a refinement of this one.
- Don't stack two bordered/backgrounded containers inside each other for ordinary content.
- Don't animate a status indicator to suggest a live, continuously-updating feed when the underlying fact is just true/false.

### Hero Banner Redesign (2026-10-21, superseded same day by the Site-Wide Rebrand above)
Explicit client brief specified a "Deep Midnight Blue" (`#0B132B`) hero background (previously flat `brandDark`/`#0D131D` — now hero-specific via an inline radial gradient from `#132044` through `#0B132B` to `#070D1C`, plus a masked hairline grid-line overlay and a warm ambient glow, replacing the cyan one that used to sit behind the headline) and **two new accent colors scoped to the headline only**: `hero-gold` (`#FFD100`, "Music," brush-script, with a dark-teal `hero-teal` brush-stroke highlight behind it, swapped in for the old cyan highlight) and `hero-glow` (`#FFE600`, "Lifelong," heavy sans, with a warm `text-shadow` glow). "Turn," "Into A," and "Skill" stayed off-white (`brandLight`) and were bolded (previously `font-light`, which the brief called for as bold). Both new yellows were contrast-checked against the new midnight background: `#FFD100` measures ~12.6:1 and `#FFE600` ~14.5:1 — both comfortably exceed AA. At the time, this was written up as a scoped exception to the site's single-cyan-accent rule — **later the same day the client asked for gold + blue everywhere**, which the Site-Wide Rebrand entry above covers. `hero-gold` and `brandAmber` are now the same value; `hero-glow`/`hero-teal` remain the only colors still exclusive to this headline (the "Lifelong" glow and the "Music" brush-stroke), since nothing else on the page needs that extra-bright emphasis.
