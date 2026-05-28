"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  IconMail,
  IconBrandLinkedin,
  IconArrowRight,
} from "@tabler/icons-react";
import { Navbar, Footer } from "@/components/layout";
import {
  AnimatedHeadline,
  SectionLabel,
  FadeUpText,
  TypewriterEffect,
} from "@/components/ui";
import { staggerContainer, staggerItem } from "@/lib/animations";

type TeamMember = {
  id: string;
  name: string;
  team: string;
  roles: string[];
  displayRole: string;
  extraRoles: string[];
  isEboard: boolean;
  major?: string;
  year?: string;
  favoriteFish?: string;
  email?: string;
  linkedin?: string;
  github?: string;
  currentPlacement?: string;
  image?: string;
};

function isAlumniByYear(member: TeamMember) {
  return (member.year ?? "").trim().toLowerCase() === "alumni";
}

function isAlumni(member: TeamMember) {
  return isAlumniByYear(member) || Boolean(member.currentPlacement?.trim());
}

function sortSubteamMembers(members: TeamMember[]) {
  return [...members].sort((a, b) => {
    const getPriority = (member: TeamMember) => {
      const lowerRoles = member.roles.map((r) => r.toLowerCase());

      if (lowerRoles.includes("team lead")) return 1;
      if (lowerRoles.includes("project lead")) return 2;
      return 3;
    };

    return getPriority(a) - getPriority(b);
  });
}

function sortAlumniMembers(members: TeamMember[]) {
  return [...members].sort((a, b) => {
    const getPriority = (member: TeamMember) => {
      const roles = member.roles.map((r) => r.toLowerCase());

      if (roles.includes("team lead")) return 1;
      if (roles.includes("project lead")) return 2;
      return 3;
    };

    return getPriority(a) - getPriority(b);
  });
}

function MemberCard({
  member,
  index,
  variant,
}: {
  member: TeamMember;
  index: number;
  variant: "current" | "alumni";
}) {
  const rolesToRender = Array.from(
    new Set([member.displayRole, ...member.extraRoles].filter(Boolean))
  );

  return (
    <motion.div
      variants={staggerItem}
      className="card"
      style={{ padding: "32px", textAlign: "center" }}
      whileHover={{
        y: -6,
        borderColor: "var(--border-light)",
        transition: { duration: 0.3 },
      }}
    >
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
            borderRadius: "9999px",
          }}
        >
          {member.image ? (
            <Image
              src={member.image}
              alt={member.name}
              fill
              style={{ objectFit: "cover" }}
            />
          ) : null}
        </div>

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

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          justifyContent: "center",
          marginBottom: "16px",
        }}
      >
        {rolesToRender.map((role) => (
          <span
            key={role}
            style={{
              padding: "4px 10px",
              border: "1px solid var(--border)",
              fontSize: "12px",
              color: "var(--text-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
            }}
          >
            {role}
          </span>
        ))}
      </div>

      <div
        style={{
            fontSize: "13px",
            color: "var(--text-muted)",
            marginBottom: "24px",
            lineHeight: 1.6,
            minHeight: "52px",
        }}
        >
        {variant === "current" ? (
        <>
            <p>{member.major}</p>
            <p style={{ marginTop: "2px" }}>{member.year}</p>
            {member.favoriteFish?.trim() && (
            <p style={{ marginTop: "2px" }}>
                Favorite Fish: {member.favoriteFish}
            </p>
            )}
        </>
        ) : (
        <>
            <p>{member.currentPlacement}</p>
            {member.favoriteFish?.trim() && (
            <p style={{ marginTop: "2px" }}>
                Favorite Fish: {member.favoriteFish}
            </p>
            )}
        </>
        )}
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
        {member.email && (
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
            }}
            aria-label={`Email ${member.name}`}
          >
            <IconMail size={20} />
          </a>
        )}

        {member.linkedin && (
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
            }}
            aria-label={`${member.name}'s LinkedIn`}
          >
            <IconBrandLinkedin size={20} />
          </a>
        )}
      </div>
    </motion.div>
  );
}

function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      variants={staggerItem}
      style={{ textAlign: "center", marginBottom: "80px" }}
    >
      <span className="section-label">{label}</span>
      <h2
        className="text-heading"
        style={{
          fontSize: "clamp(28px, 4vw, 44px)",
          marginTop: "16px",
          textTransform: "uppercase",
        }}
      >
        {title}
      </h2>
      {description && (
        <p
          style={{
            fontSize: "17px",
            color: "var(--text-secondary)",
            marginTop: "20px",
            maxWidth: "700px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.7,
          }}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default function TeamPageClient({ members }: { members: TeamMember[] }) {
  const eboardRef = useRef(null);
  const teamsRef = useRef(null);
  const alumniRef = useRef(null);
  const ctaRef = useRef(null);

  const eboardInView = useInView(eboardRef, { once: true, margin: "-100px" });
  const teamsInView = useInView(teamsRef, { once: true, margin: "-100px" });
  const alumniInView = useInView(alumniRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const eboardPriority: Record<string, number> = {
    president: 1,
    "vice president": 2,
    "electrical lead": 3,
    "software lead": 4,
    "mechanical lead": 5,
    treasurer: 6,
    "social chair": 7,
  };

  const eboard = members
    .filter((m) => m.isEboard && !isAlumniByYear(m))
    .sort((a, b) => {
      const aPriority = eboardPriority[a.displayRole.toLowerCase()] ?? 999;
      const bPriority = eboardPriority[b.displayRole.toLowerCase()] ?? 999;
      return aPriority - bPriority;
    });

  const electrical = sortSubteamMembers(
    members.filter((m) => m.team === "Electrical" && !isAlumni(m))
  );

  const software = sortSubteamMembers(
    members.filter((m) => m.team === "Software" && !isAlumni(m))
  );

  const mechanical = sortSubteamMembers(
    members.filter((m) => m.team === "Mechanical" && !isAlumni(m))
  );

  const alumni = sortAlumniMembers(members.filter(isAlumni));

  const subteams = [
    {
      title: "Electrical",
      description: "Power systems, PCB design, sensors, and hardware integration.",
      items: electrical,
    },
    {
      title: "Software",
      description: "Autonomy, perception, control, and mission logic.",
      items: software,
    },
    {
      title: "Mechanical",
      description: "Hull, propulsion, structural systems, and manufacturing.",
      items: mechanical,
    },
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
          <div className="bg-grid" />
          <div className="bg-grid-fade" />
          <div className="bg-code-matrix" />

          <div className="corner-frame tl" />
          <div className="corner-frame tr" />
          <div className="corner-frame bl" />
          <div className="corner-frame br" />

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
                The students, builders, and researchers driving USC RoboSub forward.
              </p>
            </FadeUpText>

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
                    words={['"limitless"', '"unstoppable"', '"contagious"', '"infinite"']}
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

        <section
          ref={eboardRef}
          className="section"
          style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}
        >
          <div className="container">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={eboardInView ? "visible" : "hidden"}
            >
              <SectionHeading
                label="LEADERSHIP"
                title="EBOARD"
                description="The main leads guiding the team across technical, operational, and organizational work."
              />
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                  gap: "32px",
                }}
              >
                {eboard.map((member, index) => (
                  <MemberCard
                    key={member.id}
                    member={member}
                    index={index}
                    variant="current"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section
          ref={teamsRef}
          className="section"
          style={{ paddingTop: "100px", paddingBottom: "100px" }}
        >
          <div className="container">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={teamsInView ? "visible" : "hidden"}
            >
              <SectionHeading
                label="STRUCTURE"
                title="MEET THE TEAMS"
                description="Our core technical teams work together to design, build, and test the vehicle."
              />

              <div style={{ display: "grid", gap: "72px" }}>
                {subteams.map((subteam) => (
                  <motion.div key={subteam.title} variants={staggerItem}>
                    <div style={{ marginBottom: "28px" }}>
                      <h3
                        style={{
                          fontSize: "28px",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          marginBottom: "10px",
                        }}
                      >
                        {subteam.title}
                      </h3>
                      <p style={{ color: "var(--text-secondary)", maxWidth: "700px", lineHeight: 1.7 }}>
                        {subteam.description}
                      </p>
                    </div>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                        gap: "32px",
                      }}
                    >
                      {subteam.items.map((member, index) => (
                        <MemberCard
                          key={member.id}
                          member={member}
                          index={index}
                          variant="current"
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section
          ref={alumniRef}
          className="section"
          style={{
            background: "var(--bg-secondary)",
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div className="container">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={alumniInView ? "visible" : "hidden"}
            >
              <SectionHeading
                label="LEGACY"
                title="ALUMNI"
                description="Former team members who helped shape the program and continue building impact beyond USC RoboSub."
              />
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                  gap: "32px",
                }}
              >
                {alumni.map((member, index) => (
                  <MemberCard
                    key={member.id}
                    member={member}
                    index={index}
                    variant="alumni"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section
          ref={ctaRef}
          className="section"
          style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}
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
                We&apos;re always looking for passionate students to join our team. No experience required — just dedication and a drive to learn.
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