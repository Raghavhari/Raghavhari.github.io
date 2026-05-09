import { ReactNode } from "react";

const ACCENT = {
  blue: {
    dot: "bg-blue",
    line: "from-blue/55 via-blue/20 to-transparent",
    code: "text-blue/85",
    halo: "bg-blue/25",
  },
  violet: {
    dot: "bg-violet",
    line: "from-violet/55 via-violet/20 to-transparent",
    code: "text-violet/85",
    halo: "bg-violet/25",
  },
  cyan: {
    dot: "bg-cyan",
    line: "from-cyan/55 via-cyan/20 to-transparent",
    code: "text-cyan/85",
    halo: "bg-cyan/25",
  },
} as const;

type IndexChapterAccent = keyof typeof ACCENT;

export type IndexChapterProps = {
  id: string;
  chapter: number;
  code: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  accent?: IndexChapterAccent;
  reverse?: boolean;
  bleed?: boolean;
  children: ReactNode;
};

export function IndexChapter({
  id,
  chapter,
  code,
  eyebrow,
  title,
  description,
  accent = "blue",
  reverse = false,
  bleed = false,
  children
}: IndexChapterProps) {
  const a = ACCENT[accent];

  return (
    <section id={id} className={`relative scroll-mt-28 md:scroll-mt-32 ${bleed ? "py-24 md:py-32" : "py-20 md:py-28"}`}>
      {bleed ? (
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-secondary/[0.35] via-background to-background" />
      ) : null}

      <div className="container relative">
        <div
          className={`flex flex-col gap-12 lg:gap-14 xl:gap-16 ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          } lg:items-start`}
        >
          <header className="relative flex shrink-0 flex-col gap-5 lg:sticky lg:top-32 lg:w-[min(100%,320px)] xl:w-[min(100%,360px)]">
            <div aria-hidden className={`pointer-events-none absolute ${reverse ? "-right-6" : "-left-6"} top-0 hidden h-40 w-40 rounded-full blur-3xl opacity-50 lg:block ${a.halo}`} />

            <p className={`font-mono text-[10px] uppercase tracking-[0.48em] ${a.code}`}>{code}</p>

            <div className="relative">
              <span aria-hidden className={`pointer-events-none absolute ${reverse ? "right-0 translate-x-1 text-right" : "left-0 -translate-x-1"} -top-2 font-display text-[clamp(3.25rem,11vw,6.5rem)] font-bold leading-none tracking-tighter text-foreground/[0.055] select-none sm:-top-4`}>
                {String(chapter).padStart(2, "0")}
              </span>

              <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground backdrop-blur-sm">
                <span className={`h-1 w-1 shrink-0 rounded-full ${a.dot}`} />
                {eyebrow}
              </div>

              <h2 className="mt-5 font-display text-[clamp(1.65rem,3.6vw,2.65rem)] font-semibold leading-[1.06] tracking-tight text-gradient">
                {title}
              </h2>

              {description ? (
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-[15px]">{description}</p>
              ) : null}
            </div>

            <div aria-hidden className={`hidden h-px w-full max-w-[11rem] bg-gradient-to-r lg:block ${a.line} ${reverse ? "ml-auto origin-right scale-x-[-1]" : ""}`} />
          </header>

          <div className="min-w-0 flex-1">{children}</div>
        </div>
      </div>
    </section>
  );
}
