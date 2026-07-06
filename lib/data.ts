/* ————————————————————————————————————————————————
   Single source of truth for all portfolio content.
   Edit copy here; components only handle presentation.
   Sources: resume.pdf + Mitraplus engineering portfolio.
———————————————————————————————————————————————— */

export const site = {
  name: "William Wijaya",
  firstName: "William",
  lastName: "Wijaya",
  role: "Software Engineer",
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
    "I build enterprise-grade software, from the database schema to the last pixel.",
  sub: "Three years modernizing ERP, service, and finance platforms at Mitraplus, with the product sense that five years of design practice builds in.",
};

export const about = {
  facts: [
    { label: "Name", value: "William Wijaya" },
    { label: "Role", value: "Software Engineer" },
    { label: "Base", value: "Jakarta, ID" },
    { label: "Focus", value: "Enterprise platforms" },
    { label: "Currently", value: "Mitraplus" },
    { label: "Status", value: "Open to work" },
  ],
  lead:
    "I didn’t start in engineering. I started behind Photoshop, retouching thousands of production images and designing brand work for clients, where the only metric that mattered was how the result felt. That training never left.",
  pullQuote: "Most software works. Very little of it feels considered. I live in that gap.",
  body: [
    "In 2022 I went through Hacktiv8’s immersive full-stack JavaScript program and joined Mitraplus as a full-stack developer. Since then I’ve helped carry the company from legacy PHP systems to modern, containerized TypeScript platforms, designing the interfaces, building the APIs behind them, and shaping the database models underneath.",
    "My rule is simple: the interface earns a user’s trust and the architecture keeps it. So I sweat both: component boundaries and kerning, transaction patterns and easing curves. Scalable systems and honest craftsmanship, in equal measure.",
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
    name: "Design & Product",
    blurb: "No longer my title, permanently my advantage.",
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
    id: "ERP-template",
    index: "01",
    title: "Modern ERP Template",
    year: "2026",
    role: "Frontend architecture",
    tagline: "A reusable enterprise scaffold (dashboard, users, roles, and inventory) distilled from production ERP UI.",
    problem:
      "Every ERP-style engagement started by rebuilding the same shell (dashboard, auth-gated sections, role and inventory screens, a component catalog) before any real feature work could begin.",
    approach:
      "A React 19 single-page app on TanStack Router and TanStack Query, with an MUI component layer covering dashboards, users, roles, inventory, and a living components catalog, the same layout and data-fetching patterns I use on client ERP builds, kept backend-agnostic.",
    impact:
      "A drop-in enterprise shell that turns a blank repo into a working, navigable ERP frontend in minutes instead of days.",
    stack: ["React", "TanStack Router", "TanStack Query", "MUI", "TypeScript"],
    link: "https://frontend-template-red.vercel.app/",
    image: "/projects/erp.png",
    alt: "Enterprise frontend template dashboard interface",
  },
  {
    id: "logistik",
    index: "02",
    title: "Logistik Web Client",
    year: "2025",
    role: "End-to-end build",
    tagline: "A trilingual freight-forwarder marketing site for sea, air, and land cargo, one consistent brand.",
    problem:
      "A freight-forwarding company needed a public site that could carry its brand across three languages and three cargo lines (sea, air, land) without turning into three disconnected microsites.",
    approach:
      "A Next.js app with locale-scoped routing for Indonesian, English, and Chinese, shared service and cargo-line templates for sea/air/land freight, plus news, gallery, and contact flows, animated with Framer Motion and GSAP, styled with Tailwind and Radix UI, and tuned for SEO with per-locale metadata, sitemap, and OG images.",
    impact:
      "One codebase serving three markets with consistent branding, cinematic loading, and SEO groundwork instead of duplicated per-language builds.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Radix UI"],
    link: "https://logistik-3.vercel.app/",
    image: "/projects/logistik.png",
    alt: "Logistik Web Client freight services homepage",
  },
  {
    id: "pokemon",
    index: "03",
    title: "Pokémon Collection",
    year: "2023",
    role: "Full-stack & realtime",
    tagline: "A real-time collection game with gacha mechanics, battles, and online multiplayer.",
    problem:
      "Turn-based play is easy; making it feel alive across two browsers is not. The game needed live state synchronization in both online and local modes.",
    approach:
      "A WebSocket layer over Express keeps battles in sync in real time, MongoDB persists every collection, and the gacha system is tuned to feel fair but exciting. Local mode degrades gracefully when no server is running.",
    impact:
      "A complete game loop (collect, roll, battle) that holds up with two players hammering it at once.",
    stack: ["React", "Vite", "Express", "WebSocket", "MongoDB", "PokéAPI"],
    link: "https://pokemon-collection-game.vercel.app/",
    image: "/projects/pokemon.png",
    alt: "Pokémon Collection game interface",
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
    title: "Admin System",
    year: "2023",
    description: "An earlier public demo of ERP data-entry, inventory, and reporting flows over Node.js and MongoDB.",
    stack: "React · Node.js · Express · MongoDB",
    link: "https://demo-erp-gray.vercel.app/",
    image: "/projects/erp-legacy.png",
  },
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

/* ——— Why hire me: claims backed by production evidence ———
   Each claim is [pre, accent, post] so the accent word can be set
   in italic gold without JSX living in the data layer. */

export type ImpactClaim = {
  index: string;
  claim: [pre: string, accent: string, post: string];
  evidence: string;
};

export const impact = {
  claims: [
    {
      index: "01",
      claim: ["I raise the ", "engineering bar", " wherever I land."],
      evidence:
        "Joined a company on a legacy PHP baseline; left behind three generations of typed, containerized platforms, with CI quality gates, 59+ test files, and ~100 architecture docs the team still builds on.",
    },
    {
      index: "02",
      claim: ["I own systems ", "end to end.", ""],
      evidence:
        "Interface, API, data model, deployment pipeline: one pair of hands, 2,663 commits across eight production repositories spanning ERP, finance, insurance, and customer portals.",
    },
    {
      index: "03",
      claim: ["I make complex domains ", "feel simple.", ""],
      evidence:
        "Purchasing to general ledger, insurance claims to work orders: enterprise workflows turned into screens that non-technical staff use every day, without a manual.",
    },
    {
      index: "04",
      claim: ["I ship with a ", "designer’s eye", ", built in."],
      evidence:
        "Five years of professional visual design before engineering. Product thinking, UX judgment, and pixel discipline come standard; no handoff required.",
    },
  ] as ImpactClaim[],
  note: "The systems behind these claims run private business operations; I’m glad to walk through their architecture in conversation.",
};

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
      "Built three generations of enterprise platforms (Asama, Sanden, and Bengkel), modernizing the company from legacy PHP to typed, containerized systems with CI/CD, RBAC, and documented architecture. 2,600+ commits across ERP, service, finance, and customer-portal applications.",
  },
  {
    period: "Jun — Oct 2022",
    year: "2022",
    role: "Full-stack JavaScript",
    org: "Hacktiv8",
    kind: "Education",
    summary:
      "Immersive bootcamp: shipped full-stack projects weekly across React, Node.js, SQL and NoSQL, under production-style deadlines.",
  },
  {
    period: "Aug 2021 — Jun 2022",
    year: "2021",
    role: "Graphic Designer",
    org: "Freelance",
    kind: "Freelance",
    summary:
      "Banners, posters, and brand work for a range of clients: composition, creative effects, and brand consistency delivered against real deadlines.",
  },
  {
    period: "Apr 2021 — Jun 2022",
    year: "2021",
    role: "Image Editor",
    org: "Mindreach",
    kind: "Work",
    summary:
      "High-volume retouching and color correction to strict brand standards, the years where pixel discipline became a habit.",
  },
];

export const testimonials = [
  {
    quote:
      "He translated our business goals into a product that works exactly the way stakeholders need, while keeping the technical team aligned and focused.",
    name: "Endru Prajaya",
    context: "Business Analyst · Mitraplus",
  },
  {
    quote:
      "Fast, communicative, and calm under deadline pressure. The kind of developer you plan the next project around.",
    name: "Wahyudhi",
    context: "Project Manager · Mitraplus",
  },
];

export const navLinks = [
  { label: "About", href: "about", index: "01" },
  { label: "Work", href: "work", index: "03" },
  { label: "Experience", href: "experience", index: "05" },
  { label: "Contact", href: "contact", index: "07" },
];
