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
    body: "At Yectra, I've driven a 5% increase in annual revenue by leading the development of cloud-native products by leveraging Agile Scrum practices to enhance team productivity and delivery efficiency.",
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

