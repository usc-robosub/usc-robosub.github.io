"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  IconExternalLink,
  IconBrandDiscord,
  IconCode,
  IconCpu,
  IconSettings,
  IconChevronRight,
  IconTerminal2,
  IconRocket,
  IconUsers,
  IconTrophy,
  IconGlobe,
  IconHeart,
} from "@tabler/icons-react";
import { Navbar, Footer } from "@/components/layout";
import { AnimatedHeadline, SectionLabel, FadeUpText } from "@/components/ui";
import { externalLinks } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";

// Enhanced team data with skills, tools, and what you'll learn
const teamData = [
  {
    id: "software",
    name: "Software",
    icon: IconCode,
    tagline: "CODE THE DEEP",
    description: "Develop the brain of our AUV — from autonomous navigation to computer vision.",
    color: "#22d3ee",
    skills: ["Python", "ROS2", "OpenCV", "PyTorch", "Docker"],
    whatYoullDo: [
      "Build autonomous navigation systems",
      "Implement computer vision pipelines",
      "Develop sensor fusion algorithms",
      "Create simulation environments",
    ],
  },
  {
    id: "electrical",
    name: "Electrical",
    icon: IconCpu,
    tagline: "POWER THE MISSION",
    description: "Design the nervous system — PCBs, power distribution, and sensor integration.",
    color: "#f472b6",
    skills: ["Altium", "KiCad", "Embedded C", "FPGA", "Signal Processing"],
    whatYoullDo: [
      "Design custom PCBs from scratch",
      "Build power management systems",
      "Integrate sensors & actuators",
      "Debug embedded systems",
    ],
  },
  {
    id: "mechanical",
    name: "Mechanical",
    icon: IconSettings,
    tagline: "BUILD THE MACHINE",
    description: "Engineer the body — hull design, propulsion, and structural integrity.",
    color: "#a78bfa",
    skills: ["SolidWorks", "FEA", "3D Printing", "Waterproofing", "CFD"],
    whatYoullDo: [
      "Design hydrodynamic hulls",
      "Create watertight enclosures",
      "Build propulsion systems",
      "Prototype & manufacture parts",
    ],
  },
];

// Benefits with icons mapped to each
const benefitsData = [
  { icon: IconRocket, text: "Gain hands-on experience with underwater robotics" },
  { icon: IconUsers, text: "Develop leadership and teamwork skills" },
  { icon: IconGlobe, text: "Travel to international competitions" },
  { icon: IconTrophy, text: "Build a portfolio of real engineering projects" },
  { icon: IconHeart, text: "Make lifelong friends and connections" },
];

export default function JoinPage() {
  const missionRef = useRef(null);
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const missionInView = useInView(missionRef, { once: true, margin: "-100px" });

  // Terminal typing effect when team is selected
  useEffect(() => {
    if (!selectedTeam) {
      setTerminalLines([]);
      return;
    }

    const team = teamData.find((t) => t.id === selectedTeam);
    if (!team) return;

    setIsTyping(true);
    setTerminalLines([]);

    const lines = [
      `> ACCESSING ${team.name.toUpperCase()} TEAM DATABASE...`,
      `> LOADING MISSION PARAMETERS...`,
      ``,
      `TEAM: ${team.name.toUpperCase()}`,
      `STATUS: RECRUITING`,
      `CLEARANCE: ALL LEVELS WELCOME`,
      ``,
      `PRIMARY OBJECTIVES:`,
      ...team.whatYoullDo.map((item) => `  → ${item}`),
      ``,
      `REQUIRED SKILLS: PASSION`,
      `RECOMMENDED: ${team.skills.slice(0, 3).join(", ")}`,
      ``,
      `> READY TO JOIN? SUBMIT INTEREST FORM.`,
    ];

    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < lines.length) {
        const lineToAdd = lines[currentLine];
        currentLine++;
        setTerminalLines((prev) => [...prev, lineToAdd]);
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [selectedTeam]);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section
          style={{
            position: "relative",
            paddingTop: "160px",
            paddingBottom: "100px",
            overflow: "hidden",
            background: "var(--bg-secondary)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          {/* Technical background pattern - matching Dive Into Underwater Robotics section */}
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
              top: "120px",
              left: "24px",
              fontSize: "10px",
              color: "rgba(255, 255, 255, 0.2)",
              letterSpacing: "0.1em",
              zIndex: 1,
            }}
          >
            SEC_01 // RECRUITMENT
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
            STATUS: RECRUITING<br />
            POSITIONS: OPEN
          </div>
          
          <div
            className="container"
            style={{ position: "relative", textAlign: "center", zIndex: 1 }}
          >
            <SectionLabel text="JOIN USC AUV" delay={0.1} />
            <AnimatedHeadline
              text={["BE PART OF", "SOMETHING", "EXTRAORDINARY"]}
              className="text-display"
              style={{
                fontSize: "clamp(40px, 9vw, 88px)",
                marginTop: "16px",
                marginBottom: "32px",
              }}
              as="h1"
              delay={0.2}
            />
            <FadeUpText delay={0.6}>
              <p
                style={{
                  fontSize: "18px",
                  color: "var(--text-secondary)",
                  maxWidth: "600px",
                  margin: "0 auto 40px",
                  lineHeight: 1.7,
                }}
              >
                Join USC AUV and help build the next generation of autonomous 
                underwater vehicles. All skill levels welcome — just passion 
                and dedication required.
              </p>
            </FadeUpText>

            <FadeUpText delay={0.8}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "16px",
                }}
              >
                <a
                  href={externalLinks.interestForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  INTEREST FORM
                  <IconExternalLink size={16} />
                </a>
                <a
                  href={externalLinks.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <IconBrandDiscord size={18} />
                  JOIN DISCORD
                </a>
              </div>
            </FadeUpText>
          </div>
        </section>

        {/* ==========================================
            MISSION BRIEFING - Interactive Team Selector
            ========================================== */}
        <section
          ref={missionRef}
          style={{
            padding: "100px 0 120px",
            background: "var(--bg-secondary)",
            borderTop: "1px solid var(--border)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Animated background grid */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
              opacity: 0.5,
            }}
          />

          {/* Glow effect for selected team */}
          <AnimatePresence>
            {selectedTeam && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  position: "absolute",
                  top: "20%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "600px",
                  height: "600px",
                  background: `radial-gradient(circle, ${
                    teamData.find((t) => t.id === selectedTeam)?.color || "#fff"
                  }15 0%, transparent 60%)`,
                  pointerEvents: "none",
                }}
              />
            )}
          </AnimatePresence>

          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={missionInView ? "visible" : "hidden"}
            >
              {/* Section Header */}
              <motion.div
                variants={staggerItem}
                style={{ textAlign: "center", marginBottom: "60px" }}
              >
                <span className="section-label">SELECT YOUR PATH</span>
                <h2
                  className="text-heading"
                  style={{
                    fontSize: "clamp(32px, 5vw, 52px)",
                    marginTop: "16px",
                    textTransform: "uppercase",
                  }}
                >
                  MISSION BRIEFING
                </h2>
                <p
                  style={{
                    fontSize: "17px",
                    color: "var(--text-secondary)",
                    marginTop: "16px",
                    maxWidth: "550px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  Choose a team to explore your potential mission parameters.
                  All skill levels welcome — we&apos;ll teach you everything.
                </p>
              </motion.div>

              {/* Main Interactive Area */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1.2fr",
                  gap: "40px",
                  maxWidth: "1100px",
                  margin: "0 auto",
                  minHeight: "480px",
                }}
                className="hero-grid"
              >
                {/* Left: Team Selector Cards */}
                <motion.div variants={staggerItem}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                    }}
                  >
                    {teamData.map((team) => {
                      const Icon = team.icon;
                      const isSelected = selectedTeam === team.id;
                      return (
                        <motion.button
                          key={team.id}
                          onClick={() => setSelectedTeam(isSelected ? null : team.id)}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "20px",
                            padding: "24px",
                            background: isSelected ? "var(--bg-primary)" : "transparent",
                            border: `1px solid ${isSelected ? team.color : "var(--border)"}`,
                            cursor: "pointer",
                            textAlign: "left",
                            position: "relative",
                            overflow: "hidden",
                          }}
                          whileHover={{
                            borderColor: team.color,
                            transition: { duration: 0.2 },
                          }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {/* Left accent bar */}
                          <motion.div
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: isSelected ? 1 : 0 }}
                            style={{
                              position: "absolute",
                              left: 0,
                              top: 0,
                              bottom: 0,
                              width: "3px",
                              background: team.color,
                              transformOrigin: "top",
                            }}
                          />

                          {/* Icon */}
                          <div
                            style={{
                              width: "56px",
                              height: "56px",
                              border: `1px solid ${isSelected ? team.color : "var(--border)"}`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                              transition: "border-color 0.2s",
                            }}
                          >
                            <Icon
                              size={28}
                              color={isSelected ? team.color : "var(--text-secondary)"}
                              style={{ transition: "color 0.2s" }}
                            />
                          </div>

                          {/* Text */}
                          <div style={{ flex: 1 }}>
                            <div
                              style={{
                                fontSize: "10px",
                                fontFamily: "var(--font-mono, monospace)",
                                color: team.color,
                                marginBottom: "4px",
                                letterSpacing: "0.15em",
                              }}
                            >
                              {team.tagline}
                            </div>
                            <h3
                              style={{
                                fontSize: "20px",
                                fontWeight: 700,
                                textTransform: "uppercase",
                                letterSpacing: "0.02em",
                                marginBottom: "6px",
                                color: isSelected ? "#fff" : "var(--text-primary)",
                              }}
                            >
                              {team.name}
                            </h3>
                            <p
                              style={{
                                fontSize: "13px",
                                color: "var(--text-muted)",
                                lineHeight: 1.5,
                              }}
                            >
                              {team.description}
                            </p>
                          </div>

                          {/* Arrow */}
                          <IconChevronRight
                            size={20}
                            color={isSelected ? team.color : "var(--text-muted)"}
                            style={{
                              transform: isSelected ? "rotate(90deg)" : "rotate(0deg)",
                              transition: "transform 0.2s, color 0.2s",
                            }}
                          />
                        </motion.button>
                      );
                    })}
                  </div>

                  {/* Skills preview when team is selected */}
                  <AnimatePresence mode="wait">
                    {selectedTeam && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        style={{
                          marginTop: "24px",
                          padding: "20px",
                          background: "var(--bg-primary)",
                          border: "1px solid var(--border)",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "10px",
                            fontFamily: "var(--font-mono, monospace)",
                            color: "var(--text-muted)",
                            marginBottom: "12px",
                            letterSpacing: "0.1em",
                          }}
                        >
                          TECH STACK
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                          {teamData
                            .find((t) => t.id === selectedTeam)
                            ?.skills.map((skill) => (
                              <span
                                key={skill}
                                style={{
                                  padding: "6px 12px",
                                  background: "var(--bg-secondary)",
                                  border: "1px solid var(--border)",
                                  fontSize: "11px",
                                  fontFamily: "var(--font-mono, monospace)",
                                  letterSpacing: "0.05em",
                                }}
                              >
                                {skill}
                              </span>
                            ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Right: Terminal Display */}
                <motion.div variants={staggerItem}>
                  <div
                    style={{
                      height: "100%",
                      minHeight: "480px",
                      background: "#0a0a0a",
                      border: "1px solid var(--border)",
                      display: "flex",
                      flexDirection: "column",
                      fontFamily: "var(--font-mono, monospace)",
                      overflow: "hidden",
                    }}
                  >
                    {/* Terminal Header */}
                    <div
                      style={{
                        padding: "12px 16px",
                        borderBottom: "1px solid var(--border)",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <div style={{ display: "flex", gap: "6px" }}>
                        <span
                          style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            background: "#ff5f57",
                          }}
                        />
                        <span
                          style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            background: "#febc2e",
                          }}
                        />
                        <span
                          style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            background: "#28c840",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          flex: 1,
                          textAlign: "center",
                          fontSize: "11px",
                          color: "var(--text-muted)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "6px",
                        }}
                      >
                        <IconTerminal2 size={14} />
                        auv-mission-control
                      </div>
                    </div>

                    {/* Terminal Content */}
                    <div
                      style={{
                        flex: 1,
                        padding: "20px",
                        overflowY: "auto",
                        fontSize: "13px",
                        lineHeight: 1.8,
                      }}
                    >
                      {!selectedTeam ? (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          style={{ color: "var(--text-muted)" }}
                        >
                          <div style={{ color: "#28c840" }}>
                            $ ./mission_briefing.sh
                          </div>
                          <br />
                          <div>USC AUV MISSION CONTROL v2.0</div>
                          <div>================================</div>
                          <br />
                          <div>AWAITING TEAM SELECTION...</div>
                          <br />
                          <div style={{ color: "var(--text-secondary)" }}>
                            SELECT A TEAM FROM THE LEFT PANEL
                          </div>
                          <div style={{ color: "var(--text-secondary)" }}>
                            TO VIEW MISSION PARAMETERS.
                          </div>
                          <br />
                          <div
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <span style={{ color: "#28c840" }}>$</span>
                            <motion.span
                              animate={{ opacity: [1, 0] }}
                              transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                repeatType: "reverse",
                              }}
                              style={{
                                display: "inline-block",
                                width: "8px",
                                height: "16px",
                                background: "#28c840",
                                marginLeft: "8px",
                              }}
                            />
                          </div>
                        </motion.div>
                      ) : (
                        <div>
                          {terminalLines.map((line, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.1 }}
                              style={{
                                color: line?.startsWith?.(">")
                                  ? "#28c840"
                                  : line?.startsWith?.("  →")
                                  ? teamData.find((t) => t.id === selectedTeam)
                                      ?.color
                                  : line?.includes?.(":")
                                  ? "var(--text-secondary)"
                                  : "var(--text-muted)",
                                minHeight: "1.8em",
                              }}
                            >
                              {line}
                            </motion.div>
                          ))}
                          {isTyping && (
                            <motion.span
                              animate={{ opacity: [1, 0] }}
                              transition={{
                                duration: 0.5,
                                repeat: Infinity,
                                repeatType: "reverse",
                              }}
                              style={{
                                display: "inline-block",
                                width: "8px",
                                height: "16px",
                                background: "#28c840",
                              }}
                            />
                          )}
                        </div>
                      )}
                    </div>

                    {/* Terminal Footer with CTA */}
                    <AnimatePresence>
                      {selectedTeam && !isTyping && terminalLines.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          style={{
                            padding: "16px 20px",
                            borderTop: "1px solid var(--border)",
                            display: "flex",
                            gap: "12px",
                          }}
                        >
                          <a
                            href={externalLinks.interestForm}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                            style={{ flex: 1, justifyContent: "center" }}
                          >
                            SUBMIT INTEREST
                            <IconExternalLink size={14} />
                          </a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ==========================================
            BENEFITS - Scrolling ticker style
            ========================================== */}
        <section
          style={{
            padding: "60px 0",
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "relative" }}>
            {/* Left fade */}
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: "100px",
                background:
                  "linear-gradient(90deg, var(--bg-primary) 0%, transparent 100%)",
                zIndex: 2,
              }}
            />
            {/* Right fade */}
            <div
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                bottom: 0,
                width: "100px",
                background:
                  "linear-gradient(270deg, var(--bg-primary) 0%, transparent 100%)",
                zIndex: 2,
              }}
            />

            <motion.div
              animate={{ x: [0, -1200] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                display: "flex",
                gap: "80px",
                whiteSpace: "nowrap",
              }}
            >
              {[...benefitsData, ...benefitsData, ...benefitsData].map(
                (benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        flexShrink: 0,
                      }}
                    >
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          border: "1px solid var(--border)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Icon size={18} color="var(--text-secondary)" />
                      </div>
                      <span
                        style={{
                          fontSize: "15px",
                          color: "var(--text-secondary)",
                          fontWeight: 500,
                        }}
                      >
                        {benefit.text}
                      </span>
                    </div>
                  );
                }
              )}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
