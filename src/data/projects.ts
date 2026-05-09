type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type Project = {
  slug: string;
  name: string;
  short: string;
  tags: string[];
  status: "Live" | "Not Live";
  liveUrl?: string;
  githubUrl?: string;
  coverImage?: ProjectImage;
  gallery?: ProjectImage[];
  overview: string;
  why: string;
  useCase: string;
  learned: string;
  challenges: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: "issue-tracker",
    name: "Issue Tracker",
    short: "A lightweight platform to track and resolve tickets",
    tags: ["Next.js", "Vercel"],
    status: "Live",
    liveUrl: "https://issue-tracker-psi-beige.vercel.app/",
    githubUrl: "https://github.com/Raghavhari/Issue-Tracker",
    coverImage: {
      src: "/issue.jpg",
      alt: "Bug Tracking animated image",
    },
    gallery: [
      {
        src: "/IssueTracker.png",
        alt: "Issue Tracker Dashboard",
        caption: "There it is, Buggy tracker!",
      },
    ],
    overview: "Issue Tracker is a modern issue tracking and ticketing platform designed to help teams manage tasks, bugs, and workflows efficiently through a clean and structured interface.",
    why: "Most ticketing tools are either too complex or poorly designed. I wanted to build something that is simple, fast, and visually structured, so developers can focus on their work instead of fighting the UI.",
    useCase: "It focuses on simplicity and clarity so developers can stay focused on their work.",
    learned: "While building it, I learned how to design structured and scalable UI systems, apply modern UI/UX best practices, and think from a user-first perspective.",
    challenges: "One of the main challenges was implementing secure authentication using Google Cloud Platform, especially handling login flows and session management while keeping the experience smooth.",
    stack: ["Next.js", "Radix UI", "GCP", "Vercel"],
  },
  {
    slug: "affilazo",
    name: "Affilazo",
    short: "A simple affiliate marketing tracking app in Shopify.",
    tags: ["TypeScript", "Remix"],
    status: "Not Live",
    coverImage: {
      src: "/Affiliate-marketing.webp",
      alt: "Affiliate Marketing Image",
    },
    overview: "Affilazo is a simple Shopify affiliate marketing app built to help merchants easily promote products and track performance without dealing with complex tools.",
    why: "The focus is on keeping everything minimal while clearly addressing real merchant pain points, like managing affiliate links and understanding what actually drives sales.",
    useCase: "It can be used by store owners who want a straightforward way to run affiliate campaigns and grow their reach.",
    learned: "While building it, I learned how to think more from a product perspective by identifying user problems instead of just building features.",
    challenges: "One of the main challenges was working with Shopify’s in-house APIs, especially understanding how to integrate them smoothly while handling limitations and maintaining a clean user experience.",
    stack: ["TypeScript", "Remix", "GraphQL", "Shopify"],
  },
  {
    slug: "game-hub",
    name: "Game Hub",
    short: "A interactive game hub for rookies",
    tags: ["React.js", "Vercel"],
    status: "Live",
    liveUrl: "https://game-hub-gamma-nine-29.vercel.app/",
    githubUrl: "https://github.com/Raghavhari/Game-Hub",
    coverImage: {
      src: "/game.jpg",
      alt: "Animated Game Hub image",
    },
    gallery: [
      {
        src: "/GameHub.png",
        alt: "Game Hub Page",
        caption: "Yep! Let's Go",
      },
    ],
    overview: "GameHub is a simple platform that showcases a curated collection of games, helping beginners easily explore and discover what to play.",
    why: "The goal was to keep everything clean and approachable, so even someone new can browse without confusion.",
    useCase: "It is useful for casually browsing new games, finding something to try based on interest, and quickly getting an overview of different options in one place.",
    learned: "While building it, I focused on improving my understanding of structured UI design and how to create smooth, user-friendly layouts.",
    challenges: "One of the main challenges was working with styling components in Chakra UI, especially learning how to balance flexibility and consistency while designing the interface.",
    stack: ["React.js", "Chakra UI", "Vercel"],
  },
];

export const CARD_ACCENTS = [
  {
    rail: "from-blue via-blue/50 to-transparent",
    badge: "border-blue/35 bg-blue/[0.07] text-blue",
    orb: "from-blue/25",
  },
  {
    rail: "from-violet via-violet/50 to-transparent",
    badge: "border-violet/35 bg-violet/[0.07] text-violet",
    orb: "from-violet/22",
  },
  {
    rail: "from-cyan via-cyan/45 to-transparent",
    badge: "border-cyan/30 bg-cyan/[0.06] text-cyan",
    orb: "from-cyan/20",
  },
  {
    rail: "from-success via-success/40 to-transparent",
    badge: "border-success/30 bg-success/[0.06] text-success",
    orb: "from-success/18",
  },
];

