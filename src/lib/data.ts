export const profile = {
  name: "Zater Ahmed",
  role: "Full Stack Developer",
  specialty: "React · TypeScript · Django",
  tagline:
    "I build performant, accessible React interfaces and the systems behind them — shipping for teams across Canada, Qatar, and Algeria.",
  location: "Constantine, Algeria",
  phone: "+213 783 282 501",
  email: "zaterahmed62@gmail.com",
  github: "https://github.com/ahmed123456787",
  linkedin: "https://www.linkedin.com/in/zaterahmed",
  // Drop a professional headshot at /public/profile.jpg to override the GitHub avatar
  avatar: "/profile.jpg",
  avatarFallback: "https://avatars.githubusercontent.com/u/124626957?v=4",
  currentlyAt: { company: "Isovision", location: "Montreal" },
};

export const skills = [
  { name: "TypeScript", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "Java", category: "Languages" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "React Router", category: "Frontend" },
  { name: "RTK Query", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "WebSockets", category: "Realtime" },
  { name: "Django Channels", category: "Realtime" },
  { name: "Celery", category: "Realtime" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "Django", category: "Backend" },
  { name: "DRF", category: "Backend" },
  { name: "FastAPI", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MySQL", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "Prisma", category: "Database" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS", category: "DevOps" },
  { name: "Nginx", category: "DevOps" },
  { name: "GitHub Actions", category: "DevOps" },
  { name: "Railway", category: "DevOps" },
  { name: "LangChain", category: "AI" },
  { name: "LangGraph", category: "AI" },
];

export const skillCategories = [
  "Languages",
  "Frontend",
  "Backend",
  "Realtime",
  "Database",
  "DevOps",
  "AI",
] as const;

export type Experience = {
  role: string;
  company: string;
  location: string;
  flag: string;
  remote: boolean;
  type: "Full-Time" | "Part-Time" | "Freelance" | "Internship";
  start: string;
  end: string;
  bullets: string[];
  stack: string[];
  url?: string;
};

export const experiences: Experience[] = [
  {
    role: "React / Front-End Developer",
    company: "Isovision",
    location: "Montreal, Canada",
    flag: "🇨🇦",
    remote: true,
    type: "Part-Time",
    start: "Mar 2026",
    end: "Present",
    bullets: [
      "Working in a 2M+ line React codebase, shipping features across multiple modules — including a CSV report export flow — and resolving production UI bugs.",
      "Cut perceived load time via memoization and consolidated data fetching with RTK Query.",
    ],
    stack: ["React", "RTK Query", "REST APIs", "React DevTools"],
  },
  {
    role: "Front-End Freelancer",
    company: "Self-Employed",
    location: "Remote",
    flag: "🌍",
    remote: true,
    type: "Freelance",
    start: "Oct 2025",
    end: "Present",
    bullets: [
      "Delivered 3 full-stack web apps end-to-end for e-commerce and service clients — owning UI design, component architecture, and API integration. All shipped on time and to spec.",
      "Translated ambiguous client requirements into UI specs through clear, async written communication.",
    ],
    stack: ["React", "Next.js", "TypeScript", "Tailwind", "Node.js"],
  },
  {
    role: "React / Full-Stack Developer",
    company: "Be My Sense",
    location: "Qatar",
    flag: "🇶🇦",
    remote: true,
    type: "Full-Time",
    start: "Jul 2025",
    end: "Oct 2025",
    bullets: [
      "Built a responsive, SEO-optimised Next.js + Tailwind marketing site with TypeScript and SSR — improving organic search visibility by 40%.",
      "Developed a reusable React component library aligned with the design system, accelerating feature delivery across the project.",
    ],
    stack: ["TypeScript", "React", "Next.js", "Tailwind", "Node.js", "AWS"],
  },
  {
    role: "AI Agent Intern",
    company: "Masytero Delivery",
    location: "Algeria",
    flag: "🇩🇿",
    remote: true,
    type: "Internship",
    start: "Jul 2025",
    end: "Sep 2025",
    bullets: [
      "Built an interactive React demo interface for an AI-powered inventory-management agent — real-time stock alerts and restocking dashboards.",
      "Engineered validated Pydantic schemas on the FastAPI backend to improve data reliability feeding into the React front end.",
    ],
    stack: ["React", "Python", "FastAPI", "LangGraph", "LangChain"],
  },
];

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  year: string;
  description: string;
  highlights: string[];
  stack: string[];
  url: string;
  image: string;
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "waitless",
    title: "Waitless",
    tagline: "Zero friction, zero waiting room.",
    role: "Full Stack Developer",
    year: "2025",
    description:
      "A multi-tenant clinic queue-management SaaS. Patients reserve a slot from their phone via QR code (zero registration), get live progress, and walk in only when it's their turn — no waiting room.",
    highlights: [
      "Real-time queue sync via WebSockets (Django Channels) — ticket states (Waiting → Called → Done) propagate instantly with no refresh",
      "QR-based patient onboarding flow that drops users into the queue in one tap",
      "Multi-tenant architecture with isolated workspaces per clinic",
      "Bilingual UI (English + French) with responsive layouts for patients on mobile and clinic staff on desktop",
    ],
    stack: ["TypeScript", "React", "Django", "DRF", "WebSockets", "PostgreSQL", "Docker"],
    url: "https://www.waitless.sarl/",
    image: "/projects/waitless.jpg",
    accent: "from-emerald-400 to-teal-500",
  },
  {
    slug: "thrivedoc",
    title: "ThriveDoc",
    tagline: "Healthcare, modernized end-to-end.",
    role: "Full Stack Developer",
    year: "2024 — 2025",
    description:
      "Healthcare platform powering doctor–patient interactions: appointment scheduling, patient records, and provider dashboards. The parent product behind Waitless, designed to scale across clinic types.",
    highlights: [
      "Role-based access for patients, doctors, and clinic admins",
      "Appointment booking with backend conflict-detection",
      "Patient history + records module with secure document handling",
      "Built for clinic onboarding in under a day",
    ],
    stack: ["React", "Django", "DRF", "PostgreSQL", "Docker"],
    url: "https://www.thrivedoc.net/",
    image: "/projects/thrivedoc.jpg",
    accent: "from-cyan-400 to-blue-500",
  },
  {
    slug: "f1-race-intelligence",
    title: "F1 Race Intelligence",
    tagline: "Formula 1 telemetry, decoded.",
    role: "Solo project",
    year: "2025",
    description:
      "A Formula 1 analytics dashboard surfacing race telemetry, driver standings, and lap-by-lap insights. Built to push my own systems-design depth — caching, async data pipelines, and clean data viz.",
    highlights: [
      "Pulls and caches FastF1 race data to keep heavy queries snappy",
      "Lap-time, sector, and tyre-strategy breakdowns per driver",
      "Race-weekend timeline with session-by-session navigation",
      "Deployed on Fly.io with a slim, single-region setup",
    ],
    stack: ["React", "Node.js", "FastF1", "Python", "Fly.io"],
    url: "https://f1-race-intelligence.fly.dev/",
    image: "/projects/f1-race-intelligence.jpg",
    accent: "from-red-500 to-orange-500",
  },
  {
    slug: "construction",
    title: "Construction Studio",
    tagline: "An editorial site for a build firm.",
    role: "Frontend Developer",
    year: "2024",
    description:
      "Marketing site for a construction company. The brief: a calm, editorial aesthetic with smooth scroll and motion that conveys craft — without distracting from project photography.",
    highlights: [
      "Motion-led storytelling with viewport-triggered animations",
      "Image-first design with progressive loading for portfolio shots",
      "Fully responsive layout from mobile to ultra-wide",
      "Deployed to Vercel with edge caching for fast first paint",
    ],
    stack: ["Next.js", "React", "Tailwind", "Framer Motion", "Vercel"],
    url: "https://construction-website-lac-three.vercel.app/",
    image: "/projects/construction.jpg",
    accent: "from-amber-400 to-orange-600",
  },
];
