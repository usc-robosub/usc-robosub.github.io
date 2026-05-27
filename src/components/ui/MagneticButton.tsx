"use client";

import { useRef, useState, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  strength?: number;
  as?: "button" | "a" | "div";
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
}

export function MagneticButton({
  children,
  className = "",
  style = {},
  strength = 0.3,
  as: Component = "button",
  onClick,
  href,
  target,
  rel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Glow effect intensity based on distance
  const glowOpacity = useTransform(
    [springX, springY],
    ([latestX, latestY]: number[]) => {
      const distance = Math.sqrt(latestX * latestX + latestY * latestY);
      return Math.min(0.3, distance / 100);
    }
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;
    
    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const MotionComponent = motion.div;

  return (
    <MotionComponent
      ref={ref}
      style={{
        x: springX,
        y: springY,
        position: "relative",
        display: "inline-block",
        ...style,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow effect */}
      <motion.div
        style={{
          position: "absolute",
          inset: -10,
          background: "radial-gradient(circle, rgba(0, 255, 136, 0.2) 0%, transparent 70%)",
          borderRadius: "inherit",
          opacity: glowOpacity,
          pointerEvents: "none",
          filter: "blur(15px)",
        }}
      />
      
      {Component === "a" ? (
        <a href={href} target={target} rel={rel} className={className} onClick={onClick}>
          {children}
        </a>
      ) : Component === "button" ? (
        <button className={className} onClick={onClick}>
          {children}
        </button>
      ) : (
        <div className={className} onClick={onClick}>
          {children}
        </div>
      )}
    </MotionComponent>
  );
}

// Ripple effect on click
export function RippleButton({
  children,
  className = "",
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const nextId = useRef(0);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = { x, y, id: nextId.current++ };
    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 1000);

    onClick?.();
  };

  return (
    <button
      className={className}
      onClick={handleClick}
      style={{ position: "relative", overflow: "hidden" }}
    >
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            position: "absolute",
            left: ripple.x,
            top: ripple.y,
            width: 50,
            height: 50,
            marginLeft: -25,
            marginTop: -25,
            borderRadius: "50%",
            background: "rgba(0, 255, 136, 0.3)",
            pointerEvents: "none",
          }}
        />
      ))}
      {children}
    </button>
  );
}

// Water ripple effect for cards
export function WaterRippleCard({
  children,
  className = "",
  style = {},
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
    >
      {/* Ripple spotlight effect */}
      <motion.div
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.8,
        }}
        transition={{ duration: 0.3 }}
        style={{
          position: "absolute",
          left: mousePos.x,
          top: mousePos.y,
          width: 300,
          height: 300,
          marginLeft: -150,
          marginTop: -150,
          background:
            "radial-gradient(circle, rgba(0, 255, 136, 0.08) 0%, transparent 60%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      
      {/* Animated border glow */}
      <motion.div
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        style={{
          position: "absolute",
          inset: 0,
          border: "1px solid transparent",
          background: `linear-gradient(var(--bg-card), var(--bg-card)) padding-box,
                       linear-gradient(135deg, rgba(0, 255, 136, 0.3), transparent, rgba(0, 200, 255, 0.2)) border-box`,
          pointerEvents: "none",
          zIndex: 2,
        }}
      />
      
      <div style={{ position: "relative", zIndex: 3 }}>{children}</div>
    </motion.div>
  );
}

