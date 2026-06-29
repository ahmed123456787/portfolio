"use client";

import { motion } from "framer-motion";
import { skills, skillCategories } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-accent"
        >
          04 — Stack
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-6 font-display text-4xl sm:text-5xl font-semibold tracking-tight max-w-2xl"
        >
          Tools I reach for.
        </motion.h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skillCategories.map((cat, idx) => {
            const items = skills.filter((s) => s.category === cat);
            if (!items.length) return null;
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md hover:border-white/20 transition"
              >
                <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-accent/0 via-accent/0 to-accent-2/0 opacity-0 transition group-hover:opacity-10 group-hover:from-accent group-hover:to-accent-2" />
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                  {cat}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {items.map((s) => (
                    <li
                      key={s.name}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80"
                    >
                      {s.name}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
