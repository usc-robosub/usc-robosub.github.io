# USC AUV Website

A stunning, modern website for USC's Autonomous Underwater Vehicle team built with cutting-edge web technologies.

## 🛠️ Tech Stack

### Core Framework
- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework

### Animation & 3D
- **Framer Motion** - Production-ready animations
- **GSAP** - Professional-grade animations
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for R3F

### UI Components & Utilities
- **Radix UI** - Accessible, unstyled UI primitives
- **Lucide React** - Beautiful open-source icons
- **Heroicons** - Hand-crafted SVG icons
- **class-variance-authority** - Variant-based component styling
- **clsx + tailwind-merge** - Conditional class utilities

### UX Enhancements
- **Lenis** - Smooth scroll library
- **Embla Carousel** - Lightweight carousel

### Typography (Google Fonts)
- **Orbitron** - Futuristic display font
- **Sora** - Modern geometric sans-serif
- **Outfit** - Clean body text
- **JetBrains Mono** - Monospace for code

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css      # Global styles & CSS variables
│   ├── layout.tsx       # Root layout with fonts
│   └── page.tsx         # Home page
├── components/          # Reusable UI components
├── hooks/               # Custom React hooks
│   └── useSmoothScroll.ts
├── lib/                 # Utility functions
│   └── utils.ts         # cn() class merge helper
└── types/               # TypeScript type definitions
    └── three.d.ts       # Three.js file type declarations
```

## 🎨 Design System

### Color Palette

**Ocean Theme:**
- `--ocean-deep`: #0a1628 (deepest blue)
- `--ocean-dark`: #0f2744
- `--ocean-mid`: #1a3a5c
- `--ocean-light`: #2563eb
- `--ocean-glow`: #38bdf8 (accent glow)

**USC Colors:**
- `--usc-cardinal`: #990000
- `--usc-gold`: #ffcc00

**Bioluminescent Accents:**
- `--biolum-cyan`: #06b6d4
- `--biolum-teal`: #14b8a6
- `--biolum-green`: #22c55e

### Utility Classes

- `.text-gradient-ocean` - Ocean gradient text
- `.text-gradient-usc` - USC cardinal to gold gradient
- `.glass` - Glassmorphism effect
- `.glow` - Box shadow glow
- `.glow-text` - Text shadow glow
- `.animate-float` - Floating animation
- `.animate-pulse-glow` - Pulsing glow animation
- `.animate-shimmer` - Shimmer loading effect

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📦 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create optimized production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🧩 Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| next | 16.x | React framework |
| react | 19.x | UI library |
| framer-motion | 12.x | Animations |
| three | 0.182.x | 3D graphics |
| @react-three/fiber | 9.x | React Three.js |
| gsap | 3.x | Advanced animations |
| tailwindcss | 4.x | CSS framework |

## 🌊 Features to Build

- [ ] Hero section with 3D underwater scene
- [ ] Team members showcase
- [ ] Project portfolio gallery
- [ ] Competition history timeline
- [ ] Sponsor section
- [ ] Contact form
- [ ] Blog/News section
- [ ] Vehicle specifications page

---

**Fight On! ✌️**
