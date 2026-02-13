# Design Reference — BlackRock AI Website

## Mood & Inspiration

### Reference Sites (Study these for aesthetic cues)
- **Palantir.com** — Dark, authoritative, minimal copy, data-focused visuals
- **Linear.app** — Best-in-class dark theme SaaS, smooth animations, glass effects
- **Vercel.com** — Clean black backgrounds, gradient accents, developer credibility
- **Stripe.com** — Premium feel, gradient mesh backgrounds, precise typography
- **Anthropic.com** — Sophisticated restraint, excellent type hierarchy

### The Prism App (Screenshot Reference)
The uploaded screenshot shows a "Prism" app with:
- Deep dark background (#0d1117 range) with constellation/particle network
- Neural network visual connecting glowing dots
- Gradient text (purple → cyan)
- Glass-effect cards with subtle borders
- Minimal copy, icon-driven features
- Single prominent CTA button
- Clean, non-cluttered layout

**We want this same energy but elevated to Fortune 500 production quality.**

## Visual System

### Color Palette (Exact Values)

```
Background:
  Primary:    #0a0a0f (near-black with blue undertone)
  Secondary:  #0d1117 (GitHub dark)
  Card:       rgba(17, 17, 27, 0.7) (semi-transparent for glass)
  Surface:    rgba(255, 255, 255, 0.02) (barely-there sections)

Accent:
  Cyan 1:     #00d4ff (primary accent, CTAs, highlights)
  Cyan 2:     #00b4d8 (secondary, gradients)
  Blue:       #0077b6 (gradient endpoint)
  Amber:      #f59e0b (warm accent, sparingly — maybe just one CTA)

Text:
  Primary:    #f0f0f0 (headlines, key text)
  Secondary:  #8b8b9e (body copy, descriptions)
  Muted:      #4a4a5a (metadata, footnotes)

Borders & Effects:
  Subtle:     rgba(255, 255, 255, 0.06)
  Hover:      rgba(0, 212, 255, 0.12)
  Glow:       rgba(0, 212, 255, 0.15)
```

### Typography Scale

```
Hero Title:      72px / 800 / Plus Jakarta Sans / tracking: 0.15em / uppercase
Section Title:   48px / 700 / Plus Jakarta Sans
Card Title:      20px / 700 / Plus Jakarta Sans
Body:            16px / 400 / DM Sans / line-height: 1.7
Body Large:      18px / 400 / DM Sans
Caption:         14px / 500 / DM Sans
Code/Tech:       14px / 400 / JetBrains Mono

Mobile adjustments:
Hero Title:      40px
Section Title:   32px
```

### Spacing System

```
Section padding:     120px (desktop) / 80px (mobile)
Container max-width: 1280px
Container padding:   24px (mobile) / 48px (tablet) / 64px (desktop)
Card padding:        32px (desktop) / 24px (mobile)
Card gap:            24px
Component gap:       16px
```

### Animation Timing

```
Scroll reveal:    700ms ease, translateY(24px → 0)
Stagger delay:    100ms between children
Hover scale:      1.02 over 300ms ease
Hover glow:       300ms ease
Header blur:      300ms ease (on scroll threshold: 50px)
Counter:          2000ms ease-out-cubic
```

### Card Style

```css
.glass-card {
  background: rgba(17, 17, 27, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  padding: 32px;
  transition: all 300ms ease;
}

.glass-card:hover {
  border-color: rgba(0, 212, 255, 0.12);
  box-shadow: 0 0 40px rgba(0, 212, 255, 0.15);
  transform: translateY(-2px);
}
```

## Content Rules

1. **No paragraphs on the home page.** Every piece of text should be one sentence max.
2. **Headlines do the work.** The headline should tell the story; body text is supporting.
3. **No corporate fluff.** No "leveraging synergies" or "cutting-edge solutions." Be specific and concrete.
4. **Confidence without arrogance.** The design should speak for itself. The copy should be understated.
5. **Every section earns its space.** If it doesn't add value, remove it.

## Don'ts

- No stock photography
- No carousels or sliders
- No "powered by" badges from third parties
- No chat widgets or pop-ups
- No text walls or long paragraphs
- No rounded avatar testimonials
- No generic "trusted by" logo bars (unless we have real logos)
- No purple gradients (differentiates us from the AI template crowd)
- No bouncy/playful animations — everything is smooth and precise
