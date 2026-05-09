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
    slug: "django-production-checklist",
    title: "Django in Production: The Checklist I Actually Use",
    preview:
      "A pragmatic deployment checklist: settings, security headers, static files, Postgres, caching, and the gotchas that burn teams at launch.",
    content:
      "A practical Django production checklist: DEBUG, ALLOWED_HOSTS, secrets, CSRF/SECURE_* settings, logging, static/media, database pooling, caching, and common deployment pitfalls.\n\nThis post is intentionally opinionated and optimized for real-world shipping: start secure, keep it observable, and make rollbacks easy.",
    date: "May 02, 2026",
    readTime: "7 min",
    tags: ["Django", "Python", "Backend"],
    featured: true,
    coverImage: {
      src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=85",
      alt: "Green terminal code representing backend work",
    },
  },
  {
    slug: "java-spring-boot-structure",
    title: "Java Backend Structure: Keeping Spring Boot Projects Clean",
    preview:
      "A simple folder/module structure, DTO boundaries, service layering, and the testing approach that keeps Java projects readable at scale.",
    content:
      "This post covers a pragmatic Spring Boot structure for real teams: packages by feature, controller/service/repository boundaries, DTO mapping, validation, error handling, and tests that don’t become a maintenance burden.\n\nThe goal is consistency and clarity: make the next change obvious.",
    date: "Apr 10, 2026",
    readTime: "6 min",
    tags: ["Java", "Backend"],
    featured: false,
    coverImage: {
      src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=85",
      alt: "Code editor representing Java development",
    },
  },
  {
    slug: "javascript-performance-basics",
    title: "JavaScript Performance Basics: Fixing the Slow Stuff First",
    preview:
      "The high-leverage wins: render less, ship less JS, memoize correctly, and measure with DevTools before guessing.",
    content:
      "A practical guide to front-end performance: reduce re-renders, avoid expensive work on the main thread, split bundles, tame third-party scripts, and validate improvements with real measurements.\n\nThe theme: make performance work boring and repeatable.",
    date: "Mar 18, 2026",
    readTime: "5 min",
    tags: ["JavaScript", "Frontend"],
    featured: false,
    coverImage: {
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=85",
      alt: "Laptop with JavaScript development environment",
    },
  },
];
