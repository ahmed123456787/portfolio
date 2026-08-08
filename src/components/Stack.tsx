import { skills, skillCategories } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Stack() {
  return (
    <section id="stack" className="scroll-mt-24 py-16">
      <SectionHeader label="Stack" />

      <dl className="space-y-6">
        {skillCategories.map((cat, i) => {
          const items = skills.filter((s) => s.category === cat);
          if (!items.length) return null;
          return (
            <Reveal key={cat} delay={i * 0.03}>
              <div className="grid grid-cols-[110px_1fr] gap-6">
                <dt className="pt-0.5 text-xs font-mono uppercase tracking-wider text-fg-mute">
                  {cat}
                </dt>
                <dd className="text-[14px] leading-relaxed text-fg">
                  {items.map((s, idx) => (
                    <span key={s.name}>
                      {s.name}
                      {idx < items.length - 1 && (
                        <span className="text-fg-faint">, </span>
                      )}
                    </span>
                  ))}
                </dd>
              </div>
            </Reveal>
          );
        })}
      </dl>
    </section>
  );
}
