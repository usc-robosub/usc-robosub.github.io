import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { IconArrowRight, IconArrowLeft, IconCalendar, IconClock } from "@tabler/icons-react";
import { Navbar, Footer } from "@/components/layout";
import { SectionLabel, AnimatedHeadline, FadeUpText, FlowField } from "@/components/ui";
import { researchPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Software Research | USC AUV",
  description:
    "Experiments from the USC AUV software team: what we tried on Barracuda, how we measured it, and what we learned, including the ideas that didn't work out.",
};

export default function ResearchPage() {
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
          <FlowField seed={20261015} style={{ opacity: 0.8 }} />
          <div className="bg-grid" style={{ opacity: 0.35 }} />
          <div className="bg-grid-fade" />
          <div className="corner-frame tl" />
          <div className="corner-frame tr" />
          <div className="corner-frame bl" />
          <div className="corner-frame br" />

          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <div style={{ maxWidth: "980px" }}>
              <SectionLabel text="BLOG / SOFTWARE RESEARCH" delay={0.1} />
              <AnimatedHeadline
                text={["SOFTWARE", "RESEARCH"]}
                className="text-display"
                style={{ fontSize: "clamp(40px, 7vw, 80px)", marginBottom: "28px" }}
              />
              <FadeUpText delay={0.4}>
                <p style={{ color: "var(--text-secondary)", fontSize: "18px", lineHeight: 1.8, maxWidth: "720px" }}>
                  Experiments from the software subteam: what we tried on Barracuda, how we measured it, and what we
                  learned. We publish the results that didn&apos;t work out too.
                </p>
              </FadeUpText>
              <div style={{ marginTop: "32px" }}>
                <Link href="/blog" className="btn-secondary">
                  <IconArrowLeft size={16} />
                  BACK TO BLOG
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ display: "grid", gap: "28px" }}>
            {researchPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card"
                style={{ padding: 0, overflow: "hidden", textDecoration: "none", color: "inherit" }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "16 / 9",
                    overflow: "hidden",
                  }}
                >
                  <Image src={post.image} alt={post.title} fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "28px", display: "flex", flexDirection: "column", gap: "14px" }}>
                  <span className="mono" style={{ fontSize: "11px", letterSpacing: "0.1em", color: "var(--text-muted)" }}>
                    RESEARCH NOTE
                  </span>
                  <h2
                    style={{
                      fontSize: "24px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.02em",
                      lineHeight: 1.15,
                      margin: 0,
                    }}
                  >
                    {post.title}
                  </h2>
                  <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: 1.75, margin: 0 }}>
                    {post.excerpt}
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
                      fontSize: "12px",
                      fontFamily: "var(--font-mono)",
                      color: "var(--text-muted)",
                    }}
                  >
                    <span style={{ display: "inline-flex", flexWrap: "wrap", gap: "14px" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                        <IconCalendar size={13} />
                        {post.date}
                      </span>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                        <IconClock size={13} />
                        {post.readTime}
                      </span>
                    </span>
                    <span
                      className="mono"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
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
        </section>
      </main>
      <Footer />
    </>
  );
}
