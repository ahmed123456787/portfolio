"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-accent"
        >
          06 — Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mt-6 font-display text-5xl sm:text-7xl md:text-8xl font-semibold leading-[1] tracking-tight"
        >
          Have an idea? <br />
          <span className="gradient-text">Let&apos;s build it.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 max-w-xl text-lg text-white/60"
        >
          Available for full-stack contracts and product builds. The fastest way
          to reach me is email — I respond within a day.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-12 flex flex-wrap items-center gap-3"
        >
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-medium text-black transition hover:bg-white/90"
          >
            <Mail size={16} />
            {profile.email}
            <span className="transition group-hover:translate-x-1">→</span>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-4 text-sm text-white/80 backdrop-blur-md hover:bg-white/10 hover:text-white transition"
          >
            <LinkedinIcon style={{ width: 16, height: 16 }} /> LinkedIn
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-4 text-sm text-white/80 backdrop-blur-md hover:bg-white/10 hover:text-white transition"
          >
            <GithubIcon style={{ width: 16, height: 16 }} /> GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
