export const heroHeadline = {
  line1: "Building infra",
  line2: "that doesn't flinch.",
};

export const heroFocusLanes = ["Full-stack", "Distributed systems", "Databases"];

export const heroSnapshot = {
  roleTitle: "Role",
  roleValue: "Full Stack",
  eventsLabel: "Events",
  eventsPrimary: "NATS",
  eventsSecondary: "pub/sub",
  latencyLabel: "Latency budget",
  latencyValue: "p99-conscious",
  langsLabel: "Languages",
  langs: ["JavaScript", "Python"] as const,
} as const;
