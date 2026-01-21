"use client";

const stats = [
  { value: "20+", label: "Years Active" },
  { value: "8", label: "Thrusters" },
  { value: "45kg", label: "Vehicle Mass" },
  { value: "50+", label: "Team Members" },
];

export function Stats() {
  return (
    <section className="relative py-20 bg-[var(--bg-secondary)]">
      <div className="absolute top-0 left-0 right-0 h-px bg-[var(--border)]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[var(--border)]" />

      <div className="container-main">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="stat-number">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
