"use client";

import Link from "next/link";
import Image from "next/image";
import { IconBrandGithub, IconBrandDiscord, IconBrandLinkedin, IconArrowUpRight } from "@tabler/icons-react";

const navLinks = [
  { href: "/about", label: "ABOUT" },
  { href: "/team", label: "TEAM" },
  { href: "/sponsors", label: "SPONSORS" },
  { href: "/join", label: "JOIN US" },
];

const externalLinks = [
  { href: "https://github.com/usc-robosub", label: "GITHUB" },
  { href: "https://discord.gg/7jPvyPWc8T", label: "DISCORD" },
  { href: "https://www.linkedin.com/company/auv-usc/", label: "LINKEDIN" },
];

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        marginTop: "auto",
        background: "var(--bg-primary)",
      }}
    >
      <div className="container">
        {/* Main footer content */}
        <div
          style={{
            padding: "80px 0 48px",
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
            gap: "48px",
          }}
          className="hero-grid"
        >
          {/* Brand */}
          <div>
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "20px",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Image
                src="/auv-logo.png"
                alt="USC AUV Logo"
                width={40}
                height={40}
                style={{ filter: "invert(1)" }}
              />
              <span
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontWeight: 600,
                  fontSize: "14px",
                  letterSpacing: "0.1em",
                }}
              >
                USC AUV
              </span>
            </Link>
            <p
              style={{
                fontSize: "14px",
                color: "var(--text-muted)",
                maxWidth: "280px",
                lineHeight: 1.7,
              }}
            >
              Engineering autonomous underwater vehicles at the University of
              Southern California since 2005.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="mono"
              style={{ color: "var(--text-muted)", marginBottom: "20px" }}
            >
              NAVIGATION
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "12px",
                    letterSpacing: "0.08em",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-secondary)";
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <p
              className="mono"
              style={{ color: "var(--text-muted)", marginBottom: "20px" }}
            >
              RESOURCES
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {externalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "12px",
                    letterSpacing: "0.08em",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-secondary)";
                  }}
                >
                  {link.label}
                  <IconArrowUpRight size={12} />
                </a>
              ))}
            </div>
          </div>

          {/* Social / Connect */}
          <div>
            <p
              className="mono"
              style={{ color: "var(--text-muted)", marginBottom: "20px" }}
            >
              CONNECT
            </p>
            <div style={{ display: "flex", gap: "12px" }}>
              <a
                href="https://github.com/usc-robosub"
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
                  e.currentTarget.style.borderColor = "var(--border-light)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-muted)";
                  e.currentTarget.style.borderColor = "var(--border)";
                }}
                aria-label="GitHub"
              >
                <IconBrandGithub size={20} />
              </a>
              <a
                href="https://discord.gg/7jPvyPWc8T"
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
                  e.currentTarget.style.borderColor = "var(--border-light)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-muted)";
                  e.currentTarget.style.borderColor = "var(--border)";
                }}
                aria-label="Discord"
              >
                <IconBrandDiscord size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/auv-usc/"
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
                  e.currentTarget.style.borderColor = "var(--border-light)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-muted)";
                  e.currentTarget.style.borderColor = "var(--border)";
                }}
                aria-label="Linkedin"
              >
                <IconBrandLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            padding: "24px 0",
            borderTop: "1px solid var(--border)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "11px",
              letterSpacing: "0.1em",
              color: "var(--text-muted)",
            }}
          >
            © {new Date().getFullYear()} USC AUTONOMOUS UNDERWATER VEHICLE TEAM
          </p>
          <p
            className="mono"
            style={{ color: "var(--text-muted)" }}
          >
            VITERBI SCHOOL OF ENGINEERING
          </p>
        </div>
      </div>
    </footer>
  );
}
