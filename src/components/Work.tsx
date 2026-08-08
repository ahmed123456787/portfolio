import Image from "next/image";
import { projects, type Project } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Work() {
  return (
    <section id="work" className="scroll-mt-24 py-16">
      <SectionHeader label="Selected work" />

      <ul className="space-y-6">
        {projects.map((p, i) => (
          <Reveal key={p.slug} as="li" delay={i * 0.04}>
            <WorkItem project={p} />
          </Reveal>
        ))}
      </ul>

      <div className="mt-10">
        <a
          href="https://github.com/ahmed123456787"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 text-sm font-medium text-fg"
        >
          <span className="border-b border-fg-faint group-hover:border-fg transition-colors">
            View all projects on GitHub
          </span>
          <span
            aria-hidden
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            ↗
          </span>
        </a>
      </div>
    </section>
  );
}

function WorkItem({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="group relative -mx-4 grid grid-cols-1 gap-4 rounded-lg p-4 transition-colors hover:bg-hover md:grid-cols-[140px_1fr] md:gap-6"
    >
      <div className="relative aspect-video overflow-hidden rounded-md border border-line md:aspect-[4/3] md:mt-1">
        <Image
          src={project.image}
          alt=""
          fill
          sizes="(min-width: 768px) 140px, 100vw"
          className="object-cover object-top grayscale-[0.15] transition duration-500 group-hover:grayscale-0 group-hover:scale-[1.03]"
        />
      </div>

      <div>
        <div className="flex items-baseline gap-3">
          <h3 className="text-base font-medium text-fg group-hover:text-fg transition-colors">
            {project.title}
            <span
              aria-hidden
              className="ml-1.5 inline-block text-fg-mute transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              ↗
            </span>
          </h3>
          <span className="num text-xs font-mono text-fg-faint">
            {project.year}
          </span>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-fg-dim">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-1.5">
          {project.stack.map((s) => (
            <li
              key={s}
              className="text-[11px] font-mono text-fg-mute"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}
