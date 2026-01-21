"use client";

import Link from "next/link";
import { IconArrowRight, IconBrandGithub } from "@tabler/icons-react";
import { orgInfo, externalLinks } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-grid" />

      <div className="relative container-main py-32 text-center">
        <span className="section-label">USC Fluid Robotics Lab</span>

        <h1 className="text-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8 max-w-4xl mx-auto">
          Autonomous Underwater Vehicles
        </h1>

        <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
          {orgInfo.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/join" className="btn-primary">
            Join the Team
            <IconArrowRight size={18} />
          </Link>
          <a
            href={externalLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <IconBrandGithub size={18} />
            GitHub
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-mono text-[var(--text-muted)]">Scroll</span>
        <div className="w-px h-8 bg-[var(--border)]" />
      </div>
    </section>
  );
}
