import { profile } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-16">
      <SectionHeader label="Contact" />

      <Reveal as="p" className="text-[15px] leading-relaxed text-fg-dim">
        The fastest way to reach me is email — I respond within a day. Open to
        full-stack contracts, product builds, and interesting freelance work.
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-8">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-baseline gap-3 text-fg"
          >
            <span className="text-xl font-medium tracking-tight border-b border-fg-faint group-hover:border-fg transition-colors">
              {profile.email}
            </span>
            <span
              aria-hidden
              className="text-fg-mute transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
