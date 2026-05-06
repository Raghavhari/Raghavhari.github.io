export type BlogImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type Blog = {
  slug: string;
  title: string;
  preview: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  coverImage?: BlogImage;
  gallery?: BlogImage[];
};

export const blogs: Blog[] = [
  {
    slug: "exactly-once-is-a-lie",
    title: "Exactly-Once Is a Lie (and What to Build Instead)",
    preview:
      "Why distributed systems people argue about exactly-once semantics — and the pragmatic patterns that actually work in production.",
    content:
      "Exactly-once delivery is a lie we tell ourselves. In this post, I explore the real tradeoffs of message processing guarantees and what patterns actually work in production systems.",
    date: "Apr 12, 2026",
    readTime: "8 min",
    tags: ["Distributed Systems", "Backend"],
    featured: true,
    coverImage: {
      src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=85",
      alt: "Abstract network cables and fiber connections",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=85",
        alt: "Earth from space with connectivity metaphor",
        caption: "Delivery guarantees look different at planetary scale.",
      },
      {
        src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85",
        alt: "Laptop with code in low light",
        caption: "Idempotency keys beat wishful thinking.",
      },
    ],
  },
  {
    slug: "postgres-locks",
    title: "The Postgres Locks Cheatsheet I Wish I Had",
    preview: "A field guide to lock modes, when ALTER TABLE freezes your prod, and how to deploy schema changes without fear.",
    content:
      "Understanding Postgres locks is critical for deploying schema changes without downtime. This comprehensive guide covers all lock modes and practical patterns.",
    date: "Mar 03, 2026",
    readTime: "12 min",
    tags: ["PostgreSQL", "Database"],
    featured: true,
    coverImage: {
      src: "https://images.unsplash.com/photo-1544383835-bda086bc2645?auto=format&fit=crop&w=1600&q=85",
      alt: "Abstract database visualization in blue",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85",
        alt: "Analytics and charts on a laptop",
        caption: "Lock waits show up first in your graphs — then in Slack.",
      },
    ],
  },
  {
    slug: "rust-for-backend",
    title: "Choosing Rust for Backend Services in 2026",
    preview:
      "A pragmatic look at where Rust earns its keep, where Go is still the right call, and the team-cost no one talks about.",
    content:
      "Rust is powerful but has tradeoffs. This post helps you decide when Rust makes sense for backend services and when Go might be the better choice.",
    date: "Feb 18, 2026",
    readTime: "10 min",
    tags: ["Rust", "Backend"],
    featured: false,
    coverImage: {
      src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=85",
      alt: "Laptop on a desk with code editor",
    },
  },
  {
    slug: "design-docs-that-ship",
    title: "Design Docs That Actually Ship",
    preview: "A template and checklist I've used to take 30+ projects from idea to production over five years.",
    content:
      "Good design docs are rare. I share the template and checklist I've used to take 30+ projects from idea to production.",
    date: "Jan 22, 2026",
    readTime: "6 min",
    tags: ["Engineering", "Best Practices"],
    featured: false,
    coverImage: {
      src: "https://images.unsplash.com/photo-1507925923038-cfccf5f60b70?auto=format&fit=crop&w=1200&q=85",
      alt: "Notebook and pen on a wooden desk",
    },
  },
  {
    slug: "incident-review",
    title: "How to Run an Incident Review People Don't Hate",
    preview:
      "Blameless retros, timeline reconstruction, and the one question that surfaces real systemic issues.",
    content:
      "Incident reviews done right lead to better systems. Learn how to run blameless retros that actually surface systemic issues.",
    date: "Dec 09, 2025",
    readTime: "7 min",
    tags: ["Operations", "Best Practices"],
    featured: false,
    coverImage: {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=85",
      alt: "Team collaborating around laptops in an office",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=85",
        alt: "Team discussion at a whiteboard",
        caption: "The timeline wall beats a slide deck every time.",
      },
    ],
  },
  {
    slug: "rate-limiting",
    title: "Rate Limiting at the Edge: GCRA vs Token Bucket",
    preview: "A deep dive into two algorithms, with benchmarks, code, and when you actually need either.",
    content:
      "Deep dive into rate limiting algorithms with benchmarks and production patterns for implementing at the edge.",
    date: "Nov 28, 2025",
    readTime: "9 min",
    tags: ["Infrastructure", "Algorithms"],
    featured: false,
    coverImage: {
      src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=85",
      alt: "Code on a computer screen",
    },
  },
];
