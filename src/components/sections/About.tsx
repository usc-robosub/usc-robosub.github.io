"use client";

import Link from "next/link";
import { IconArrowRight, IconTarget, IconRocket, IconBrain, IconUsers } from "@tabler/icons-react";
import { orgInfo, coreValues } from "@/lib/constants";

const iconMap = {
  excellence: IconTarget,
  innovation: IconRocket,
  learning: IconBrain,
  collaboration: IconUsers,
};

export function About() {
  return (
    <section className="section-padding">
      <div className="container-main">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">About USC AUV</span>
          <h2 className="text-heading text-3xl md:text-4xl lg:text-5xl">
            Engineering the Future of Underwater Robotics
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mt-4">
            {orgInfo.description}
          </p>
        </div>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {coreValues.map((value, index) => {
            const Icon = iconMap[value.id as keyof typeof iconMap];
            return (
              <div key={value.id} className="card text-center">
                <div className="text-xs text-[var(--text-muted)] mb-6">0{index + 1}</div>

                <div className="w-12 h-12 border border-[var(--border)] flex items-center justify-center mb-6 mx-auto">
                  <Icon size={24} className="text-[var(--text-secondary)]" />
                </div>

                <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>

        {/* Link */}
        <div className="text-center mt-12">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-150"
          >
            Learn more about our journey
            <IconArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
