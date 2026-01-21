"use client";

import { motion } from "framer-motion";

// Animated AUV Schematic - Technical line art style
export function AnimatedAUV({ className = "" }: { className?: string }) {
  return (
    <div className={className} style={{ position: "relative", width: "100%", height: "100%" }}>
      <svg
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%" }}
      >
        {/* Background grid */}
        <defs>
          <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(0,255,136,0.05)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#smallGrid)" />
        
        {/* AUV Body - Main hull */}
        <motion.path
          d="M 80 150 Q 80 120 120 110 L 280 110 Q 320 120 320 150 Q 320 180 280 190 L 120 190 Q 80 180 80 150 Z"
          stroke="rgba(0,255,136,0.6)"
          strokeWidth="2"
          fill="rgba(0,255,136,0.03)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        {/* Nose cone */}
        <motion.path
          d="M 80 150 Q 50 150 50 150 Q 60 130 80 130"
          stroke="rgba(0,255,136,0.5)"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        
        {/* Tail section */}
        <motion.path
          d="M 320 150 L 360 150 M 340 130 L 360 150 L 340 170"
          stroke="rgba(0,255,136,0.5)"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
        />
        
        {/* Top thruster mounts */}
        <motion.g
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <rect x="140" y="95" width="30" height="15" fill="rgba(0,255,136,0.1)" stroke="rgba(0,255,136,0.4)" strokeWidth="1" />
          <rect x="230" y="95" width="30" height="15" fill="rgba(0,255,136,0.1)" stroke="rgba(0,255,136,0.4)" strokeWidth="1" />
        </motion.g>
        
        {/* Bottom thruster mounts */}
        <motion.g
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <rect x="140" y="190" width="30" height="15" fill="rgba(0,255,136,0.1)" stroke="rgba(0,255,136,0.4)" strokeWidth="1" />
          <rect x="230" y="190" width="30" height="15" fill="rgba(0,255,136,0.1)" stroke="rgba(0,255,136,0.4)" strokeWidth="1" />
        </motion.g>
        
        {/* Side thrusters */}
        <motion.g
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <ellipse cx="100" cy="150" rx="8" ry="12" fill="rgba(0,200,255,0.2)" stroke="rgba(0,200,255,0.5)" strokeWidth="1" />
        </motion.g>
        
        {/* Camera dome */}
        <motion.circle
          cx="100"
          cy="150"
          r="15"
          stroke="rgba(0,200,255,0.6)"
          strokeWidth="1.5"
          fill="rgba(0,200,255,0.05)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 1.6, type: "spring" }}
        />
        
        {/* Camera lens */}
        <motion.circle
          cx="100"
          cy="150"
          r="6"
          fill="rgba(0,200,255,0.3)"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, delay: 2, repeat: Infinity }}
        />
        
        {/* Internal components */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          {/* Battery pack */}
          <rect x="150" y="135" width="60" height="30" fill="rgba(255,170,0,0.1)" stroke="rgba(255,170,0,0.4)" strokeWidth="1" rx="2" />
          <text x="180" y="155" fill="rgba(255,170,0,0.6)" fontSize="8" textAnchor="middle" fontFamily="monospace">BATT</text>
          
          {/* CPU/Control */}
          <rect x="220" y="130" width="50" height="40" fill="rgba(0,255,136,0.05)" stroke="rgba(0,255,136,0.3)" strokeWidth="1" rx="2" />
          <text x="245" y="155" fill="rgba(0,255,136,0.6)" fontSize="8" textAnchor="middle" fontFamily="monospace">CPU</text>
        </motion.g>
        
        {/* Animated data streams */}
        <motion.g>
          {[0, 1, 2].map((i) => (
            <motion.circle
              key={i}
              cx="245"
              cy="150"
              r="3"
              fill="rgba(0,255,136,0.8)"
              initial={{ x: 0, opacity: 0 }}
              animate={{
                x: [0, 50, 100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                delay: i * 0.7,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </motion.g>
        
        {/* Depth sensor */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <line x1="200" y1="190" x2="200" y2="220" stroke="rgba(0,200,255,0.4)" strokeWidth="1" strokeDasharray="4 2" />
          <text x="200" y="235" fill="rgba(0,200,255,0.5)" fontSize="8" textAnchor="middle" fontFamily="monospace">DEPTH: 2.4m</text>
        </motion.g>
        
        {/* Status indicators */}
        <motion.g>
          <motion.circle
            cx="280"
            cy="130"
            r="4"
            fill="#00ff88"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <text x="290" y="133" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="monospace">SYS OK</text>
        </motion.g>
        
        {/* Targeting brackets */}
        <motion.g
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          <path d="M 60 100 L 60 80 L 80 80" stroke="rgba(0,255,136,0.3)" strokeWidth="1" fill="none" />
          <path d="M 340 100 L 340 80 L 320 80" stroke="rgba(0,255,136,0.3)" strokeWidth="1" fill="none" />
          <path d="M 60 200 L 60 220 L 80 220" stroke="rgba(0,255,136,0.3)" strokeWidth="1" fill="none" />
          <path d="M 340 200 L 340 220 L 320 220" stroke="rgba(0,255,136,0.3)" strokeWidth="1" fill="none" />
        </motion.g>
        
        {/* Coordinate display */}
        <motion.text
          x="70"
          y="70"
          fill="rgba(0,255,136,0.4)"
          fontSize="8"
          fontFamily="monospace"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          X: 34.0219° N
        </motion.text>
        <motion.text
          x="70"
          y="82"
          fill="rgba(0,255,136,0.4)"
          fontSize="8"
          fontFamily="monospace"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6 }}
        >
          Y: 118.2857° W
        </motion.text>
        
        {/* Label */}
        <motion.text
          x="200"
          y="260"
          fill="rgba(255,255,255,0.6)"
          fontSize="10"
          textAnchor="middle"
          fontFamily="monospace"
          letterSpacing="0.1em"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8 }}
        >
          THE BARRACUDA // 2025
        </motion.text>
      </svg>
      
      {/* Floating bubbles around the AUV */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              left: `${20 + Math.random() * 60}%`,
              bottom: "-20px",
              width: 4 + Math.random() * 8,
              height: 4 + Math.random() * 8,
              borderRadius: "50%",
              background: "rgba(0, 200, 255, 0.2)",
              boxShadow: "0 0 10px rgba(0, 200, 255, 0.3)",
            }}
            animate={{
              y: [0, -200 - Math.random() * 100],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}

// Simple animated propeller
export function AnimatedPropeller({ size = 40 }: { size?: number }) {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="4" fill="rgba(0,255,136,0.6)" />
        {[0, 120, 240].map((angle) => (
          <motion.path
            key={angle}
            d={`M 20 20 L ${20 + 15 * Math.cos((angle * Math.PI) / 180)} ${
              20 + 15 * Math.sin((angle * Math.PI) / 180)
            }`}
            stroke="rgba(0,255,136,0.5)"
            strokeWidth="3"
            strokeLinecap="round"
            style={{ transformOrigin: "center" }}
          />
        ))}
      </svg>
    </motion.div>
  );
}

// Sonar sweep visualization
export function SonarSweep({ size = 200 }: { size?: number }) {
  return (
    <div style={{ width: size, height: size, position: "relative" }}>
      <svg viewBox="0 0 200 200" style={{ width: "100%", height: "100%" }}>
        {/* Background circles */}
        {[40, 60, 80, 95].map((r) => (
          <circle
            key={r}
            cx="100"
            cy="100"
            r={r}
            fill="none"
            stroke="rgba(0,255,136,0.15)"
            strokeWidth="1"
          />
        ))}
        
        {/* Cross lines */}
        <line x1="100" y1="5" x2="100" y2="195" stroke="rgba(0,255,136,0.1)" strokeWidth="1" />
        <line x1="5" y1="100" x2="195" y2="100" stroke="rgba(0,255,136,0.1)" strokeWidth="1" />
        
        {/* Sweep line */}
        <motion.line
          x1="100"
          y1="100"
          x2="100"
          y2="5"
          stroke="rgba(0,255,136,0.8)"
          strokeWidth="2"
          style={{ transformOrigin: "100px 100px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Sweep gradient trail */}
        <motion.path
          d="M 100 100 L 100 5 A 95 95 0 0 1 195 100 Z"
          fill="url(#sweepGradient)"
          style={{ transformOrigin: "100px 100px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        
        <defs>
          <linearGradient id="sweepGradient" gradientTransform="rotate(45)">
            <stop offset="0%" stopColor="rgba(0,255,136,0.2)" />
            <stop offset="100%" stopColor="rgba(0,255,136,0)" />
          </linearGradient>
        </defs>
        
        {/* Center dot */}
        <circle cx="100" cy="100" r="5" fill="rgba(0,255,136,0.8)" />
        
        {/* Random blips */}
        {[
          { x: 130, y: 70, delay: 0 },
          { x: 85, y: 140, delay: 1 },
          { x: 150, y: 120, delay: 2 },
        ].map((blip, i) => (
          <motion.circle
            key={i}
            cx={blip.x}
            cy={blip.y}
            r="3"
            fill="rgba(0,255,136,0.8)"
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
            transition={{ duration: 4, delay: blip.delay, repeat: Infinity }}
          />
        ))}
      </svg>
    </div>
  );
}

