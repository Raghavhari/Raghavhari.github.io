export type Achievement = {
  id: string;
  title: string;
  issuer?: string;
  year: string;
  summary: string;
  image: string;
  imageAlt: string;
};

export const achievements: Achievement[] = [
  {
    id: "best-scrum-master",
    title: "Best Scrum Master",
    issuer: "Yectra Technologies",
    year: "2024",
    summary: "Recognized for facilitation, predictable delivery, and keeping teams aligned without watering down scope.",
    image: "/Scrum.webp",
    imageAlt: "Team collaboration around a laptop in an office",
  },
  {
    id: "sih-hackathon",
    title: "Hackathon Winner",
    issuer: "SIH Hackathon",
    year: "2023",
    summary: "Won first place at the State Level Hackathon for developing an innovative solution that addresses a critical societal challenge.",
    image: "/SIH.JPG",
    imageAlt: "Hackathon Winner",
  },
];

export const TILE_ACCENTS = [
  { border: "border-blue/25", wash: "from-blue/[0.12]" },
  { border: "border-violet/25", wash: "from-violet/[0.10]" },
  { border: "border-cyan/22", wash: "from-cyan/[0.08]" },
  { border: "border-success/22", wash: "from-success/[0.08]" },
];

export function gridSpan(i: number) {
  if (i === 0) return "lg:col-span-7 lg:min-h-[22rem]";
  if (i === 1) return "lg:col-span-5 lg:min-h-[14rem]";
  if (i === 2) return "lg:col-span-5 lg:min-h-[14rem]";
  return "lg:col-span-7 lg:min-h-[18rem]";
}

export function aspectFor(i: number) {
  if (i === 0) return "aspect-[21/11] sm:aspect-[2/1] lg:aspect-auto lg:min-h-[12rem] lg:flex-1";
  if (i === 3) return "aspect-[2/1] sm:aspect-[5/2] lg:aspect-auto lg:min-h-[11rem] lg:flex-1";
  return "aspect-[16/10] lg:aspect-auto lg:min-h-[9.5rem] lg:flex-1";
}
