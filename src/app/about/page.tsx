"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  IconTarget,
  IconRocket,
  IconBrain,
  IconUsers,
  IconDownload,
} from "@tabler/icons-react";
import { Navbar, Footer } from "@/components/layout";
import {
  TelemetryRow,
  TwoCornerBrackets,
  AnimatedHeadline,
  SectionLabel,
  FadeUpText,
} from "@/components/ui";
import { barracudaSpecs, pastAUVs, coreValues } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";

const iconMap = {
  excellence: IconTarget,
  innovation: IconRocket,
  learning: IconBrain,
  collaboration: IconUsers,
};

export default function AboutPage() {
  const barracudaRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);

  const barracudaInView = useInView(barracudaRef, { once: true, margin: "-100px" });
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

  const specStats = [
    { label: "DIMENSIONS", value: 26, unit: "in L" },
    { label: "WEIGHT", value: 35, unit: "kg" },
    { label: "THRUSTERS", value: 8, unit: "" },
    { label: "BATTERY", value: 16.2, unit: "Ah", decimals: 1 },
  ];

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
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "64px",
                alignItems: "center",
              }}
              className="hero-grid"
            >
              <div>
                <SectionLabel text="ABOUT US" delay={0.1} />
                <AnimatedHeadline
                  text={["ABOUT", "USC AUV"]}
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
                    Two decades of innovation in underwater robotics
                  </p>
                </FadeUpText>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Image
                  src="/auv-logo.png"
                  alt="USC AUV Logo"
                  width={300}
                  height={300}
                  style={{ filter: "invert(1)", opacity: 0.9 }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* The Barracuda Section */}
        <section
          ref={barracudaRef}
          id="barracuda"
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
              animate={barracudaInView ? "visible" : "hidden"}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "64px",
                alignItems: "center",
              }}
              className="hero-grid"
            >
              {/* Left - Info */}
              <div>
                <motion.span variants={staggerItem} className="section-label">
                  CURRENT VEHICLE
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
                  Meet {barracudaSpecs.name}
                </motion.h2>
                <motion.p
                  variants={staggerItem}
                  style={{
                    fontSize: "17px",
                    color: "var(--text-secondary)",
                    marginBottom: "32px",
                    lineHeight: 1.8,
                  }}
                >
                  Our {barracudaSpecs.year} AUV represents years of iterative design 
                  and engineering, featuring autonomous capabilities and a modular 
                  multi-hull design built entirely by students.
                </motion.p>

                {/* Specs dashboard */}
                <motion.div variants={staggerItem}>
                  <TelemetryRow stats={specStats} />
                </motion.div>

                {/* Divider */}
                <div
                  style={{
                    height: "1px",
                    width: "64px",
                    background: "var(--border)",
                    margin: "32px 0",
                  }}
                />

                {/* Features list */}
                <motion.div variants={staggerItem}>
                  <h4
                    className="mono"
                    style={{ color: "var(--text-muted)", marginBottom: "16px" }}
                  >
                    KEY FEATURES
                  </h4>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {barracudaSpecs.features.map((feature) => (
                      <li
                        key={feature}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          color: "var(--text-secondary)",
                          marginBottom: "10px",
                          fontSize: "15px",
                        }}
                      >
                        <span
                          style={{
                            width: "6px",
                            height: "6px",
                            background: "var(--text-muted)",
                          }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div variants={staggerItem} style={{ marginTop: "32px" }}>
                  <a
                    href="https://drive.google.com/file/d/1BrcK6pGdd4CBl9zglACMc6I8wHD-CQNz/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ display: "inline-flex" }}
                  >
                    <IconDownload size={16} />
                    TECHNICAL DESIGN REPORT
                  </a>
                </motion.div>
              </div>

              {/* Right - Barracuda Image */}
              <motion.div variants={staggerItem}>
                <TwoCornerBrackets size={40} offset={20}>
                  <div
                    style={{
                      aspectRatio: "1/1",
                      border: "1px solid var(--border)",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src="/blog-jun-23-wet-test.gif"
                      alt="The Barracuda AUV during a June 23, 2026 wet test"
                      fill
                      unoptimized
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </TwoCornerBrackets>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Our Story Section */}
        <section ref={storyRef} id="history" className="section">
          <div className="container">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={storyInView ? "visible" : "hidden"}
              style={{ maxWidth: "800px", margin: "0 auto" }}
            >
              <motion.div variants={staggerItem} style={{ textAlign: "center", marginBottom: "48px" }}>
                <span className="section-label">OUR JOURNEY</span>
                <h2
                  className="text-heading"
                  style={{
                    fontSize: "clamp(32px, 5vw, 52px)",
                    marginTop: "16px",
                    textTransform: "uppercase",
                  }}
                >
                  21 YEARS OF INNOVATION
                </h2>
              </motion.div>

              <motion.div
                variants={staggerItem}
                style={{
                  fontSize: "17px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.9,
                }}
              >
                <p style={{ marginBottom: "24px" }}>
                  Founded in 2005, USC AUV started as a small group of students experimenting
                  with underwater robotics in dorm rooms and campus workspaces. Over the years,
                  it has grown into a multi-disciplinary team of more than 25 members united by
                  a shared interest in autonomous maritime technology. Our team brings together
                  students from across Viterbi and other fields, combining strengths in
                  software, mechanical design, electronics, systems engineering, and operations
                  to solve the unique challenges of underwater autonomy.
                </p>
                <p style={{ marginBottom: "24px" }}>
                  Over the past two decades, the team has evolved from building hand-assembled
                  prototypes with simple navigation logic to developing sophisticated autonomous
                  systems capable of operating in demanding underwater environments. Today, we
                  are focused on Barracuda 2.0, built on a modern ROS 2 Humble stack running on
                  the NVIDIA Jetson AGX Orin. Our platform integrates advanced sensor systems,
                  custom-sealed hull designs, and real-time SLAM pipelines to support reliable
                  navigation and perception underwater.
                </p>
                <p>
                  At its core, USC AUV is about more than just building robots. It is a
                  collaborative engineering environment where students turn classroom concepts
                  into real-world systems through hands-on development, testing, and iteration.
                  Our goal is to create autonomous vehicles that are not only capable, but also
                  robust, maintainable, and ready for real-world deployment.
                </p>
              </motion.div>

              {/* Past AUVs */}
              <motion.div
                variants={staggerItem}
                style={{
                  marginTop: "64px",
                  paddingTop: "48px",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <h3
                  className="mono"
                  style={{
                    color: "var(--text-muted)",
                    marginBottom: "32px",
                    textAlign: "center",
                  }}
                >
                  OUR PAST VEHICLES
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "24px",
                  }}
                  className="hero-grid"
                >
                  {pastAUVs.map((auv) => (
                    <div key={auv.name} style={{ textAlign: "center" }}>
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          aspectRatio: "1/1",
                          border: "1px solid var(--border)",
                          marginBottom: "16px",
                          overflow: "hidden",
                        }}
                      >
                        <Image
                          src={auv.image}
                          alt={auv.name}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div
                        style={{
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          fontSize: "16px",
                        }}
                      >
                        {auv.name}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Core Values Section - Simple Grid */}
        <section
          ref={valuesRef}
          className="section"
          style={{
            background: "var(--bg-secondary)",
            borderTop: "1px solid var(--border)",
          }}
        >
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <span className="section-label">WHAT WE STAND FOR</span>
              <h2
                className="text-heading"
                style={{
                  fontSize: "clamp(32px, 5vw, 52px)",
                  marginTop: "16px",
                  textTransform: "uppercase",
                }}
              >
                OUR CORE VALUES
              </h2>
            </div>

            {/* Simple 2x2 Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "24px",
                maxWidth: "900px",
                margin: "0 auto",
              }}
              className="hero-grid"
            >
              {coreValues.map((value, index) => {
                const Icon = iconMap[value.id as keyof typeof iconMap];
                return (
                  <div
                    key={value.id}
                    className="card"
                    style={{
                      padding: "32px",
                      transition: "border-color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--border-light)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border)";
                    }}
                  >
                    {/* Header */}
                    <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                      <div
                        style={{
                          width: "48px",
                          height: "48px",
                          border: "1px solid var(--border)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Icon size={24} color="var(--text-secondary)" />
                      </div>
                      <div>
                        <div
                          className="mono"
                          style={{
                            fontSize: "11px",
                            color: "var(--text-muted)",
                          }}
                        >
                          0{index + 1}
                        </div>
                        <h3
                          style={{
                            fontSize: "18px",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                          }}
                        >
                          {value.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: "15px",
                        color: "var(--text-secondary)",
                        lineHeight: 1.7,
                      }}
                    >
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
