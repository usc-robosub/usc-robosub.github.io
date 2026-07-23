import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { IconArrowRight, IconArrowLeft, IconCalendar, IconClock } from "@tabler/icons-react";
import { Navbar, Footer } from "@/components/layout";
import { SectionLabel, AnimatedHeadline, FadeUpText, FlowField } from "@/components/ui";
import { getBlogPost, blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | USC AUV",
  description:
    "Development logs and competition recaps from the USC AUV team, following Barracuda from the lab to RoboSub.",
};

type BlogCard = {
  href: string;
  label: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
};

const devPost = blogPosts[0];
const compPost = getBlogPost("robosub-2026-competition-log");

const cards: BlogCard[] = [
  {
    href: "/blog/development",
    label: "DEVELOPMENT BLOG 2026",
    title: "Development Blog 2026",
    excerpt:
      "Milestone-by-milestone from dry-dock to full-system pool operations: how software, electrical, and mechanical came together across the spring wet tests.",
    image: devPost.image,
    date: devPost.date,
    readTime: devPost.readTime,
  },
  {
    href: "/blog/robosub-2026-competition-log",
    label: "ROBOSUB 2026 COMPETITION LOG",
    title: "RoboSub 2026 Competition Log",
    excerpt:
      compPost?.excerpt ??
      "Six days in Irvine, an overnight rebuild, and a run into the Autonomy Challenge semi-finals.",
    image: compPost?.image ?? "/barracuda.jpg",
    date: compPost?.date ?? "July 2026",
    readTime: compPost?.readTime ?? "7 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <section
          style={{
            position: "relative",
            paddingTop: "160px",
            paddingBottom: "72px",
            overflow: "hidden",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <FlowField seed={70716} style={{ opacity: 0.8 }} />
          <div className="bg-grid" style={{ opacity: 0.35 }} />
          <div className="bg-grid-fade" />
          <div className="corner-frame tl" />
          <div className="corner-frame tr" />
          <div className="corner-frame bl" />
          <div className="corner-frame br" />

          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <div style={{ maxWidth: "980px" }}>
              <SectionLabel text="BLOG" delay={0.1} />
              <AnimatedHeadline
                text={["FROM", "THE", "LAB", "TO", "COMPETITION"]}
                className="text-display"
                style={{
                  fontSize: "clamp(40px, 7vw, 80px)",
                  marginTop: "16px",
                  marginBottom: "24px",
                }}
                as="h1"
                delay={0.2}
              />
              <FadeUpText delay={0.55}>
                <Link href="/" className="btn-secondary">
                  <IconArrowLeft size={16} />
                  BACK TO HOME
                </Link>
              </FadeUpText>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "28px",
                alignItems: "stretch",
              }}
              className="hero-grid"
            >
              {cards.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "0",
                    overflow: "hidden",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "16 / 9",
                      borderBottom: "1px solid var(--border)",
                      overflow: "hidden",
                    }}
                  >
                    <Image src={card.image} alt={card.title} fill style={{ objectFit: "cover" }} />
                  </div>
                  <div
                    style={{
                      padding: "28px",
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                    }}
                  >
                    <span
                      className="mono"
                      style={{
                        fontSize: "11px",
                        letterSpacing: "0.1em",
                        color: "var(--text-muted)",
                        marginBottom: "14px",
                      }}
                    >
                      {card.label}
                    </span>
                    <h2
                      style={{
                        fontSize: "24px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.02em",
                        marginBottom: "14px",
                        lineHeight: 1.15,
                      }}
                    >
                      {card.title}
                    </h2>
                    <p
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: "15px",
                        lineHeight: 1.75,
                        marginBottom: "22px",
                      }}
                    >
                      {card.excerpt}
                    </p>

                    <div
                      style={{
                        marginTop: "auto",
                        paddingTop: "18px",
                        borderTop: "1px solid var(--border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "12px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "14px",
                          fontSize: "12px",
                          fontFamily: "var(--font-mono)",
                          color: "var(--text-muted)",
                        }}
                      >
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                          <IconCalendar size={13} />
                          {card.date}
                        </span>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                          <IconClock size={13} />
                          {card.readTime}
                        </span>
                      </div>
                      <span
                        className="mono"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          fontSize: "12px",
                          letterSpacing: "0.1em",
                          color: "var(--text-primary)",
                        }}
                      >
                        READ
                        <IconArrowRight size={15} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
