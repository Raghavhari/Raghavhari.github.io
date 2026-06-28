export type TechGroup = {
  label: string;
  blurb: string;
  items: string[];
};

export const techGroups: TechGroup[] = [
  {
    label: "Backend",
    blurb: "Execution & boundaries",
    items: ["Python", "Django", "Fast API", "Express.js", "GraphQL"],
  },
  {
    label: "Infra",
    blurb: "Where it runs",
    items: ["Docker", "AWS", "Azure", "GCP", "Azure Devops"],
  },
  {
    label: "Data",
    blurb: "Persistence & motion",
    items: ["Postgres", "Mongo DB", "AWS S3"],
  },
  {
    label: "Tools",
    blurb: "Observability & craft",
    items: ["Node.js", "React.js", "Next.js", "Git"],
  },
];

export const SPINE_TAPS = [
  "hsl(var(--blue) / 0.45)",
  "hsl(var(--violet) / 0.45)",
  "hsl(var(--cyan) / 0.45)",
  "hsl(var(--success) / 0.45)",
];

export const LANE_ACCENTS = [
  {
    rail: "from-blue to-transparent",
    hoverText: "group-hover/item:text-blue",
    node: "bg-blue shadow-[0_0_12px_hsl(var(--blue)/0.28)]",
    index: "text-blue",
  },
  {
    rail: "from-violet to-transparent",
    hoverText: "group-hover/item:text-violet",
    node: "bg-violet shadow-[0_0_12px_hsl(var(--violet)/0.24)]",
    index: "text-violet",
  },
  {
    rail: "from-cyan to-transparent",
    hoverText: "group-hover/item:text-cyan",
    node: "bg-cyan shadow-[0_0_12px_hsl(var(--cyan)/0.22)]",
    index: "text-cyan",
  },
  {
    rail: "from-success to-transparent",
    hoverText: "group-hover/item:text-success",
    node: "bg-success shadow-[0_0_12px_hsl(var(--success)/0.22)]",
    index: "text-success",
  },
];

export function traceStrength(name: string): number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < name.length; i++) {
    h ^= name.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return 38 + (h % 52);
}
