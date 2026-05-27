"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { telemetryPanelReveal, telemetryCellReveal } from "@/lib/animations";

interface TelemetryStat {
  label: string;
  value: number;
  unit?: string;
  decimals?: number;
}

interface TelemetryDashboardProps {
  stats: TelemetryStat[][];
  className?: string;
}

function AnimatedNumber({
  value,
  decimals = 0,
  duration = 2,
}: {
  value: number;
  decimals?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const spring = useSpring(0, { duration: duration * 1000, bounce: 0 });
  const display = useTransform(spring, (current) =>
    decimals > 0 ? current.toFixed(decimals) : Math.round(current).toString()
  );
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  useEffect(() => {
    const unsubscribe = display.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return () => unsubscribe();
  }, [display]);

  return <span ref={ref}>{displayValue}</span>;
}

export function TelemetryDashboard({ stats, className = "" }: TelemetryDashboardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={`telemetry-panel ${className}`}
      variants={telemetryPanelReveal}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {stats.map((row, rowIndex) => (
        <div key={rowIndex} className="telemetry-row">
          {row.map((stat, cellIndex) => (
            <motion.div
              key={`${rowIndex}-${cellIndex}`}
              className="telemetry-cell"
              variants={telemetryCellReveal}
            >
              <div className="telemetry-label">{stat.label}</div>
              <div className="telemetry-value">
                <AnimatedNumber
                  value={stat.value}
                  decimals={stat.decimals || 0}
                />
                {stat.unit && (
                  <span className="telemetry-unit">{stat.unit}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      ))}
    </motion.div>
  );
}

// Simpler single-row variant
interface TelemetryRowProps {
  stats: TelemetryStat[];
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function TelemetryRow({ stats, className = "", size = "md" }: TelemetryRowProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const sizeClasses = {
    sm: "telemetry-value-sm",
    md: "",
    lg: "telemetry-value-lg",
  };

  return (
    <motion.div
      ref={ref}
      className={`telemetry-panel ${className}`}
      variants={telemetryPanelReveal}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="telemetry-row">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="telemetry-cell"
            variants={telemetryCellReveal}
          >
            <div className="telemetry-label">{stat.label}</div>
            <div className={`telemetry-value ${sizeClasses[size]}`}>
              <AnimatedNumber
                value={stat.value}
                decimals={stat.decimals || 0}
              />
              {stat.unit && (
                <span className="telemetry-unit">{stat.unit}</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default TelemetryDashboard;

