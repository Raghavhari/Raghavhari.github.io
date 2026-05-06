import SectionHeading from "@/components/layout/SectionHeading";
import { ENTRY_ACCENTS, experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="container py-28">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've shipped."
        description="A chronological ledger! titles, orgs, and the outcomes I'm willing to put under scrutiny."
      />

      <div className="relative mt-4 overflow-hidden rounded-3xl border border-border/45 bg-background/25 shadow-[inset_0_1px_0_hsl(var(--blue)/0.08)]">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" aria-hidden />
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue/35 to-transparent" />

        <header className="relative flex flex-col gap-2 border-b border-border/40 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.38em] text-muted-foreground">
            Employment ledger
          </p>
          <p className="font-mono text-[11px] text-muted-foreground">
            <span className="text-foreground/70">{experience.length}</span> placements · newest first
          </p>
        </header>

        <div className="relative px-4 pb-6 pt-4 sm:px-6 sm:pb-8 sm:pt-6">
          <div aria-hidden className="pointer-events-none absolute left-[1.125rem] top-6 bottom-10 hidden w-px bg-gradient-to-b from-blue/45 via-border to-transparent sm:left-[1.35rem] sm:block lg:left-10" />

          <ol className="relative flex flex-col gap-10 sm:gap-12">
            {experience.map((item, i) => {
              const accent = ENTRY_ACCENTS[i % ENTRY_ACCENTS.length];
              const ordinal = String(experience.length - i).padStart(2, "0");
              const ledgerRef = `LG-${String(experience.length - i).padStart(3, "0")}`;

              return (
                <li key={`${item.company}-${item.duration}`} className="relative sm:pl-14 lg:pl-[4.25rem]">
                  <span aria-hidden className={`absolute left-0 top-8 hidden h-3 w-3 rounded-full sm:flex sm:items-center sm:justify-center`}>
                    <span className={`absolute h-full w-full rounded-full opacity-40 blur-[2px] ${accent.bullet}`} />
                    <span className={`relative z-[1] h-2.5 w-2.5 rounded-full ring-2 ring-background ${accent.bullet}`} />
                  </span>

                  <article className="group relative overflow-hidden rounded-2xl border border-border/50 bg-background-elevated/30 transition duration-300 hover:border-blue/35 hover:shadow-[0_0_0_1px_hsl(var(--blue)/0.08)]">
                    <div aria-hidden className={`absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b ${accent.rail}`} />

                    <span aria-hidden className="pointer-events-none absolute -right-2 top-2 select-none font-display text-[clamp(3rem,10vw,5rem)] font-bold leading-none tracking-tighter text-foreground/[0.035] transition-opacity duration-300 group-hover:text-foreground/[0.055]">
                      {ordinal}
                    </span>

                    <div className="relative px-5 pb-5 pt-5 sm:px-7 sm:pb-6 sm:pt-6">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="min-w-0 space-y-2">
                          <span className={`inline-flex rounded-md border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.22em] ${accent.tag}`}>
                            {ledgerRef}
                          </span>
                          <h3 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-[1.35rem]">
                            {item.role}
                          </h3>
                          <p className="font-mono text-[13px] text-muted-foreground">{item.company}</p>
                        </div>
                        <span className="shrink-0 rounded-lg border border-border/55 bg-secondary/25 px-3 py-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground sm:text-xs">
                          {item.duration}
                        </span>
                      </div>

                      <div className="relative mt-6 border-t border-border/35 pt-6">
                        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                          Signal · impact
                        </p>
                        <ul className="mt-4 list-none space-y-3 p-0" aria-label="Impact highlights">
                          {item.impact.map((point, j) => (
                            <li key={j} className="flex gap-3">
                              <span
                                aria-hidden
                                className={`mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full ring-2 ring-background ${accent.bullet}`}
                              />
                              <span className="text-sm leading-relaxed text-muted-foreground md:text-[15px]">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
