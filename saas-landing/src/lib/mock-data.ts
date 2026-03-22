export const company = {
  name: "K2 Digital Media",
  product: "K2 Orbit",
  tagline: "The operating system for revenue teams moving at product speed.",
};

export const navLinks = [
  { href: "/", label: "Product" },
  { href: "/pricing", label: "Pricing" },
  { href: "/app/dashboard", label: "App" },
  { href: "/admin", label: "Admin" },
];

export const heroMetrics = [
  { label: "Pipeline influenced", value: "$4.8M" },
  { label: "Automations shipped", value: "126" },
  { label: "Team adoption", value: "94%" },
];

export const socialProof = [
  "Northstar Cloud",
  "Juniper Labs",
  "Nova Stack",
  "Helio AI",
  "Signal Forge",
  "Aperture Ops",
];

export const features = [
  {
    title: "One command center",
    description:
      "Bring campaign analytics, customer health, and billing context into one timeline your team can actually use.",
  },
  {
    title: "Automations that stay readable",
    description:
      "Build onboarding, upsell, and renewal workflows with guardrails that make sense to operators and executives.",
  },
  {
    title: "Signals with real priority",
    description:
      "Score product usage, account risk, and expansion intent in real time so your team acts on what matters first.",
  },
];

export const pricingPlans = [
  {
    name: "Starter",
    monthly: 29,
    annual: 24,
    description: "For lean teams validating motion and reporting.",
    cta: "Start Free",
    highlight: false,
    features: [
      "3 team members",
      "Unlimited campaigns",
      "Basic reporting",
      "Email support",
    ],
  },
  {
    name: "Scale",
    monthly: 99,
    annual: 82,
    description: "For SaaS teams managing revenue across multiple functions.",
    cta: "Choose Scale",
    highlight: true,
    features: [
      "Unlimited seats",
      "Advanced automations",
      "Revenue forecasting",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    monthly: 249,
    annual: 208,
    description: "For operators who need governance, controls, and white-glove rollout.",
    cta: "Talk To Sales",
    highlight: false,
    features: [
      "SAML and SCIM",
      "Custom roles",
      "Dedicated success lead",
      "Quarterly business reviews",
    ],
  },
];

export const comparisonRows = [
  { feature: "Seats included", starter: "3", scale: "Unlimited", enterprise: "Unlimited" },
  { feature: "Workflow automations", starter: "5", scale: "Unlimited", enterprise: "Unlimited" },
  { feature: "Custom dashboards", starter: "1", scale: "10", enterprise: "Unlimited" },
  { feature: "Revenue forecasting", starter: "Basic", scale: "Advanced", enterprise: "AI-assisted" },
  { feature: "Audit logs", starter: "No", scale: "30 days", enterprise: "12 months" },
  { feature: "Support", starter: "Email", scale: "Priority", enterprise: "Dedicated Slack" },
];

export const faqs = [
  {
    question: "Is this a real auth and billing setup?",
    answer:
      "This boilerplate ships with realistic UI states and typed form validation. It is intentionally mock-backed so you can connect your own auth, database, and billing providers without ripping out the front end.",
  },
  {
    question: "Can I use the marketing site and app shell separately?",
    answer:
      "Yes. The public pages, app dashboard, and admin surface are split into route-specific shells so you can expand or replace each area independently.",
  },
  {
    question: "How hard is it to restyle?",
    answer:
      "The palette, gradients, spacing rhythm, and glassmorphism treatments are centralized enough that swapping the brand is mostly a theme and copy exercise.",
  },
  {
    question: "Does this support enterprise workflows?",
    answer:
      "The admin pages include user management, subscription management, and business KPI views, which gives you a credible starting point for internal tooling and role-based extensions.",
  },
];

export const kpis = [
  { label: "Net revenue", value: "$184.2K", delta: "+12.4%", detail: "vs last month" },
  { label: "Qualified accounts", value: "312", delta: "+18%", detail: "7-day trend" },
  { label: "Renewal health", value: "91%", delta: "+3.1%", detail: "weighted by ARR" },
  { label: "Expansion pipeline", value: "$62K", delta: "+9.7%", detail: "open opportunities" },
];

export const activities = [
  { title: "Northstar Cloud upgraded to Scale", time: "12 min ago", detail: "ARR increased by $4,800 annually." },
  { title: "Customer health playbook triggered", time: "48 min ago", detail: "7 accounts matched risk threshold." },
  { title: "Q2 onboarding campaign launched", time: "2 hr ago", detail: "Targeting 146 product-qualified leads." },
  { title: "Finance export synced successfully", time: "Today", detail: "Stripe and internal ledger stayed in balance." },
];

export const quickActions = [
  "Create lifecycle automation",
  "Invite teammate",
  "Launch renewal report",
  "Review at-risk accounts",
];

export const sidebarLinks = [
  { href: "/app/dashboard", label: "Overview" },
  { href: "/pricing", label: "Billing" },
  { href: "/login", label: "Sessions" },
  { href: "/register", label: "Team Access" },
];

export const adminSidebarLinks = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/users", label: "Users" },
  { href: "/admin/subscriptions", label: "Subscriptions" },
];

export const signupSeries = [
  { day: "Mar 1", signups: 11 },
  { day: "Mar 4", signups: 18 },
  { day: "Mar 7", signups: 16 },
  { day: "Mar 10", signups: 23 },
  { day: "Mar 13", signups: 20 },
  { day: "Mar 16", signups: 27 },
  { day: "Mar 19", signups: 34 },
  { day: "Mar 21", signups: 31 },
];

export const planDistribution = [
  { name: "Starter", value: 142 },
  { name: "Scale", value: 318 },
  { name: "Enterprise", value: 41 },
];

export const adminStats = [
  { label: "Total users", value: "4,982", delta: "+8.1%" },
  { label: "MRR", value: "$286.4K", delta: "+14.2%" },
  { label: "Churn rate", value: "1.8%", delta: "-0.4%" },
];

export const users = [
  { name: "Maya Chen", email: "maya@northstarcloud.com", plan: "Enterprise", signupDate: "2026-02-12", lastActive: "5 minutes ago", status: "Active" },
  { name: "Jordan Park", email: "jordan@novastack.io", plan: "Scale", signupDate: "2026-01-28", lastActive: "32 minutes ago", status: "Active" },
  { name: "Alina Brooks", email: "alina@juniperlabs.com", plan: "Starter", signupDate: "2026-03-03", lastActive: "3 hours ago", status: "Trial" },
  { name: "Theo Ramirez", email: "theo@signalforge.ai", plan: "Scale", signupDate: "2025-12-19", lastActive: "Yesterday", status: "Suspended" },
];

export const subscriptions = [
  { company: "Northstar Cloud", plan: "Enterprise", seats: 44, amount: "$9,600", renewal: "2026-08-12", status: "Active" },
  { company: "Nova Stack", plan: "Scale", seats: 18, amount: "$1,968", renewal: "2026-05-02", status: "Active" },
  { company: "Juniper Labs", plan: "Starter", seats: 3, amount: "$87", renewal: "2026-04-18", status: "Trial" },
  { company: "Helio AI", plan: "Scale", seats: 27, amount: "$2,943", renewal: "2026-07-30", status: "Past Due" },
];

export const revenueSummary = [
  { label: "Active subscriptions", value: "401" },
  { label: "Average contract", value: "$714" },
  { label: "Expansion this month", value: "$18.7K" },
];
