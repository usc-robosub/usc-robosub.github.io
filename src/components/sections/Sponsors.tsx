"use client";

import Link from "next/link";
import { IconArrowRight, IconBuildingSkyscraper } from "@tabler/icons-react";
import { sponsors } from "@/lib/constants";

export function Sponsors() {
  const allSponsors = [
    ...sponsors.platinum.map(s => ({ ...s, tier: "Platinum" })),
    ...sponsors.gold.map(s => ({ ...s, tier: "Gold" })),
  ];

  return (
    <section className="section-padding bg-[var(--bg-secondary)]">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[var(--border)]" />

      <div className="container-main">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="section-label">Partners</span>
          <h2 className="text-heading text-3xl md:text-4xl mb-6">
            Our Sponsors
          </h2>
          <p className="text-[var(--text-secondary)]">
            We&apos;re grateful for the support of industry leaders who help fund our work.
          </p>
        </div>

        {/* Sponsors grid */}
        <div className="grid md:grid-cols-3 gap-4 max-w-3xl">
          {allSponsors.map((sponsor) => (
            <div key={sponsor.name} className="card flex flex-col items-center text-center">
              <span className="text-mono text-[var(--text-muted)] mb-4">{sponsor.tier}</span>

              <div className="w-16 h-16 border border-[var(--border)] flex items-center justify-center mb-4">
                <IconBuildingSkyscraper size={32} className="text-[var(--text-muted)]" />
              </div>

              <h3 className="font-semibold">{sponsor.name}</h3>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <Link
            href="/sponsors"
            className="inline-flex items-center gap-2 text-[var(--text-primary)] font-medium hover:gap-3 transition-all duration-150"
          >
            Become a sponsor
            <IconArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
