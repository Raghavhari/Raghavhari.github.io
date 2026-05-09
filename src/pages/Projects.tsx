import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { IndexChapter } from "@/components/IndexChapter";
import { CARD_ACCENTS, projects } from "@/data/projects";

export default function Projects() {
  return (
    <IndexChapter
      id="projects"
      chapter={4}
      code="PRJ · SHIP LOG"
      eyebrow="Selected work"
      title="Projects I'm proud of."
      description="Builds I'd defend in a design review, each one a bet on clarity, throughput, or developer experience."
      accent="blue"
      reverse
      bleed={false}
    >
      <div className="relative">
        <div aria-hidden className="pointer-events-none absolute -right-8 top-24 hidden h-48 w-48 rounded-full bg-blue/[0.06] blur-3xl lg:block" />

        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground">Bento grid · newest first</p>
          <p className="font-mono text-[11px] text-muted-foreground">
            <span className="text-foreground/75">{projects.length}</span> builds indexed
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-border/40 bg-background/20 shadow-[inset_0_1px_0_hsl(var(--blue)/0.07)]">
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" aria-hidden />
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet/35 to-transparent" />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-4">
              {projects.map((p, i) => {
                const accent = CARD_ACCENTS[i % CARD_ACCENTS.length];
                const ordinal = String(projects.length - i).padStart(2, "0");
                const refId = `PRJ-${String(projects.length - i).padStart(3, "0")}`;

                return (
                  <Link
                    key={p.slug}
                    to={`/projects/${p.slug}`}
                    className="group relative flex min-h-0 flex-col overflow-hidden rounded-2xl border border-border/50 bg-background-elevated/30 transition duration-300 hover:border-blue/40 hover:shadow-[0_0_0_1px_hsl(var(--blue)/0.1),0_20px_50px_-24px_hsl(var(--blue)/0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-safe:animate-fade-in-up anim-both lg:col-span-4 lg:min-h-[15rem]"
                    style={{ animationDelay: `${i * 75}ms` }}
                  >
                    <div aria-hidden className={`absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b ${accent.rail}`} />
                    <div aria-hidden className={`pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-gradient-to-br ${accent.orb} to-transparent opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`} />

                    <span aria-hidden className="pointer-events-none absolute right-3 top-2 font-display text-[clamp(2.5rem,8vw,4.5rem)] font-bold leading-none tracking-tighter text-foreground/[0.04] transition-colors duration-300 group-hover:text-foreground/[0.07] sm:right-5 sm:top-3">
                      {ordinal}
                    </span>

                    <div className="relative flex flex-1 flex-col p-5 sm:p-6">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div className="flex min-w-0 flex-wrap items-center gap-2">
                          <span className={`rounded-md border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.22em] ${accent.badge}`}>
                            {refId}
                          </span>
                          <span className="font-mono text-[11px] text-muted-foreground/90">/{p.slug}</span>
                        </div>
                        <span
                          className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border/55 bg-secondary/30 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider ${
                            p.status === "Live" ? "text-success" : "text-muted-foreground"
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              p.status === "Live" ? "bg-success dot-live" : "bg-muted-foreground"
                            }`}
                            aria-hidden
                          />
                          {p.status}
                        </span>
                      </div>

                      <div className="mt-5 flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border/55 bg-gradient-soft font-display text-lg font-semibold text-blue sm:h-14 sm:w-14 sm:text-xl" aria-hidden>
                          {p.name[0]}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                            {p.name}
                          </h3>
                        </div>
                      </div>

                      <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-6">
                        <div className="flex flex-wrap gap-2">
                          {p.tags.map((t) => (
                            <span key={t} className="rounded border border-border/55 bg-background/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground transition-colors duration-200 group-hover:border-blue/30 group-hover:text-foreground">
                              {t}
                            </span>
                          ))}
                        </div>
                        <span aria-hidden className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border/55 text-muted-foreground transition-all duration-300 group-hover:border-blue/40 group-hover:text-blue group-hover:shadow-[0_0_20px_hsl(var(--blue)/0.2)]">
                          <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </IndexChapter>
  );
}
