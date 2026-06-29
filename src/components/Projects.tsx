"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/lib/data";

export function Projects() {
  return (
    <section id="work" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-accent"
        >
          05 — Selected work
        </motion.p>

        <div className="mt-6 flex items-end justify-between flex-wrap gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl sm:text-5xl font-semibold tracking-tight max-w-2xl"
          >
            Things I&apos;ve shipped.
          </motion.h2>
          <p className="text-sm text-white/50">
            {projects.length} projects · live
          </p>
        </div>

        <div className="mt-20 flex flex-col gap-28">
          {projects.map((p, idx) => (
            <ProjectFeature key={p.slug} project={p} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectFeature({ project, index }: { project: Project; index: number }) {
  const reversed = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center"
    >
      {/* Screenshot */}
      <div
        className={`relative ${reversed ? "lg:order-2" : ""}`}
      >
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-surface"
        >
          {/* Accent glow */}
          <div
            className={`pointer-events-none absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-br ${project.accent} opacity-30 blur-3xl transition group-hover:opacity-60`}
          />

          {/* Browser chrome */}
          <div className="flex items-center gap-1.5 border-b border-white/10 bg-black/60 px-4 py-2.5 backdrop-blur-md">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="ml-4 truncate font-mono text-[11px] text-white/40">
              {project.url.replace(/^https?:\/\//, "")}
            </span>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-top transition duration-700 group-hover:scale-[1.03]"
              priority={index < 2}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />

            {/* Hover hint */}
            <div className="pointer-events-none absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-black opacity-0 transition group-hover:opacity-100">
              Visit live <ArrowUpRight size={14} />
            </div>
          </div>
        </a>
      </div>

      {/* Content */}
      <div className={reversed ? "lg:order-1" : ""}>
        <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">
          <span>{project.year}</span>
          <span className="h-1 w-1 rounded-full bg-white/30" />
          <span>{project.role}</span>
        </div>

        <h3 className="mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight">
          {project.title}
        </h3>
        <p
          className={`mt-2 font-display text-lg bg-gradient-to-r ${project.accent} bg-clip-text text-transparent`}
        >
          {project.tagline}
        </p>

        <p className="mt-5 text-white/65 leading-relaxed">
          {project.description}
        </p>

        <ul className="mt-6 space-y-2.5">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-sm text-white/70 leading-relaxed">
              <span
                className={`mt-2 h-1 w-1 shrink-0 rounded-full bg-gradient-to-r ${project.accent}`}
              />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap items-center gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-white/70"
            >
              {s}
            </span>
          ))}
        </div>

        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="group mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white/90 backdrop-blur-md transition hover:bg-white hover:text-black"
        >
          Visit live site
          <ArrowUpRight
            size={16}
            className="transition group-hover:rotate-45"
          />
        </a>
      </div>
    </motion.article>
  );
}
