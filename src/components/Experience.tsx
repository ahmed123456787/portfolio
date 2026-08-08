import { experiences, type Experience as Exp } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-16">
      <SectionHeader label="Experience" />

      <ol className="space-y-8">
        {experiences.map((exp, i) => (
          <Reveal key={`${exp.company}-${i}`} as="li" delay={i * 0.04}>
            <ExperienceRow exp={exp} />
          </Reveal>
        ))}
      </ol>

      <div className="mt-10">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 text-sm font-medium text-fg"
        >
          <span className="border-b border-fg-faint group-hover:border-fg transition-colors">
            View full résumé
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

function ExperienceRow({ exp }: { exp: Exp }) {
  return (
    <article className="group relative -mx-4 grid grid-cols-1 gap-3 rounded-lg p-4 transition-colors hover:bg-hover md:grid-cols-[110px_1fr] md:gap-6">
      <p className="num text-xs font-mono uppercase tracking-wider text-fg-mute md:mt-1">
        {exp.start} <span className="text-fg-faint">—</span> {exp.end}
      </p>

      <div>
        <h3 className="text-[15px] font-medium text-fg leading-snug">
          {exp.role} <span className="text-fg-dim">· {exp.company}</span>
        </h3>
        <p className="mt-1 text-xs font-mono text-fg-mute">
          {[
            exp.location,
            exp.remote && exp.location.toLowerCase() !== "remote" ? "Remote" : null,
            exp.type,
          ]
            .filter(Boolean)
            .join(" · ")}
        </p>

        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-fg-dim">
          {exp.bullets.map((b, j) => (
            <li key={j}>{b}</li>
          ))}
        </ul>

        <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-1.5">
          {exp.stack.map((s) => (
            <li
              key={s}
              className="text-[11px] font-mono text-fg-mute"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
