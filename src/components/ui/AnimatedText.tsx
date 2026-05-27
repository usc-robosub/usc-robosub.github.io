"use client";

import { useRef, useMemo } from "react";
import { motion, useInView, Variants } from "framer-motion";
import {
  letterStaggerContainer,
  letterItem,
  lineRevealContainer,
  lineRevealItem,
  wordReveal,
  easing,
} from "@/lib/animations";

// ==========================================
// ANIMATED HEADLINE (Line by line reveal)
// ==========================================
interface AnimatedHeadlineProps {
  text: string | string[];
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  delay?: number;
  style?: React.CSSProperties;
}

export function AnimatedHeadline({
  text,
  className = "",
  as: Component = "h1",
  delay = 0,
  style,
}: AnimatedHeadlineProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const lines = Array.isArray(text) ? text : text.split("\n");

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  };

  return (
    <Component ref={ref} className={className} style={style}>
      <motion.span
        style={{ display: "block" }}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {lines.map((line, index) => (
          <span
            key={index}
            style={{
              display: "block",
              overflow: "hidden",
              lineHeight: 1,
              paddingBottom: "0.1em",
            }}
          >
            <motion.span
              style={{ display: "block" }}
              variants={lineRevealItem}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
}

// ==========================================
// LETTER BY LETTER REVEAL
// ==========================================
interface AnimatedLettersProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  delay?: number;
}

export function AnimatedLetters({
  text,
  className = "",
  as: Component = "span",
  delay = 0,
}: AnimatedLettersProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const letters = useMemo(() => text.split(""), [text]);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.02,
        delayChildren: delay,
      },
    },
  };

  return (
    <Component ref={ref} className={className}>
      <motion.span
        style={{ display: "inline-block" }}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            style={{ display: "inline-block" }}
            variants={letterItem}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
}

// ==========================================
// WORD BY WORD REVEAL
// ==========================================
interface AnimatedWordsProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  delay?: number;
}

export function AnimatedWords({
  text,
  className = "",
  as: Component = "span",
  delay = 0,
}: AnimatedWordsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const words = useMemo(() => text.split(" "), [text]);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  return (
    <Component ref={ref} className={className}>
      <motion.span
        style={{ display: "inline-block" }}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            style={{ display: "inline-block", marginRight: "0.3em" }}
            variants={wordReveal}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
}

// ==========================================
// FADE UP TEXT
// ==========================================
interface FadeUpTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function FadeUpText({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
}: FadeUpTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration, ease: easing.easeOutExpo, delay }}
    >
      {children}
    </motion.div>
  );
}

// ==========================================
// BLUR IN TEXT
// ==========================================
interface BlurInTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function BlurInText({
  children,
  className = "",
  delay = 0,
}: BlurInTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={
        isInView
          ? { opacity: 1, filter: "blur(0px)" }
          : { opacity: 0, filter: "blur(10px)" }
      }
      transition={{ duration: 0.8, ease: easing.easeOutExpo, delay }}
    >
      {children}
    </motion.div>
  );
}

// ==========================================
// SECTION LABEL (Animated monospace label)
// ==========================================
interface SectionLabelProps {
  text: string;
  className?: string;
  delay?: number;
}

export function SectionLabel({
  text,
  className = "",
  delay = 0,
}: SectionLabelProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.span
      ref={ref}
      className={`section-label ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.5, ease: easing.easeOutQuint, delay }}
    >
      {text}
    </motion.span>
  );
}

export default AnimatedHeadline;

