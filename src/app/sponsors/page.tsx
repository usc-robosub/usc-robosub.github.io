"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  IconDownload,
  IconMail,
  IconEye,
  IconUsers,
  IconNetwork,
  IconCalendarEvent,
} from "@tabler/icons-react";
import { Navbar, Footer } from "@/components/layout";
import { AnimatedHeadline, SectionLabel, FadeUpText } from "@/components/ui";
import { externalLinks } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";

const sponsorshipBenefits = [
  {
    icon: IconEye,
    title: "Brand Visibility",
    description: "Elevate your brand among top USC students, faculty, and industry professionals at competitions and events",
  },
  {
    icon: IconUsers,
    title: "Innovator Community",
    description: "Engage with a passionate team of engineers pushing the boundaries of autonomous underwater robotics",
  },
  {
    icon: IconNetwork,
    title: "Future Leaders",
    description: "Network with tomorrow's technology and engineering leaders through mentorship and recruitment opportunities",
  },
  {
    icon: IconCalendarEvent,
    title: "Exclusive Access",
    description: "Gain invitations to team demos, international competitions, and sponsor-only events",
  },
];

// All sponsors in a flat array
const allSponsors = [
  { name: "USC Viterbi School of Engineering", logo: "/sponsors/usc-viterbi.jpg", description: "Providing academic support and resources for student engineering projects" },
  { name: "Lockheed Martin", logo: "/sponsors/lockheed-martin.png", description: "Supporting innovation in autonomous systems and aerospace technology" },
  { name: "Northrop Grumman", logo: "/sponsors/northrop-grumman.png", description: "Empowering next-generation engineers in defense and space systems" },
];

export default function SponsorsPage() {
  const sponsorsRef = useRef(null);
  const benefitsRef = useRef(null);

  const sponsorsInView = useInView(sponsorsRef, { once: true, margin: "-100px" });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });

  return (
    <>
      <Navbar />
      <main>
        {/* ==========================================
            HERO SECTION - Full width impact
            ========================================== */}
        <section
          style={{
            position: "relative",
            paddingTop: "180px",
            paddingBottom: "120px",
            overflow: "hidden",
            background: "linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)",
          }}
        >
          <div className="bg-grid" />
          
          {/* Large text background */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "clamp(200px, 30vw, 400px)",
              fontWeight: 700,
              color: "rgba(255,255,255,0.02)",
              whiteSpace: "nowrap",
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            SPONSOR
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <div style={{ maxWidth: "700px" }}>
              <SectionLabel text="PARTNER WITH US" delay={0.1} />
              <AnimatedHeadline
                text={["FUEL THE", "FUTURE"]}
                className="text-display"
                style={{
                  fontSize: "clamp(48px, 10vw, 96px)",
                  marginTop: "16px",
                  marginBottom: "32px",
                }}
                as="h1"
                delay={0.2}
              />
              <FadeUpText delay={0.5}>
                <p
                  style={{
                    fontSize: "18px",
                    color: "var(--text-secondary)",
                    marginBottom: "40px",
                    lineHeight: 1.7,
                  }}
                >
                  Support the next generation of engineers building autonomous 
                  underwater vehicles. Your partnership directly impacts student 
                  learning and innovation.
                </p>
              </FadeUpText>

              <FadeUpText delay={0.7}>
                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                  <a
                    href={externalLinks.sponsorshipPacket}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <IconDownload size={16} />
                    SPONSORSHIP PACKET
                  </a>
                  <a
                    href="mailto:evasudev@usc.edu"
                    className="btn-secondary"
                  >
                    <IconMail size={18} />
                    GET IN TOUCH
                  </a>
                </div>
              </FadeUpText>
            </div>
          </div>
        </section>

        {/* ==========================================
            CURRENT SPONSORS - Card showcase
            ========================================== */}
        <section
          ref={sponsorsRef}
          style={{
            padding: "100px 0",
            borderTop: "1px solid var(--border)",
          }}
        >
          <div className="container">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={sponsorsInView ? "visible" : "hidden"}
            >
              <motion.div variants={staggerItem} style={{ textAlign: "center", marginBottom: "64px" }}>
                <span className="section-label">THANK YOU</span>
                <h2
                  className="text-heading"
                  style={{
                    fontSize: "clamp(28px, 4vw, 40px)",
                    marginTop: "16px",
                    textTransform: "uppercase",
                  }}
                >
                  Our Sponsors
                </h2>
              </motion.div>

              {/* Sponsor cards - vertical stack with big horizontal logos */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "32px",
                  maxWidth: "900px",
                  margin: "0 auto",
                }}
              >
                {allSponsors.map((sponsor) => (
                  <motion.div
                    key={sponsor.name}
                    variants={staggerItem}
                    className="card"
                    style={{
                      padding: "40px",
                      background: "var(--bg-secondary)",
                      border: "1px solid var(--border)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                    whileHover={{
                      y: -4,
                      borderColor: "var(--border-light)",
                      transition: { duration: 0.3 },
                    }}
                  >
                    {/* Logo - large horizontal display */}
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        maxWidth: "400px",
                        height: "120px",
                        marginBottom: "24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>

                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: 600,
                        marginBottom: "12px",
                        textTransform: "uppercase",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {sponsor.name}
                    </h3>
                    <p
                      style={{
                        fontSize: "15px",
                        color: "var(--text-muted)",
                        lineHeight: 1.6,
                        maxWidth: "500px",
                      }}
                    >
                      {sponsor.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ==========================================
            BENEFITS - Why Partner With Us
            ========================================== */}
        <section
          ref={benefitsRef}
          style={{
            padding: "100px 0",
            background: "var(--bg-primary)",
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Grid background */}
          <div className="bg-grid" style={{ opacity: 0.5 }} />
          <div className="bg-grid-fade" />
          
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={benefitsInView ? "visible" : "hidden"}
            >
              <motion.div
                variants={staggerItem}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 2fr",
                  gap: "80px",
                  alignItems: "start",
                }}
                className="hero-grid"
              >
                {/* Left: Title */}
                <div>
                  <span className="section-label">BENEFITS</span>
                  <h2
                    className="text-heading"
                    style={{
                      fontSize: "clamp(28px, 4vw, 40px)",
                      marginTop: "16px",
                      marginBottom: "24px",
                      textTransform: "uppercase",
                    }}
                  >
                    Why Partner With Us?
                  </h2>
                  <p
                    style={{
                      fontSize: "15px",
                      color: "var(--text-muted)",
                      lineHeight: 1.7,
                    }}
                  >
                    Your sponsorship directly supports student engineering education 
                    and breakthrough research in autonomous systems.
                  </p>
                </div>

                {/* Right: Benefits grid */}
                <motion.div
                  variants={staggerItem}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "2px",
                    background: "var(--border)",
                  }}
                >
                  {sponsorshipBenefits.slice(0, 4).map((benefit) => {
                    const Icon = benefit.icon;
                    return (
                      <div
                        key={benefit.title}
                        style={{
                          padding: "28px",
                          background: "var(--bg-secondary)",
                        }}
                      >
                        <Icon
                          size={24}
                          color="var(--text-secondary)"
                          style={{ marginBottom: "16px" }}
                        />
                        <h3
                          style={{
                            fontSize: "15px",
                            fontWeight: 600,
                            marginBottom: "8px",
                            textTransform: "uppercase",
                            letterSpacing: "0.02em",
                          }}
                        >
                          {benefit.title}
                        </h3>
                        <p
                          style={{
                            fontSize: "13px",
                            color: "var(--text-muted)",
                            lineHeight: 1.5,
                          }}
                        >
                          {benefit.description}
                        </p>
                      </div>
                    );
                  })}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ==========================================
            FINAL CTA - Different style
            ========================================== */}
        <section
          style={{
            padding: "120px 0",
            background: "var(--bg-secondary)",
            borderTop: "1px solid var(--border)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Large background number */}
          <div
            style={{
              position: "absolute",
              bottom: "-100px",
              right: "10%",
              fontSize: "300px",
              fontWeight: 700,
              color: "rgba(255,255,255,0.02)",
              lineHeight: 1,
              pointerEvents: "none",
            }}
          >
            20
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "80px",
                alignItems: "center",
              }}
              className="hero-grid"
            >
              <div>
                <h2
                  className="text-heading"
                  style={{
                    fontSize: "clamp(32px, 5vw, 48px)",
                    marginBottom: "24px",
                    textTransform: "uppercase",
                  }}
                >
                  Build Cutting-Edge AUVs With Us
                </h2>
                <p
                  style={{
                    fontSize: "17px",
                    color: "var(--text-secondary)",
                    marginBottom: "32px",
                    lineHeight: 1.7,
                  }}
                >
                  Join industry leaders like USC Viterbi, Lockheed Martin, and 
                  Northrop Grumman in supporting the next generation of engineers.
                </p>
                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                  <a
                    href="mailto:evasudev@usc.edu"
                    className="btn-primary"
                  >
                    <IconMail size={16} />
                    CONTACT US
                  </a>
                  <a
                    href={externalLinks.sponsorshipPacket}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <IconDownload size={18} />
                    DOWNLOAD PACKET
                  </a>
                </div>
              </div>
              
              {/* Stats */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "2px",
                  background: "var(--border)",
                }}
              >
                {[
                  { value: "20+", label: "Years Active" },
                  { value: "50+", label: "Team Members" },
                  { value: "15+", label: "Competitions" },
                  { value: "3", label: "Sub-Teams" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    style={{
                      background: "var(--bg-primary)",
                      padding: "32px",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "36px",
                        fontWeight: 700,
                        marginBottom: "8px",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="mono"
                      style={{
                        fontSize: "10px",
                        color: "var(--text-muted)",
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
