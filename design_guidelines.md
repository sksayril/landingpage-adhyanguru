# Adhyan Guru Landing Page Design Guidelines

## Design Approach
**Premium Ed-Tech Platform** - Drawing inspiration from modern SaaS platforms like Linear and Stripe, combined with the vibrant, gradient-heavy aesthetics of education platforms. Focus on clarity, trust-building, and showcasing AI-powered innovation.

## Core Design Elements

### Typography
- **Primary Font**: Inter or Poppins (Google Fonts)
- **Hero Heading**: 4xl-6xl, bold (font-bold), tight leading
- **Section Headings**: 3xl-4xl, semibold (font-semibold)
- **Body Text**: base-lg, regular (font-normal), comfortable line-height
- **CTA Buttons**: base-lg, medium (font-medium)

### Layout System
- **Spacing Units**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- **Container**: max-w-7xl with px-4 sm:px-6 lg:px-8
- **Section Padding**: py-16 sm:py-20 lg:py-24
- **Grid Layouts**: 2-column (md:grid-cols-2) for features, 3-column (lg:grid-cols-3) for cards, 4-column (lg:grid-cols-4) for technologies

### Component Library

**Hero Section**
- Full viewport height (min-h-screen) with deep sky blue gradient background
- Centered content layout with illustration on right (desktop) or bottom (mobile)
- Two prominent CTAs side-by-side: "Get Started" (primary) and "Download App" (secondary)
- Soft animated floating shapes using subtle animations
- AI-themed decorative icons scattered across background

**Feature Cards** (6 cards in 2x3 or 3x2 grid)
- Glassmorphism effect: backdrop-blur with semi-transparent white background
- Icon at top, title, description below
- Smooth hover: subtle scale transform (scale-105) and enhanced shadow
- Rounded corners (rounded-2xl)
- Padding: p-6 to p-8

**Dashboard/Mockup Previews**
- Showcase sections use split layouts: Content left, mockup/illustration right
- Student tracking mockup with GPS map preview
- Parent dashboard with progress charts and metrics
- AI tutor chat interface with message bubbles

**Adhyan Social Grid**
- Masonry-style or uniform grid of talent showcase cards
- Video/image thumbnails with play icons overlay
- Student profile info on cards
- "Share Your Talent" CTA banner

**Technologies Section**
- 6 technology icons in horizontal row (responsive stacking)
- Icon + name + brief description format
- Subtle hover animations on each tech card

**Team Section**
- Profile cards with soft neumorphism (subtle inner/outer shadows)
- Circular profile images
- Name, role, social links below
- 3-4 columns on desktop, stacking on mobile

**Footer**
- Multi-column layout: Navigation links, Resources, Social media, Newsletter signup
- Copyright and SEO text at bottom
- Deep sky blue accent elements

### Visual Design System

**Color Philosophy**
- Primary: Deep sky blue with gradient variations
- Gradients: Cyan to blue, blue to purple for depth
- Backgrounds: White base with blue-tinted sections
- Cards: White/semi-transparent with glassmorphism
- Text: Dark gray on light, white on dark blue sections

**Effects & Depth**
- Glassmorphism: backdrop-blur-lg with bg-white/10 to bg-white/30
- Neumorphism: Soft shadows (shadow-sm to shadow-lg) with subtle highlights
- Gradients: Linear gradients from-cyan-400 via-blue-500 to-blue-600
- Hover states: Transform scale, enhanced shadows, slight color shifts

**Animations** (Framer Motion)
- Hero elements: Fade-in with stagger effect
- Feature cards: Slide-up on scroll, hover scale
- Floating shapes: Slow continuous movement (translate + rotate)
- Section reveals: Fade and slide-up on viewport entry
- Keep animations smooth (duration 0.3-0.6s) and purposeful

### Images

**Hero Section**
- Large illustration: Cartoon-style AI tutor with students learning together
- Style: Vibrant, friendly, modern educational scene with technology elements
- Placement: Right side on desktop (50% width), below text on mobile
- Alt: "AI-powered learning with Adhyan Guru platform"

**Dashboard Mockups**
- Parent tracking dashboard with charts, progress bars, student metrics
- GPS live tracking map showing bus location
- AI tutor chat interface with conversation bubbles
- Use realistic UI mockups with proper shadows and perspective

**Adhyan Social Preview**
- Grid of 6-9 student talent posts (videos/images)
- Diverse content: Art, music, sports, academic achievements
- Thumbnail style with subtle overlays

**Team Photos**
- Professional headshots on circular frames
- Consistent lighting and background treatment

**Technology Icons**
- Official logos for Node.js, React, Next.js, Flutter, MongoDB
- Generic AI/brain icon for Generative AI
- Consistent sizing (w-12 h-12 to w-16 h-16)

### Responsiveness Strategy
- Mobile-first approach with breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Hero: Stack vertically on mobile, side-by-side on lg+
- Feature grid: 1 column mobile, 2 columns md, 3 columns lg
- Navigation: Hamburger menu on mobile, full horizontal on md+
- Touch-friendly tap targets (min 44x44px)

### Accessibility
- Semantic HTML5 tags (header, nav, main, section, footer)
- ARIA labels for icons and interactive elements
- Sufficient color contrast (WCAG AA minimum)
- Keyboard navigation support
- Focus indicators on all interactive elements

This design creates a premium, futuristic education platform that builds trust through professional aesthetics while maintaining approachability through friendly illustrations and vibrant colors.