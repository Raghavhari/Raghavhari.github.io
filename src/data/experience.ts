export type ExperienceEntry = {
  role: string;
  company: string;
  duration: string;
  impact: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Associate Software Engineer",
    company: "Yectra Technologies",
    duration: "2024 — Present",
    impact: [
      "Subject Matter Expert for Aerosimple’s Snow Management Module, a globally used solution that improved airport winter operations efficiency by 30%.",
      "Centralized message catalogs and airport-specific dynamic JSON configurations using multi-tenant functions and Django custom commands, reducing airport configuration effort by 60% and enabling faster feature rollouts.",
      "Optimized AeroSimple’s Safety Management workflows by improving hazard identification and safety risk assessment monitoring, resulting in a 45% improvement in operational efficiency.",
      "Led end-to-end development of the Shopify Referral App, architecting 5+ interactive React.js screens for onboarding affiliates and monitoring affiliate performance.",
      "Optimized affiliate API request-response latency by 70% over 1M+ records through PostgreSQL indexing and high-throughput API design.",
      "Built modular, performance-optimized REST APIs and frontend components using memoization, lazy loading, and code splitting, ensuring a scalable and maintainable full-stack architecture."
    ],
  },
  {
    role: "Trainee",
    company: "Yectra Technologies",
    duration: "2024",
    impact: [
      "Designed and owned the end-to-end architecture of a software marketplace for enterprise and public API development, reducing API development time by 40%.",
      "Developed public APIs and exposed them via OpenAPI specifications, enabling third-party integrations and contributing to a 10% expansion of the platform ecosystem.",
      "Implemented end-to-end automated CI/CD deployment to Azure, reducing manual deployment effort by 65% and contributing to a 5% surge in revenue.",
    ],
  },
];

export const ENTRY_ACCENTS = [
  {
    rail: "from-blue via-blue/55 to-transparent",
    bullet: "bg-blue shadow-[0_0_16px_hsl(var(--blue)/0.26)]",
    tag: "text-blue border-blue/30 bg-blue/[0.06]",
  },
  {
    rail: "from-violet via-violet/55 to-transparent",
    bullet: "bg-violet shadow-[0_0_16px_hsl(var(--violet)/0.22)]",
    tag: "text-violet border-violet/30 bg-violet/[0.06]",
  },
  {
    rail: "from-cyan via-cyan/50 to-transparent",
    bullet: "bg-cyan shadow-[0_0_14px_hsl(var(--cyan)/0.20)]",
    tag: "text-cyan border-cyan/25 bg-cyan/[0.05]",
  },
  {
    rail: "from-success via-success/45 to-transparent",
    bullet: "bg-success shadow-[0_0_14px_hsl(var(--success)/0.20)]",
    tag: "text-success border-success/25 bg-success/[0.05]",
  },
];
