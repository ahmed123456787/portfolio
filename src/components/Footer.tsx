export function Footer() {
  return (
    <footer className="mt-24 border-t border-line py-8 text-xs font-mono text-fg-mute">
      <p className="leading-relaxed">
        Designed and built in Next.js and Tailwind. Text set in Inter and
        JetBrains Mono. Deployed on Vercel.
      </p>
      <p className="mt-2 text-fg-faint">
        © {new Date().getFullYear()} Zater Ahmed
      </p>
    </footer>
  );
}
