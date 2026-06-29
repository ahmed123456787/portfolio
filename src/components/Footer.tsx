import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-white/40 font-mono">
          © {new Date().getFullYear()} {profile.name} — Built with Next.js +
          R3F.
        </p>
        <p className="text-xs text-white/30 font-mono">
          {profile.location} · open to remote
        </p>
      </div>
    </footer>
  );
}
