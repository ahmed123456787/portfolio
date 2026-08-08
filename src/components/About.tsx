import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 first:pt-0">
      <SectionHeader label="About" />

      <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-fg-dim">
        <Reveal as="p">
          I&apos;m a full-stack developer with deep{" "}
          <span className="text-fg">TypeScript</span> and{" "}
          <span className="text-fg">React</span> expertise. Most of my day is
          spent shipping features into large production codebases and untangling
          the systems that support them — API contracts, data fetching, state,
          and the boring-but-critical parts most portfolios skip.
        </Reveal>

        <Reveal as="p" delay={0.05}>
          I currently work part-time with{" "}
          <a
            href="https://isovision.com"
            target="_blank"
            rel="noreferrer"
            className="text-fg underline underline-offset-4 decoration-fg-faint hover:decoration-fg transition-colors"
          >
            Isovision
          </a>{" "}
          in Montreal on a 2M+ line React codebase, and take on selective
          freelance builds for e-commerce and SaaS teams. Before that I&apos;ve
          shipped for teams in Qatar and Algeria.
        </Reveal>

        <Reveal as="p" delay={0.1}>
          I care about <span className="text-fg">architecture</span>,{" "}
          <span className="text-fg">performance</span>, and{" "}
          <span className="text-fg">developer ergonomics</span> — not just
          making things work, but making them durable. When I&apos;m not on
          client work, I dig into systems-y side projects (most recently an F1
          telemetry dashboard) to push my own depth.
        </Reveal>
      </div>
    </section>
  );
}
