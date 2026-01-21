"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { IconMenu2, IconX, IconChevronDown } from "@tabler/icons-react";
import { navbarVariants, mobileMenuVariants, navDropdown, staggerContainerFast, staggerItem, easing } from "@/lib/animations";

const navLinks = [
  {
    label: "ABOUT",
    href: "/about",
    dropdown: [
      { label: "OUR STORY", href: "/about" },
      { label: "THE BARRACUDA", href: "/about#barracuda" },
      { label: "HISTORY", href: "/about#history" },
    ],
  },
  {
    label: "TEAM",
    href: "/team",
  },
  {
    label: "SPONSORS",
    href: "/sponsors",
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? "rgba(10, 10, 10, 0.95)" : "rgba(10, 10, 10, 0.8)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          transition: "all 0.3s ease",
        }}
      >
        <div className="container">
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "72px",
            }}
          >
            {/* Logo */}
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
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

            {/* Desktop Nav */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "32px",
              }}
              className="hidden md:flex"
            >
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  style={{ position: "relative" }}
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="nav-link"
                    style={{
                      color: pathname === link.href ? "var(--text-primary)" : "var(--text-muted)",
                    }}
                  >
                    {link.label}
                    {link.dropdown && (
                      <IconChevronDown
                        size={14}
                        style={{
                          transition: "transform 0.2s ease",
                          transform: activeDropdown === link.label ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.dropdown && activeDropdown === link.label && (
                      <motion.div
                        variants={navDropdown}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        style={{
                          position: "absolute",
                          top: "100%",
                          left: "50%",
                          transform: "translateX(-50%)",
                          marginTop: "8px",
                          background: "var(--bg-card)",
                          border: "1px solid var(--border)",
                          padding: "8px",
                          minWidth: "180px",
                        }}
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            style={{
                              display: "block",
                              padding: "10px 16px",
                              fontFamily: "var(--font-mono, monospace)",
                              fontSize: "11px",
                              letterSpacing: "0.1em",
                              color: "var(--text-secondary)",
                              textDecoration: "none",
                              transition: "all 0.2s ease",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = "var(--text-primary)";
                              e.currentTarget.style.background = "var(--bg-secondary)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = "var(--text-secondary)";
                              e.currentTarget.style.background = "transparent";
                            }}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div
              style={{ display: "flex", alignItems: "center", gap: "12px" }}
              className="hidden md:flex"
            >
              <Link
                href="/join"
                className="btn-secondary"
                style={{ height: "40px", fontSize: "11px", padding: "0 20px" }}
              >
                JOIN US
              </Link>
              <a
                href="https://github.com/usc-robosub"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ height: "40px", fontSize: "11px", padding: "0 20px" }}
              >
                GITHUB
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden"
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                cursor: "pointer",
                padding: "8px",
              }}
              aria-label="Toggle menu"
            >
              {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99,
              background: "var(--bg-primary)",
              paddingTop: "100px",
            }}
            className="md:hidden"
          >
            <motion.div
              className="container"
              variants={staggerContainerFast}
              initial="hidden"
              animate="visible"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={staggerItem}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    style={{
                      fontSize: "32px",
                      fontWeight: 700,
                      textDecoration: "none",
                      color: pathname === link.href ? "#fff" : "var(--text-secondary)",
                      textTransform: "uppercase",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={staggerItem} style={{ marginTop: "24px" }}>
                <Link
                  href="/join"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary"
                  style={{ width: "fit-content" }}
                >
                  JOIN THE TEAM
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
