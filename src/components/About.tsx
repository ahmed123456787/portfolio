"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const facts = [
  { label: "Based in", value: "Constantine, DZ" },
  { label: "Currently at", value: "Isovision · Montreal" },
  { label: "Specialty", value: "React · TypeScript" },
  { label: "Education", value: "B.Eng. Software Eng." },
];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-accent"
        >
          02 — About
        </motion.p>

        <div className="mt-8 grid gap-16 lg:grid-cols-[1.5fr_1fr] items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
              I build software that{" "}
              <span className="gradient-text">feels right</span> — front to back.
            </h2>
            <div className="mt-8 space-y-5 text-lg text-white/65 leading-relaxed max-w-2xl">
              <p>
                I&apos;m a React developer with deep{" "}
                <span className="text-white">TypeScript</span> expertise and a
                track record of building performant, accessible UIs at scale.
                I&apos;ve owned front-end features end-to-end — from component
                architecture and state management to API integration and
                real-time UI — for international teams across{" "}
                <span className="text-white">Canada</span>,{" "}
                <span className="text-white">Qatar</span>, and{" "}
                <span className="text-white">Algeria</span>.
              </p>
              <p>
                I care about <span className="text-white">architecture</span>,{" "}
                <span className="text-white">performance</span>, and{" "}
                <span className="text-white">developer ergonomics</span> — not
                just making things work, but making them right. SOLID, clean
                component boundaries, and integration tests are how I keep code
                durable.
              </p>
              <p>
                Outside of client work I dig into systems-y side projects (most
                recently, an F1 race-intelligence dashboard) as a way to push
                my own engineering depth.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white transition"
              >
                GitHub ↗
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white transition"
              >
                LinkedIn ↗
              </a>
            </div>
          </motion.div>

          {/* Quick facts grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md overflow-hidden"
          >
            {facts.map((f, i) => (
              <div
                key={f.label}
                className={`grid grid-cols-[100px_1fr] gap-4 px-5 py-4 ${
                  i !== facts.length - 1 ? "border-b border-white/5" : ""
                }`}
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 pt-1">
                  {f.label}
                </span>
                <span className="text-sm text-white/85 font-medium">
                  {f.value}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
