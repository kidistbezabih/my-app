import { NavigationConfig } from "../types";

// Navigation configuration - will be updated with your company's content
export const navigationConfig: NavigationConfig = {
  main: [
    {
      label: "Products",
      children: [
        {
          label: "Quorix (CNAPP)",
          href: "/products/quorix",
          description:
            "Unified CSPM, CWP, CIEM platform for enterprise cloud security.",
        },
        {
          label: "AxionTrust",
          href: "/products/axiontrust",
          description:
            "Intelligent cloud compliance automation across 40+ frameworks.",
        },
        {
          label: "Dern",
          href: "/products/dern",
          description:
            "Zero‑trust privileged access management with session analytics.",
        },
        {
          label: "Board3",
          href: "/products/board3",
          description:
            "Visual IaC with automatic Terraform generation and governance.",
        },
        {
          label: "SentryOne ID",
          href: "/products/sentryone-id",
          description:
            "Enterprise Identity Governance & Administration at scale.",
        },
        {
          label: "EdgeRP",
          href: "/products/edgerp",
          description:
            "Security‑integrated ERP for modern, compliant operations.",
        },
        {
          label: "ABANOAH",
          href: "/products/abanoah",
          description:
            "ABA therapy practice management platform for behavioral health providers.",
        },
        {
          label: "SevitaCare One",
          href: "/products/sevitacareone",
          description:
            "Modern home health platform replacing legacy systems like Sandata.",
        },
        {
          label: "Shadow Realm",
          href: "/products/shadowrealm",
          description:
            "Gamified speech therapy platform with AI-powered personalization.",
        },
      ],
    },
    {
      label: "Solutions",
      children: [
        {
          label: "By Need: Cloud Security",
          href: "/solutions/cloud-security",
          description:
            "Protect multi‑cloud estates with unified visibility and control.",
        },
        {
          label: "By Need: Compliance Automation",
          href: "/solutions/compliance-automation",
          description:
            "Continuous compliance with automated evidence and remediation.",
        },
        {
          label: "By Need: Privileged Access",
          href: "/solutions/privileged-access",
          description:
            "Eliminate standing privileges with JIT and full session recording.",
        },
        {
          label: "By Need: Identity Governance",
          href: "/solutions/identity-governance",
          description:
            "AI‑powered access intelligence and lifecycle automation.",
        },
        {
          label: "By Need: Infrastructure Automation",
          href: "/solutions/infrastructure-automation",
          description:
            "Visual design to Terraform with policy and collaboration.",
        },
        {
          label: "By Need: Secure ERP",
          href: "/solutions/secure-erp",
          description: "Zero‑trust ERP with built‑in security and compliance.",
        },
        {
          label: "By Industry: Financial Services",
          href: "/solutions/financial-services",
          description: "Meet stringent regulatory and risk requirements.",
        },
        {
          label: "By Industry: Healthcare",
          href: "/solutions/healthcare",
          description:
            "HIPAA‑ready platforms for protected health information.",
        },
        {
          label: "By Industry: Manufacturing",
          href: "/solutions/manufacturing",
          description: "Secure supply chains with real‑time analytics.",
        },
        {
          label: "By Industry: Technology",
          href: "/solutions/technology",
          description: "Scale cloud‑native platforms securely and compliantly.",
        },
      ],
    },
    {
      label: "Resources",
      children: [
        {
          label: "Documentation",
          href: "/resources/docs",
          description: "Technical documentation and implementation guides.",
        },
        {
          label: "Analyst Reports",
          href: "/resources/analyst-reports",
          description: "Gartner, Forrester, and leadership recognitions.",
        },
        {
          label: "Case Studies",
          href: "/resources/case-studies",
          description: "Enterprise outcomes and success stories.",
        },
        {
          label: "Awards & Recognition",
          href: "/resources/awards",
          description: "Industry awards across the portfolio.",
        },
        {
          label: "Blog",
          href: "/resources/blog",
          description: "Insights and thought leadership.",
        },
      ],
    },
    {
      label: "Company",
      children: [
        {
          label: "About",
          href: "/about",
          description: "Mission, values, and the AxionOre story.",
        },
        {
          label: "Leadership",
          href: "/company/leadership",
          description: "Board and executive team.",
        },
        {
          label: "Careers",
          href: "/company/careers",
          description: "Join our world‑class teams.",
        },
        {
          label: "Contact",
          href: "/company/contact",
          description: "Get in touch with AxionOre.",
        },
      ],
    },
  ],
  cta: {
    label: "Get a Demo",
    href: "/get-demo",
  },
};

// Animation durations
export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const;

// Breakpoints for responsive design
export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

// Advantage section content
export const ADVANTAGE_POINTS: { title: string; description: string }[] = [
  {
    title: "Purpose-Built Excellence",
    description:
      "Each subsidiary is founded to become the definitive leader in its market, delivering deep, specialized value rather than generalist platforms.",
  },
  {
    title: "Shared Innovation DNA",
    description:
      "Independent companies with common principles of technical excellence, customer obsession, and innovation leadership.",
  },
  {
    title: "Enterprise-Grade Foundation",
    description:
      "Built for scale from day one—handling millions of events, complex compliance, and critical infrastructure with reliability.",
  },
  {
    title: "Strategic Market Positioning",
    description:
      "Focus on high-growth markets with barriers to entry, solving fundamental enterprise challenges with sustainable demand.",
  },
];

// Portfolio companies content (condensed)
export const PORTFOLIO_CARDS: {
  name: string;
  tagline: string;
  blurb: string;
  href: string;
}[] = [
  {
    name: "Quorix",
    tagline: "Cloud Native Application Protection Platform (CNAPP)",
    blurb:
      "Unified CSPM, CWP, and CIEM for comprehensive multi‑cloud security with AI‑powered detection and developer‑centric workflows.",
    href: "/products/quorix",
  },
  {
    name: "AxionTrust",
    tagline: "Intelligent Cloud Compliance Automation",
    blurb:
      "Automates compliance across 40+ frameworks with real‑time monitoring, evidence collection, and risk‑based remediation.",
    href: "/products/axiontrust",
  },
  {
    name: "Dern",
    tagline: "Next‑Generation Privileged Access Management",
    blurb:
      "Zero‑trust privileged access with JIT credentials, complete session recording, and behavioral analytics.",
    href: "/products/dern",
  },
  {
    name: "Board3",
    tagline: "Visual Infrastructure as Code",
    blurb:
      "Drag‑and‑drop infrastructure design with automatic Terraform generation, policy enforcement, and collaboration.",
    href: "/products/board3",
  },
  {
    name: "SentryOne ID",
    tagline: "Enterprise Identity Governance & Administration",
    blurb:
      "AI‑powered identity lifecycle, access intelligence, and risk‑based reviews for complex global enterprises.",
    href: "/products/sentryone-id",
  },
  {
    name: "EdgeRP",
    tagline: "Security‑Integrated ERP",
    blurb:
      "Zero‑trust ERP with native security, compliance automation, and AI‑driven insights across business operations.",
    href: "/products/edgerp",
  },
];

// Company stats
export const COMPANY_STATS: { label: string; value: string }[] = [
  { label: "Subsidiaries", value: "6" },
  { label: "Enterprise customers", value: "500+" },
  { label: "Countries", value: "40+" },
  { label: "ARR", value: "$200M+" },
  { label: "CSAT", value: "95%" },
];

// Leadership (condensed bios)
export const LEADERSHIP: { name: string; role: string; bio: string }[] = [
  {
    name: "Dr. Sarah Chen",
    role: "Chairman & Chief Executive Officer",
    bio: "Former Fortune 100 CISO; PhD MIT; leads AxionOre’s enterprise innovation strategy.",
  },
  {
    name: "Marcus Rodriguez",
    role: "Chief Technology Officer",
    bio: "Ex‑AWS/Netflix principal engineer; drives architecture and reliability across subsidiaries.",
  },
  {
    name: "Jennifer Park",
    role: "Chief Investment Officer",
    bio: "Enterprise software operator/investor; portfolio strategy and market development.",
  },
];

// CSR & Sustainability highlights
export const CSR: { heading: string; items: string[] }[] = [
  {
    heading: "Environmental",
    items: [
      "Carbon neutral operations by 2025",
      "100% renewable energy for data centers and offices",
      "Sustainable office design (LEED) and energy‑efficient infrastructure",
    ],
  },
  {
    heading: "Social Impact",
    items: [
      "Cybersecurity education and workforce development",
      "Scholarships for underrepresented groups in tech",
      "Accessibility‑first product design principles",
    ],
  },
  {
    heading: "Governance",
    items: [
      "Ethical AI with external oversight and regular audits",
      "Privacy‑by‑design and transparent algorithms",
      "Independent board and comprehensive ethics training",
    ],
  },
];

// Partners & Ecosystem
export const PARTNERS: { category: string; items: string[] }[] = [
  {
    category: "Cloud Infrastructure Partners",
    items: ["Amazon Web Services", "Microsoft Azure", "Google Cloud Platform"],
  },
  {
    category: "Global System Integrators",
    items: ["Accenture", "Deloitte", "PwC"],
  },
  {
    category: "Security Ecosystem",
    items: ["CrowdStrike", "Splunk", "Okta", "Palo Alto Networks"],
  },
  {
    category: "Business Applications & Analytics",
    items: [
      "Salesforce",
      "ServiceNow",
      "Slack",
      "Microsoft Teams",
      "Tableau",
      "Power BI",
    ],
  },
];

export const CONTACT_EMAIL = "info@axionore.com";

// Resources content
export const ANALYST_REPORTS: {
  title: string;
  source: string;
  summary: string;
}[] = [
  {
    title:
      "Gartner Magic Quadrant Leader - Cloud Security Posture Management (2024)",
    source: "Gartner",
    summary:
      "Quorix recognized for completeness of vision and ability to execute.",
  },
  {
    title: "Forrester Wave Strong Performer - Compliance Automation (2024)",
    source: "Forrester",
    summary:
      "AxionTrust highlighted for multi‑framework automation and real‑time monitoring.",
  },
  {
    title:
      "Forrester Wave Strong Performer - Privileged Access Management (2024)",
    source: "Forrester",
    summary:
      "Dern noted for JIT access and comprehensive session analytics.",
  },
];

export const CASE_STUDIES: {
  customer: string;
  challenge: string;
  results: string;
}[] = [
  {
    customer: "Global Financial Services Firm (Quorix)",
    challenge: "Secure 500+ AWS accounts and achieve SOX compliance",
    results:
      "85% reduction in misconfigurations; SOX certification 6 months early",
  },
  {
    customer: "Major Healthcare System (AxionTrust)",
    challenge: "Maintain HIPAA compliance across 50+ accounts",
    results:
      "95% reduction in violations; 2,000 hours saved annually in audits",
  },
  {
    customer: "Global Technology Company (Dern)",
    challenge: "Eliminate standing privileges across 10,000+ resources",
    results:
      "15,000 standing privileged accounts removed; 90% incident reduction",
  },
];

export const AWARDS: { name: string; year: string; details?: string }[] = [
  {
    name: "12 industry analyst leadership positions across subsidiaries",
    year: "2024",
  },
  { name: "25+ major industry awards and recognitions", year: "2024" },
  { name: "Gartner Peer Insights Customers’ Choice (IGA)", year: "2024" },
];
