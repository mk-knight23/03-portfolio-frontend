# 03-portfolio-frontend

# 03 Portfolio Frontend — Kazi Musharraf

> **Motion-first portfolio showcasing UI craft and design systems.**
> Built for creative agencies and design-focused teams.

[![Live Site](https://img.shields.io/badge/Live%20Site-Frontend-9333ea?style=for-the-badge&logo=firefox&logoColor=white)](https://mk-knight-frontend.web.app)
[![GitHub](https://img.shields.io/badge/Source-Code-181717?style=for-the-badge&logo=github)](https://github.com/mk-knight23/03-portfolio-frontend)
[![Ecosystem](https://img.shields.io/badge/60%20Projects-Ecosystem-10b981?style=for-the-badge)](https://www.mkazi.live)

---

## What Is This?

This is **Portfolio #03 — Frontend**, a motion-first portfolio designed for creative agencies and design-focused teams. Built with HTML/CSS/JS and GSAP animations, it showcases my work through **movement, interaction, and visual storytelling**.

One of **eight specialized portfolio experiences**, this version emphasizes the craft of frontend development.

---

## The Story: Motion as Narrative

### Why Motion Matters

Animation isn't decoration — it's **communication**:

| Motion Type | Purpose | Example |
|-------------|---------|---------|
| **Entrance** | Guide attention | Elements fade/slide into view |
| **Transition** | Show relationships | Smooth page/section changes |
| **Feedback** | Confirm actions | Button states, hover effects |
| **Delight** | Create emotion | Playful micro-interactions |

### The 60 Projects Evolution

From static pages to **interactive experiences**:

1. **Static HTML** — Information display
2. **CSS Animations** — Basic transitions
3. **JavaScript Interactions** — User-triggered effects
4. **GSAP + Canvas** — Complex motion design (current)
5. **WebGL/Three.js** — 3D immersive experiences (next)

### Frontend-First Philosophy

```
Design Intent → Motion Spec → Implementation → Performance Optimization → Delight
```

---

## Tech Stack

| Category | Technology |
|----------|------------|
| **Structure** | HTML5 |
| **Styling** | CSS3 (Custom Properties, Grid, Flexbox) |
| **Animations** | GSAP + ScrollTrigger |
| **Effects** | Canvas API (neural network background) |
| **Typography** | Space Grotesk, Space Mono |
| **Build** | Vite |
| **Deployment** | Firebase Hosting |

---

## Design System

### Colors

```css
--bg: #0a0a0f;
--bg-alt: #12121a;
--text: #ffffff;
--accent-1: #00f5d4;  /* Cyan */
--accent-2: #ff006e;  /* Pink */
--accent-3: #8338ec;  /* Purple */
```

### Typography

- **Headings**: Space Grotesk (300-700)
- **Body**: Space Grotesk (400)
- **Code/Labels**: Space Mono (400, 700)

### Motion Principles

1. **Purposeful**: Every animation serves a function
2. **Performant**: 60fps on all devices
3. **Respectful**: `prefers-reduced-motion` support
4. **Consistent**: Unified easing and timing

---

## 8 Portfolio Ecosystem

This is **#03 of 8** specialized experiences:

| # | Portfolio | Theme | URL |
|---|-----------|-------|-----|
| 01 | DevTools | Terminal/CLI | [Live](https://portfolio-devtools.web.app) |
| 02 | Fullstack | Clean SaaS | [Live](https://mk-knight-fullstack.web.app) |
| 03 | **Frontend** | Motion Design | [Live](https://mk-knight-frontend.web.app) |
| 04 | Backend | Editorial | [Live](https://mk-knight-backend.web.app) |
| 05 | Frontend AI | AI Lab | [Live](https://mk-knight-frontend-ai.web.app) |
| 06 | Senior Frontend | Swiss Minimal | [Live](https://mk-knight-senior-frontend.web.app) |
| 07 | Indie SaaS | Startup Style | [Live](https://portfolio-indie-saas.web.app) |
| 08 | AI Automation | Systems Flow | [Live](https://portfolio-ai-automation.web.app) |

---

## Featured Projects

### Motion-Heavy Implementations

| Project | Tech | Motion Highlights |
|---------|------|-------------------|
| Country Explorer | React + Framer Motion | Page transitions, data viz animations |
| Recipe Finder | Vue + CSS | Hover states, loading sequences |
| Meme Generator | React + Canvas | Real-time image manipulation |
| Mini Games | React | Game loops, sprite animations |

### View All 60 Projects

🔗 **[https://www.mkazi.live](https://www.mkazi.live)**

---

## Development

```bash
# Clone
git clone https://github.com/mk-knight23/03-portfolio-frontend.git
cd 03-portfolio-frontend

# Install
npm install

# Dev server
npm run dev

# Build
npm run build
```

---

## 🏗️ Architecture

### Project Structure

```
03-portfolio-frontend/
├── src/
│   ├── components/       # Reusable components
│   │   ├── animations/   # Animation wrappers
│   │   │   ├── FadeIn.tsx
│   │   │   ├── SlideUp.tsx
│   │   │   └── Stagger.tsx
│   │   ├── layout/       # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Container.tsx
│   │   ├── sections/     # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Skills.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/           # UI components
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── Badge.tsx
│   ├── animations/       # GSAP configurations
│   │   ├── timeline.ts
│   │   ├── scrollTrigger.ts
│   │   └── easings.ts
│   ├── styles/           # Global styles
│   │   ├── main.css
│   │   ├── variables.css
│   │   └── typography.css
│   ├── effects/          # Canvas effects
│   │   └── neural-network.ts
│   └── utils/            # Utility functions
│       ├── debounce.ts
│       └── throttle.ts
├── public/               # Static assets
├── index.html            # HTML entry point
├── package.json          # Dependencies
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
└── tailwind.config.ts    # Tailwind configuration
```

### Technology Stack

| Layer | Technology |
|-------|------------|
| **Structure** | HTML5 |
| **Styling** | CSS3 (Custom Properties, Grid, Flexbox) |
| **Animations** | GSAP + ScrollTrigger |
| **Effects** | Canvas API (neural network background) |
| **Typography** | Space Grotesk, Space Mono |
| **Build Tool** | Vite |
| **Deployment** | Firebase Hosting |

### Key Architectural Patterns

- **Motion-First**: Animations guide the user experience
- **Performance Optimization**: Request animation frames, debounce/throttle
- **Accessibility**: `prefers-reduced-motion` support
- **Progressive Enhancement**: Works without JavaScript
- **Component Composition**: Reusable animation wrappers
- **State Management**: Minimal (pure CSS/GSAP)

### Animation Strategy

```
Entrance Animations → Scroll Triggers → Interactions → Exits
     (First impression)    (Engagement)    (Feedback)   (Closure)
```

### Performance Optimizations

- **GPU Acceleration**: Use transforms and opacity
- **Debouncing**: Scroll and resize event handlers
- **Lazy Loading**: Images and heavy animations
- **Code Splitting**: Route-based and component-based
- **Minification**: Production builds optimized
- **Tree Shaking**: Dead code elimination

### Accessibility Considerations

- `prefers-reduced-motion` media query support
- ARIA labels for interactive elements
- Keyboard navigation for all features
- Screen reader-friendly content
- High contrast color scheme
- Focus indicators

---

## About Me

**Kazi Musharraf** — Frontend Engineer specializing in motion and design systems.

### Connect

- 📧 **Email**: [mk.knight970@gmail.com](mailto:mk.knight970@gmail.com)
- 💻 **GitHub**: [@mk-knight23](https://github.com/mk-knight23)
- 💼 **LinkedIn**: [kazi-musharraf](https://www.linkedin.com/in/kazi-musharraf-0674871a4)
- 🌐 **Portfolio Hub**: [https://www.mkazi.live](https://www.mkazi.live)

---

*Part of the 60 Projects Ecosystem — Built with motion and ☕*

*Last Updated: 2026-02-28*
