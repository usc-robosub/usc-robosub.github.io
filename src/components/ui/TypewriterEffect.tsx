"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TypewriterEffectProps {
  words: string[];
  className?: string;
  cursorColor?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export function TypewriterEffect({
  words,
  className = "",
  cursorColor = "var(--text-muted)",
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000,
}: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const currentWord = words[wordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          // Finished typing, pause before deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          // Move to next word
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words, isInView, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span ref={ref} className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        style={{ color: cursorColor }}
      >
        |
      </motion.span>
    </span>
  );
}

// Terminal-style status display
interface TerminalStatusProps {
  lines: Array<{
    prefix?: string;
    text: string;
    status?: "success" | "warning" | "error" | "info";
  }>;
  className?: string;
  typeDelay?: number;
}

export function TerminalStatus({
  lines,
  className = "",
  typeDelay = 100,
}: TerminalStatusProps) {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [typedChars, setTypedChars] = useState<number>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView || visibleLines >= lines.length) return;

    const currentLine = lines[visibleLines];
    const totalChars = (currentLine.prefix || "").length + currentLine.text.length;

    if (typedChars < totalChars) {
      const timeout = setTimeout(() => {
        setTypedChars((prev) => prev + 1);
      }, typeDelay);
      return () => clearTimeout(timeout);
    } else {
      // Move to next line after a short pause
      const timeout = setTimeout(() => {
        setVisibleLines((prev) => prev + 1);
        setTypedChars(0);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [isInView, visibleLines, typedChars, lines, typeDelay]);

  const getStatusColor = (status?: string) => {
    switch (status) {
      case "success": return "var(--text-primary)";
      case "warning": return "var(--terminal-amber)";
      case "error": return "var(--terminal-red)";
      default: return "var(--text-secondary)";
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "12px",
        lineHeight: 1.8,
      }}
    >
      {lines.slice(0, visibleLines + 1).map((line, index) => {
        const isCurrentLine = index === visibleLines;
        const fullText = (line.prefix || "") + line.text;
        const displayText = isCurrentLine
          ? fullText.slice(0, typedChars)
          : fullText;

        return (
          <div key={index} style={{ display: "flex", gap: "8px" }}>
            {line.prefix && (
              <span style={{ color: "var(--text-muted)" }}>
                {displayText.slice(0, line.prefix.length)}
              </span>
            )}
            <span style={{ color: getStatusColor(line.status) }}>
              {displayText.slice(line.prefix?.length || 0)}
            </span>
            {isCurrentLine && typedChars < fullText.length && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                style={{ color: "var(--text-muted)" }}
              >
                █
              </motion.span>
            )}
          </div>
        );
      })}
    </div>
  );
}

// Glitch text effect
interface GlitchTextProps {
  text: string;
  className?: string;
  intensity?: "low" | "medium" | "high";
}

export function GlitchText({
  text,
  className = "",
  intensity = "low",
}: GlitchTextProps) {
  const [glitchText, setGlitchText] = useState(text);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`";
  
  useEffect(() => {
    if (!isInView) return;

    const intervals = {
      low: 3000,
      medium: 1500,
      high: 500,
    };

    const interval = setInterval(() => {
      // Randomly glitch some characters
      const glitched = text.split("").map((char, i) => {
        if (Math.random() < 0.1) {
          return glitchChars[Math.floor(Math.random() * glitchChars.length)];
        }
        return char;
      }).join("");

      setGlitchText(glitched);

      // Reset after a short time
      setTimeout(() => setGlitchText(text), 100);
    }, intervals[intensity]);

    return () => clearInterval(interval);
  }, [isInView, text, intensity]);

  return (
    <span
      ref={ref}
      className={className}
      style={{
        position: "relative",
        display: "inline-block",
      }}
    >
      <span style={{ position: "relative", zIndex: 2 }}>{glitchText}</span>
      <span
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          color: "rgba(255, 255, 255, 0.3)",
          clipPath: "inset(0 0 50% 0)",
          transform: "translateX(2px)",
          zIndex: 1,
        }}
      >
        {glitchText}
      </span>
      <span
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          color: "rgba(150, 150, 150, 0.3)",
          clipPath: "inset(50% 0 0 0)",
          transform: "translateX(-2px)",
          zIndex: 1,
        }}
      >
        {glitchText}
      </span>
    </span>
  );
}

// Scramble text effect - scrambles then reveals
interface ScrambleTextProps {
  text: string;
  className?: string;
  duration?: number;
}

export function ScrambleText({
  text,
  className = "",
  duration = 1000,
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const scrambleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  useEffect(() => {
    if (!isInView || hasAnimated) return;

    setHasAnimated(true);
    const iterations = 10;
    const stepDuration = duration / iterations;
    let currentIteration = 0;

    const interval = setInterval(() => {
      currentIteration++;
      
      if (currentIteration >= iterations) {
        setDisplayText(text);
        clearInterval(interval);
        return;
      }

      // Gradually reveal more correct characters
      const revealRatio = currentIteration / iterations;
      const newText = text.split("").map((char, index) => {
        if (char === " ") return " ";
        if (index < text.length * revealRatio) return char;
        return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
      }).join("");

      setDisplayText(newText);
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isInView, text, duration, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {displayText}
    </span>
  );
}

