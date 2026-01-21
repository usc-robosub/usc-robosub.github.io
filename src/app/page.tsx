"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { 
  IconArrowRight, 
  IconBrandGithub, 
  IconBrandDiscord, 
  IconArrowDown,
  IconBrandDocker,
  IconCpu,
  IconBolt,
  IconCube,
  IconUsers,
  IconTrophy,
  IconSchool,
} from "@tabler/icons-react";
import { Navbar, Footer } from "@/components/layout";
import {
  AnimatedHeadline,
  SectionLabel,
  FadeUpText,
  AnimatedCounter,
  TypewriterEffect,
} from "@/components/ui";
import {
  staggerContainer,
  staggerItem,
  slideFromRight,
} from "@/lib/animations";

export default function Home() {
  const aboutRef = useRef(null);
  const techRef = useRef(null);
  const pillarsRef = useRef(null);
  const ctaRef = useRef(null);
  
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const techInView = useInView(techRef, { once: true, margin: "-100px" });
  const pillarsInView = useInView(pillarsRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const technologies = [
    {
      name: "SOLIDWORKS",
      category: "Mechanical",
      description: "3D CAD software for mechanical design & simulation",
      icon: IconCube,
      color: "#ff0000",
    },
    {
      name: "ROS",
      category: "Software",
      description: "Industry-standard robotics middleware for distributed computing & sensor integration",
      icon: IconCpu,
      color: "#22314e",
    },
    {
      name: "DOCKER",
      category: "DevOps",
      description: "Containerization for consistent development & deployment environments",
      icon: IconBrandDocker,
      color: "#2496ed",
    },
    {
      name: "ALTIUM",
      category: "Electrical",
      description: "Professional PCB design & electronic schematic software",
      icon: IconBolt,
      color: "#a5915f",
    },
  ];

  const pillars = [
    {
      icon: IconUsers,
      name: "Student-Led",
      desc: "Empowering students to take leadership roles and drive innovation in underwater robotics.",
      stat: "50+",
      statLabel: "Members",
    },
    {
      icon: IconTrophy,
      name: "Competitions",
      desc: "Participating in RoboSub, an international student underwater robotics competition.",
      stat: "15+",
      statLabel: "Years Competing",
    },
    {
      icon: IconSchool,
      name: "Learning",
      desc: "Hands-on experience in robotics, coding, & electrical & mechanical systems.",
      stat: "3",
      statLabel: "Sub-Teams",
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* ==========================================
            HERO SECTION
            ========================================== */}
        <section
          style={{
            paddingTop: "120px",
            paddingBottom: "48px",
            minHeight: "100vh",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Techy backgrounds */}
          <div className="bg-grid" />
          <div className="bg-grid-fade" />
          
          {/* Animated scan lines */}
          <div className="bg-code-matrix" />
          
          {/* Corner frame decorations */}
          <div className="corner-frame tl" />
          <div className="corner-frame tr" />
          <div className="corner-frame bl" />
          <div className="corner-frame br" />

          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            {/* Main hero grid - balanced two columns */}
            <div className="hero-grid" style={{ alignItems: "center" }}>
              {/* Left: Content */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <SectionLabel text="USC's Premier Robotics Design Team" delay={0.2} />
                
                <AnimatedHeadline
                  text={["AUTONOMOUS", "UNDERWATER", "VEHICLES."]}
                  className="text-display"
                  style={{
                    fontSize: "clamp(40px, 7vw, 72px)",
                    marginBottom: "24px",
                    marginTop: "16px",
                  }}
                  as="h1"
                  delay={0.3}
                />

                <FadeUpText delay={0.6}>
                  <p
                    style={{
                      fontSize: "17px",
                      color: "var(--text-secondary)",
                      maxWidth: "440px",
                      marginBottom: "32px",
                      lineHeight: 1.7,
                    }}
                  >
                    We design, build, and deploy autonomous underwater systems. 
                    Competing annually at RoboSub, pushing the boundaries of 
                    underwater robotics since 2005.
                  </p>
                </FadeUpText>

                <FadeUpText delay={0.8}>
                  <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                    <Link href="/join" className="btn-primary">
                      JOIN THE TEAM
                      <IconArrowRight size={16} />
                    </Link>
                    <a
                      href="https://github.com/usc-robosub"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      <IconBrandGithub size={18} />
                      GITHUB
                    </a>
                  </div>
                </FadeUpText>
              </motion.div>

              {/* Right: Hero Image */}
              <motion.div
                variants={slideFromRight}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="/auv-cad-render.png"
                  alt="Barracuda AUV - USC RoboSub Competition Vehicle"
                  width={800}
                  height={600}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                  priority
                />
              </motion.div>
            </div>

            {/* Bottom status bar - spans full width */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="hero-status-bar"
              style={{
                marginTop: "64px",
                display: "grid",
                gridTemplateColumns: "auto 1fr auto",
                gap: "24px",
                alignItems: "center",
                padding: "16px 24px",
                background: "var(--bg-secondary)",
                border: "1px solid var(--border)",
              }}
            >
              {/* Left: Scroll indicator */}
              <motion.div
                className="scroll-indicator"
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ margin: 0 }}
              >
                <IconArrowDown size={16} />
              </motion.div>
              
              {/* Center: Typewriter status */}
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  color: "var(--text-secondary)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  justifyContent: "center",
                }}
              >
                <span style={{ color: "var(--text-muted)" }}>$</span>
                <TypewriterEffect
                  words={[
                    "initializing_barracuda.launch",
                    "loading_computer_vision...",
                    "thrusters_calibrated: OK",
                    "sensors_online: 8/8",
                    "mission_ready: ROBOSUB_2025",
                  ]}
                  typingSpeed={80}
                  deletingSpeed={40}
                  pauseTime={2500}
                />
              </div>
              
              {/* Right: Status badge */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    background: "#fff",
                    borderRadius: "50%",
                    animation: "pulse 2s ease-in-out infinite",
                  }}
                />
                <span className="mono" style={{ color: "var(--text-muted)", fontSize: "11px" }}>
                  ACTIVE SINCE 2005
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ==========================================
            ABOUT SECTION
            ========================================== */}
        <section
          ref={aboutRef}
          className="section"
          style={{
            background: "var(--bg-secondary)",
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Technical background pattern */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.4,
              pointerEvents: "none",
            }}
          >
            {/* Hex grid pattern */}
            <div className="bg-hex-grid" />
            
            {/* Technical diagram traces */}
            <svg
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                opacity: 0.4,
              }}
              preserveAspectRatio="none"
            >
              {/* Horizontal traces */}
              <line x1="0" y1="20%" x2="30%" y2="20%" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              <line x1="25%" y1="20%" x2="25%" y2="40%" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              <line x1="25%" y1="40%" x2="45%" y2="40%" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              
              <line x1="70%" y1="80%" x2="100%" y2="80%" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              <line x1="75%" y1="60%" x2="75%" y2="80%" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              <line x1="55%" y1="60%" x2="75%" y2="60%" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              
              {/* Connection nodes */}
              <circle cx="25%" cy="20%" r="3" fill="rgba(255,255,255,0.25)" />
              <circle cx="25%" cy="40%" r="3" fill="rgba(255,255,255,0.25)" />
              <circle cx="45%" cy="40%" r="2" fill="rgba(255,255,255,0.2)" />
              <circle cx="75%" cy="80%" r="3" fill="rgba(255,255,255,0.25)" />
              <circle cx="75%" cy="60%" r="3" fill="rgba(255,255,255,0.25)" />
              <circle cx="55%" cy="60%" r="2" fill="rgba(255,255,255,0.2)" />
              
              {/* Diagonal data lines */}
              <line x1="0" y1="100%" x2="20%" y2="70%" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="80%" y1="30%" x2="100%" y2="0" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
            
            {/* Vertical data lines on the right edge */}
            <div className="data-stream" style={{ right: "5%" }} />
            <div className="data-stream" style={{ right: "8%", opacity: 0.5 }} />
            <div className="data-stream" style={{ right: "11%", opacity: 0.3 }} />
          </div>
          
          {/* Corner tech brackets */}
          <div className="corner-frame tl" />
          <div className="corner-frame br" />
          
          {/* Technical coordinate decorations */}
          <div
            className="mono"
            style={{
              position: "absolute",
              top: "24px",
              left: "24px",
              fontSize: "10px",
              color: "rgba(255, 255, 255, 0.2)",
              letterSpacing: "0.1em",
              zIndex: 1,
            }}
          >
            SEC_02 // MISSION_BRIEF
          </div>
          <div
            className="mono"
            style={{
              position: "absolute",
              bottom: "24px",
              right: "24px",
              fontSize: "10px",
              color: "rgba(255, 255, 255, 0.2)",
              letterSpacing: "0.1em",
              textAlign: "right",
              zIndex: 1,
            }}
          >
            LAT: 34.0219° N<br />
            LON: 118.2857° W
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={aboutInView ? "visible" : "hidden"}
              style={{
                display: "grid",
                gridTemplateColumns: "1.1fr 1fr",
                gap: "48px",
                alignItems: "center",
              }}
              className="hero-grid"
            >
              {/* Left: Content */}
              <div>
                <motion.div variants={staggerItem}>
                  <span className="section-label">ABOUT US</span>
                </motion.div>
                <motion.h2
                  variants={staggerItem}
                  className="text-heading"
                  style={{
                    fontSize: "clamp(32px, 5vw, 44px)",
                    marginBottom: "20px",
                    marginTop: "8px",
                    textTransform: "uppercase",
                  }}
                >
                  Dive Into Underwater Robotics.
                </motion.h2>
                <motion.p
                  variants={staggerItem}
                  style={{
                    fontSize: "16px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.75,
                    marginBottom: "28px",
                  }}
                >
                  USC RoboSub is a student-led organization pushing the boundaries of 
                  underwater robotics. Combining the expertise of our Software, Electrical, 
                  &amp; Mechanical teams, we design &amp; build autonomous underwater vehicles 
                  (AUVs) and compete in the annual RoboSub competition, where we showcase 
                  our dedication to excellence in engineering and innovation.
                </motion.p>
                
                {/* Quick stats row */}
                <motion.div
                  variants={staggerItem}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "1px",
                    background: "var(--border)",
                    marginBottom: "28px",
                  }}
                >
                  {[
                    { value: "3", label: "Sub-Teams" },
                    { value: "50+", label: "Members" },
                    { value: "20", label: "Years" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      style={{
                        padding: "18px 16px",
                        background: "var(--bg-primary)",
                        textAlign: "center",
                      }}
                    >
                      <div style={{ fontSize: "32px", fontWeight: 700, lineHeight: 1, marginBottom: "6px" }}>
                        {stat.value}
                      </div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.1em" }}>
                        {stat.label.toUpperCase()}
                      </div>
                    </div>
                  ))}
                </motion.div>
                
                <motion.div variants={staggerItem}>
                  <Link href="/about" className="btn-secondary">
                    LEARN MORE
                    <IconArrowRight size={16} />
                  </Link>
                </motion.div>
              </div>

              {/* Right: AUV Code Widget */}
              <motion.div variants={staggerItem}>
                <div
                  style={{
                    background: "var(--bg-primary)",
                    border: "1px solid var(--border)",
                    overflow: "hidden",
                  }}
                >
                  {/* Terminal header */}
                  <div
                    style={{
                      padding: "10px 16px",
                      borderBottom: "1px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      background: "rgba(0,0,0,0.3)",
                    }}
                  >
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ff5f56" }} />
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ffbd2e" }} />
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#27ca40" }} />
                    <span style={{ marginLeft: "12px", color: "var(--text-muted)", fontSize: "11px", fontFamily: "var(--font-mono)" }}>
                      auv_mission.py
                    </span>
                    <span style={{ marginLeft: "auto", color: "var(--text-muted)", fontSize: "10px", fontFamily: "var(--font-mono)" }}>
                      PYTHON
                    </span>
                  </div>
                  
                  {/* Code content */}
                  <div
                    style={{
                      padding: "20px 24px",
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "12px",
                      lineHeight: 1.7,
                      overflowX: "auto",
                    }}
                  >
                    {/* Import section */}
                    <div style={{ color: "var(--text-muted)", marginBottom: "6px" }}>
                      <span style={{ color: "#c586c0" }}>from</span> auv_core <span style={{ color: "#c586c0" }}>import</span> Barracuda, Mission
                    </div>
                    
                    {/* Class definition */}
                    <div>
                      <span style={{ color: "#c586c0" }}>class</span> <span style={{ color: "#4ec9b0" }}>RoboSubMission</span>(Mission):
                    </div>
                    
                    {/* Docstring */}
                    <div style={{ paddingLeft: "20px", color: "#6a9955" }}>
                      &quot;&quot;&quot;Autonomous underwater mission&quot;&quot;&quot;
                    </div>
                    
                    {/* Init */}
                    <div style={{ paddingLeft: "20px", marginTop: "4px" }}>
                      <span style={{ color: "#c586c0" }}>def</span> <span style={{ color: "#dcdcaa" }}>__init__</span>(self):
                    </div>
                    <div style={{ paddingLeft: "40px", color: "var(--text-secondary)" }}>
                      self.auv = Barracuda()
                    </div>
                    <div style={{ paddingLeft: "40px", color: "var(--text-secondary)" }}>
                      self.depth = <span style={{ color: "#b5cea8" }}>0.0</span>
                    </div>
                    <div style={{ paddingLeft: "40px", color: "var(--text-secondary)" }}>
                      self.thrusters = <span style={{ color: "#b5cea8" }}>8</span>
                    </div>
                    
                    {/* Execute method */}
                    <div style={{ paddingLeft: "20px", marginTop: "8px" }}>
                      <span style={{ color: "#c586c0" }}>def</span> <span style={{ color: "#dcdcaa" }}>execute</span>(self):
                    </div>
                    <div style={{ paddingLeft: "40px", color: "var(--text-secondary)" }}>
                      self.auv.<span style={{ color: "#dcdcaa" }}>dive</span>(depth=<span style={{ color: "#b5cea8" }}>2.0</span>)
                    </div>
                    <div style={{ paddingLeft: "40px", color: "var(--text-secondary)" }}>
                      self.auv.<span style={{ color: "#dcdcaa" }}>detect_gate</span>()
                    </div>
                    <div style={{ paddingLeft: "40px", color: "var(--text-secondary)" }}>
                      self.auv.<span style={{ color: "#dcdcaa" }}>navigate_through</span>()
                    </div>
                    <div style={{ paddingLeft: "40px", color: "var(--text-secondary)" }}>
                      self.auv.<span style={{ color: "#dcdcaa" }}>fire_torpedo</span>()
                    </div>
                    <div style={{ paddingLeft: "40px", color: "var(--text-secondary)" }}>
                      <span style={{ color: "#c586c0" }}>return</span> <span style={{ color: "#569cd6" }}>True</span>  <span style={{ color: "#6a9955" }}># Mission complete!</span>
                    </div>
                  </div>
                  
                  {/* Status bar */}
                  <div
                    style={{
                      padding: "8px 16px",
                      borderTop: "1px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      background: "rgba(0,0,0,0.2)",
                      fontSize: "9px",
                      fontFamily: "var(--font-mono)",
                      color: "var(--text-muted)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#27ca40" }} />
                        CONNECTED
                      </span>
                      <span>DEPTH: 2.0m</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span>BATTERY: 94%</span>
                      <span>8 THRUSTERS</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ==========================================
            TECHNOLOGIES SECTION
            ========================================== */}
        <section ref={techRef} className="section" style={{ position: "relative", overflow: "hidden" }}>
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={techInView ? "visible" : "hidden"}
            >
              <motion.div variants={staggerItem} style={{ textAlign: "center", marginBottom: "64px" }}>
                <span className="section-label">OUR STACK</span>
                <h2
                  className="text-heading"
                  style={{
                    fontSize: "clamp(32px, 5vw, 48px)",
                    marginTop: "16px",
                    textTransform: "uppercase",
                  }}
                >
                  Industry-Standard Tools
                </h2>
              </motion.div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "2px",
                  background: "var(--border)",
                  border: "1px solid var(--border)",
                }}
              >
                {technologies.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <motion.div
                      key={tech.name}
                      variants={staggerItem}
                      style={{
                        background: "var(--bg-primary)",
                        padding: "40px 24px",
                        textAlign: "center",
                        position: "relative",
                        overflow: "hidden",
                      }}
                      whileHover={{
                        background: "var(--bg-secondary)",
                        transition: { duration: 0.3 },
                      }}
                    >
                      <motion.div
                        style={{
                          width: "64px",
                          height: "64px",
                          margin: "0 auto 20px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "1px solid var(--border)",
                          background: "var(--bg-secondary)",
                        }}
                        whileHover={{
                          borderColor: tech.color,
                          transition: { duration: 0.3 },
                        }}
                      >
                        <Icon size={28} color={tech.color} />
                      </motion.div>
                      
                      <p
                        style={{
                          fontSize: "11px",
                          color: "var(--text-muted)",
                          marginBottom: "12px",
                          fontFamily: "var(--font-mono, monospace)",
                        }}
                      >
                        {tech.category}
                      </p>
                      <h3
                        style={{
                          fontSize: "16px",
                          fontWeight: 700,
                          marginBottom: "8px",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {tech.name}
                      </h3>
                      <p
                        style={{
                          fontSize: "13px",
                          color: "var(--text-secondary)",
                          lineHeight: 1.5,
                        }}
                      >
                        {tech.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ==========================================
            PILLARS SECTION - New Visual Design
            ========================================== */}
        <section
          ref={pillarsRef}
          className="section"
          style={{
            background: "var(--bg-secondary)",
            borderTop: "1px solid var(--border)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background accent */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "600px",
              height: "600px",
              background: "radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={pillarsInView ? "visible" : "hidden"}
              style={{ textAlign: "center", marginBottom: "64px" }}
            >
              <motion.span variants={staggerItem} className="section-label">
                WHAT DRIVES US
              </motion.span>
              <motion.h2
                variants={staggerItem}
                className="text-heading"
                style={{
                  fontSize: "clamp(32px, 5vw, 48px)",
                  textTransform: "uppercase",
                  marginTop: "16px",
                }}
              >
                Our Core Pillars
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={pillarsInView ? "visible" : "hidden"}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "0",
                maxWidth: "1000px",
                margin: "0 auto",
              }}
              className="hero-grid"
            >
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.name}
                    variants={staggerItem}
                    style={{
                      padding: "48px 32px",
                      textAlign: "center",
                      borderRight: index < 2 ? "1px solid var(--border)" : "none",
                      position: "relative",
                    }}
                  >
                    {/* Large animated stat */}
                    <motion.div
                      style={{
                        fontSize: "56px",
                        fontWeight: 700,
                        lineHeight: 1,
                        marginBottom: "8px",
                        background: "linear-gradient(180deg, #fff 0%, #666 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <AnimatedCounter value={pillar.stat} duration={2.5} />
                    </motion.div>
                    <p
                      className="mono"
                      style={{
                        fontSize: "10px",
                        color: "var(--text-muted)",
                        marginBottom: "24px",
                      }}
                    >
                      {pillar.statLabel}
                    </p>
                    
                    {/* Icon */}
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        margin: "0 auto 16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <Icon size={24} color="var(--text-secondary)" />
                    </div>
                    
                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: 700,
                        marginBottom: "12px",
                        textTransform: "uppercase",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {pillar.name}
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "var(--text-muted)",
                        lineHeight: 1.6,
                        maxWidth: "280px",
                        margin: "0 auto",
                      }}
                    >
                      {pillar.desc}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ==========================================
            CTA SECTION
            ========================================== */}
        <section
          ref={ctaRef}
          className="section"
          style={{
            borderTop: "1px solid var(--border)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Gradient background */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-primary) 100%)",
            }}
          />
          
          {/* Subtle radial highlight */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "800px",
              height: "400px",
              background: "radial-gradient(ellipse, rgba(255,255,255,0.02) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={ctaInView ? "visible" : "hidden"}
              style={{ 
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              {/* CTA Card */}
              <div
                style={{
                  border: "1px solid var(--border)",
                  background: "var(--bg-card)",
                  padding: "64px 48px",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                {/* Corner brackets */}
                <div style={{ position: "absolute", top: "16px", left: "16px", width: "24px", height: "24px", borderTop: "1px solid rgba(255,255,255,0.2)", borderLeft: "1px solid rgba(255,255,255,0.2)" }} />
                <div style={{ position: "absolute", top: "16px", right: "16px", width: "24px", height: "24px", borderTop: "1px solid rgba(255,255,255,0.2)", borderRight: "1px solid rgba(255,255,255,0.2)" }} />
                <div style={{ position: "absolute", bottom: "16px", left: "16px", width: "24px", height: "24px", borderBottom: "1px solid rgba(255,255,255,0.2)", borderLeft: "1px solid rgba(255,255,255,0.2)" }} />
                <div style={{ position: "absolute", bottom: "16px", right: "16px", width: "24px", height: "24px", borderBottom: "1px solid rgba(255,255,255,0.2)", borderRight: "1px solid rgba(255,255,255,0.2)" }} />
                
                <motion.span variants={staggerItem} className="section-label">
                  JOIN US
                </motion.span>
                <motion.h2
                  variants={staggerItem}
                  className="text-heading"
                  style={{
                    fontSize: "clamp(32px, 5vw, 48px)",
                    marginBottom: "16px",
                    textTransform: "uppercase",
                    marginTop: "16px",
                  }}
                >
                  Ready to Dive In?
                </motion.h2>
                <motion.p
                  variants={staggerItem}
                  style={{
                    fontSize: "16px",
                    color: "var(--text-secondary)",
                    marginBottom: "32px",
                    lineHeight: 1.7,
                    maxWidth: "500px",
                    margin: "0 auto 32px",
                  }}
                >
                  No experience required. Just passion, dedication, and a willingness to learn.
                </motion.p>
                <motion.div
                  variants={staggerItem}
                  style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}
                >
                  <Link href="/join" className="btn-primary">
                    JOIN THE TEAM
                    <IconArrowRight size={16} />
                  </Link>
                  <a
                    href="https://discord.gg/7jPvyPWc8T"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <IconBrandDiscord size={18} />
                    DISCORD
                  </a>
                </motion.div>
              </div>
              
              {/* Quick info row below card */}
              <motion.div
                variants={staggerItem}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  marginTop: "24px",
                  gap: "1px",
                  background: "var(--border)",
                }}
              >
                {[
                  { label: "Meeting", value: "Weekly" },
                  { label: "Location", value: "USC Campus" },
                  { label: "Open To", value: "All Majors" },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      padding: "16px 20px",
                      background: "var(--bg-primary)",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.1em", marginBottom: "4px" }}>
                      {item.label.toUpperCase()}
                    </div>
                    <div style={{ fontSize: "14px", fontWeight: 600 }}>
                      {item.value}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
