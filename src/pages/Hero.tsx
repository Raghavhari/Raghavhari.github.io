import { ArrowDownRight } from "lucide-react";
import { heroFocusLanes, heroHeadline, heroSnapshot } from "@/data/hero";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-[0.65]" aria-hidden />
      <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 h-[min(70vw,520px)] w-[min(140vw,900px)] -translate-x-1/2 rounded-full bg-gradient-radial blur-3xl" />

      <p aria-hidden className="pointer-events-none absolute left-[6%] top-[18%] max-w-none select-none font-mono text-[clamp(4rem,14vw,12rem)] font-bold uppercase leading-none tracking-tighter text-foreground/[0.035]">
        stack
      </p>

      <div className="container relative pb-28 pt-4 md:pb-32 md:pt-6 lg:pb-36 lg:pt-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-x-12 xl:gap-x-14">
          <div className="relative lg:col-span-7">
            <div className="absolute bottom-6 left-0 top-6 hidden w-px bg-gradient-to-b from-blue/55 via-border to-transparent md:block" aria-hidden />

            <p className="animate-fade-in-up anim-both font-mono text-[10px] uppercase tracking-[0.42em] text-muted-foreground md:pl-8">
              · Hero manifest · <span className="text-cyan/90">v1</span>
            </p>

            <h1 className="animate-fade-in-up mt-6 font-display text-[clamp(2.6rem,7vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.035em] md:mt-8 md:pl-8 md:[animation-delay:0.06s] anim-both">
              <span className="relative inline-block">
                <span aria-hidden className="pointer-events-none absolute -left-2 bottom-[0.35em] hidden h-px w-[min(120%,calc(100%+3rem))] bg-gradient-to-r from-transparent via-blue/35 to-transparent sm:block md:left-0 md:w-[calc(100%+4rem)]" />
                <span className="text-gradient">{heroHeadline.line1}</span>
              </span>
              <span className="mt-[0.12em] block md:mt-[0.18em]">
                <span className="bg-gradient-primary bg-[length:200%_100%] bg-clip-text font-semibold text-transparent animate-gradient-shift">
                  {heroHeadline.line2}
                </span>
              </span>
            </h1>

            <div className="animate-fade-in-up mt-8 md:mt-10 md:pl-8 [animation-delay:0.14s] anim-both">
              <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground">Focus lanes</p>
              <ul className="mt-4 flex flex-col gap-3 border-l border-border/50 pl-5 md:pl-6" aria-label="Focus areas">
                {heroFocusLanes.map((label, i) => (
                  <li key={label} className="relative flex items-start gap-3">
                    <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-blue shadow-[0_0_12px_hsl(var(--blue)/0.45)]" aria-hidden />
                    <span className="font-mono text-[13px] leading-snug text-foreground/90 md:text-sm">
                      <span className="mr-2 inline-block min-w-[1.75rem] text-[11px] tabular-nums text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-fade-in-up mt-14 md:mt-16 md:border-l md:border-border/40 md:pl-8 [animation-delay:0.26s] anim-both">
              <div className="flex flex-wrap items-end gap-x-8 gap-y-4 border-t border-border/35 pt-8 md:border-t-0 md:pt-0">
                <p className="font-signature text-5xl leading-none text-foreground/78 signature-glow md:text-[3.25rem]">Harish Raghav</p>
                <p className="font-mono text-[11px] leading-relaxed text-muted-foreground">
                  <span className="block uppercase tracking-[0.22em]">signature</span>
                  <span className="text-border"> ──────── </span>
                  live portfolio
                </p>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up lg:col-span-5 [animation-delay:0.1s] anim-both">
            <div className="relative mx-auto max-w-lg lg:mx-0 lg:max-w-none">
              <div aria-hidden className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-blue/22 via-transparent to-violet/18 opacity-90 blur-md" />

              <div className="relative overflow-hidden rounded-2xl border border-border/55 bg-background/35 backdrop-blur-xl">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/45 px-4 py-3 sm:px-5">
                  <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground sm:text-[11px]">
                    <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-success dot-live" />
                    telemetry
                  </div>
                  <span className="rounded border border-border/60 bg-muted/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                    live-ish snapshot
                  </span>
                </div>

                <div className="grid gap-2 p-2 sm:gap-3 sm:p-3 lg:grid-cols-2">
                  <article className="relative overflow-hidden rounded-xl border border-border/45 bg-secondary/15 px-4 py-5 sm:px-5 lg:row-span-2 lg:flex lg:min-h-[13rem] lg:flex-col lg:justify-between">
                    <div aria-hidden className="pointer-events-none absolute -right-6 top-0 h-32 w-32 rounded-full bg-blue/[0.08] blur-2xl" />
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.36em] text-muted-foreground">
                        {heroSnapshot.roleTitle}
                      </p>
                      <p className="font-display mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-[1.65rem]">
                        {heroSnapshot.roleValue}
                      </p>
                    </div>
                    <div className="mt-6 font-mono text-[11px] text-muted-foreground lg:mt-0">
                      <span className="text-blue/70">⟨</span> scope · ships · owns <span className="text-blue/70">⟩</span>
                    </div>
                  </article>

                  <article className="rounded-xl border border-border/45 bg-secondary/10 px-4 py-4 sm:px-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.36em] text-muted-foreground">
                      {heroSnapshot.eventsLabel}
                    </p>
                    <p className="mt-3 font-mono text-sm text-foreground">
                      <span className="text-cyan">{heroSnapshot.eventsPrimary}</span>
                      <span className="text-muted-foreground">
                        {" "}
                        · {heroSnapshot.eventsSecondary}
                      </span>
                    </p>
                  </article>

                  <article className="rounded-xl border border-border/45 bg-secondary/10 px-4 py-4 sm:px-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.36em] text-muted-foreground">
                      {heroSnapshot.latencyLabel}
                    </p>
                    <p className="mt-3 font-mono text-sm text-violet/95">{heroSnapshot.latencyValue}</p>
                  </article>

                  <article className="rounded-xl border border-border/45 bg-secondary/10 px-4 py-4 sm:px-5 lg:col-span-2">
                    <p className="font-mono text-[10px] uppercase tracking-[0.36em] text-muted-foreground">
                      {heroSnapshot.langsLabel}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {heroSnapshot.langs.map((lang) => (
                        <span
                          key={lang}
                          className="rounded-md border border-blue/25 bg-blue/[0.06] px-2.5 py-1 font-mono text-[11px] text-foreground/95"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </article>
                </div>

                <div className="border-t border-border/40 px-3 py-2 sm:px-4">
                  <div className="flex h-1 overflow-hidden rounded-full bg-border/60">
                    <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-blue via-violet to-cyan opacity-90" />
                  </div>
                  <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.32em] text-muted-foreground/80">
                    synthetic load bar · decorative
                  </p>
                </div>

                <a
                  href="#about"
                  className="group/cta flex items-center justify-between gap-4 border-t border-border/45 px-4 py-4 font-mono text-xs text-muted-foreground transition-colors hover:bg-secondary/25 hover:text-foreground sm:px-5"
                >
                  <span className="flex items-center gap-2 uppercase tracking-[0.28em]">
                    <ArrowDownRight className="h-4 w-4 text-blue/80 transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:translate-y-0.5" aria-hidden />
                    open_chapter_01
                  </span>
                  <span className="hidden text-[10px] text-muted-foreground/70 sm:inline">#about</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div aria-hidden className="relative z-[1] -mt-px flex h-[clamp(2.5rem,7vw,4rem)] w-full justify-center overflow-hidden">
        <svg className="h-full min-w-[120%] shrink-0 text-secondary/[0.22]" viewBox="0 0 1440 56" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,56 V18 C320,4 560,52 880,28 S1240,8 1440,14 V56z" />
        </svg>
      </div>
      <div aria-hidden className="h-px w-full bg-gradient-to-r from-transparent via-border/50 to-transparent" />
    </section>
  );
}
