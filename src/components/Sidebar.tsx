"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "./icons";

const sections = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
];

export function Sidebar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const pickActive = () => {
      const marker = window.innerHeight * 0.33;
      let current = sections[0].id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - marker <= 0) current = s.id;
      }
      setActive(current);
    };
    pickActive();
    window.addEventListener("scroll", pickActive, { passive: true });
    window.addEventListener("resize", pickActive);
    return () => {
      window.removeEventListener("scroll", pickActive);
      window.removeEventListener("resize", pickActive);
    };
  }, []);

  return (
    <aside className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:max-h-screen lg:w-[420px] lg:flex-col lg:justify-between lg:py-24 lg:pr-12">
      <div>
        <a
          href="#top"
          className="inline-block text-sm font-mono tracking-tight text-fg hover:text-fg-dim transition-colors"
        >
          {profile.name.toLowerCase().replace(" ", ".")}
        </a>

        <h1 className="mt-10 text-[44px] font-medium leading-[1.05] tracking-[-0.02em] text-fg">
          Zater Ahmed
        </h1>
        <p className="mt-3 text-base text-fg-dim leading-snug">
          Full-stack developer.
          <br />
          React, TypeScript, Django.
        </p>
        <p className="mt-6 max-w-[300px] text-sm text-fg-mute leading-relaxed">
          I build performant interfaces and the systems behind them for teams in
          Canada, Qatar, and Algeria.
        </p>

        <nav aria-label="Section navigation" className="mt-16 hidden lg:block">
          <ul className="space-y-3">
            {sections.map((s) => {
              const isActive = active === s.id;
              return (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="group flex items-center gap-4 py-1 text-xs font-mono uppercase tracking-[0.18em]"
                  >
                    <span
                      className={`h-px transition-all duration-300 ${
                        isActive
                          ? "w-14 bg-fg"
                          : "w-6 bg-fg-faint group-hover:w-10 group-hover:bg-fg-dim"
                      }`}
                    />
                    <span
                      className={
                        isActive
                          ? "text-fg"
                          : "text-fg-mute group-hover:text-fg-dim"
                      }
                    >
                      {s.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="mt-16 lg:mt-0">
        <div className="flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-fg-mute hover:text-fg transition-colors"
          >
            <GithubIcon style={{ width: 18, height: 18 }} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-fg-mute hover:text-fg transition-colors"
          >
            <LinkedinIcon style={{ width: 18, height: 18 }} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-fg-mute hover:text-fg transition-colors text-xs font-mono"
          >
            {profile.email}
          </a>
        </div>
        <div className="mt-4 flex items-center gap-2 text-xs font-mono text-fg-faint">
          <span className="h-1.5 w-1.5 rounded-full bg-fg-dim" />
          <span>Available for freelance</span>
        </div>
      </div>
    </aside>
  );
}
