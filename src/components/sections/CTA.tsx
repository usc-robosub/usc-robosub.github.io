"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { IconArrowRight, IconBrandDiscord } from "@tabler/icons-react";
import { externalLinks } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
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
          animate={isInView ? "visible" : "hidden"}
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
            READY TO DIVE IN?
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
            Join our team and be part of building the next generation of 
            autonomous underwater vehicles. No experience required — just passion!
          </motion.p>
          <motion.div
            variants={staggerItem}
            style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
          >
            <Link href="/join" className="btn-primary">
              JOIN THE TEAM
              <IconArrowRight size={16} />
            </Link>
            <a
              href={externalLinks.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <IconBrandDiscord size={18} />
              DISCORD
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
