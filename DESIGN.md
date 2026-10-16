---
name: Mountain Culture Guitar Lessons
description: A dark/light alternating editorial landing page for a guitar-lesson business, built for trust and clarity.
colors:
  dark: "#0F172A"
  darker: "#020617"
  dark-card: "#1E293B"
  dark-line: "#334155"
  light: "#F8FAFC"
  card-white: "#FFFFFF"
  border-light: "#E2E8F0"
  charcoal: "#0F172A"
  muted: "#64748B"
  muted-light: "#94A3B8"
  amber: "#F59E0B"
  amber-deep: "#D97706"
  amber-light: "#FDE68A"
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
    backgroundColor: "{colors.amber}"
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

**Creative North Star: "The Night Studio, Lit by One Warm Lamp"**

*(This is the system's third identity, replacing "The Botanical Studio" (cream/sage/mauve/slate) on 2026-10-16, per explicit, repeated client direction for a dark/light alternating structure with amber accents. The prior light identity is retired; treat it as evidence, not lineage.)*

The page alternates dark and light sections like a studio at night: the hero, pricing, and locations sections go dark-slate with a single warm amber accent doing all the signaling, while "Why Us" and testimonials stay crisp and bright for readability and relief. The rhythm itself communicates something: dark sections hold the decisions that matter most (the offer, the price, the place), light sections hold the proof and explanation. Trust is built through specificity — a real map, real stats, real testimonials — not through decoration.

**Key Characteristics:**
- Strict section-level alternation: Hero (dark) → Why Us (light) → Pricing (dark) → Locations (dark, high-trust) → Reviews (light) → Footer CTA/Footer (dark)
- One accent color (amber) carries every call-to-action and highlight across both dark and light sections — never diluted with a second competing hue
- Dark sections use `brandDarkCard` surfaces with thin `brandDarkLine` borders, never pure black-on-black
- Light sections use true white cards on an off-white (`#F8FAFC`) ground with a visible but quiet `#E2E8F0` border
- Hero carries a small set of confirmed, deliberate glow/motion accents (ambient amber backlight, a gradient-ring status badge with a one-time-justified pulse, sparkle flourishes) — see Elevation & Depth

## Colors

Two neutral families (dark slate, off-white) plus exactly one accent (amber) that never competes with a second hue for attention.

### Primary Accent
- **Amber** (#F59E0B, deep #D97706, light tint #FDE68A): Every CTA, every highlighted price, every "this is the one" signal, on both dark and light backgrounds. This is a deliberate one-accent system — resist adding a second accent hue.

### Dark Neutrals
- **Dark** (#0F172A): Hero and pricing section background.
- **Darker** (#020617): Locations and footer background — the "deepest" sections, reserved for trust/closing moments.
- **Dark Card** (#1E293B): Card surfaces sitting on dark sections.
- **Dark Line** (#334155): Borders and dividers on dark sections.

### Light Neutrals
- **Light** (#F8FAFC): Features and testimonials section background.
- **Card White** (#FFFFFF): Every card on a light section.
- **Border Light** (#E2E8F0): Card borders and dividers on light sections.
- **Charcoal** (#0F172A): Primary text on light sections (same value as the dark background — this is intentional: it's the system's one "ink," used as background in dark mode and as text in light mode).
- **Muted / Muted Light**: Secondary text — `#64748B` on light sections, `#94A3B8` (lighter, for sufficient contrast) on dark sections. Never use the light-section muted value on a dark background or vice versa.

### Named Rules
**The One-Accent Rule.** Amber is the system's only accent color. It appears on both dark and light sections, which is what makes the alternating rhythm read as one coherent system rather than two different sites stitched together.

## Typography

**Display Font:** Montserrat · **Body Font:** Inter · **Brush/Signature Font:** Caveat

**Character:** Montserrat carries headlines in a mixed-case, mixed-weight voice. Inter stays quiet for body copy. Caveat appears exactly once per hero as the system's single handwritten moment (carried over from the prior identity, recolored to charcoal-on-amber-swatch).

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

Mostly flat with real shadows: cards on both dark and light sections use a thin border plus a soft offset-and-blur shadow for lift, never a colored halo as the *default* depth cue. The hero is a confirmed, bounded exception (2026-10-16): it carries a small set of deliberate glow/motion accents — a soft radial amber backlight behind the headline, a gradient-ring status badge with a pulse on its live-status dot, hand-drawn SVG sparkle flourishes near the brush word and photo, and a gradient CTA with an inset highlight. These were requested twice, explicitly, by the client after an initial decline — they are a confirmed hero-only flourish, not license to add glow elsewhere.

### Shadow Vocabulary
- **Card rest** (`shadow-sm`, neutral): Default card elevation, dark or light.
- **Card featured** (`shadow-xl`/`shadow-2xl` + thick amber border): The one featured card per section (pricing's $250 package, the featured testimonial).
- **Hero ambient accents**: Radial amber/slate glow blobs, gradient-ring badge, sparkle SVGs, inset-highlight CTA — hero only.

### Named Rules
**The Hero-Only Glow Rule.** Glow, gradient rings, and sparkle accents are a deliberate, confirmed hero flourish. Every other section stays on flat, neutral elevation (border + shadow only).

**The Honest-Pulse Rule.** The hero's status-badge pulse marks a real, currently-true state ("accepting students right now"), never a fabricated live-updating feed. No animation should imply real-time data that isn't actually checked.

## Shapes

Generous rounding — `rounded-2xl`/`rounded-3xl` on cards, fully `rounded-full` pills and buttons. Borders are thin (1px) on both dark and light cards; a featured element gets a thicker (2-4px) amber border instead of a heavier shadow.

## Components

### Buttons
- **Primary (action):** Solid amber, dark text — every "Book a Lesson" button, on both dark and light sections.
- **Secondary (on dark):** `bg-white/10` with a `brandDarkLine` border, white text — the casual-tier button on the dark pricing section.
- **Hover / Focus:** A -2px lift plus a slightly deeper shade; focus-visible gets a visible ring (amber on dark backgrounds, with an explicit ring-offset color so it's never invisible against the page).

### Cards
- **Light section cards:** White background, `border-light` border, charcoal text.
- **Dark section cards:** `dark-card` background, `dark-line` border, white/slate-300 text.
- **Featured card:** Thicker amber border + deeper shadow, regardless of light or dark context.

### Navigation
- **Style:** The header stays white/translucent at all times (even though the hero beneath it is dark) so it reads consistently whether the page is scrolled to a dark or light section — a deliberate choice to avoid a second "header theme" state.

### Trust Banner (signature component, new)
A row of pill badges on the dark Locations section stating only confirmed facts (10+ years experience, 5.0★ rating, no locked-in contracts). This component exists specifically to NOT include unconfirmed claims — a Working With Children Check credential was proposed and explicitly declined pending real verification; do not add compliance/safety claims here without the client confirming them as true first.

### Interactive Map (signature component, new)
A Google Maps iframe embed (no API key required) centered on "Penrith NSW Australia" — the area with a real, confirmed dedicated studio. The Blue Mountains service area does not get its own map pin, since there is no fixed studio address there to honestly represent (it's described via its suburb list instead).

## Do's and Don'ts

### Do:
- Do keep amber as the system's only accent color across every section.
- Do keep the dark/light alternation strict and literal — it's the structural idea of this redesign.
- Do keep the hero's glow/pulse/sparkle accents bounded to the hero; don't let them creep into other sections.
- Do state only confirmed facts in the trust banner; treat any new compliance/certification claim as requiring explicit client confirmation before publishing.
- Do keep the map embed scoped to the area with a real studio; don't fabricate a pin for a service area that doesn't have one.

### Don't:
- Don't add a second accent hue competing with amber.
- Don't soften the hard cut between dark and light sections with a gradient transition — that's a different system, not a refinement of this one.
- Don't stack two bordered/backgrounded containers inside each other for ordinary content.
- Don't animate a status indicator to suggest a live, continuously-updating feed when the underlying fact is just true/false.
