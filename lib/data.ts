/* ————————————————————————————————————————————————
   Single source of truth for all portfolio content.
   Edit copy here — components only handle presentation.
   Sources: resume.pdf + Mitraplus engineering portfolio.
———————————————————————————————————————————————— */

export const site = {
  name: "William Wijaya",
  firstName: "William",
  lastName: "Wijaya",
  role: "Full-stack Engineer & Designer",
  location: "Jakarta, Indonesia",
  timezoneLabel: "GMT+7",
  timezone: "Asia/Jakarta",
  email: "mauritiuswilliamwijaya1@gmail.com",
  phone: "(+62) 857-7173-5465",
  github: "https://github.com/code4space",
  linkedin: "https://www.linkedin.com/in/william-wijaya-2a22871b2/",
  resume: "/resume.pdf",
  url: "https://william-wijaya.vercel.app",
  availability: "Open to new opportunities",
  mailto:
    "mailto:mauritiuswilliamwijaya1@gmail.com?subject=Let%E2%80%99s%20build%20something%20together&body=Hi%20William%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I%E2%80%99d%20love%20to%20talk%20about%20a%20project%20or%20an%20opportunity.%0A%0A",
};

export const hero = {
  statement:
    "I design and build enterprise-grade products — from the database schema to the last pixel.",
  sub: "Three years modernizing ERP, service, and finance platforms at Mitraplus, on a foundation of five years of visual design discipline.",
};

export const about = {
  facts: [
    { label: "Name", value: "William Wijaya" },
    { label: "Role", value: "Full-stack Engineer" },
    { label: "Base", value: "Jakarta, ID" },
    { label: "Focus", value: "Enterprise platforms" },
    { label: "Currently", value: "Mitraplus" },
    { label: "Status", value: "Open to work" },
  ],
  lead:
    "I didn’t start in engineering. I started behind Photoshop — retouching thousands of production images and designing brand work for clients, where the only metric that mattered was how the result felt. That training never left.",
  pullQuote: "Most software works. Very little of it feels considered. I live in that gap.",
  body: [
    "In 2022 I went through Hacktiv8’s immersive full-stack JavaScript program and joined Mitraplus as a full-stack developer. Since then I’ve helped carry the company from legacy PHP systems to modern, containerized TypeScript platforms — designing the interfaces, building the APIs behind them, and shaping the database models underneath.",
    "My rule is simple: the interface earns a user’s trust and the architecture keeps it. So I sweat both — component boundaries and kerning, transaction patterns and easing curves. Scalable systems and honest craftsmanship, in equal measure.",
  ],
  stats: [
    { value: 3, suffix: "+", label: "Years shipping production software" },
    { value: 2663, suffix: "", label: "Commits across enterprise platforms" },
    { value: 3, suffix: "", label: "Platform generations built at Mitraplus" },
  ],
};

export type SkillGroup = {
  index: string;
  name: string;
  blurb: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    index: "01",
    name: "Frontend",
    blurb: "Interfaces that are fast, responsive, and quietly delightful.",
    items: [
      "React 18 / 19",
      "Next.js",
      "TypeScript",
      "TanStack Router / Query / Table",
      "Redux Toolkit",
      "React Hook Form",
      "MUI",
      "Tailwind CSS",
      "Vue.js",
      "React Native",
    ],
  },
  {
    index: "02",
    name: "Backend",
    blurb: "APIs designed for the people who have to consume them.",
    items: [
      "Node.js",
      "Bun",
      "Express",
      "REST APIs",
      "GraphQL",
      "WebSocket",
      "Zod",
      "BullMQ workers",
      "Golang",
      "Python",
    ],
  },
  {
    index: "03",
    name: "Data",
    blurb: "Schemas that stay sane as the product grows.",
    items: [
      "PostgreSQL",
      "SQL Server",
      "MongoDB",
      "Sequelize",
      "Redis",
      "MinIO object storage",
      "Firebase",
    ],
  },
  {
    index: "04",
    name: "Architecture & Security",
    blurb: "Layered systems with boundaries that hold under pressure.",
    items: [
      "Layered service architecture",
      "Typed contracts",
      "RBAC & permission routing",
      "JWT / bcrypt auth",
      "Audit events",
      "Background queues",
      "Microservices",
    ],
  },
  {
    index: "05",
    name: "DevOps & Delivery",
    blurb: "Boring, reliable pipelines so the product can be brave.",
    items: [
      "Docker",
      "GitHub Actions",
      "Harbor registry",
      "CI quality gates",
      "Secret scanning",
      "Vercel / Heroku",
      "Linux",
    ],
  },
  {
    index: "06",
    name: "Design",
    blurb: "Where I started, and why the details look right.",
    items: [
      "Figma",
      "Adobe Photoshop",
      "UI / UX",
      "Design systems",
      "Brand & layout",
      "Image retouching",
    ],
  },
];

export type CaseStudy = {
  id: string;
  index: string;
  title: string;
  year: string;
  role: string;
  tagline: string;
  problem: string;
  approach: string;
  impact: string;
  stack: string[];
  link: string;
  image: string;
  alt: string;
};

export const featured: CaseStudy[] = [
  {
    id: "erp",
    index: "01",
    title: "ERP System",
    year: "2023",
    role: "Design & full-stack",
    tagline: "A public demo distilling the ERP patterns I build professionally — operations, end to end.",
    problem:
      "Operations lived in scattered spreadsheets — data entry, inventory, and reporting never quite agreed with each other, and every reconciliation cost hours.",
    approach:
      "A single React front end over a Node.js API and MongoDB, with complete flows for inputting, managing, and reporting on operational data — the same grid, form, and workflow patterns I ship in production ERP systems.",
    impact:
      "One consistent source of truth from first input to final report, packaged as a demo-ready platform.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://demo-erp-gray.vercel.app/",
    image: "/projects/erp.png",
    alt: "ERP System dashboard interface",
  },
  {
    id: "pokemon",
    index: "02",
    title: "Pokémon Collection",
    year: "2023",
    role: "Full-stack & game design",
    tagline: "A real-time collection game with gacha mechanics, battles, and online multiplayer.",
    problem:
      "Turn-based play is easy; making it feel alive across two browsers is not. The game needed live state synchronization in both online and local modes.",
    approach:
      "A WebSocket layer over Express keeps battles in sync in real time, MongoDB persists every collection, and the gacha system is tuned to feel fair but exciting. Local mode degrades gracefully when no server is running.",
    impact:
      "A complete game loop — collect, roll, battle — that holds up with two players hammering it at once.",
    stack: ["React", "Vite", "Express", "WebSocket", "MongoDB", "PokéAPI"],
    link: "https://pokemon-collection-game.vercel.app/",
    image: "/projects/pokemon.png",
    alt: "Pokémon Collection game interface",
  },
  {
    id: "admin",
    index: "03",
    title: "Admin Dashboard",
    year: "2024",
    role: "Design & frontend",
    tagline: "A production-grade admin template with real-time visualization and user management.",
    problem:
      "Every engagement was rebuilding the same dashboard scaffolding — charts, tables, roles, layout — from zero, again and again.",
    approach:
      "A responsive, typed React and Tailwind template with ECharts-driven interactive visualizations and user-management patterns, structured to be lifted straight into client work.",
    impact:
      "New dashboards now start at eighty percent done instead of zero — a reusable foundation across projects.",
    stack: ["React", "TypeScript", "Tailwind CSS", "ECharts"],
    link: "https://admin-two-tau.vercel.app/",
    image: "/projects/admin.png",
    alt: "Admin dashboard with charts and analytics",
  },
];

export type ArchiveProject = {
  title: string;
  year: string;
  description: string;
  stack: string;
  link: string;
  image: string;
};

export const archive: ArchiveProject[] = [
  {
    title: "Stackun",
    year: "2022",
    description: "A cozy, wooden-themed 4×4 sliding puzzle.",
    stack: "React · TypeScript · CSS",
    link: "https://github.com/code4space",
    image: "/projects/stackun.png",
  },
  {
    title: "Neon Tic-Tac-Toe",
    year: "2022",
    description: "A two-player classic with a neon glass finish.",
    stack: "React · TypeScript · CSS",
    link: "https://neon-tic-tac-toe.vercel.app/",
    image: "/projects/tictactoe.png",
  },
];

/* ——— Enterprise engineering at Mitraplus ——— */

export type PlatformStage = {
  index: string;
  years: string;
  name: string;
  kind: string;
  summary: string;
  stack: string[];
  legacy?: boolean;
  highlight?: boolean;
};

export const enterprise = {
  intro:
    "At Mitraplus I helped move the company off a legacy PHP baseline and onto modern, containerized TypeScript platforms — three generations of enterprise systems, each one raising the engineering bar.",
  stages: [
    {
      index: "00",
      years: "Baseline",
      name: "Legacy BOS",
      kind: "Where it started",
      summary:
        "A custom PHP workshop system — direct SQL wrappers, session auth, no tests, no CI, manual releases.",
      stack: ["PHP", "Direct SQL", "Sessions"],
      legacy: true,
    },
    {
      index: "01",
      years: "2023",
      name: "Asama",
      kind: "First modern ERP",
      summary:
        "Separated React and Express apps covering purchasing, warehouse, invoicing, AP/AR, and GL reporting — and the company’s first Dockerized CI/CD delivery.",
      stack: ["React 18", "Express", "SQL Server", "Redux", "Docker + Actions"],
    },
    {
      index: "02",
      years: "2024 — 26",
      name: "Sanden",
      kind: "Multi-app enterprise system",
      summary:
        "An internal ERP, a customer-facing portal, and a typed Bun/Express API across trading, service, finance, and GL — with Redis auth caching and BullMQ background workers.",
      stack: ["TypeScript", "Bun", "Sequelize / MSSQL", "Redis", "BullMQ", "React 19"],
    },
    {
      index: "03",
      years: "2026",
      name: "Bengkel",
      kind: "Framework-driven platform",
      summary:
        "A documented, layered workshop-and-insurance platform: typed contracts, RBAC, audit events, object storage, notifications — gated by CI that runs tests, audits, and secret scans before every release.",
      stack: ["PostgreSQL", "TanStack", "RBAC", "MinIO", "CI quality gates"],
      highlight: true,
    },
  ] as PlatformStage[],
  metrics: [
    { value: 2663, label: "Commits under my hand across the modern repositories" },
    { value: 59, suffix: "+", label: "Test files where the legacy baseline had none" },
    { value: 8, label: "CI/CD pipelines building, scanning, and shipping images" },
    { value: 100, prefix: "~", label: "Architecture & workflow docs written for the teams" },
  ],
  note: "These systems run private business operations, so there are no public links — I’m glad to walk through the architecture in conversation.",
};

export const processSteps = [
  {
    index: "01",
    title: "Understand",
    body: "Business needs become actionable scope. The right problem, written down clearly, is half the build.",
  },
  {
    index: "02",
    title: "Design",
    body: "Interface first, in Figma. If it doesn’t make sense as pixels, it won’t make sense as code.",
  },
  {
    index: "03",
    title: "Build",
    body: "Typed, componentized, API-first. Boring choices where possible, sharp ones where it counts.",
  },
  {
    index: "04",
    title: "Ship & iterate",
    body: "Deployed early, behind CI gates and feedback loops. Done isn’t when it works — it’s when it feels right.",
  },
];

export type Milestone = {
  period: string;
  year: string;
  role: string;
  org: string;
  kind: "Work" | "Education" | "Freelance";
  summary: string;
  current?: boolean;
};

export const milestones: Milestone[] = [
  {
    period: "Nov 2022 — Present",
    year: "2022",
    role: "Full-stack Developer",
    org: "Mitraplus",
    kind: "Work",
    current: true,
    summary:
      "Built three generations of enterprise platforms — Asama, Sanden, and Bengkel — modernizing the company from legacy PHP to typed, containerized systems with CI/CD, RBAC, and documented architecture. 2,600+ commits across ERP, service, finance, and customer-portal applications.",
  },
  {
    period: "Jun — Oct 2022",
    year: "2022",
    role: "Full-stack JavaScript",
    org: "Hacktiv8",
    kind: "Education",
    summary:
      "Immersive bootcamp — shipped full-stack projects weekly across React, Node.js, SQL and NoSQL, under production-style deadlines.",
  },
  {
    period: "Aug 2021 — Jun 2022",
    year: "2021",
    role: "Graphic Designer",
    org: "Freelance",
    kind: "Freelance",
    summary:
      "Banners, posters, and brand work for a range of clients — composition, creative effects, and brand consistency delivered against real deadlines.",
  },
  {
    period: "Apr 2021 — Jun 2022",
    year: "2021",
    role: "Image Editor",
    org: "Mindreach",
    kind: "Work",
    summary:
      "High-volume retouching and color correction to strict brand standards — the years where pixel discipline became a habit.",
  },
];

/* PLACEHOLDER quotes — modeled on real feedback themes from client work
   (dedication, collaboration, design care). Replace with verbatim quotes
   and real attributions before going live. */
export const testimonials = [
  {
    quote:
      "William doesn’t just build what you ask for; he understands why you’re asking, pushes back where it matters, and the product comes out better for it.",
    name: "Product Owner",
    context: "Client engagement · Mitraplus",
  },
  {
    quote:
      "It’s rare to find an engineer who sweats the pixels this much. Handoffs stopped being handoffs, he simply took care of the whole thing.",
    name: "Design Lead",
    context: "Agency collaboration",
  },
  {
    quote:
      "Fast, communicative, and calm under deadline pressure. The kind of developer you plan the next project around.",
    name: "Project Manager",
    context: "Mitraplus",
  },
];

export const navLinks = [
  { label: "About", href: "about", index: "01" },
  { label: "Work", href: "work", index: "03" },
  { label: "Experience", href: "experience", index: "05" },
  { label: "Contact", href: "contact", index: "07" },
];
