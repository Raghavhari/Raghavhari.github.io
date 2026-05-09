import { AboutSignalPanel } from "@/components/AboutSignalPanel";
import { IndexChapter } from "@/components/IndexChapter";
import { aboutBeats, aboutMeta, BEAT_ACCENTS } from "@/data/about";

export default function About() {
  return (
    <IndexChapter
      id="about"
      chapter={1}
      code="ABT · DOSSIER"
      eyebrow="About"
      title="A short story in three beats."
      description="The work, the ownership, and the conversations that keep me sharp! told as checkpoints, not a résumé wall."
      accent="blue"
      reverse={false}
      bleed
    >
      <div className="flex flex-col gap-10 lg:gap-14">
        <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-background-elevated/30 px-5 py-5 sm:px-8 sm:py-7">
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-45" aria-hidden />
          <div aria-hidden className="pointer-events-none absolute -right-16 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-blue/[0.07] blur-2xl" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
            <div className="min-w-0">
              <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground">Dossier header</p>
              <p className="mt-2 font-mono text-sm text-foreground/90 sm:text-base">{aboutMeta.dossierId}</p>
            </div>
            <dl className="grid gap-4 font-mono text-[11px] text-muted-foreground sm:grid-cols-2 sm:gap-x-12 lg:gap-x-16 lg:text-right">
              <div className="flex flex-col gap-1 sm:items-end">
                <dt className="text-muted-foreground/70">Focus</dt>
                <dd className="max-w-md text-[13px] leading-snug text-foreground/90 lg:ml-auto">{aboutMeta.tagline}</dd>
              </div>
              <div className="flex flex-col gap-1 sm:items-end">
                <dt className="text-muted-foreground/70">Tenure</dt>
                <dd className="max-w-md text-[13px] leading-snug text-foreground/90 lg:ml-auto">{aboutMeta.tenure}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-10 xl:gap-12">
          <div className="relative lg:col-span-8">
            <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
              Narrative arc · vertical ledger
            </p>

            <div className="relative" aria-label="About story beats">
              <div aria-hidden className="pointer-events-none absolute left-[1.125rem] top-8 bottom-8 w-px bg-gradient-to-b from-blue/50 via-border/80 to-violet/40 sm:left-[1.35rem]" />

              <ol className="relative flex flex-col gap-8 sm:gap-10">
                {aboutBeats.map((beat, i) => (
                  <li key={beat.id} className="relative pl-12 sm:pl-14">
                    <div className="absolute left-0 top-2 flex flex-col items-center sm:left-1 sm:top-2.5">
                      <span className={`relative z-[1] flex h-9 w-9 items-center justify-center rounded-full border-2 border-background bg-background-elevated font-mono text-[11px] font-medium tabular-nums text-foreground shadow-[0_0_0_1px_hsl(var(--border)),0_8px_24px_-8px_hsl(var(--blue)/0.20)] sm:h-10 sm:w-10 sm:text-xs`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span aria-hidden className={`absolute left-1/2 top-[calc(100%+0.25rem)] h-8 w-8 -translate-x-1/2 rounded-full bg-gradient-to-b ${BEAT_ACCENTS[i]} opacity-[0.12] blur-lg ${i === aboutBeats.length - 1 ? "hidden" : ""}`} />
                    </div>

                    <article className={`group relative overflow-hidden rounded-2xl border border-border/50 bg-background-elevated/25 p-6 transition duration-300 hover:border-blue/35 hover:shadow-[0_0_0_1px_hsl(var(--blue)/0.1),0_24px_48px_-28px_hsl(var(--blue)/0.10)] sm:p-7 md:p-8`}>
                      <div className={`absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b ${BEAT_ACCENTS[i]} opacity-90`} aria-hidden />

                      <h3 className="font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl md:text-[1.35rem]">
                        {beat.title}
                      </h3>
                      <p className="mt-4 max-w-none text-[15px] leading-[1.75] text-muted-foreground md:text-base md:leading-[1.72]">
                        {beat.body}
                      </p>

                      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-blue/[0.07] to-transparent opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" aria-hidden />
                    </article>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="relative lg:col-span-4">
            <p className="mb-4 text-center font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground lg:mb-5 lg:text-left">
              Presence · orbit
            </p>
            <div className="relative px-3 sm:px-4 lg:sticky lg:top-32 lg:px-0">
              <span className="pointer-events-none absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-blue/45 sm:left-1 lg:left-0" aria-hidden />
              <span className="pointer-events-none absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 border-violet/40 sm:right-1 lg:right-0" aria-hidden />
              <span className="pointer-events-none absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-cyan/35 sm:left-1 lg:left-0" aria-hidden />
              <span className="pointer-events-none absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-blue/30 sm:right-1 lg:right-0" aria-hidden />

              <div aria-hidden className="pointer-events-none absolute inset-4 -z-10 rounded-2xl border border-dashed border-border/45 bg-secondary/15 motion-reduce:translate-x-0 motion-reduce:translate-y-0 translate-x-2 translate-y-2 sm:inset-5 sm:translate-x-3 sm:translate-y-3 lg:inset-4" />

              <AboutSignalPanel />
            </div>
          </div>
        </div>
      </div>
    </IndexChapter>
  );
}
