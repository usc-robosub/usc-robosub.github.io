"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  IconTarget,
  IconRocket,
  IconBrain,
  IconUsers,
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
    { label: "DIMENSIONS", value: 0.75, unit: "m", decimals: 2 },
    { label: "WEIGHT", value: 45, unit: "kg" },
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
                      src="/barracuda.jpg"
                      alt="The Barracuda AUV"
                      fill
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
                  20 YEARS OF INNOVATION
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
                  In 2005, USC AUV began as an ambitious project by a handful of students 
                  united by a shared passion for underwater robotics. Back then, the goal 
                  was simple: to design and build autonomous underwater vehicles (AUVs) 
                  that could navigate and explore the mysteries of the deep.
                </p>
                <p style={{ marginBottom: "24px" }}>
                  Armed with determination, innovative ideas, and limited resources, the 
                  team worked tirelessly in dorm rooms and basements, assembling their 
                  first prototypes from scratch. Each challenge they faced — from fine-tuning 
                  navigation algorithms to optimizing hydrodynamic designs — fueled their 
                  determination to push boundaries.
                </p>
                <p>
                  Over the years, USC AUV has evolved into an organization that continuously 
                  tests what&apos;s possible in underwater automation. Now, two decades later, 
                  the spirit of innovation remains at the core of everything we do.
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
