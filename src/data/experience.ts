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
      "Co-led development of Aerosimple’s Snow Management Module, the system used to plan and prioritize airport winter operations, becoming the team’s go-to Subject Matter Expert and driving a 30% improvement in winter-ops efficiency across deployed airports.",
      "Designed and built a centralized configuration framework for message catalogs and airport-specific JSON configs, replacing per-airport manual setup, reducing new-airport configuration effort by 60%, and shortening the path to ship new features to all airports at once.",
      "Extended the Safety Management Module with hazard identification and safety risk assessment workflows, digitizing a previously manual process and improving safety-review efficiency by 45%.",
      "Owned end-to-end delivery of the Shopify Referral App, architecting 5+ interactive React.js screens covering affiliate onboarding, referral tracking, and performance monitoring, taking it from concept to production.",
      "Triaged and resolved production incidents on the Aerosimple platform through root-cause debugging, cutting recurring issues by documenting fixes as reusable runbooks, and working directly with airport ops teams to validate resolutions.",
    ],
  },
  {
    role: "Trainee",
    company: "Yectra Technologies",
    duration: "2024",
    impact: [
      "Designed and owned the end-to-end architecture of a marketplace platform enabling enterprise and public developers to both discover and build APIs, reducing API development time by 40%.",
      "Developed public APIs and exposed them via OpenAPI specifications, enabling third-party integrations and driving a 10% increase in public API consumers.",
      "Implemented end-to-end automated CI/CD deployment to Azure, reducing manual deployment effort by 65% and shortening release cycle time, enabling faster feature delivery.",
      "Led Agile Scrum ceremonies and ensured the timely delivery of sprint commitments across cross-functional teams.",
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
