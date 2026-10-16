---
name: Mountain Culture Guitar Lessons
description: A light, botanical-studio editorial landing page for a guitar-lesson business.
colors:
  cream: "#F4EFE4"
  card-white: "#FFFFFF"
  charcoal: "#2A2A25"
  muted-taupe: "#5C5952"
  sage: "#6B8169"
  sage-light: "#AEC0AB"
  mauve: "#8B5D53"
  mauve-light: "#D3B3AC"
  slate: "#3F5A72"
  slate-light: "#9BB7C9"
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
    backgroundColor: "{colors.slate}"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    padding: "16px 36px"
  button-secondary:
    backgroundColor: "{colors.sage}"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    padding: "16px 24px"
  card-standard:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.2xl}"
    padding: "32px"
  card-featured:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.3xl}"
    padding: "40px"
---

# Design System: Mountain Culture Guitar Lessons

## Overview

**Creative North Star: "The Botanical Studio"**

*(This is a redesign, replacing the dark "Golden Hour Stage" identity built in earlier sessions. The client pinned a reference — a generic pastel landing-page template — and explicitly confirmed a full rebrand across the whole site, not just the hero; this file replaces the old one entirely rather than extending it. The old dark/amber system is now anti-reference, not a lineage to preserve.)*

The system reads as a calm, plant-filled teaching studio on a Sunday morning — warm cream paper, muted sage and dusty mauve color-blocks, a confident slate-blue for action, and soft natural light rather than stage glow. Where the old identity shouted from a dark stage, this one invites you in from a sunlit room. Overlapping color-blocked circles (a sage circle, a mauve circle, a small slate accent) sit behind the instructor's photo like cut-paper shapes — an editorial, scrapbook-adjacent composition rather than a poster. The one handwritten touch (the marker-highlighted "Music") survives from the old system, recolored, as continuity of personality rather than identity.

**Key Characteristics:**
- Warm cream ground with white cards; soft shadows and thin charcoal-tinted borders instead of dark-theme glow
- Three accent families (sage, mauve, slate), each with a light/soft tint for decoration and a deeper tone for text and buttons — never gray-on-gray
- Overlapping color-blocked circles as the signature decorative device, specifically behind photography
- Mixed-case, mixed-weight display type (a thin connective weight against a heavy emphasis weight) replaces the old all-caps poster voice
- One surviving signature: the hand-marker highlight on a single hero word, now in mauve instead of yellow

## Colors

A warm, paper-like neutral ground with three muted accent families doing the work color used to do with raw saturation.

### Primary
- **Sage** (#6B8169): The studio's primary brand color — logo mark, primary section labels, the Penrith location's accent, default "book" actions outside the hero.

### Secondary
- **Mauve** (#8B5D53): The second accent — Blue Mountains location's color, alternate feature icons, the decorative hero circle and chord tag.

### Tertiary
- **Slate** (#3F5A72): The action color — the hero and modal's primary CTA, the featured pricing package, the featured testimonial border. Slate is reserved for "the one to pick" in any given section, inherited from the old system's Spotlight Rule but now expressed as a deep, confident blue instead of a glow.

### Neutral
- **Cream** (#F4EFE4): Page background throughout.
- **Card White** (#FFFFFF): Every card, modal, and input surface.
- **Charcoal** (#2A2A25): Primary text color.
- **Muted Taupe** (#5C5952): Secondary/caption text, replacing the old system's gray-400. Darkened during a polish pass (2026-10-16) from an initial #73706A, which measured ~4.3:1 on Cream — just under the 4.5:1 AA floor for normal text. The current value measures ~6:1.

### Named Rules
**The Deep/Light Pairing Rule.** Every accent family ships two tones: a deep one for text, borders, and buttons (readable, intentional), and a soft one for decoration — tinted icon backgrounds, hero circles, quote marks. Never use the soft tone where text needs to sit on it directly, and never use the deep tone as a large decorative fill.

## Typography

**Display Font:** Montserrat (with sans-serif fallback)
**Body Font:** Inter (with sans-serif fallback)
**Brush/Signature Font:** Caveat (with cursive fallback)

**Character:** Montserrat carries headlines in a mixed-case, mixed-weight voice — editorial rather than shouted. Inter stays quiet for anything meant to be read. Caveat appears exactly once per hero as the system's single handwritten moment.

### Hierarchy
- **Display** (900, clamp 1.875rem–4.5rem, 1.0 line-height): Section headlines, mixed case, moderate tracking.
- **Display Light** (300, same size range, 0.95 line-height): The hero masthead's connective words ("Turn", "Into A"), paired against a heavy emphasis word for editorial contrast — see the Weight Contrast Rule.
- **Brush** (700, clamp 3rem–5rem, cursive): The one hand-marked emphasis word per hero only.
- **Body** (400, 0.75–1.125rem, 1.6 line-height): Paragraph copy.
- **Label** (800, 0.6875–0.75rem, 0.1em tracking, uppercase): Nav links, button text, eyebrows, tag bars.

### Named Rules
**The Weight Contrast Rule.** The hero masthead mixes a thin (300) connective weight against the system's heavy (900) emphasis weight, for an editorial, high-contrast feel at the one place the system spends its biggest type. Section headings elsewhere stay single-weight 900.

**The One Brush Rule.** Caveat is the system's single handwriting moment. It marks one word in the hero and nowhere else.

## Layout

A `max-w-7xl` centered container runs the page, with horizontal padding stepping `px-4 → sm:px-6 → lg:px-8`. The hero is the one section with a non-rectangular background: a diagonal clip-path splits a sage band (top, ~65% height) from a cream band (bottom), with the photo and content column straddling the seam. Every other section is a flat cream or soft-sage-tinted band, alternating for rhythm. Cards never nest a second bordered/backgrounded box for ordinary content — a divider or spacing separates sub-content instead.

## Elevation & Depth

Soft and natural, not glowing. Cards sit on a thin 1-2px charcoal-tinted border with a soft, true drop shadow (offset + blur) for lift — no colored ambient glow anywhere in this system; that device belonged to the old dark identity and does not survive the redesign. A featured element (the hero CTA, the featured pricing card, the featured testimonial) is marked by a thicker slate border and a deeper shadow, never a halo.

### Shadow Vocabulary
- **Card rest** (`shadow-sm`, neutral): Default card elevation.
- **Card featured** (`shadow-xl`, neutral): The one featured card per section, paired with a 2-4px slate border.
- **Modal / CTA** (`shadow-lg` to `shadow-2xl`, neutral): Floating elements above the page plane.

### Named Rules
**The No-Glow Rule.** Depth comes from a real offset-and-blur shadow, never a zero-offset colored halo. This is a deliberate reversal of the old system's Spotlight glow, not an oversight.

## Shapes

Soft, generous rounding — `rounded-2xl`/`rounded-3xl` (16-24px) on cards, fully `rounded-full` pill buttons and tags (a change from the old system's `rounded-xl` buttons), and large soft circles (hundreds of px) as the signature decorative device behind photography. Borders are thin and low-opacity (charcoal at ~10%) rather than the old system's visible neutral-800 lines.

## Components

### Buttons
- **Shape:** Fully rounded (pill), a deliberate change from the old system's 12px corner buttons.
- **Primary (action):** Solid slate, white text — hero CTA, modal submit, featured pricing CTA.
- **Secondary (brand):** Solid sage, white text — header's persistent CTA, Penrith location CTA.
- **Tertiary:** Solid mauve, white text — Blue Mountains location CTA.
- **Hover / Focus:** A -2px lift plus a slightly deeper shade; focus-visible gets a visible ring in the button's own color family.

### Cards / Containers
- **Corner Style:** `rounded-2xl` grid cards, `rounded-3xl` showcase cards (pricing, testimonials, modal).
- **Background:** White by default on a cream or soft-sage-tinted section background.
- **Shadow Strategy:** Soft neutral shadow at rest; a thicker slate border + deeper shadow on the one featured card per section (see Elevation).
- **Border:** 1px charcoal/10 ordinary; 2-4px slate on the featured variant.

### Inputs / Fields
- **Style:** Cream background, 1px charcoal/15 border, `rounded-xl`, generous padding.
- **Focus:** Border shifts to slate plus a soft slate focus ring.

### Navigation
- **Style:** Sticky cream header with a thin bottom border; label-style nav links in muted taupe, going sage on hover. The persistent header CTA is solid slate.

### Decorative Circles (signature component)
Two to three overlapping, oversized soft-tone circles (sage-light, mauve-light, slate-light) sit behind a photo frame, each at a different scale and offset — the system's signature "cut-paper" decorative device. Reserved for photography; never used behind plain text or cards.

### Brush Highlight (signature component, carried over)
A single word per hero wrapped in Caveat cursive, sitting on a rotated mauve marker-swatch. Recolored from the old system's yellow but structurally unchanged — the one surviving continuity piece between the two identities.

## Do's and Don'ts

### Do:
- **Do** pair every accent's deep tone (text/buttons) with its own soft tone (decoration) — never cross them.
- **Do** keep elevation as a real offset-and-blur shadow; no colored glow anywhere in this system.
- **Do** reserve the overlapping decorative circles for photography, not for plain cards or text blocks.
- **Do** keep Caveat/brush typography to one word, one time, per hero.
- **Do** keep buttons fully rounded (pill) — this is the system's one consistent button shape.

### Don't:
- **Don't** reintroduce the old system's zero-offset colored glow shadow; it is explicitly retired by this redesign.
- **Don't** stack two bordered/backgrounded containers inside each other for ordinary content.
- **Don't** animate a status badge or indicator unless it represents genuinely live, changing data.
- **Don't** use the soft/light accent tint anywhere text needs to sit directly on it — contrast fails.
