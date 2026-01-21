"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { cornerBracketExpand, easing } from "@/lib/animations";

interface CornerBracketsProps {
  children: ReactNode;
  className?: string;
  size?: number;
  offset?: number;
  color?: string;
  animate?: boolean;
  hoverExpand?: boolean;
}

export function CornerBrackets({
  children,
  className = "",
  size = 24,
  offset = 12,
  color = "var(--text-muted)",
  animate = true,
  hoverExpand = true,
}: CornerBracketsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const bracketStyle = {
    position: "absolute" as const,
    width: size,
    height: size,
    borderColor: color,
    borderStyle: "solid" as const,
    pointerEvents: "none" as const,
    transition: hoverExpand ? "all 0.3s ease" : "none",
  };

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      style={{ position: "relative" }}
    >
      {children}

      {/* Top Left */}
      <motion.div
        style={{
          ...bracketStyle,
          top: offset,
          left: offset,
          borderWidth: "2px 0 0 2px",
        }}
        initial={animate ? { width: 0, height: 0, opacity: 0 } : false}
        animate={
          isInView && animate
            ? { width: size, height: size, opacity: 1 }
            : undefined
        }
        transition={{ duration: 0.6, ease: easing.easeOutExpo, delay: 0.2 }}
      />

      {/* Top Right */}
      <motion.div
        style={{
          ...bracketStyle,
          top: offset,
          right: offset,
          borderWidth: "2px 2px 0 0",
        }}
        initial={animate ? { width: 0, height: 0, opacity: 0 } : false}
        animate={
          isInView && animate
            ? { width: size, height: size, opacity: 1 }
            : undefined
        }
        transition={{ duration: 0.6, ease: easing.easeOutExpo, delay: 0.3 }}
      />

      {/* Bottom Left */}
      <motion.div
        style={{
          ...bracketStyle,
          bottom: offset,
          left: offset,
          borderWidth: "0 0 2px 2px",
        }}
        initial={animate ? { width: 0, height: 0, opacity: 0 } : false}
        animate={
          isInView && animate
            ? { width: size, height: size, opacity: 1 }
            : undefined
        }
        transition={{ duration: 0.6, ease: easing.easeOutExpo, delay: 0.4 }}
      />

      {/* Bottom Right */}
      <motion.div
        style={{
          ...bracketStyle,
          bottom: offset,
          right: offset,
          borderWidth: "0 2px 2px 0",
        }}
        initial={animate ? { width: 0, height: 0, opacity: 0 } : false}
        animate={
          isInView && animate
            ? { width: size, height: size, opacity: 1 }
            : undefined
        }
        transition={{ duration: 0.6, ease: easing.easeOutExpo, delay: 0.5 }}
      />
    </div>
  );
}

// Simple two-corner variant (like Nominal's image style)
interface TwoCornerBracketsProps {
  children: ReactNode;
  className?: string;
  size?: number;
  offset?: number;
  color?: string;
}

export function TwoCornerBrackets({
  children,
  className = "",
  size = 32,
  offset = 16,
  color = "var(--text-muted)",
}: TwoCornerBracketsProps) {
  return (
    <div className={`relative ${className}`}>
      {children}

      {/* Top Left */}
      <div
        style={{
          position: "absolute",
          top: offset,
          left: offset,
          width: size,
          height: size,
          borderTop: `2px solid ${color}`,
          borderLeft: `2px solid ${color}`,
          pointerEvents: "none",
          transition: "all 0.3s ease",
        }}
      />

      {/* Bottom Right */}
      <div
        style={{
          position: "absolute",
          bottom: offset,
          right: offset,
          width: size,
          height: size,
          borderBottom: `2px solid ${color}`,
          borderRight: `2px solid ${color}`,
          pointerEvents: "none",
          transition: "all 0.3s ease",
        }}
      />
    </div>
  );
}

export default CornerBrackets;

