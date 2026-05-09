export type Achievement = {
  id: string;
  title: string;
  issuer?: string;
  year: string;
  summary: string;
};

export const achievements: Achievement[] = [
  {
    id: "best-scrum-master",
    title: "Best Scrum Master",
    issuer: "Yectra Technologies",
    year: "2024",
    summary: "Recognized for facilitation, predictable delivery, and keeping teams aligned without watering down scope.",
  },
  {
    id: "sih-hackathon",
    title: "Hackathon Winner",
    issuer: "SIH Hackathon",
    year: "2023",
    summary: "Won first place at the State Level Hackathon for developing an innovative solution that addresses a critical societal challenge.",
  },
];

export const TILE_ACCENTS = [
  { border: "border-blue/25", wash: "from-blue/[0.12]" },
  { border: "border-violet/25", wash: "from-violet/[0.10]" },
  { border: "border-cyan/22", wash: "from-cyan/[0.08]" },
  { border: "border-success/22", wash: "from-success/[0.08]" },
];
