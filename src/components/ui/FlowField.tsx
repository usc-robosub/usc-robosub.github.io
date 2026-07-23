"use client";

import { useEffect, useRef } from "react";

/**
 * Seeded generative flow field. Particles advect through a value-noise vector
 * field, leaving faint trails — reads as ocean currents / sonar drift. Native
 * canvas (no p5), deterministic by `seed`, and quiet under reduced motion.
 */

// mulberry32 — deterministic PRNG so the field is reproducible per seed.
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const fade = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// 3D value noise over a seeded hash grid. Third axis is time → the field morphs.
function makeNoise(seed: number) {
  const rand = mulberry32(seed);
  const size = 256;
  const perm = new Float32Array(size * size);
  for (let i = 0; i < perm.length; i++) perm[i] = rand();
  const at = (x: number, y: number) =>
    perm[((x & (size - 1)) + (y & (size - 1)) * size) % perm.length];

  return (x: number, y: number, z: number) => {
    const xi = Math.floor(x);
    const yi = Math.floor(y);
    const zi = Math.floor(z);
    const xf = fade(x - xi);
    const yf = fade(y - yi);
    const zf = fade(z - zi);
    // Blend two time slices of the 2D grid.
    const slice = (zc: number) => {
      const o = (zc & 15) * 37;
      const v00 = at(xi + o, yi);
      const v10 = at(xi + 1 + o, yi);
      const v01 = at(xi + o, yi + 1);
      const v11 = at(xi + 1 + o, yi + 1);
      return lerp(lerp(v00, v10, xf), lerp(v01, v11, xf), yf);
    };
    return lerp(slice(zi), slice(zi + 1), zf);
  };
}

type FlowFieldProps = {
  seed?: number;
  className?: string;
  style?: React.CSSProperties;
};

export function FlowField({ seed = 1729, className, style }: FlowFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const noise = makeNoise(seed);
    const rand = mulberry32(seed ^ 0x9e3779b9);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    type P = { x: number; y: number; px: number; py: number; signal: boolean };
    let particles: P[] = [];

    const NOISE_SCALE = 0.0016; // spatial frequency of the currents
    const TIME_SCALE = 0.00006; // how fast the field morphs
    const SPEED = 0.9;

    const spawn = (): P => {
      const x = rand() * width;
      const y = rand() * height;
      return { x, y, px: x, py: y, signal: rand() < 0.08 };
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      if (rect.width < 1 || rect.height < 1) return; // not laid out yet
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, width, height);
      // Particle density scales with area, capped for perf.
      const count = Math.min(1100, Math.floor((width * height) / 1300));
      particles = Array.from({ length: count }, spawn);
    };

    const step = (t: number) => {
      // Fade previous frame toward the background for trailing. Lower alpha =
      // longer-lived streamlines.
      ctx.fillStyle = "rgba(10, 10, 10, 0.032)";
      ctx.fillRect(0, 0, width, height);

      ctx.lineWidth = 1;
      for (const p of particles) {
        const angle =
          noise(p.x * NOISE_SCALE, p.y * NOISE_SCALE, t * TIME_SCALE) * Math.PI * 4;
        p.px = p.x;
        p.py = p.y;
        p.x += Math.cos(angle) * SPEED;
        p.y += Math.sin(angle) * SPEED;

        // Re-seed particles that drift off-canvas.
        if (p.x < -5 || p.x > width + 5 || p.y < -5 || p.y > height + 5) {
          Object.assign(p, spawn());
          continue;
        }

        ctx.strokeStyle = p.signal
          ? "rgba(0, 255, 136, 0.38)"
          : "rgba(255, 255, 255, 0.18)";
        ctx.beginPath();
        ctx.moveTo(p.px, p.py);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
      }
    };

    let raf = 0;
    let running = true;
    let started = false;
    const loop = (t: number) => {
      if (running) step(t);
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (started || width < 1) return;
      started = true;
      if (reduced) {
        // Static field: advance a handful of frames, then freeze.
        for (let i = 0; i < 240; i++) step(i * 16);
      } else {
        raf = requestAnimationFrame(loop);
      }
    };

    // ResizeObserver measures the parent once it actually has a size (handles
    // panes/tabs that lay out after mount), then keeps it in sync.
    const ro = new ResizeObserver(() => {
      resize();
      start();
    });
    if (canvas.parentElement) ro.observe(canvas.parentElement);
    resize();
    start();

    // Pause when the tab is hidden — RAF trails would otherwise clump.
    const onVisibility = () => {
      running = document.visibilityState === "visible";
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [seed]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
        pointerEvents: "none",
        ...style,
      }}
    />
  );
}
