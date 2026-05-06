export type TechGroup = {
  label: string;
  blurb: string;
  items: string[];
};

export const techGroups: TechGroup[] = [
  {
    label: "Backend",
    blurb: "Execution & boundaries",
    items: ["Python", "Django", "Fast API", "Go", "GraphQL"],
  },
  {
    label: "Infra",
    blurb: "Where it runs",
    items: ["Docker", "AWS", "Microsoft Azure", "GCP", "Azure Devops"],
  },
  {
    label: "Data",
    blurb: "Persistence & motion",
    items: ["Postgres", "Mongo DB", "Redis"],
  },
  {
    label: "Tools",
    blurb: "Observability & craft",
    items: ["Node.js", "React.js", "Next.js", "Git"],
  },
];

export const SPINE_TAPS = [
  "hsl(217 91% 60% / 0.45)",
  "hsl(262 83% 68% / 0.45)",
  "hsl(189 94% 55% / 0.45)",
  "hsl(158 64% 52% / 0.45)",
];

export const LANE_ACCENTS = [
  {
    rail: "from-blue to-transparent",
    hoverText: "group-hover/item:text-blue",
    node: "bg-blue shadow-[0_0_12px_hsl(217_91%_60%/0.35)]",
    index: "text-blue",
  },
  {
    rail: "from-violet to-transparent",
    hoverText: "group-hover/item:text-violet",
    node: "bg-violet shadow-[0_0_12px_hsl(262_83%_68%/0.35)]",
    index: "text-violet",
  },
  {
    rail: "from-cyan to-transparent",
    hoverText: "group-hover/item:text-cyan",
    node: "bg-cyan shadow-[0_0_12px_hsl(189_94%_55%/0.35)]",
    index: "text-cyan",
  },
  {
    rail: "from-success to-transparent",
    hoverText: "group-hover/item:text-success",
    node: "bg-success shadow-[0_0_12px_hsl(158_64%_52%/0.35)]",
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
