"use client";

import Link from "next/link";
import Image from "next/image";
import { IconMail, IconBrandLinkedin, IconArrowRight } from "@tabler/icons-react";
import { teamMembers } from "@/lib/constants";

export function Team() {
  return (
    <section className="section-padding">
      <div className="container-main">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="section-label">Leadership</span>
          <h2 className="text-heading text-3xl md:text-4xl mb-6">
            Executive Board
          </h2>
          <p className="text-[var(--text-secondary)]">
            Our student leadership team drives innovation and excellence in underwater robotics.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {teamMembers.slice(0, 4).map((member, index) => (
            <div key={member.id} className="card">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 border border-[var(--border)] relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <span className="text-xs text-[var(--text-muted)]">#{String(index + 1).padStart(2, '0')}</span>
              </div>

              <h3 className="font-semibold mb-1">{member.name}</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">{member.role}</p>

              <div className="text-xs text-[var(--text-muted)] mb-4">
                <p>{member.major}</p>
                <p>{member.year}</p>
              </div>

              <div className="flex gap-2 pt-4 border-t border-[var(--border)]">
                <a
                  href={`mailto:${member.email}`}
                  className="p-2 border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--border-light)] transition-colors duration-150"
                  aria-label={`Email ${member.name}`}
                >
                  <IconMail size={16} />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--border-light)] transition-colors duration-150"
                  aria-label={`${member.name}'s LinkedIn`}
                >
                  <IconBrandLinkedin size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-12">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-[var(--text-primary)] font-medium hover:gap-3 transition-all duration-150"
          >
            View full team
            <IconArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
