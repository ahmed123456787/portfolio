export function SectionHeader({ label }: { label: string }) {
  return (
    <div className="sticky top-0 z-10 -mx-6 mb-2 bg-bg/85 px-6 py-4 backdrop-blur-sm md:-mx-12 md:px-12 lg:hidden">
      <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-fg">
        {label}
      </h2>
    </div>
  );
}
