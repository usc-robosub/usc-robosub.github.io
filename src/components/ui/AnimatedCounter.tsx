"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

interface AnimatedCounterProps {
  value: number | string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export function AnimatedCounter({
  value,
  duration = 2,
  className = "",
  style = {},
  prefix = "",
  suffix = "",
  decimals = 0,
}: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Parse the numeric value
  const numericValue = typeof value === "string" 
    ? parseFloat(value.replace(/[^\d.]/g, "")) 
    : value;
  
  // Extract any non-numeric suffix (like "+" or "K")
  const extractedSuffix = typeof value === "string" 
    ? value.replace(/[\d.]/g, "").trim() 
    : "";
  
  const springValue = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const displayValue = useTransform(springValue, (latest) =>
    latest.toFixed(decimals)
  );

  const [displayNumber, setDisplayNumber] = useState("0");

  useEffect(() => {
    const unsubscribe = displayValue.on("change", (v) => {
      setDisplayNumber(v);
    });
    return unsubscribe;
  }, [displayValue]);

  useEffect(() => {
    if (isInView) {
      springValue.set(numericValue);
    }
  }, [isInView, numericValue, springValue]);

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}
      <motion.span>{displayNumber}</motion.span>
      {extractedSuffix || suffix}
    </span>
  );
}

// Animated stat block with counter
interface AnimatedStatProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
  delay?: number;
}

export function AnimatedStat({ value, label, icon, delay = 0 }: AnimatedStatProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{
        textAlign: "center",
        padding: "24px",
      }}
    >
      {icon && (
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.5, delay: delay + 0.2, type: "spring" }}
          style={{
            width: 48,
            height: 48,
            margin: "0 auto 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid var(--border)",
            background: "var(--bg-secondary)",
          }}
        >
          {icon}
        </motion.div>
      )}
      <div
        style={{
          fontSize: "48px",
          fontWeight: 700,
          lineHeight: 1,
          marginBottom: "8px",
          background: "linear-gradient(180deg, #fff 0%, #666 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        <AnimatedCounter value={value} duration={2.5} />
      </div>
      <p
        className="mono"
        style={{
          fontSize: "10px",
          color: "var(--text-muted)",
        }}
      >
        {label}
      </p>
    </motion.div>
  );
}

// Rolling numbers effect (slot machine style)
export function RollingNumber({
  value,
  className = "",
}: {
  value: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const digits = value.toString().split("");

  return (
    <span
      ref={ref}
      className={className}
      style={{ display: "inline-flex", overflow: "hidden" }}
    >
      {digits.map((digit, index) => (
        <span
          key={index}
          style={{
            display: "inline-block",
            height: "1em",
            overflow: "hidden",
          }}
        >
          <motion.span
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : { y: "100%" }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ display: "block" }}
          >
            {digit}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

// Typewriter counter effect
export function TypewriterCounter({
  value,
  duration = 2,
  className = "",
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("");
  
  useEffect(() => {
    if (!isInView) return;
    
    const chars = value.split("");
    let current = 0;
    const interval = (duration * 1000) / chars.length;
    
    const timer = setInterval(() => {
      if (current <= chars.length) {
        setDisplayValue(value.slice(0, current));
        current++;
      } else {
        clearInterval(timer);
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        style={{ marginLeft: 2 }}
      >
        _
      </motion.span>
    </span>
  );
}

