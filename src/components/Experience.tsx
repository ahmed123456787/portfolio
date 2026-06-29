"use client";

import { motion } from "framer-motion";
import { experiences, type Experience as Exp } from "@/lib/data";
import { MapPin } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-accent"
        >
          03 — Experience
        </motion.p>

        <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl sm:text-5xl font-semibold tracking-tight max-w-2xl"
          >
            Where I&apos;ve shipped.
          </motion.h2>
          <p className="text-sm text-white/50">
            {experiences.length} roles · 3 countries
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <ExperienceItem key={`${exp.company}-${i}`} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ exp, index }: { exp: Exp; index: number }) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative grid md:grid-cols-2 gap-8 md:gap-0 items-start"
    >
      {/* Timeline node */}
      <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10">
        <div className="relative h-3 w-3 rounded-full bg-accent">
          <div className="absolute inset-0 animate-ping rounded-full bg-accent opacity-40" />
        </div>
      </div>

      {/* Empty side spacer */}
      <div className={isLeft ? "hidden md:block md:order-2" : "hidden md:block"} />

      {/* Card */}
      <div
        className={`pl-12 md:pl-0 ${
          isLeft ? "md:pr-12 md:text-right md:order-1" : "md:pl-12 md:order-2"
        }`}
      >
        <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md transition hover:border-white/20 hover:bg-white/[0.04]">
          {/* Dates + type */}
          <div
            className={`flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40 ${
              isLeft ? "md:justify-end" : ""
            }`}
          >
            <span>
              {exp.start} — {exp.end}
            </span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-white/60">
              {exp.type}
            </span>
            {exp.remote && (
              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-2 py-0.5 text-emerald-300/80">
                Remote
              </span>
            )}
          </div>

          {/* Role + company */}
          <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
            {exp.role}
          </h3>
          <p
            className={`mt-1 flex flex-wrap items-center gap-2 text-white/70 ${
              isLeft ? "md:justify-end" : ""
            }`}
          >
            <span className="font-medium text-white">{exp.company}</span>
            <span className="text-white/30">·</span>
            <span className="inline-flex items-center gap-1.5 text-sm text-white/55">
              <MapPin size={12} /> {exp.location}
            </span>
            <span className="text-base">{exp.flag}</span>
          </p>

          {/* Bullets */}
          <ul
            className={`mt-5 space-y-2.5 ${isLeft ? "md:text-right" : ""}`}
          >
            {exp.bullets.map((b, j) => (
              <li
                key={j}
                className="text-sm leading-relaxed text-white/65"
              >
                {b}
              </li>
            ))}
          </ul>

          {/* Stack */}
          <div
            className={`mt-5 flex flex-wrap gap-1.5 ${
              isLeft ? "md:justify-end" : ""
            }`}
          >
            {exp.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[11px] font-mono text-white/65"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
