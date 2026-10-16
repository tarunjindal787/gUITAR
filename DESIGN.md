---
name: Mountain Culture Guitar Lessons
description: A warm, rustic-modern landing page for a guitar-lesson business — cream canvas, forest green primary accent, terracotta secondary accent.
colors:
  cream: "#F5F2EB"
  forest: "#2C4A3E"
  forest-deep: "#1E342B"
  terracotta: "#C87D65"
  terracotta-deep: "#B36850"
  slate: "#1E2C25"
  muted: "#5C6B63"
  border: "#E0D9C9"
  card-white: "#FFFFFF"
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
    backgroundColor: "{colors.forest}"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    padding: "16px 36px"
  card-light:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.slate}"
    rounded: "{rounded.2xl}"
    padding: "32px"
---

# Design System: Mountain Culture Guitar Lessons

## Overview

**Creative North Star: "Cedar & Clay"**

*(This is the system's fourth identity, replacing "The Night Studio" (dark-slate/amber) on 2026-10-16, per explicit, repeated client direction for a warm rustic-modern palette. The prior dark/light identity is retired; treat it as evidence, not lineage. This is also the fourth time a forest-green/terracotta direction was proposed in this engagement — the first three times it was explicitly declined in favor of keeping the identity then in place; this time it was explicitly confirmed via direct question before implementation.)*

The page runs on a single warm cream canvas (`#F5F2EB`) with white card surfaces for contrast zones (pricing, features, testimonials), instead of the prior dark/light alternation. Two accent colors do the signaling, each with a distinct job: **forest green** is the primary-action color — every CTA button, every checkmark, every "this converts" signal; **terracotta** is the secondary/decorative accent — stars, badges, trust-banner icons, the brush-word swatch, ribbon badges. The two closing sections (Footer CTA band and Footer) are the one deliberate dark anchor on the page, rendered in solid forest green, giving the page a bold brand-color bookend without resurrecting full dark/light alternation.

**Key Characteristics:**
- Single cream canvas (`#F5F2EB`) for every content section; white cards carry contrast where needed (features, pricing, reviews, locations)
- Two-accent system: forest green (`#2C4A3E`) for primary actions and trust/confirmation signals (buttons, checkmarks); terracotta (`#C87D65`) for decorative/informational accents (stars, badges, ribbons, the hand-brushed word swatch)
- Footer CTA band and Footer are solid forest green — the page's one deliberate dark, brand-color anchor
- Live-status pulse uses Tailwind's `emerald-500` (`#10B981`), independent of the two brand accents, since it signals a real system state rather than brand decoration
- Typography unchanged across identities: Montserrat (display), Inter (body), Caveat (the one brush/script word in the hero)

## Colors

One warm neutral canvas, one text-ink color, and two accents with distinct jobs.

### Canvas & Ink
- **Cream** (#F5F2EB): The page's one background color across every section except the forest-green footer bookend.
- **Card White** (#FFFFFF): Every card surface (pricing, features, reviews, locations tab panels).
- **Border** (#E0D9C9): Warm, low-contrast border on cream and white surfaces.
- **Slate** (#1E2C25): Primary text ink everywhere on the cream/white surfaces.
- **Muted** (#5C6B63): Secondary/supporting text on cream and white surfaces.

### Primary Accent — Forest Green
- **Forest** (#2C4A3E) / **Forest Deep** (#1E342B): Every CTA button background, every checkmark icon, the one bold emphasis word in the hero headline, focus rings. This is the "take action / this is confirmed" color.

### Secondary Accent — Terracotta
- **Terracotta** (#C87D65) / **Terracotta Deep** (#B36850): Star ratings, trust-banner icons, badge/ribbon backgrounds, the hero's hand-brushed word swatch, sparkle accents, secondary links. This is the "notice this / decorative" color — it never appears on a primary conversion button.

### Named Rules
**The Two-Accent Split Rule.** Forest green and terracotta each have one job and never swap: forest = primary action and confirmation (buttons, checkmarks), terracotta = decorative and informational (stars, badges, ribbons). A single element should not mix both as competing accents.

**The One Dark Anchor Rule.** The Footer CTA band and Footer are the only sections that depart from the cream canvas — rendered in solid forest green as a deliberate, bounded bookend, not a return to dark/light alternation.

## Typography

**Display Font:** Montserrat · **Body Font:** Inter · **Brush/Signature Font:** Caveat

### Hierarchy
- **Display** (900): Section headlines — dark slate on cream, white on the forest footer bookend.
- **Display Light** (300): The hero masthead's connective words ("Turn", "Into A").
- **Brush** (700, cursive): The one hand-marked hero word ("Music"), set on a terracotta swatch.
- **Body / Label**: As documented in the frontmatter.

### Named Rules
**The Weight Contrast Rule.** The hero masthead mixes a thin (300) connective weight against the system's heavy (900) emphasis weight.

**The One Brush Rule.** Caveat marks one word in the hero and nowhere else.

## Layout

A `max-w-7xl` centered container runs the page. Sections are separated by a thin warm border (`border-brandBorder`) rather than a color change, since nearly every section shares the same cream canvas. Cards never nest a second bordered/backgrounded box for ordinary content.

## Elevation & Depth

Flat with real shadows: cards use a thin border plus a soft offset-and-blur shadow for lift. The hero carries a confirmed, bounded set of ambient/motion accents (soft radial forest + terracotta backlights behind the headline, a live-status pulse badge, hand-drawn SVG sparkle flourishes, a pulsing primary CTA on load) — these are a hero-only flourish, not a system-wide depth cue.

### Named Rules
**The Hero-Only Glow Rule.** Glow and sparkle accents are a deliberate, confirmed hero flourish. Every other section stays on flat, neutral elevation (border + shadow only).

**The Honest-Pulse Rule.** The hero's status-badge pulse (`emerald-500`) marks a real, currently-true state ("accepting students right now"), never a fabricated live-updating feed.

## Shapes

Generous rounding — `rounded-2xl`/`rounded-3xl` on cards, fully `rounded-full` pills and buttons. Borders are thin (1px); the featured pricing card gets a thick (4px) terracotta border instead of a heavier shadow.

## Components

### Buttons
- **Primary (action):** Solid forest green, white text — every "Book a Lesson" button, everywhere on the page.
- **Secondary (casual-tier):** Cream/outline button with a warm border — the single-lesson pricing card's button, deliberately quieter than the primary.
- **Footer-CTA exception:** On the solid-forest footer band, the CTA button is terracotta (not forest) so it has contrast against its own background — the one place forest is not the button color.

### Cards
- **All cards:** White background, warm border, slate text, soft shadow — used identically across features, pricing, reviews, and locations (no separate "dark card" variant exists in this identity).
- **Featured card:** Thicker terracotta border + deeper shadow (the $250 pricing package, the center testimonial).

### Navigation
- **Style:** The header stays white/translucent at all times, consistent with the cream canvas beneath it.

### Trust Banner
A row of pill badges on the Locations section stating only confirmed facts (10+ years experience, 5.0★ rating, no locked-in contracts). A Working With Children Check credential was proposed and explicitly declined pending real verification; do not add compliance/safety claims here without the client confirming them as true first.

### Interactive Map
A Google Maps iframe embed (no API key required) centered on "Penrith NSW Australia" — the area with a real, confirmed dedicated studio. The Blue Mountains service area does not get its own map pin, since there is no fixed studio address there to honestly represent.

## Do's and Don'ts

### Do:
- Do keep forest green strictly for primary actions and confirmation signals (buttons, checkmarks).
- Do keep terracotta strictly for decorative/informational accents (stars, badges, ribbons).
- Do keep the cream canvas consistent across every section except the forest footer bookend.
- Do state only confirmed facts in the trust banner; treat any new compliance/certification claim as requiring explicit client confirmation before publishing.
- Do keep the map embed scoped to the area with a real studio.

### Don't:
- Don't let forest and terracotta compete as interchangeable accents on the same element.
- Don't add a third accent hue.
- Don't stack two bordered/backgrounded containers inside each other for ordinary content.
- Don't animate a status indicator to suggest a live, continuously-updating feed when the underlying fact is just true/false.
