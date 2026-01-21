"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Bubble {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

interface FloatingBubblesProps {
  count?: number;
  minSize?: number;
  maxSize?: number;
  color?: string;
}

export function FloatingBubbles({
  count = 25,
  minSize = 4,
  maxSize = 20,
  color = "rgba(0, 255, 136, 0.15)",
}: FloatingBubblesProps) {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const newBubbles: Bubble[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: minSize + Math.random() * (maxSize - minSize),
      duration: 15 + Math.random() * 25,
      delay: Math.random() * 20,
      opacity: 0.1 + Math.random() * 0.4,
    }));
    setBubbles(newBubbles);
  }, [count, minSize, maxSize]);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          initial={{
            x: `${bubble.x}vw`,
            y: "110vh",
            scale: 0,
          }}
          animate={{
            y: "-10vh",
            scale: [0, 1, 1, 0.5, 0],
            x: [
              `${bubble.x}vw`,
              `${bubble.x + (Math.random() - 0.5) * 10}vw`,
              `${bubble.x + (Math.random() - 0.5) * 15}vw`,
              `${bubble.x + (Math.random() - 0.5) * 10}vw`,
            ],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            width: bubble.size,
            height: bubble.size,
            borderRadius: "50%",
            background: `radial-gradient(circle at 30% 30%, ${color.replace(
              /[\d.]+\)$/,
              `${bubble.opacity * 2})`
            )}, ${color.replace(/[\d.]+\)$/, `${bubble.opacity})`)})`,
            boxShadow: `0 0 ${bubble.size / 2}px ${color}`,
          }}
        />
      ))}
    </div>
  );
}

// Glowing orbs version - more ethereal
export function GlowingOrbs({ count = 8 }: { count?: number }) {
  const [orbs, setOrbs] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      size: number;
      duration: number;
      color: string;
    }>
  >([]);

  useEffect(() => {
    const colors = [
      "rgba(0, 255, 136, 0.08)",
      "rgba(0, 200, 255, 0.06)",
      "rgba(100, 255, 200, 0.07)",
      "rgba(0, 150, 255, 0.05)",
    ];

    const newOrbs = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 100 + Math.random() * 300,
      duration: 20 + Math.random() * 30,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setOrbs(newOrbs);
  }, [count]);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          animate={{
            x: [
              `${orb.x}%`,
              `${orb.x + 20}%`,
              `${orb.x - 10}%`,
              `${orb.x + 15}%`,
              `${orb.x}%`,
            ],
            y: [
              `${orb.y}%`,
              `${orb.y - 15}%`,
              `${orb.y + 10}%`,
              `${orb.y - 5}%`,
              `${orb.y}%`,
            ],
            scale: [1, 1.2, 0.9, 1.1, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: orb.size,
            height: orb.size,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: "blur(40px)",
          }}
        />
      ))}
    </div>
  );
}

// Sonar pulse effect
export function SonarPulse({ x = "50%", y = "50%" }: { x?: string; y?: string }) {
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
      }}
    >
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          initial={{ scale: 0.5, opacity: 0.6 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 1.3,
            ease: "easeOut",
          }}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: 100,
            height: 100,
            borderRadius: "50%",
            border: "1px solid rgba(0, 255, 136, 0.3)",
          }}
        />
      ))}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          width: 12,
          height: 12,
          borderRadius: "50%",
          background: "rgba(0, 255, 136, 0.8)",
          boxShadow: "0 0 20px rgba(0, 255, 136, 0.5)",
        }}
      />
    </div>
  );
}

