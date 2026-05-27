import { Variants, Transition } from "framer-motion";

// ==========================================
// EASING CURVES
// ==========================================
export const easing = {
  easeOutExpo: [0.16, 1, 0.3, 1] as const,
  easeOutQuint: [0.22, 1, 0.36, 1] as const,
  easeInOutCirc: [0.85, 0, 0.15, 1] as const,
  easeSpring: [0.34, 1.56, 0.64, 1] as const,
  easeSmooth: [0.4, 0, 0.2, 1] as const,
  easePower4: [0.76, 0, 0.24, 1] as const,
};

// Default transition
export const defaultTransition: Transition = {
  duration: 0.8,
  ease: easing.easeOutExpo,
};

// ==========================================
// FADE ANIMATIONS
// ==========================================

// Fade up animation
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easing.easeOutExpo,
    },
  },
};

// Fade up with blur
export const fadeUpBlur: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: easing.easeOutExpo,
    },
  },
};

// Fade in only
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing.easeOutQuint,
    },
  },
};

// Fade in with scale
export const fadeInScale: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easing.easeOutExpo,
    },
  },
};

// Scale in
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easing.easeSpring,
    },
  },
};

// ==========================================
// SLIDE ANIMATIONS
// ==========================================

// Slide from left
export const slideFromLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: easing.easeOutExpo,
    },
  },
};

// Slide from right
export const slideFromRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: easing.easeOutExpo,
    },
  },
};

// Slide up with mask effect
export const slideUpMask: Variants = {
  hidden: {
    y: "100%",
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.8,
      ease: easing.easePower4,
    },
  },
};

// ==========================================
// STAGGER CONTAINERS
// ==========================================

// Stagger container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Stagger container (faster)
export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

// Stagger container (slow, for hero)
export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Stagger item
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easing.easeOutExpo,
    },
  },
};

// Stagger item with blur
export const staggerItemBlur: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: easing.easeOutExpo,
    },
  },
};

// ==========================================
// TEXT REVEAL ANIMATIONS
// ==========================================

// Character reveal (for split text)
export const charReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    rotateX: -90,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: easing.easeOutQuint,
    },
  },
};

// Word reveal
export const wordReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: easing.easeOutExpo,
    },
  },
};

// Line reveal container
export const lineRevealContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

// Line reveal item (for multi-line headlines)
export const lineRevealItem: Variants = {
  hidden: {
    y: "110%",
    rotateX: -10,
  },
  visible: {
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: easing.easePower4,
    },
  },
};

// Letter stagger container
export const letterStaggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.02,
    },
  },
};

// Letter item
export const letterItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easing.easeOutQuint,
    },
  },
};

// ==========================================
// LINE / DECORATIVE ANIMATIONS
// ==========================================

// Line reveal (for decorative lines)
export const lineReveal: Variants = {
  hidden: {
    scaleX: 0,
    originX: 0,
  },
  visible: {
    scaleX: 1,
    transition: {
      duration: 1,
      ease: easing.easeOutExpo,
    },
  },
};

// Line draw from center
export const lineDrawCenter: Variants = {
  hidden: {
    scaleX: 0,
  },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: easing.easeOutExpo,
    },
  },
};

// Corner bracket animation
export const cornerBracketExpand: Variants = {
  hidden: {
    width: 0,
    height: 0,
    opacity: 0,
  },
  visible: {
    width: 24,
    height: 24,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing.easeOutExpo,
    },
  },
};

// ==========================================
// COUNTER ANIMATION
// ==========================================

export const counterConfig = {
  duration: 2,
  delay: 0.5,
  ease: easing.easeOutExpo,
};

// Animate a number from 0 to target
export const createCounterAnimation = (
  target: number,
  duration: number = 2
) => ({
  initial: { value: 0 },
  animate: { value: target },
  transition: {
    duration,
    ease: easing.easeOutExpo,
  },
});

// ==========================================
// HOVER EFFECTS
// ==========================================

export const hoverScale = {
  scale: 1.02,
  transition: { duration: 0.2, ease: "easeOut" },
};

export const hoverLift = {
  y: -4,
  transition: { duration: 0.3, ease: easing.easeOutExpo },
};

export const hoverGlow = {
  boxShadow: "0 0 40px rgba(255, 255, 255, 0.1)",
  borderColor: "rgba(255, 255, 255, 0.2)",
  transition: { duration: 0.3 },
};

// Card hover with lift
export const cardHover = {
  y: -8,
  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
  borderColor: "rgba(255, 255, 255, 0.15)",
  transition: { duration: 0.4, ease: easing.easeOutExpo },
};

// Card hover subtle
export const cardHoverSubtle = {
  y: -2,
  borderColor: "rgba(255, 255, 255, 0.1)",
  transition: { duration: 0.3, ease: easing.easeOutExpo },
};

// Button hover
export const buttonHover = {
  scale: 1.02,
  transition: { duration: 0.2, ease: "easeOut" },
};

// Button tap
export const buttonTap = {
  scale: 0.98,
};

// Icon rotation on hover
export const iconRotate = {
  rotate: 45,
  transition: { duration: 0.3, ease: easing.easeOutExpo },
};

// Arrow slide on hover
export const arrowSlide = {
  x: 4,
  transition: { duration: 0.2, ease: easing.easeOutQuint },
};

// ==========================================
// PAGE TRANSITIONS
// ==========================================

export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easing.easeOutQuint,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: easing.easeOutQuint,
    },
  },
};

// ==========================================
// NAVBAR ANIMATIONS
// ==========================================

export const navbarVariants: Variants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing.easeOutExpo,
    },
  },
};

// Nav dropdown
export const navDropdown: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: easing.easeOutQuint,
    },
  },
};

// Mobile menu
export const mobileMenuVariants: Variants = {
  hidden: {
    opacity: 0,
    x: "100%",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: easing.easeOutExpo,
    },
  },
  exit: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.3,
      ease: easing.easeOutQuint,
    },
  },
};

// ==========================================
// SCROLL INDICATOR
// ==========================================

export const scrollIndicator: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 1.5,
      ease: easing.easeOutQuint,
    },
  },
  bounce: {
    y: [0, 10, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// ==========================================
// TELEMETRY DASHBOARD ANIMATIONS
// ==========================================

export const telemetryPanelReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easing.easeOutExpo,
      staggerChildren: 0.1,
    },
  },
};

export const telemetryCellReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easing.easeOutQuint,
    },
  },
};

// ==========================================
// TERMINAL ANIMATIONS
// ==========================================

export const terminalReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easing.easeOutExpo,
    },
  },
};

export const terminalLineReveal: Variants = {
  hidden: {
    opacity: 0,
    x: -10,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: easing.easeOutQuint,
    },
  },
};

export const terminalCursor: Variants = {
  blink: {
    opacity: [1, 0],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// ==========================================
// SPRING CONFIGS
// ==========================================

export const springConfigs = {
  gentle: { type: "spring", stiffness: 100, damping: 15 },
  wobbly: { type: "spring", stiffness: 180, damping: 12 },
  stiff: { type: "spring", stiffness: 300, damping: 20 },
  slow: { type: "spring", stiffness: 50, damping: 20 },
};

// ==========================================
// VIEWPORT OPTIONS
// ==========================================

export const viewportOptions = {
  once: true,
  margin: "-100px",
};

export const viewportOptionsEager = {
  once: true,
  margin: "-50px",
};

// ==========================================
// HELPER FUNCTIONS
// ==========================================

// Create stagger delay for children
export const createStaggerDelay = (index: number, baseDelay: number = 0.1) =>
  index * baseDelay;

// Create animation with custom delay
export const withDelay = (variants: Variants, delay: number): Variants => {
  const visible = variants.visible as Record<string, unknown> | undefined;
  const existingTransition = visible?.transition as Record<string, unknown> | undefined;
  
  return {
    ...variants,
    visible: {
      ...visible,
      transition: {
        ...existingTransition,
        delay,
      },
    },
  };
};
