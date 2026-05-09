import { IndexChapter } from "@/components/IndexChapter";
import { ENTRY_ACCENTS, experience } from "@/data/experience";

export default function Experience() {
  const totalHighlights = experience.reduce((sum, item) => sum + item.impact.length, 0);

  return (
    <IndexChapter
      id="experience"
      chapter={3}
      code="EXP · LEDGER"
      eyebrow="Experience"
      title="Where I've shipped."
      description="A chronological ledger — titles, orgs, and outcomes I'm willing to put under scrutiny."
      accent="cyan"
      reverse={false}
      bleed
    >
      <div className="relative space-y-8">
        <header className="relative overflow-hidden rounded-2xl border border-border/45 bg-background-elevated/25 px-5 py-5 sm:px-7">
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" aria-hidden />
          <div className="relative flex flex-wrap items-center gap-3 sm:gap-4">
            <span className="rounded-lg border border-cyan/30 bg-cyan/[0.08] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.28em] text-cyan/90">
              Experience dossier
            </span>
            <span className="rounded-lg border border-border/50 bg-secondary/20 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              {experience.length} roles
            </span>
            <span className="rounded-lg border border-border/50 bg-secondary/20 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              {totalHighlights} outcomes
            </span>
          </div>
        </header>

        <ol className="space-y-6 sm:space-y-8" aria-label="Experience timeline">
          {experience.map((item, i) => {
            const accent = ENTRY_ACCENTS[i % ENTRY_ACCENTS.length];
            const ordinal = String(experience.length - i).padStart(2, "0");
            const ledgerRef = `LG-${String(experience.length - i).padStart(3, "0")}`;

            return (
              <li key={`${item.company}-${item.duration}`}>
                <article className="group relative overflow-hidden rounded-2xl border border-border/50 bg-background-elevated/30 transition duration-300 hover:border-cyan/35 hover:shadow-[0_0_0_1px_hsl(var(--cyan)/0.1),0_28px_56px_-32px_hsl(189_94%_55%/0.14)]">
                  <div aria-hidden className={`absolute left-0 top-0 h-full w-[4px] bg-gradient-to-b ${accent.rail}`} />
                  <span aria-hidden className="pointer-events-none absolute right-3 top-2 select-none font-display text-[clamp(2.75rem,9vw,4.75rem)] font-bold leading-none tracking-tighter text-foreground/[0.04] transition-opacity duration-300 group-hover:text-foreground/[0.08]">
                    {ordinal}
                  </span>

                  <div className="relative px-5 pb-6 pt-5 sm:px-8 sm:pb-8 sm:pt-7">
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                      <div className="min-w-0 max-w-3xl">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                          <span className={`inline-flex rounded-md border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.22em] ${accent.tag}`}>
                            {ledgerRef}
                          </span>
                          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground/80">role snapshot</span>
                        </div>
                        <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-[1.7rem]">
                          {item.role}
                        </h3>
                        <p className="mt-2 font-mono text-sm text-muted-foreground">{item.company}</p>
                      </div>

                      <div className="flex shrink-0 flex-col items-start gap-2 lg:items-end">
                        <span className="rounded-lg border border-border/55 bg-secondary/25 px-3 py-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground sm:text-xs">
                          {item.duration}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/75">
                          {item.impact.length} impact lines
                        </span>
                      </div>
                    </div>

                    <div className="mt-8 border-t border-border/35 pt-7">
                      <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                        Outcomes
                      </p>
                      <ul className="mt-5 list-none space-y-4 p-0">
                        {item.impact.map((point, j) => (
                          <li key={j} className="relative overflow-hidden rounded-xl border border-border/40 bg-background/35 px-4 py-4 sm:px-6 sm:py-5">
                            <div aria-hidden className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r ${accent.rail} opacity-70`} />
                            <div className="flex items-start gap-4">
                              <span className="mt-0.5 shrink-0 font-mono text-[10px] tabular-nums text-muted-foreground/80">
                                {String(j + 1).padStart(2, "0")}
                              </span>
                              <p className="min-w-0 text-[15px] leading-[1.75] text-muted-foreground md:text-base">
                                {point}
                              </p>
                            </div>
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
    </IndexChapter>
  );
}
