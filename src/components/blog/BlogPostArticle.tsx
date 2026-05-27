import Link from "next/link";
import Image from "next/image";
import {
  IconArrowLeft,
  IconArrowRight,
  IconCalendar,
  IconClock,
  IconUser,
  IconSparkles,
} from "@tabler/icons-react";
import { Navbar, Footer } from "@/components/layout";
import { SectionLabel, AnimatedHeadline, FadeUpText } from "@/components/ui";
import type { BlogPost } from "@/lib/blog";

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

type BlogPostArticleProps = {
  post: BlogPost;
  sectionLabel?: string;
  headlineWords?: string[];
  backHref?: string;
  backLabel?: string;
};

export function BlogPostArticle({
  post,
  sectionLabel,
  headlineWords,
  backHref = "/blog",
  backLabel = "BACK TO BLOG",
}: BlogPostArticleProps) {
  return (
    <>
      <Navbar />
      <main>
        <section
          style={{
            position: "relative",
            paddingTop: "160px",
            paddingBottom: "96px",
            overflow: "hidden",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div className="bg-grid" />
          <div className="bg-grid-fade" />
          <div className="corner-frame tl" />
          <div className="corner-frame tr" />
          <div className="corner-frame bl" />
          <div className="corner-frame br" />

          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <div style={{ maxWidth: "980px" }}>
              <SectionLabel text={sectionLabel ?? `BLOG / ${post.category}`} delay={0.1} />
              <AnimatedHeadline
                text={headlineWords ?? post.title.split(":")[0].split(" ")}
                className="text-display"
                style={{
                  fontSize: "clamp(44px, 8vw, 86px)",
                  marginTop: "16px",
                  marginBottom: "24px",
                }}
                as="h1"
                delay={0.2}
              />
              <FadeUpText delay={0.4}>
                <p
                  style={{
                    fontSize: "18px",
                    color: "var(--text-secondary)",
                    maxWidth: "760px",
                    lineHeight: 1.75,
                    marginBottom: "28px",
                  }}
                >
                  {post.excerpt}
                </p>
              </FadeUpText>

              <FadeUpText delay={0.55}>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "12px",
                    alignItems: "center",
                    marginBottom: "28px",
                  }}
                >
                  <span
                    style={{
                      padding: "10px 14px",
                      border: "1px solid var(--border)",
                      background: "var(--bg-secondary)",
                      fontSize: "11px",
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                    }}
                  >
                    {post.category}
                  </span>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "10px 14px",
                      border: "1px solid var(--border)",
                      background: "var(--bg-secondary)",
                      fontSize: "11px",
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                    }}
                  >
                    <IconCalendar size={14} />
                    {post.date}
                  </div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "10px 14px",
                      border: "1px solid var(--border)",
                      background: "var(--bg-secondary)",
                      fontSize: "11px",
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                    }}
                  >
                    <IconClock size={14} />
                    {post.readTime}
                  </div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "10px 14px",
                      border: "1px solid var(--border)",
                      background: "var(--bg-secondary)",
                      fontSize: "11px",
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                    }}
                  >
                    <IconUser size={14} />
                    {post.author}
                  </div>
                </div>
              </FadeUpText>

              <FadeUpText delay={0.7}>
                <Link href={backHref} className="btn-secondary">
                  <IconArrowLeft size={16} />
                  {backLabel}
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
                gridTemplateColumns: "1.2fr 0.8fr",
                gap: "48px",
                alignItems: "start",
              }}
              className="hero-grid"
            >
              <article
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  padding: "32px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "16 / 9",
                    border: "1px solid var(--border)",
                    overflow: "hidden",
                    marginBottom: "28px",
                  }}
                >
                  <Image src={post.image} alt={post.title} fill style={{ objectFit: "cover" }} priority />
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                    gap: "12px",
                    marginBottom: "28px",
                  }}
                >
                  {post.details.map((item) => (
                    <div
                      key={item.label}
                      style={{
                        padding: "16px",
                        border: "1px solid var(--border)",
                        background: "var(--bg-secondary)",
                      }}
                    >
                      <div
                        className="mono"
                        style={{
                          fontSize: "10px",
                          color: "var(--text-muted)",
                          marginBottom: "8px",
                        }}
                      >
                        {item.label}
                      </div>
                      <div style={{ fontSize: "16px", fontWeight: 700 }}>{item.value}</div>
                    </div>
                  ))}
                </div>

                <h2
                  className="text-heading"
                  style={{
                    fontSize: "clamp(28px, 4vw, 44px)",
                    marginBottom: "18px",
                    textTransform: "uppercase",
                  }}
                >
                  {post.title}
                </h2>

                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "17px",
                    lineHeight: 1.85,
                    marginBottom: "28px",
                  }}
                >
                  {post.summary}
                </p>

                <div
                  style={{
                    padding: "18px 20px",
                    borderLeft: "3px solid var(--text-primary)",
                    background: "rgba(255,255,255,0.03)",
                    marginBottom: "32px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "15px",
                      color: "var(--text-secondary)",
                      lineHeight: 1.8,
                    }}
                  >
                    “The fastest way to improve an AUV is to make every part easier to inspect,
                    service, and trust under pressure.”
                  </p>
                </div>

                <div style={{ display: "grid", gap: "32px" }}>
                  {post.sections.map((section, index) => {
                    const sectionId = slugify(section.heading);

                    return (
                      <section key={section.heading} id={sectionId}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            marginBottom: "14px",
                          }}
                        >
                          <span
                            style={{
                              width: "32px",
                              height: "32px",
                              border: "1px solid var(--border)",
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontFamily: "var(--font-mono)",
                              fontSize: "11px",
                              color: "var(--text-muted)",
                              flexShrink: 0,
                            }}
                          >
                            0{index + 1}
                          </span>
                          <h3
                            style={{
                              fontSize: "20px",
                              fontWeight: 700,
                              textTransform: "uppercase",
                              letterSpacing: "0.03em",
                            }}
                          >
                            {section.heading}
                          </h3>
                        </div>

                        <div
                          style={{
                            color: "var(--text-secondary)",
                            fontSize: "16px",
                            lineHeight: 1.9,
                            display: "grid",
                            gap: "16px",
                          }}
                        >
                          {section.body.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>

                        {section.images?.length ? (
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns:
                                section.images.length > 1 ? "repeat(2, minmax(0, 1fr))" : "1fr",
                              gap: "16px",
                              marginTop: "20px",
                            }}
                            className="hero-grid"
                          >
                            {section.images.map((image) => (
                              <div
                                key={image.src}
                                style={{
                                  position: "relative",
                                  width: "100%",
                                  aspectRatio: "16 / 10",
                                  border: "1px solid var(--border)",
                                  overflow: "hidden",
                                }}
                              >
                                <Image
                                  src={image.src}
                                  alt={image.alt}
                                  fill
                                  style={{ objectFit: "cover" }}
                                />
                              </div>
                            ))}
                          </div>
                        ) : section.image ? (
                          <div
                            style={{
                              position: "relative",
                              width: "100%",
                              aspectRatio: "16 / 10",
                              border: "1px solid var(--border)",
                              overflow: "hidden",
                              marginTop: "20px",
                            }}
                          >
                            <Image
                              src={section.image}
                              alt={section.imageAlt ?? section.heading}
                              fill
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                        ) : null}
                      </section>
                    );
                  })}
                </div>

                <div
                  style={{
                    marginTop: "36px",
                    paddingTop: "28px",
                    borderTop: "1px solid var(--border)",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "12px",
                    alignItems: "center",
                  }}
                >
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
                    VIEW OUR CODE
                    <IconArrowRight size={16} />
                  </a>
                </div>
              </article>

              <aside
                style={{
                  display: "grid",
                  gap: "20px",
                  position: "sticky",
                  top: "108px",
                }}
              >
                <div className="card" style={{ padding: "28px" }}>
                  <p className="mono" style={{ color: "var(--text-muted)", marginBottom: "16px" }}>
                    ARTICLE MAP
                  </p>
                  <div style={{ display: "grid", gap: "10px" }}>
                    {post.sections.map((section, index) => (
                      <a
                        key={section.heading}
                        href={`#${slugify(section.heading)}`}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          color: "var(--text-secondary)",
                          textDecoration: "none",
                          fontSize: "14px",
                          lineHeight: 1.5,
                        }}
                      >
                        <span
                          style={{
                            width: "22px",
                            height: "22px",
                            border: "1px solid var(--border)",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "10px",
                            fontFamily: "var(--font-mono)",
                            flexShrink: 0,
                          }}
                        >
                          {index + 1}
                        </span>
                        {section.heading}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="card" style={{ padding: "28px" }}>
                  <p className="mono" style={{ color: "var(--text-muted)", marginBottom: "16px" }}>
                    HIGHLIGHTS
                  </p>
                  <div style={{ display: "grid", gap: "12px" }}>
                    {post.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        style={{
                          padding: "12px 14px",
                          border: "1px solid var(--border)",
                          background: "var(--bg-secondary)",
                          color: "var(--text-secondary)",
                          fontSize: "14px",
                        }}
                      >
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card" style={{ padding: "28px" }}>
                  <p className="mono" style={{ color: "var(--text-muted)", marginBottom: "16px" }}>
                    BUILD STATUS
                  </p>
                  <div style={{ display: "grid", gap: "14px" }}>
                    {[
                      "March and April issues successfully diagnosed",
                      "May 2 full-system pool run completed",
                      "Next wet test scheduled for May 30",
                    ].map((item) => (
                      <div
                        key={item}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                          color: "var(--text-secondary)",
                          fontSize: "14px",
                          lineHeight: 1.6,
                        }}
                      >
                        <IconSparkles size={16} style={{ marginTop: "2px", flexShrink: 0 }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card" style={{ padding: "28px" }}>
                  <p className="mono" style={{ color: "var(--text-muted)", marginBottom: "16px" }}>
                    READ NEXT
                  </p>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      lineHeight: 1.8,
                      fontSize: "15px",
                      marginBottom: "20px",
                    }}
                  >
                    To be continued: the next wet test is scheduled for May 30, when the team
                    will carry this spring development cycle into its next round of pool
                    operations and diagnostics.
                  </p>
                  <Link href="/" className="btn-secondary">
                    RETURN TO SITE
                    <IconArrowRight size={16} />
                  </Link>
                </div>

                <div className="card" style={{ padding: "28px" }}>
                  <p className="mono" style={{ color: "var(--text-muted)", marginBottom: "16px" }}>
                    QUICK NOTE
                  </p>
                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "15px" }}>
                    Development Blog 2026 is being updated milestone by milestone as the team
                    moves from wet tests into the next phase of pool operations and competition
                    prep.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
