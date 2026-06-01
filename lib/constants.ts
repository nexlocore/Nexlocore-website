export const BRAND = {
  name: "Nexlocore Technologies LLC",
  shortName: "Nexlocore",
  website: "www.nexlocore.com",
  tagline: "Design. Build. Scale.",
  email: "nexlocore@gmail.com",
  phone: "+91 9526511258",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_LINKS = {
  pages: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "/about" },
    { label: "Process", href: "/process" },
    { label: "Contact", href: "/contact" },
  ],
  social: [
    { label: "Instagram", href: "https://www.instagram.com/nexlocore?utm_source=qr" },
    // { label: "Facebook", href: "https://facebook.com/" },
    // { label: "Linkedin", href: "https://linkedin.com/" },
    // { label: "Twitter", href: "https://x.com/" },
  ],
} as const;

export const LOGO_CLOUD = [
  "Google",
  "Facebook",
  "Amazon",
  "Microsoft",
  "Apple",
  "Samsung",
] as const;

export const SERVICES = [
  {
    id: "web",
    title: "Web Development",
    subtitle: "High-performance websites",
    description:
      "Custom, scalable, and high-performance websites using modern technologies.",
    tags: ["Next.js", "React", "Scalable"],
    variant: "workflow" as const,
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    subtitle: "iOS & Android apps",
    description:
      "iOS & Android apps built for performance, scalability, and user engagement.",
    tags: ["iOS", "Android", "Cross-platform"],
    variant: "assistant" as const,
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    subtitle: "User-centered experiences",
    description:
      "User-centered design solutions that enhance usability and conversion.",
    tags: ["Research", "Prototyping", "Design systems"],
    variant: "sales" as const,
  },
  {
    id: "branding",
    title: "Branding & Identity",
    subtitle: "Stand-out brand systems",
    description: "Crafting powerful brand identities that stand out.",
    tags: ["Logo", "Guidelines", "Identity"],
    variant: "systems" as const,
  },
  {
    id: "graphic",
    title: "Graphic Design",
    subtitle: "Digital & print visuals",
    description: "Creative visuals for digital and print.",
    tags: ["Social", "Print", "Marketing"],
    variant: "workflow" as const,
  },
  {
    id: "video",
    title: "Video Editing",
    subtitle: "Professional production",
    description:
      "Professional video production for marketing and storytelling.",
    tags: ["Editing", "Color", "Storytelling"],
    variant: "assistant" as const,
  },
  {
    id: "motion",
    title: "Motion Graphics (Coming Soon)",
    subtitle: "Dynamic visual storytelling",
    description: "Dynamic animations and visual storytelling.",
    tags: ["Animation", "Motion", "Coming Soon"],
    variant: "sales" as const,
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: "Step 1",
    title: "Discovery",
    description:
      "We align on goals, scope, and success metrics to understand your product vision and business needs.",
    variant: "analyze" as const,
  },
  {
    step: "Step 2",
    title: "Research & Strategy",
    description:
      "We analyze users, competitors, and technical requirements to define a clear roadmap for delivery.",
    variant: "analyze" as const,
  },
  {
    step: "Step 3",
    title: "Design",
    description:
      "We craft intuitive interfaces and brand-aligned visuals that elevate usability and conversion.",
    variant: "develop" as const,
  },
  {
    step: "Step 4",
    title: "Development",
    description:
      "We build scalable, high-performance products using modern frameworks and best practices.",
    variant: "develop" as const,
  },
  {
    step: "Step 5",
    title: "Testing",
    description:
      "We validate quality across devices, browsers, and user flows to ensure a polished launch.",
    variant: "integrate" as const,
  },
  {
    step: "Step 6",
    title: "Launch & Support",
    description:
      "We deploy your product and provide ongoing support to help you grow with confidence.",
    variant: "optimize" as const,
  },
] as const;

export const PORTFOLIO_CATEGORIES = [
  "All",
  "Web",
  "Mobile Apps",
  "UI/UX",
  "Branding",
  "Graphics",
  "Video",
] as const;

export type PortfolioCategory = (typeof PORTFOLIO_CATEGORIES)[number];

export const PORTFOLIO_PROJECTS = [
  {
    id: "saas-dashboard",
    name: "FinFlow SaaS Dashboard",
    category: "Web" as const,
    description:
      "A modern analytics dashboard for a fintech startup to track revenue, users, and growth.",
    problem:
      "The client needed a scalable web platform to visualize complex financial data in real time.",
    solution:
      "We designed and developed a responsive dashboard with role-based access and clean data visualization.",
    outcome:
      "Reduced reporting time by 60% and improved stakeholder decision-making speed.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
    highlight: "60% faster reporting",
  },
  {
    id: "fitness-app",
    name: "PulseFit Mobile App",
    category: "Mobile Apps" as const,
    description:
      "Cross-platform fitness app with workout tracking, progress charts, and push notifications.",
    problem:
      "A growing fitness brand lacked a mobile presence to engage users beyond the gym.",
    solution:
      "We built iOS and Android apps with personalized plans, streak tracking, and in-app coaching.",
    outcome:
      "40K+ downloads in the first quarter and 4.8★ average app store rating.",
    tech: ["React Native", "Firebase", "Node.js"],
    highlight: "40K+ downloads",
  },
  {
    id: "ecommerce-ui",
    name: "Luxe Commerce UI",
    category: "UI/UX" as const,
    description:
      "End-to-end UX for a premium e-commerce brand focused on conversion and brand trust.",
    problem:
      "High cart abandonment and inconsistent experience across mobile and desktop.",
    solution:
      "We redesigned the shopping flow with streamlined checkout and mobile-first layouts.",
    outcome:
      "Conversion rate increased by 28% within two months of launch.",
    tech: ["Figma", "Prototyping", "User Testing"],
    highlight: "28% higher conversion",
  },
  {
    id: "startup-brand",
    name: "Vertex Startup Rebrand",
    category: "Branding" as const,
    description:
      "Complete brand identity for an AI startup including logo, palette, and guidelines.",
    problem:
      "The startup's visual identity did not reflect its innovative product positioning.",
    solution:
      "We delivered a cohesive brand system with logo variants, typography, and usage rules.",
    outcome:
      "Stronger market recognition and consistent brand presence across all touchpoints.",
    tech: ["Brand Strategy", "Logo Design", "Guidelines"],
    highlight: "Full brand system",
  },
  {
    id: "social-campaign",
    name: "Bloom Social Campaign",
    category: "Graphics" as const,
    description:
      "Creative assets for a product launch across social, ads, and email channels.",
    problem:
      "The marketing team needed high-impact visuals on a tight launch timeline.",
    solution:
      "We produced a unified set of graphics and templates for multi-channel campaigns.",
    outcome:
      "Campaign engagement rose 45% compared to the previous product launch.",
    tech: ["Adobe Creative Suite", "Canva Templates"],
    highlight: "45% more engagement",
  },
  {
    id: "brand-film",
    name: "Nexa Brand Film",
    category: "Video" as const,
    description:
      "Short-form brand film showcasing product value for website and paid social.",
    problem:
      "The client needed compelling video content to explain their product quickly.",
    solution:
      "We scripted, edited, and color-graded a 90-second brand story with motion titles.",
    outcome:
      "2.5× higher watch-through rate on landing pages with embedded video.",
    tech: ["Premiere Pro", "After Effects", "Sound Design"],
    highlight: "2.5× watch-through",
  },
] as const;

export const CASE_STUDIES = PORTFOLIO_PROJECTS.map((project) => ({
  quote: project.highlight,
  company: project.name,
  description: project.description,
  impact: [
    { label: "Category", value: project.category },
    { label: "Tech", value: project.tech[0] },
    { label: "Outcome", value: project.outcome.slice(0, 24) + "…" },
    { label: "Focus", value: project.tech[1] ?? "Design" },
  ],
}));

export const BENEFITS = [
  {
    title: "AI-Driven Workflows",
    description:
      "We leverage AI tools to accelerate design, development, and delivery without compromising quality.",
  },
  {
    title: "Pixel-Perfect Design Execution",
    description:
      "Every interface is crafted with precision, consistency, and attention to brand detail.",
  },
  {
    title: "Scalable Development Architecture",
    description:
      "We build products on modern, maintainable stacks designed to grow with your business.",
  },
  {
    title: "Fast Turnaround & Agile Process",
    description:
      "Iterative sprints and clear communication keep projects moving quickly from idea to launch.",
  },
  {
    title: "End-to-End Digital Solutions",
    description:
      "From strategy and design to development and launch—we handle the full product lifecycle.",
  },
] as const;

export const ABOUT_CONTENT = {
  intro:
    "Nexlocore Technologies is a modern IT service company focused on delivering impactful digital solutions.",
  mission:
    "To empower businesses with scalable and innovative digital products.",
  vision:
    "To become a global leader in AI-powered digital services.",
  team:
    "Small, agile, and highly skilled team of designers, developers, and creators.",
} as const;

export const SERVICES_PAGE_INTRO =
  "We provide end-to-end digital solutions tailored for startups, enterprises, and growing brands.";

export const PRICING_PLANS = [
  {
    name: "Starter",
    price: { monthly: null, annual: null },
    description: "Ideal for early-stage startups launching their first digital product.",
    features: [
      "Web or landing page",
      "UI/UX design",
      "Basic branding support",
      "Agile delivery",
      "Email support",
    ],
    cta: "Start a Project",
    popular: false,
    custom: true,
  },
  {
    name: "Growth",
    price: { monthly: null, annual: null },
    description: "For growing brands scaling web, mobile, and design across channels.",
    features: [
      "Web + mobile development",
      "Full UI/UX design",
      "Branding & graphics",
      "Video production",
      "Priority support",
    ],
    cta: "Start a Project",
    popular: true,
    custom: true,
  },
  {
    name: "Enterprise",
    price: { monthly: null, annual: null },
    description: "Custom engagements for complex products and long-term partnerships.",
    features: [
      "Custom product builds",
      "Dedicated team",
      "AI-powered workflows",
      "Ongoing optimization",
      "Launch & support",
    ],
    cta: "Contact Us",
    popular: false,
    custom: true,
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Nexlocore delivered a polished product on time. Their design and development quality exceeded our expectations.",
    name: "Sarah Mitchell",
    role: "Founder, TechStart",
  },
  {
    quote:
      "From branding to launch, the team handled everything seamlessly. Highly recommend for growing startups.",
    name: "James Okonkwo",
    role: "CEO, ScaleUp",
  },
  {
    quote:
      "The UI/UX work transformed our conversion rates. Professional, fast, and great communication throughout.",
    name: "Priya Sharma",
    role: "Product Lead, NovaBrand",
  },
  {
    quote:
      "End-to-end support made our mobile app launch smooth. Nexlocore is a true partner, not just a vendor.",
    name: "Michael Chen",
    role: "CTO, PixelFlow",
  },
] as const;

export const FAQS = [
  {
    question: "What services does Nexlocore offer?",
    answer:
      "We offer web development, mobile apps, UI/UX design, branding, graphic design, video editing, and motion graphics (coming soon).",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Yes. We partner with startups, growing brands, and enterprises to design, build, and scale digital products.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines vary by scope. After discovery, we provide a clear roadmap with milestones for design, development, testing, and launch.",
  },
  {
    question: "Can you redesign an existing product?",
    answer:
      "Absolutely. We help teams modernize UI/UX, improve performance, and extend features on existing web and mobile products.",
  },
  {
    question: "How do we get started?",
    answer:
      "Reach out via our contact form with your project goals. We'll schedule a discovery call and propose the best path forward.",
  },
] as const;
