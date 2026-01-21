"use client";

import { IconCube, IconBrandDocker, IconCpu, IconCircuitDiode } from "@tabler/icons-react";
import { technologies } from "@/lib/constants";

const iconMap = {
  solidworks: IconCube,
  ros: IconCpu,
  docker: IconBrandDocker,
  altium: IconCircuitDiode,
};

export function Technologies() {
  return (
    <section className="relative section-padding bg-[var(--bg-secondary)]">
      <div className="absolute top-0 left-0 right-0 h-px bg-[var(--border)]" />

      <div className="container-main">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">Tech Stack</span>
          <h2 className="text-heading text-3xl md:text-4xl">
            Built with Industry-Standard Tools
          </h2>
          <p className="text-[var(--text-secondary)] mt-4">
            We leverage cutting-edge technologies throughout our development process.
          </p>
        </div>

        {/* Tech grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {technologies.map((tech, index) => {
            const Icon = iconMap[tech.id as keyof typeof iconMap];
            return (
              <div key={tech.id} className="card text-center">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-mono text-[var(--text-muted)]">{tech.category}</span>
                  <span className="text-xs text-[var(--text-muted)]">0{index + 1}</span>
                </div>

                <div className="w-12 h-12 border border-[var(--border)] flex items-center justify-center mb-6 mx-auto">
                  <Icon size={24} className="text-[var(--text-secondary)]" />
                </div>

                <h3 className="font-semibold text-lg mb-3">{tech.name}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{tech.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
