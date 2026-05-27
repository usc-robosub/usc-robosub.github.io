# USC AUV Website — Design Specification & Implementation Guide

> **Purpose**: This document provides exhaustive design specifications, animation patterns, and implementation guidance to create a world-class website inspired by [Nominal.io](https://nominal.io/), [Pothai.app](https://pothai.app/), and [Palantir.com](https://www.palantir.com/). This specification enables an AI agent or developer to build an absolutely stunning website for the USC Fluid Robotics Lab / AUV Team.

---

## Table of Contents
1. [Design Philosophy & Vision](#1-design-philosophy--vision)
2. [Color System](#2-color-system)
3. [Typography System](#3-typography-system)
4. [Layout Architecture](#4-layout-architecture)
5. [Animation & Motion System](#5-animation--motion-system)
6. [Component Specifications](#6-component-specifications)
7. [Page-by-Page Design](#7-page-by-page-design)
8. [Technical Implementation](#8-technical-implementation)
9. [Performance Guidelines](#9-performance-guidelines)
10. [Accessibility Requirements](#10-accessibility-requirements)

---

## 1. Design Philosophy & Vision

### 1.1 Core Aesthetic Principles

**CRITICAL**: Avoid generic "AI slop" aesthetics. This website must feel **handcrafted**, **premium**, and **distinctly engineered**.

#### Inspired By:
| Website | Key Takeaway |
|---------|--------------|
| **Nominal.io** | Engineering precision, clean data visualization, deep space blue palette, technical credibility |
| **Pothai.app** | Bold typography, dynamic content reveals, storytelling through scroll, engaging micro-interactions |
| **Palantir.com** | Professional authority, structured grids, subtle parallax, sophisticated dark themes |

#### Design Identity for USC AUV:
- **Theme**: "Deep Sea Engineering" — evoking the mysterious depths of the ocean meets cutting-edge technology
- **Mood**: Sophisticated, Technical, Innovative, Trustworthy
- **Visual Metaphor**: The submarine emerging from darkness, data flowing like ocean currents

### 1.2 Design Pillars

1. **Technical Credibility**: The site should feel like it was built by engineers who obsess over details
2. **Dynamic Storytelling**: Content reveals progressively, creating narrative through scroll
3. **Depth & Dimension**: Layered backgrounds, parallax effects, z-depth through shadows
4. **Purposeful Motion**: Every animation serves a purpose — guiding attention, revealing information
5. **Breathing Space**: Generous whitespace (or "dark-space" in our case) — content never feels cramped

---

## 2. Color System

### 2.1 Primary Palette — "Deep Sea Engineering"

```css
:root {
  /* === BACKGROUND LAYERS === */
  --bg-void: #030712;           /* Deepest black — page background */
  --bg-deep: #0a0f1e;           /* Deep navy — section backgrounds */
  --bg-surface: #111827;        /* Surface level — cards, containers */
  --bg-elevated: #1f2937;       /* Elevated — hover states, modals */
  
  /* === ACCENT COLORS === */
  --accent-primary: #06b6d4;    /* Cyan — primary actions, links */
  --accent-secondary: #3b82f6;  /* Blue — secondary highlights */
  --accent-tertiary: #8b5cf6;   /* Purple — special elements */
  --accent-glow: #22d3ee;       /* Bright cyan — glow effects */
  
  /* === TEXT COLORS === */
  --text-primary: #f9fafb;      /* Primary text — headings */
  --text-secondary: #d1d5db;    /* Secondary text — body */
  --text-muted: #6b7280;        /* Muted text — captions, dates */
  --text-accent: #06b6d4;       /* Accent text — links, highlights */
  
  /* === GRADIENTS === */
  --gradient-hero: linear-gradient(135deg, #030712 0%, #0a1628 50%, #0f172a 100%);
  --gradient-card: linear-gradient(180deg, rgba(17, 24, 39, 0.8) 0%, rgba(10, 15, 30, 0.9) 100%);
  --gradient-accent: linear-gradient(90deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%);
  --gradient-glow: radial-gradient(ellipse at center, rgba(6, 182, 212, 0.15) 0%, transparent 70%);
  
  /* === BORDERS & SHADOWS === */
  --border-subtle: rgba(255, 255, 255, 0.06);
  --border-accent: rgba(6, 182, 212, 0.3);
  --shadow-glow: 0 0 60px rgba(6, 182, 212, 0.15);
  --shadow-card: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}
```

### 2.2 Gradient Mesh Backgrounds

Create atmospheric depth with layered gradient meshes:

```css
.hero-background {
  background: 
    /* Animated gradient orb 1 */
    radial-gradient(ellipse 80% 50% at 20% 40%, rgba(6, 182, 212, 0.12) 0%, transparent 50%),
    /* Animated gradient orb 2 */
    radial-gradient(ellipse 60% 80% at 80% 60%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
    /* Animated gradient orb 3 */
    radial-gradient(ellipse 50% 60% at 50% 80%, rgba(139, 92, 246, 0.06) 0%, transparent 50%),
    /* Base gradient */
    linear-gradient(180deg, #030712 0%, #0a1628 100%);
}
```

### 2.3 Glow Effects

```css
/* Text glow for headings */
.text-glow {
  text-shadow: 0 0 40px rgba(6, 182, 212, 0.3);
}

/* Border glow for cards on hover */
.card-glow {
  box-shadow: 
    0 0 0 1px rgba(6, 182, 212, 0.2),
    0 0 30px rgba(6, 182, 212, 0.1),
    0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

/* Animated pulse glow */
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.2); }
  50% { box-shadow: 0 0 40px rgba(6, 182, 212, 0.4); }
}
```

---

## 3. Typography System

### 3.1 Font Stack

**DO NOT USE**: Inter, Roboto, Arial, system fonts — these are overused and generic.

```css
:root {
  /* Display & Headlines — Bold, distinctive */
  --font-display: 'Orbitron', 'Sora', sans-serif;
  
  /* Body & UI — Clean, readable */
  --font-body: 'Outfit', 'Sora', sans-serif;
  
  /* Code & Technical — Monospace */
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
}
```

### 3.2 Type Scale

```css
/* Fluid typography using clamp() */
:root {
  --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);      /* 12-14px */
  --text-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);        /* 14-16px */
  --text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);        /* 16-18px */
  --text-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);       /* 18-20px */
  --text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);        /* 20-24px */
  --text-2xl: clamp(1.5rem, 1.2rem + 1.5vw, 2rem);           /* 24-32px */
  --text-3xl: clamp(1.875rem, 1.4rem + 2.375vw, 2.5rem);     /* 30-40px */
  --text-4xl: clamp(2.25rem, 1.5rem + 3.75vw, 3.5rem);       /* 36-56px */
  --text-5xl: clamp(3rem, 2rem + 5vw, 4.5rem);               /* 48-72px */
  --text-6xl: clamp(3.75rem, 2.5rem + 6.25vw, 6rem);         /* 60-96px */
}
```

### 3.3 Typography Styles

```css
/* Hero headline — massive, commanding */
.hero-headline {
  font-family: var(--font-display);
  font-size: var(--text-6xl);
  font-weight: 700;
  line-height: 1.0;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Section title — bold, clear */
.section-title {
  font-family: var(--font-display);
  font-size: var(--text-4xl);
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--text-primary);
}

/* Subtitle — elegant, informative */
.subtitle {
  font-family: var(--font-body);
  font-size: var(--text-xl);
  font-weight: 400;
  line-height: 1.6;
  color: var(--text-secondary);
}

/* Body text — comfortable reading */
.body-text {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: 400;
  line-height: 1.75;
  color: var(--text-secondary);
}

/* Label/Caption — technical, precise */
.label {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-accent);
}
```

---

## 4. Layout Architecture

### 4.1 Grid System

```css
/* 12-column grid with responsive gutters */
.container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 5vw, 4rem);
}

.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: clamp(1rem, 3vw, 2rem);
}

/* Bento Grid Layout — inspired by Apple & Nominal */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(200px, auto);
  gap: 1.5rem;
}

.bento-item-large {
  grid-column: span 2;
  grid-row: span 2;
}

.bento-item-wide {
  grid-column: span 2;
}

.bento-item-tall {
  grid-row: span 2;
}
```

### 4.2 Section Spacing

```css
/* Generous vertical rhythm */
.section {
  padding: clamp(4rem, 10vh, 8rem) 0;
}

.section-hero {
  min-height: 100vh;
  padding: clamp(6rem, 15vh, 10rem) 0;
}

/* Content spacing within sections */
.section-header {
  margin-bottom: clamp(3rem, 8vh, 5rem);
}

.section-content {
  margin-top: clamp(2rem, 5vh, 3rem);
}
```

### 4.3 Card Components

```css
/* Glassmorphism card */
.card {
  background: rgba(17, 24, 39, 0.6);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--border-subtle);
  border-radius: 1.5rem;
  padding: 2rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  background: rgba(17, 24, 39, 0.8);
  border-color: var(--border-accent);
  transform: translateY(-4px);
  box-shadow: var(--shadow-glow);
}
```

---

## 5. Animation & Motion System

### 5.1 Animation Philosophy

**Inspired by Nominal.io & Pothai.app**:
- Animations reveal content progressively on scroll
- Micro-interactions provide feedback
- Nothing moves without purpose
- Smooth, physics-based easing

### 5.2 Core Timing Functions

```css
:root {
  /* Easing curves */
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-out-quint: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-in-out-circ: cubic-bezier(0.85, 0, 0.15, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  
  /* Durations */
  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  --duration-slower: 800ms;
  --duration-slowest: 1200ms;
}
```

### 5.3 Scroll-Triggered Animations (Framer Motion)

```tsx
// Staggered reveal animation for lists/grids
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    filter: 'blur(10px)'
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] // ease-out-expo
    }
  }
};

// Fade up animation for sections
const fadeUpVariants = {
  hidden: { 
    opacity: 0, 
    y: 80 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Scale reveal for images/cards
const scaleRevealVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.34, 1.56, 0.64, 1] // spring
    }
  }
};
```

### 5.4 Text Animation — Split Text Reveals

```tsx
// Headline character-by-character reveal (like Nominal)
const headlineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0.5
    }
  }
};

const charVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    rotateX: -90
  },
  visible: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Word-by-word reveal for subtitles
const wordVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    filter: 'blur(4px)'
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};
```

### 5.5 Hover Micro-Interactions

```tsx
// Button hover with scale and glow
const buttonHover = {
  scale: 1.02,
  boxShadow: '0 0 30px rgba(6, 182, 212, 0.3)',
  transition: { duration: 0.2, ease: 'easeOut' }
};

// Card hover with lift and border glow
const cardHover = {
  y: -8,
  borderColor: 'rgba(6, 182, 212, 0.4)',
  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(6, 182, 212, 0.15)',
  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
};

// Image hover with subtle zoom
const imageHover = {
  scale: 1.05,
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

// Link hover with underline animation
const linkHover = {
  backgroundSize: '100% 2px',
  transition: { duration: 0.3 }
};
```

### 5.6 Parallax Effects (GSAP ScrollTrigger)

```tsx
// Parallax background layers
useEffect(() => {
  gsap.to('.parallax-slow', {
    yPercent: -20,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'top top',
      end: 'bottom top',
      scrub: 1
    }
  });
  
  gsap.to('.parallax-fast', {
    yPercent: -40,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'top top',
      end: 'bottom top',
      scrub: 0.5
    }
  });
}, []);

// Horizontal scroll section (like Nominal project showcase)
useEffect(() => {
  const sections = gsap.utils.toArray('.horizontal-panel');
  
  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: '.horizontal-container',
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      end: () => `+=${document.querySelector('.horizontal-container').offsetWidth}`
    }
  });
}, []);
```

### 5.7 Loading & Page Transition Animations

```tsx
// Page entry animation
const pageVariants = {
  initial: { 
    opacity: 0,
    y: 20
  },
  enter: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      when: 'beforeChildren',
      staggerChildren: 0.1
    }
  },
  exit: { 
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Loader animation (sleek line reveal)
const loaderVariants = {
  initial: { scaleX: 0, originX: 0 },
  animate: { 
    scaleX: 1,
    transition: {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};
```

### 5.8 Background Animations

```css
/* Animated gradient orbs */
@keyframes float-1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -30px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}

@keyframes float-2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(-40px, 20px) scale(0.95); }
  66% { transform: translate(20px, -40px) scale(1.05); }
}

.gradient-orb-1 {
  animation: float-1 20s ease-in-out infinite;
}

.gradient-orb-2 {
  animation: float-2 25s ease-in-out infinite;
}

/* Subtle grid pattern animation */
@keyframes grid-pulse {
  0%, 100% { opacity: 0.03; }
  50% { opacity: 0.08; }
}

.grid-background {
  background-image: 
    linear-gradient(rgba(6, 182, 212, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(6, 182, 212, 0.05) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: grid-pulse 8s ease-in-out infinite;
}
```

---

## 6. Component Specifications

### 6.1 Navigation Bar

**Style**: Floating, glassmorphic, sticky

```tsx
// Specs
{
  position: 'fixed',
  top: '1.5rem',
  left: '50%',
  transform: 'translateX(-50%)',
  maxWidth: '90vw',
  background: 'rgba(10, 15, 30, 0.8)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.06)',
  borderRadius: '9999px', // pill shape
  padding: '0.75rem 2rem',
  zIndex: 100,
  
  // Hide on scroll down, show on scroll up
  // Transitions smoothly
}
```

**Behavior**:
- Logo on left, nav links center, CTA button right
- Links have underline animation on hover
- Nav hides on scroll down, appears on scroll up
- Mobile: hamburger menu with full-screen overlay

### 6.2 Hero Section

**Style**: Full viewport, immersive, cinematic

```tsx
// Structure
<section className="hero">
  {/* Animated background layers */}
  <div className="hero-bg">
    <div className="gradient-mesh" />
    <div className="grid-pattern" />
    <div className="floating-orbs" />
    <Canvas>{/* 3D AUV model or particles */}</Canvas>
  </div>
  
  {/* Content */}
  <div className="hero-content">
    <motion.span className="hero-label">
      USC Fluid Robotics Lab
    </motion.span>
    
    <motion.h1 className="hero-headline">
      Engineering the
      <br />
      <span className="gradient-text">Future of</span>
      <br />
      Underwater Robotics
    </motion.h1>
    
    <motion.p className="hero-subtitle">
      Designing autonomous underwater vehicles that push the boundaries of marine exploration and technology.
    </motion.p>
    
    <motion.div className="hero-cta">
      <Button variant="primary">View Our Projects</Button>
      <Button variant="ghost">Join the Team →</Button>
    </motion.div>
  </div>
  
  {/* Scroll indicator */}
  <motion.div className="scroll-indicator">
    <span>Scroll to explore</span>
    <div className="scroll-line" />
  </motion.div>
</section>
```

**Animation Sequence**:
1. Background fades in (0.5s delay)
2. Label slides up (0.7s delay)
3. Headline characters reveal staggered (0.9s delay)
4. Subtitle fades up (1.3s delay)
5. CTAs slide up (1.5s delay)
6. Scroll indicator pulses (2s delay)

### 6.3 Section Headers

```tsx
// Consistent section header pattern
<motion.div className="section-header">
  <motion.span className="section-label">
    // PROJECTS
  </motion.span>
  <motion.h2 className="section-title">
    Our Latest <span className="gradient-text">Innovations</span>
  </motion.h2>
  <motion.p className="section-description">
    Explore the cutting-edge autonomous systems we've developed.
  </motion.p>
</motion.div>
```

### 6.4 Project Cards

**Style**: Glassmorphic, image-focused, interactive

```tsx
<motion.article 
  className="project-card"
  whileHover={cardHover}
>
  <div className="project-image">
    <Image 
      src={project.image} 
      alt={project.title}
      fill
      style={{ objectFit: 'cover' }}
    />
    <div className="image-overlay" />
  </div>
  
  <div className="project-content">
    <span className="project-year">{project.year}</span>
    <h3 className="project-title">{project.title}</h3>
    <p className="project-description">{project.description}</p>
    
    <div className="project-tags">
      {project.tags.map(tag => (
        <span className="tag" key={tag}>{tag}</span>
      ))}
    </div>
    
    <a className="project-link">
      View Project <ArrowRight />
    </a>
  </div>
</motion.article>
```

### 6.5 Team Member Cards

**Style**: Minimal, photo-focused with hover reveal

```tsx
<motion.div 
  className="team-card"
  whileHover="hover"
>
  <div className="team-photo">
    <Image src={member.photo} alt={member.name} fill />
    <motion.div 
      className="team-overlay"
      variants={overlayVariants}
    >
      <div className="team-socials">
        {/* Social links */}
      </div>
    </motion.div>
  </div>
  
  <div className="team-info">
    <h4 className="team-name">{member.name}</h4>
    <span className="team-role">{member.role}</span>
    <span className="team-subteam">{member.subteam}</span>
  </div>
</motion.div>
```

### 6.6 Stats/Metrics Display

**Style**: Large numbers, animated count-up

```tsx
<div className="stats-grid">
  {stats.map((stat, i) => (
    <motion.div 
      key={stat.label}
      className="stat-item"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1 }}
    >
      <motion.span 
        className="stat-number"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <CountUp end={stat.value} suffix={stat.suffix} />
      </motion.span>
      <span className="stat-label">{stat.label}</span>
    </motion.div>
  ))}
</div>
```

### 6.7 Buttons

```tsx
// Primary Button
<motion.button
  className="btn-primary"
  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(6, 182, 212, 0.3)' }}
  whileTap={{ scale: 0.98 }}
>
  {children}
</motion.button>

// Ghost Button
<motion.button
  className="btn-ghost"
  whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
  whileTap={{ scale: 0.98 }}
>
  {children}
</motion.button>

/* CSS */
.btn-primary {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #06b6d4, #3b82f6);
  color: white;
  font-weight: 600;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-ghost {
  padding: 1rem 2rem;
  background: transparent;
  color: var(--text-primary);
  font-weight: 500;
  border: 1px solid var(--border-subtle);
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.3s ease;
}
```

---

## 7. Page-by-Page Design

### 7.1 Home Page

**Sections in Order**:

1. **Hero Section** (100vh)
   - Full-screen immersive intro
   - Animated 3D background or particle system
   - Massive headline with gradient text
   - Two CTAs

2. **Mission Statement** (intro section)
   - "Building the future of underwater exploration"
   - Brief paragraph about the team
   - Large quote or key message
   - Animated on scroll

3. **Stats Bar** (compact)
   - Key numbers: Years Active, Competition Wins, Team Members, Projects
   - Horizontal scroll on mobile
   - Count-up animation on scroll

4. **Featured Project** (full-width)
   - Hero image of latest AUV
   - Project name and brief description
   - "Learn More" CTA
   - Parallax effect on scroll

5. **What We Do** (3-4 cards)
   - Mechanical Design
   - Software & Controls
   - Electrical Systems
   - Testing & Operations
   - Each card has icon, title, description
   - Bento grid layout

6. **Competition Highlights**
   - RoboSub achievements
   - Timeline or carousel
   - Award badges/icons

7. **Join the Team** (CTA section)
   - Compelling message
   - Application info
   - Contact button

8. **Footer**
   - Navigation links
   - Social media
   - USC branding
   - Copyright

### 7.2 About Page

**Sections**:
1. Hero with mission statement
2. Our Story timeline
3. Organizational structure
4. Values/pillars
5. Lab facilities gallery
6. CTA to join

### 7.3 Team Page

**Sections**:
1. Hero with team photo
2. Leadership section
3. Sub-teams with member cards
4. Alumni section (collapsible)
5. Join the team CTA

### 7.4 Projects Page

**Sections**:
1. Hero with project reel
2. Current project (featured)
3. Past projects grid
4. Technical specs showcase
5. Timeline of all projects

### 7.5 Gallery Page

**Sections**:
1. Masonry grid of images/videos
2. Category filters
3. Lightbox for full-view
4. Video player for action clips

### 7.6 Sponsors Page

**Sections**:
1. Thank you message
2. Tier-based sponsor logos
3. Sponsorship benefits
4. Become a sponsor CTA

### 7.7 Contact Page

**Sections**:
1. Contact form
2. Email and location info
3. Social media links
4. Map embed (optional)

---

## 8. Technical Implementation

### 8.1 Tech Stack (Already Configured)

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Animation**: Framer Motion + GSAP
- **3D**: Three.js + React Three Fiber
- **Smooth Scroll**: Lenis
- **UI Components**: Radix UI

### 8.2 Project Structure

```
src/
├── app/
│   ├── page.tsx           # Home
│   ├── about/page.tsx
│   ├── team/page.tsx
│   ├── projects/page.tsx
│   ├── gallery/page.tsx
│   ├── sponsors/page.tsx
│   ├── contact/page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/               # Base UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   └── ...
│   ├── layout/           # Layout components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Section.tsx
│   │   └── Container.tsx
│   ├── sections/         # Page sections
│   │   ├── Hero.tsx
│   │   ├── Mission.tsx
│   │   ├── Stats.tsx
│   │   ├── FeaturedProject.tsx
│   │   ├── WhatWeDo.tsx
│   │   ├── TeamGrid.tsx
│   │   └── ...
│   ├── animations/       # Animation components
│   │   ├── FadeUp.tsx
│   │   ├── StaggerChildren.tsx
│   │   ├── TextReveal.tsx
│   │   └── ParallaxLayer.tsx
│   └── three/            # 3D components
│       ├── Scene.tsx
│       ├── AUVModel.tsx
│       └── Particles.tsx
├── hooks/
│   ├── useScrollProgress.ts
│   ├── useInView.ts
│   └── useSmoothScroll.ts
├── lib/
│   ├── utils.ts
│   ├── animations.ts     # Animation variants
│   └── constants.ts
└── types/
    └── index.ts
```

### 8.3 Animation Utilities File

```ts
// lib/animations.ts
export const fadeUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }
};

// ... more variants
```

### 8.4 Smooth Scroll Setup

```tsx
// app/layout.tsx
'use client';

import { ReactLenis } from 'lenis/react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
```

---

## 9. Performance Guidelines

### 9.1 Image Optimization
- Use Next.js `<Image>` component with proper sizing
- Serve WebP/AVIF formats
- Implement blur placeholders
- Lazy load below-fold images

### 9.2 Animation Performance
- Use `transform` and `opacity` only (GPU accelerated)
- Avoid animating `width`, `height`, `top`, `left`
- Use `will-change` sparingly
- Debounce scroll listeners

### 9.3 Code Splitting
- Dynamic imports for heavy components (Three.js scenes)
- Route-based code splitting (automatic with Next.js)

### 9.4 Font Loading
- Use `next/font` for optimal loading
- Subset fonts if possible
- Use `font-display: swap`

---

## 10. Accessibility Requirements

### 10.1 Core Requirements
- All images have descriptive alt text
- Color contrast ratio ≥ 4.5:1 for text
- Focus states visible and styled
- Skip navigation link
- ARIA labels on interactive elements

### 10.2 Motion Sensitivity
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 10.3 Keyboard Navigation
- All interactive elements focusable
- Logical tab order
- Escape closes modals
- Arrow keys for carousels

---

## Summary: Key Design Differentiators

1. **Deep, layered dark theme** — not flat black, but rich navy with gradient depth
2. **Cinematic hero sections** — full viewport, animated reveals, 3D elements
3. **Purposeful motion** — every animation guides the eye or provides feedback
4. **Technical aesthetic** — monospace accents, data visualization elements, grid patterns
5. **Generous spacing** — content breathes, never cramped
6. **Glassmorphic cards** — blur, subtle borders, glow on hover
7. **Gradient text** — signature element for headlines
8. **Scroll-driven storytelling** — content reveals as you scroll
9. **Micro-interactions everywhere** — buttons, links, cards all respond
10. **Premium typography** — distinctive fonts, clear hierarchy

---

*This specification is designed to produce a website that rivals the best in tech — Nominal, Stripe, Linear, Vercel. Execute with precision and the result will be extraordinary.*

