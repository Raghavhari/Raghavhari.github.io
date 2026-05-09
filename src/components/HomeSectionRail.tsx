const SECTIONS = [
  { id: "about", label: "About" },
  { id: "tech", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
] as const;

export default function HomeSectionRail() {
  return (
    <nav aria-label="On this page" className="pointer-events-none fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 xl:flex 2xl:right-8">
      {SECTIONS.map((s, i) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className="pointer-events-auto group relative flex h-7 w-7 items-center justify-center rounded-full border border-border/40 bg-background/55 backdrop-blur-md transition hover:border-blue/45 hover:bg-blue/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          title={s.label}
        >
          <span className="font-mono text-[9px] tabular-nums text-muted-foreground/80 transition group-hover:text-foreground">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="sr-only">{s.label}</span>
        </a>
      ))}
    </nav>
  );
}
