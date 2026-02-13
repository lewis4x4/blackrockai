# CLAUDE.md — BlackRock AI Website Build

## Project Overview
Build the marketing website for **BlackRock AI** (BlackRockAI.co) — an AI consulting and development agency. This must be a Fortune 500-caliber, dark-themed, minimal-copy website that communicates elite technical capability through design, not words.

## Tech Stack
- **Framework**: React 18+ with TypeScript (strict mode)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4 + custom CSS for animations
- **UI Components**: shadcn/ui (dark theme only)
- **Animations**: Framer Motion + custom canvas/WebGL for particle background
- **Deployment**: Netlify (connected to GitHub)
- **Font Loading**: Google Fonts via `@fontsource` packages
- **Icons**: Lucide React

## Design Direction

### Aesthetic: "Neural Dark" — Precision Engineering Meets Digital Atmosphere
The site should feel like stepping into a command center for AI operations. Think: the aesthetics of a Bloomberg terminal meets Palantir's brand presence meets Apple's spatial computing design language.

### Visual DNA
- **Background**: Deep charcoal-to-black (#0a0a0f to #0d1117) with an interactive particle constellation network that subtly responds to mouse movement. Particles should be small (1-2px), connected by faint lines when close, with occasional cyan/teal pulse effects. The effect should be performant — canvas-based, not DOM particles.
- **Primary Gradient**: Cyan (#00d4ff) → Teal (#00b4d8) → Electric Blue (#0077b6)
- **Accent**: Warm amber (#f59e0b) for CTAs and emphasis
- **Glass Cards**: Semi-transparent cards with `backdrop-filter: blur(12px)`, subtle border glow, and 1px border of rgba(255,255,255,0.06)
- **Typography**: 
  - Headlines: `Instrument Sans` or `Plus Jakarta Sans` (700/800 weight)
  - Body: `DM Sans` (400/500 weight)  
  - Mono/Tech: `JetBrains Mono` for any code/tech references
- **Spacing**: Generous. Let the background breathe. Sections should have 120-160px vertical padding.

### Key Visual Effects
1. **Particle Constellation Background**: Full-viewport canvas with interconnected nodes. Nodes drift slowly, form connections when within proximity. Mouse creates a gravitational pull effect. Color: primarily white/gray dots with occasional cyan-tinted ones.
2. **Scroll-Triggered Reveals**: Elements fade up with subtle Y-translation (20px) on scroll into view. Stagger children by 100ms.
3. **Gradient Text**: Key headlines use `bg-clip-text text-transparent` with the primary cyan gradient.
4. **Glow Effects**: Subtle box-shadow glows on hover for interactive elements: `0 0 40px rgba(0, 212, 255, 0.15)`
5. **Section Dividers**: No hard lines. Use gradient fades or the particle field density changes to transition between sections.

## Site Architecture

### Pages
1. **Home** (/) — Single-page scrolling experience (primary focus)
2. **About** (/about) — Team, values, methodology (phase 2)
3. **Services** (/services) — Detailed service breakdown (phase 2)
4. **Contact** (/contact) — Contact form + booking (phase 2)

### Home Page Sections (in scroll order)

#### 1. Hero Section
- Full viewport height
- Large wordmark "BLACK ROCK AI" — not a traditional logo. Use the headline font at massive scale with letter-spacing: 0.15em
- Below: "AI Consulting & Development" in a lighter weight
- Tagline: "We build intelligent systems that scale." — gradient text
- Single CTA button: "Start a Conversation" → links to contact/cal.com booking
- Subtle scroll indicator (animated chevron or "Scroll" text with line)
- The particle background is most dense/visible here

#### 2. What We Build (Services Overview)
- Section title: "What We Build" — left-aligned, gradient text
- 3-4 glass cards in a responsive grid:
  - **AI Strategy & Consulting** — "From roadmap to ROI. We architect your AI transformation."
  - **Custom AI Applications** — "Purpose-built AI tools that solve your specific problems."
  - **SaaS & Industry CRMs** — "Vertical software with AI baked in, not bolted on."
  - **System Integration** — "Connect your stack. Automate your workflows. Eliminate friction."
- Each card: icon (Lucide), title, one-line description. No paragraphs.
- Cards have hover glow effect and slight scale transform

#### 3. Industries We Serve
- Horizontal scrolling row or staggered grid
- Industry tags/chips with subtle borders:
  - Security & Access Control
  - Insurance
  - Construction
  - Energy & Mining  
  - Manufacturing
  - Trades & Contracting
- Each chip could have a subtle icon and glow on hover
- Brief line above: "Specialized expertise across high-stakes industries."

#### 4. Our Stack (Tech Credibility)
- Visual representation of the tech stack — NOT a boring logo grid
- Could be a horizontal flow diagram or orbital/constellation visualization
- Group into: Frontend | Backend | AI | Infrastructure
- Technologies: React, TypeScript, Supabase, PostgreSQL, Claude API, OpenAI, n8n, Netlify, Cloudflare
- Each tech node could pulse subtly

#### 5. Results / Social Proof
- If client testimonials aren't available yet, use metrics/stats:
  - "6+ Active Enterprise Clients"
  - "50+ AI Implementations Delivered"
  - "3x Average ROI for Clients"
- Animated number counters on scroll
- Keep this minimal — 3 stats max in a row

#### 6. CTA / Contact Section
- "Ready to build something intelligent?"
- Two options: "Book a Call" (primary) + "Send a Message" (secondary)
- Book a Call links to Cal.com or Calendly (placeholder URL for now)
- Minimal contact form: Name, Email, Company, Message
- The particle background could intensify slightly here

#### 7. Footer
- Minimal. Single row.
- Left: "© 2025 BlackRock AI"
- Center: Navigation links
- Right: Social links (LinkedIn, X/Twitter, GitHub)
- Subtle top border gradient line

## Component Architecture

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Fixed, transparent → blur on scroll
│   │   ├── Footer.tsx
│   │   └── Section.tsx         # Reusable section wrapper with scroll animations
│   ├── ui/                     # shadcn/ui components
│   ├── hero/
│   │   ├── HeroSection.tsx
│   │   └── ParticleBackground.tsx  # Canvas-based particle system
│   ├── services/
│   │   ├── ServicesSection.tsx
│   │   └── ServiceCard.tsx
│   ├── industries/
│   │   └── IndustriesSection.tsx
│   ├── stack/
│   │   └── TechStackSection.tsx
│   ├── proof/
│   │   └── SocialProofSection.tsx
│   └── contact/
│       └── ContactSection.tsx
├── hooks/
│   ├── useScrollAnimation.ts   # Intersection Observer for scroll reveals
│   ├── useMousePosition.ts     # For particle interaction
│   └── useCountUp.ts           # Animated number counter
├── lib/
│   ├── utils.ts                # shadcn utils
│   └── particles.ts            # Particle system engine
├── styles/
│   └── globals.css             # Custom CSS, Tailwind imports, font imports
├── App.tsx
└── main.tsx
```

## Particle Background Specification

This is the signature visual element. Implementation requirements:

```typescript
// Core config
interface ParticleConfig {
  count: number;           // 80-120 particles (scale with viewport)
  speed: number;           // 0.2-0.5 px/frame
  size: { min: 1, max: 2.5 };
  connectionDistance: number; // 120px — draw line between particles within this range
  connectionOpacity: number; // 0.08-0.15
  mouseRadius: number;       // 150px — particles respond within this radius
  mouseForce: number;        // 0.02 — subtle push/pull
  colors: {
    particle: 'rgba(255, 255, 255, 0.4)',
    connection: 'rgba(0, 212, 255, 0.06)',
    highlight: 'rgba(0, 212, 255, 0.3)',  // occasional highlighted particle
  };
}
```

- Use `requestAnimationFrame` for smooth 60fps rendering
- Particles should wrap around edges (toroidal topology)
- ~5% of particles should be cyan-tinted "highlight" particles
- Connection lines should use distance-based opacity falloff
- Mouse interaction: particles gently attracted toward cursor, spring back when cursor moves away
- Performance: Use `OffscreenCanvas` if supported, implement frame skipping on low-end devices
- The canvas should be `position: fixed` behind all content with `pointer-events: none`

## Header Behavior
- Position: fixed, full-width
- Initial state: fully transparent background
- On scroll (>50px): `backdrop-filter: blur(16px)` + `bg-black/60` + subtle bottom border
- Logo: "BLACKROCK" text (no image logo needed initially), linked to /
- Nav items: What We Build, Industries, Our Stack, Contact
- CTA button in nav: "Get Started" — small, pill-shaped, gradient border
- Mobile: hamburger menu with full-screen overlay, same glass effect

## Responsive Breakpoints
- Mobile: < 768px (single column, reduced particle count to 40)
- Tablet: 768-1024px 
- Desktop: 1024-1440px
- Large: > 1440px (max-width container at 1280px, centered)

## Performance Requirements
- Lighthouse score: 90+ across all categories
- First Contentful Paint: < 1.5s
- Canvas particle system must not cause frame drops on mid-range devices
- Lazy load below-fold content
- Preload critical fonts

## SEO Requirements
- Proper meta tags (title, description, og:image)
- Structured data (Organization schema)
- Semantic HTML (proper heading hierarchy, landmarks)
- Title: "BlackRock AI | AI Consulting & Development"
- Description: "We build intelligent systems that scale. AI consulting, custom applications, and industry-specific SaaS solutions."

## Phase 1 Deliverables (This Build)
1. Complete home page with all sections
2. Particle background system
3. Responsive design across all breakpoints
4. Scroll animations
5. Contact form (frontend only, no backend integration yet)
6. Deployed to Netlify

## Phase 2 (Future)
- About page with team section
- Detailed services pages
- Blog/insights section
- Client portal link
- Case studies
- Cal.com integration for booking
- Supabase backend for contact form submissions

## Code Quality Standards
- TypeScript strict mode, no `any` types
- All components properly typed with interfaces
- ESLint + Prettier configured
- No console.logs in production
- Proper error boundaries
- Accessible (WCAG 2.1 AA minimum)

## Colors Reference (Tailwind Custom)
```
--black-primary: #0a0a0f
--black-secondary: #0d1117
--black-card: rgba(17, 17, 27, 0.7)
--cyan-primary: #00d4ff
--cyan-secondary: #00b4d8
--blue-primary: #0077b6
--amber-accent: #f59e0b
--text-primary: #f0f0f0
--text-secondary: #8b8b9e
--text-muted: #4a4a5a
--border-subtle: rgba(255, 255, 255, 0.06)
--glow-cyan: rgba(0, 212, 255, 0.15)
```

## Important Notes for Claude Code
1. Start with the particle background — it's the foundation of the visual identity
2. Build mobile-first, enhance for desktop
3. Every section should feel like it has room to breathe — err on the side of more whitespace
4. No lorem ipsum. Use the exact copy provided above.
5. The site should feel premium and restrained. If something feels "busy," remove it.
6. Test the particle system on a throttled CPU to ensure performance
7. The glassmorphism cards should be subtle — not the frosted glass cliché. Think: barely-there transparency.
8. Animations should be smooth and understated. Nothing should "bounce" or feel playful. Everything is precision-engineered.
