"use client";

import { motion } from "framer-motion";
import { profile, skills } from "@/lib/data";
import { ArrowDown, MapPin, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { ProfileImage } from "./ProfileImage";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  // duplicate marquee items for seamless loop
  const marqueeItems = [...skills.slice(0, 14), ...skills.slice(0, 14)];

  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden pt-32 pb-20"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="pointer-events-none absolute -top-40 left-1/2 z-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-accent/20 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 z-0 h-[500px] w-[500px] rounded-full bg-accent-2/10 blur-[160px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        {/* Top metadata bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-wrap items-center justify-between gap-3 border-y border-white/5 py-3 font-mono text-[11px] uppercase tracking-[0.25em] text-white/40"
        >
          <span>Portfolio / 2026</span>
          <span className="flex items-center gap-2">
            <MapPin size={11} /> {profile.location}
          </span>
          <span className="hidden sm:inline">
            Available · Open to remote
          </span>
        </motion.div>

        {/* Main grid */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16 items-center">
          {/* Left: Big typography */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Currently shipping at{" "}
              <span className="text-white">{profile.currentlyAt.company}</span>
              <span className="text-white/40">·</span>
              <span className="text-white/60">
                {profile.currentlyAt.location}
              </span>
            </motion.div>

            <h1 className="mt-8 font-display font-semibold leading-[0.92] tracking-[-0.04em]">
              <motion.span
                initial={{ opacity: 0, y: 40, rotateX: -15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
                className="block text-[clamp(3rem,9vw,8rem)] text-white"
              >
                Zater
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40, rotateX: -15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.9, delay: 0.28, ease: EASE }}
                className="block text-[clamp(3rem,9vw,8rem)] gradient-text"
              >
                Ahmed.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
              className="mt-6 max-w-xl text-lg sm:text-xl text-white/65 leading-relaxed"
            >
              Full Stack Developer specialising in{" "}
              <span className="text-white">React</span> &{" "}
              <span className="text-white">TypeScript</span>. I build performant
              UIs and the systems behind them — shipping for teams across{" "}
              <span className="text-white">Canada</span>,{" "}
              <span className="text-white">Qatar</span>, and{" "}
              <span className="text-white">Algeria</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.62, ease: EASE }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
              >
                See selected work
                <span className="transition group-hover:translate-x-1">→</span>
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-white/85 backdrop-blur-md hover:bg-white/10 hover:text-white transition"
              >
                <Mail size={15} /> Get in touch
              </a>
              <div className="ml-1 flex items-center gap-1">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="rounded-full p-3 text-white/60 hover:text-white hover:bg-white/10 transition"
                >
                  <GithubIcon style={{ width: 18, height: 18 }} />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-full p-3 text-white/60 hover:text-white hover:bg-white/10 transition"
                >
                  <LinkedinIcon style={{ width: 18, height: 18 }} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: Portrait card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: EASE }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-accent/30 via-fuchsia-500/15 to-accent-2/30 blur-3xl" />

            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-surface/80 backdrop-blur-xl">
              {/* Photo */}
              <div className="relative aspect-[4/5] overflow-hidden">
                {/* Subtle accent duotone tint */}
                <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-tr from-accent/20 via-transparent to-accent-2/15 mix-blend-overlay" />
                {/* Vignette */}
                <div className="pointer-events-none absolute inset-0 z-20 shadow-[inset_0_0_140px_rgba(0,0,0,0.65)]" />
                {/* Bottom fade for badge legibility */}
                <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                <ProfileImage />

                {/* Floating badges */}
                <div className="absolute top-4 left-4 z-30 rounded-full border border-white/15 bg-black/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/80 backdrop-blur-md">
                  v_2026
                </div>
                <div className="absolute top-4 right-4 z-30 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-300 backdrop-blur-md">
                  • Available
                </div>

                {/* Identity card overlay */}
                <div className="absolute inset-x-4 bottom-4 z-30 flex items-end justify-between gap-3">
                  <div>
                    <p className="font-display text-xl font-semibold tracking-tight text-white">
                      {profile.name}
                    </p>
                    <p className="mt-0.5 text-xs text-white/70">
                      {profile.role}
                    </p>
                  </div>
                  <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/75 backdrop-blur-md">
                    DZ → ∞
                  </span>
                </div>
              </div>

              {/* Stats footer */}
              <div className="grid grid-cols-3 divide-x divide-white/10 border-t border-white/10">
                <Stat label="Years" value="1.5+" />
                <Stat label="Projects" value="4+" />
                <Stat label="Countries" value="3" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Marquee strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="relative mt-20 overflow-hidden border-y border-white/5 py-5"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />

          <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
            {marqueeItems.map((s, i) => (
              <span
                key={`${s.name}-${i}`}
                className="font-display text-2xl font-medium text-white/40 hover:text-white transition"
              >
                {s.name}
                <span className="ml-12 text-white/15">/</span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-10 flex items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-white/30 hover:text-white/70 transition"
        >
          Scroll to explore
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
          >
            <ArrowDown size={12} />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-3 py-4 text-center">
      <p className="font-display text-2xl font-semibold tracking-tight">
        {value}
      </p>
      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
        {label}
      </p>
    </div>
  );
}
