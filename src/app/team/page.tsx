"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  IconMail,
  IconBrandLinkedin,
  IconUsers,
  IconArrowRight,
} from "@tabler/icons-react";
import { Navbar, Footer } from "@/components/layout";
import { AnimatedHeadline, SectionLabel, FadeUpText, TypewriterEffect } from "@/components/ui";
import { teamMembers, subTeams } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function TeamPage() {
  const subteamsRef = useRef(null);
  const eboardRef = useRef(null);
  const ctaRef = useRef(null);

  const subteamsInView = useInView(subteamsRef, { once: true, margin: "-100px" });
  const eboardInView = useInView(eboardRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section
          style={{
            position: "relative",
            paddingTop: "160px",
            paddingBottom: "80px",
            overflow: "hidden",
          }}
        >
          {/* Techy backgrounds */}
          <div className="bg-grid" />
          <div className="bg-grid-fade" />
          <div className="bg-code-matrix" />
          
          {/* Corner frame decorations */}
          <div className="corner-frame tl" />
          <div className="corner-frame tr" />
          <div className="corner-frame bl" />
          <div className="corner-frame br" />
          
          {/* Glow accents */}
          <div className="glow-accent-tl" />
          <div className="glow-accent-br" />
          
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <SectionLabel text="OUR PEOPLE" delay={0.1} />
            <AnimatedHeadline
              text={["MEET THE", "TEAM"]}
              className="text-display"
              style={{
                fontSize: "clamp(48px, 10vw, 96px)",
                marginTop: "16px",
                marginBottom: "24px",
              }}
              as="h1"
              delay={0.2}
            />
            <FadeUpText delay={0.5}>
              <p
                style={{
                  fontSize: "20px",
                  color: "var(--text-secondary)",
                  maxWidth: "600px",
                }}
              >
                The talented engineers driving innovation in underwater robotics
              </p>
            </FadeUpText>

            {/* Typewriter coding elements */}
            <FadeUpText delay={0.7}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "24px",
                  marginTop: "48px",
                  justifyContent: "flex-start",
                }}
              >
                <div
                  style={{
                    background: "rgba(0, 0, 0, 0.4)",
                    border: "1px solid var(--border)",
                    padding: "16px 24px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "14px",
                    minWidth: "280px",
                  }}
                >
                  <span style={{ color: "var(--text-muted)" }}>$ </span>
                  <TypewriterEffect
                    words={[
                      "team.init()",
                      "load_engineers()",
                      "deploy_excellence()",
                      "build_the_future()",
                    ]}
                    typingSpeed={80}
                    deletingSpeed={40}
                    pauseTime={2500}
                  />
                </div>

                <div
                  style={{
                    background: "rgba(0, 0, 0, 0.4)",
                    border: "1px solid var(--border)",
                    padding: "16px 24px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "14px",
                    minWidth: "260px",
                  }}
                >
                  <span style={{ color: "#6a9955" }}>// </span>
                  <TypewriterEffect
                    words={[
                      "innovators",
                      "problem solvers",
                      "dreamers",
                      "builders",
                      "engineers",
                    ]}
                    typingSpeed={100}
                    deletingSpeed={50}
                    pauseTime={2000}
                    cursorColor="var(--accent)"
                  />
                </div>

                <div
                  style={{
                    background: "rgba(0, 0, 0, 0.4)",
                    border: "1px solid var(--border)",
                    padding: "16px 24px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "14px",
                    minWidth: "300px",
                  }}
                >
                  <span style={{ color: "#c586c0" }}>const </span>
                  <span style={{ color: "#9cdcfe" }}>passion</span>
                  <span style={{ color: "var(--text-muted)" }}> = </span>
                  <TypewriterEffect
                    words={[
                      '"limitless"',
                      '"unstoppable"',
                      '"contagious"',
                      '"infinite"',
                    ]}
                    typingSpeed={90}
                    deletingSpeed={45}
                    pauseTime={2200}
                    cursorColor="#dcdcaa"
                  />
                </div>
              </div>
            </FadeUpText>
          </div>
        </section>

        {/* Executive Board Section */}
        <section
          ref={eboardRef}
          className="section"
          style={{
            background: "var(--bg-secondary)",
            borderTop: "1px solid var(--border)",
          }}
        >
          <div className="container">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={eboardInView ? "visible" : "hidden"}
            >
              <motion.div
                variants={staggerItem}
                style={{ textAlign: "center", marginBottom: "80px" }}
              >
                <span className="section-label">LEADERSHIP</span>
                <h2
                  className="text-heading"
                  style={{
                    fontSize: "clamp(28px, 4vw, 44px)",
                    marginTop: "16px",
                    textTransform: "uppercase",
                  }}
                >
                  EXECUTIVE BOARD
                </h2>
                <p
                  style={{
                    fontSize: "17px",
                    color: "var(--text-secondary)",
                    marginTop: "20px",
                    maxWidth: "600px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    lineHeight: 1.7,
                  }}
                >
                  Meet our student leadership team guiding USC AUV forward
                </p>
              </motion.div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                  gap: "32px",
                }}
              >
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.id}
                    variants={staggerItem}
                    className="card"
                    style={{
                      padding: "32px",
                      textAlign: "center",
                    }}
                    whileHover={{
                      y: -6,
                      borderColor: "var(--border-light)",
                      transition: { duration: 0.3 },
                    }}
                  >
                    {/* Member Image */}
                    <div
                      style={{
                        position: "relative",
                        width: "120px",
                        height: "120px",
                        margin: "0 auto 24px",
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          border: "2px solid var(--border)",
                          position: "relative",
                          overflow: "hidden",
                        }}
                      >
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                        {/* Corner accents */}
                        <div style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          width: "12px",
                          height: "12px",
                          borderTop: "2px solid var(--accent)",
                          borderLeft: "2px solid var(--accent)",
                          zIndex: 1,
                        }} />
                        <div style={{
                          position: "absolute",
                          top: "0",
                          right: "0",
                          width: "12px",
                          height: "12px",
                          borderTop: "2px solid var(--accent)",
                          borderRight: "2px solid var(--accent)",
                          zIndex: 1,
                        }} />
                        <div style={{
                          position: "absolute",
                          bottom: "0",
                          left: "0",
                          width: "12px",
                          height: "12px",
                          borderBottom: "2px solid var(--accent)",
                          borderLeft: "2px solid var(--accent)",
                          zIndex: 1,
                        }} />
                        <div style={{
                          position: "absolute",
                          bottom: "0",
                          right: "0",
                          width: "12px",
                          height: "12px",
                          borderBottom: "2px solid var(--accent)",
                          borderRight: "2px solid var(--accent)",
                          zIndex: 1,
                        }} />
                      </div>
                      {/* Index badge */}
                      <span
                        className="mono"
                        style={{
                          position: "absolute",
                          top: "-8px",
                          right: "-8px",
                          background: "var(--bg-primary)",
                          border: "1px solid var(--border)",
                          padding: "4px 8px",
                          fontSize: "11px",
                          color: "var(--text-muted)",
                          zIndex: 2,
                        }}
                      >
                        #{String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: 600,
                        marginBottom: "8px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {member.name}
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "var(--accent)",
                        marginBottom: "16px",
                        fontWeight: 500,
                      }}
                    >
                      {member.role}
                    </p>

                    <div
                      style={{
                        fontSize: "13px",
                        color: "var(--text-muted)",
                        marginBottom: "24px",
                        lineHeight: 1.6,
                      }}
                    >
                      <p>{member.major}</p>
                      <p style={{ marginTop: "2px" }}>{member.year}</p>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        gap: "12px",
                        justifyContent: "center",
                        paddingTop: "20px",
                        borderTop: "1px solid var(--border)",
                      }}
                    >
                      <a
                        href={`mailto:${member.email}`}
                        style={{
                          width: "44px",
                          height: "44px",
                          border: "1px solid var(--border)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "var(--text-muted)",
                          transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "var(--text-primary)";
                          e.currentTarget.style.borderColor = "var(--accent)";
                          e.currentTarget.style.background = "rgba(var(--accent-rgb), 0.1)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "var(--text-muted)";
                          e.currentTarget.style.borderColor = "var(--border)";
                          e.currentTarget.style.background = "transparent";
                        }}
                        aria-label={`Email ${member.name}`}
                      >
                        <IconMail size={20} />
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          width: "44px",
                          height: "44px",
                          border: "1px solid var(--border)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "var(--text-muted)",
                          transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "var(--text-primary)";
                          e.currentTarget.style.borderColor = "var(--accent)";
                          e.currentTarget.style.background = "rgba(var(--accent-rgb), 0.1)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "var(--text-muted)";
                          e.currentTarget.style.borderColor = "var(--border)";
                          e.currentTarget.style.background = "transparent";
                        }}
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <IconBrandLinkedin size={20} />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sub-teams Section */}
        <section
          ref={subteamsRef}
          className="section"
          style={{ paddingTop: "100px", paddingBottom: "100px" }}
        >
          <div className="container">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={subteamsInView ? "visible" : "hidden"}
            >
              <motion.div
                variants={staggerItem}
                style={{ textAlign: "center", marginBottom: "64px" }}
              >
                <span className="section-label">STRUCTURE</span>
                <h2
                  className="text-heading"
                  style={{
                    fontSize: "clamp(28px, 4vw, 44px)",
                    marginTop: "16px",
                    textTransform: "uppercase",
                  }}
                >
                  OUR SUB-TEAMS
                </h2>
              </motion.div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "24px",
                  maxWidth: "900px",
                  margin: "0 auto",
                }}
              >
                {subTeams.map((team) => (
                  <motion.div
                    key={team.id}
                    variants={staggerItem}
                    className="card"
                    style={{ textAlign: "center" }}
                    whileHover={{
                      y: -4,
                      borderColor: "var(--border-light)",
                      transition: { duration: 0.3 },
                    }}
                  >
                    <div
                      style={{
                        width: "56px",
                        height: "56px",
                        border: "1px solid var(--border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 16px",
                      }}
                    >
                      <IconUsers size={26} color="var(--text-secondary)" />
                    </div>
                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: 700,
                        marginBottom: "12px",
                        textTransform: "uppercase",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {team.name}
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "var(--text-muted)",
                        lineHeight: 1.6,
                      }}
                    >
                      {team.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          ref={ctaRef}
          className="section"
          style={{
            background: "var(--bg-secondary)",
            borderTop: "1px solid var(--border)",
          }}
        >
          <div className="container">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={ctaInView ? "visible" : "hidden"}
              style={{ maxWidth: "700px" }}
            >
              <motion.span variants={staggerItem} className="section-label">
                JOIN US
              </motion.span>
              <motion.h2
                variants={staggerItem}
                className="text-heading"
                style={{
                  fontSize: "clamp(32px, 5vw, 52px)",
                  marginTop: "16px",
                  marginBottom: "24px",
                  textTransform: "uppercase",
                }}
              >
                JOIN THE TEAM
              </motion.h2>
              <motion.p
                variants={staggerItem}
                style={{
                  fontSize: "17px",
                  color: "var(--text-secondary)",
                  marginBottom: "32px",
                  lineHeight: 1.7,
                }}
              >
                We&apos;re always looking for passionate students to join our team. 
                No experience required — just dedication and a drive to learn.
              </motion.p>
              <motion.div variants={staggerItem}>
                <Link href="/join" className="btn-primary">
                  APPLY NOW
                  <IconArrowRight size={16} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
