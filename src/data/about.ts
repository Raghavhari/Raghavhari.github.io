export const aboutMeta = {
  dossierId: "HR-ABT-01",
  tagline: "Full-stack · backend-leaning",
  tenure: "1+ yrs shipping production systems",
} as const;

export type AboutBeat = {
  id: string;
  title: string;
  body: string;
};

export const aboutBeats: AboutBeat[] = [
  {
    id: "yectra",
    title: "Impact at Yectra",
    body: "At Yectra, I've driven 5% in annual revenue through leading and developing innovative cloud-native products, and have also been recognized as the best Scrum Master for managing teams and improving overall productivity.",
  },
  {
    id: "trainee",
    title: "SaaS, soup to nuts",
    body: "Before this, as a Trainee, I led and owned the end-to-end architecture of a SaaS application, taking responsibility from initial design to implementation and deployment.",
  },
  {
    id: "community",
    title: "Outside the IDE",
    body: "Outside of work, I actively participate in networking, engaging with engineers, product leaders, and the tech community to learn, share ideas, and stay updated.",
  },
] as const;

export const BEAT_ACCENTS = [
  "from-blue via-blue/50 to-transparent",
  "from-violet via-violet/50 to-transparent",
  "from-cyan via-cyan/45 to-transparent",
] as const;

