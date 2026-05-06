import { LazyImage } from "@/components/LazyImage";
import SectionHeading from "@/components/layout/SectionHeading";
import { achievements, aspectFor, gridSpan, TILE_ACCENTS } from "@/data/achievements";
import { Award } from "lucide-react";

export default function Achievements() {
  return (
    <section id="achievements" className="container py-28">
      <SectionHeading
        eyebrow="Achievements"
        title="Proof on the wall."
        description="Milestones, recognition, and outcomes! the stuff that doesn’t fit neatly into a commit graph."
      />

      <div className="relative mt-4 overflow-hidden rounded-3xl border border-border/45 bg-background/25 shadow-[inset_0_1px_0_hsl(var(--blue)/0.08)]">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" aria-hidden />
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/35 to-transparent" />

        <header className="relative flex flex-col gap-3 border-b border-border/40 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/55 bg-secondary/30 text-blue">
              <Award className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.38em] text-muted-foreground">Proof shelf</p>
              <p className="mt-1 font-mono text-[11px] text-muted-foreground">
                <span className="text-foreground/80">{achievements.length}</span> highlights · visual ledger
              </p>
            </div>
          </div>
          <p className="max-w-md font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground/90 leading-relaxed">
            Hover tiles · images lazy-load
          </p>
        </header>

        <div className="relative p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
            {achievements.map((item, i) => {
              const tone = TILE_ACCENTS[i % TILE_ACCENTS.length];
              const refId = `ACH-${String(achievements.length - i).padStart(3, "0")}`;
              const tilt = i % 2 === 0 ? "lg:-rotate-[0.35deg]" : "lg:rotate-[0.35deg]";
              const featured = i === 0;

              return (
                <article
                  key={item.id}
                  className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-background-elevated/25 shadow-[0_12px_40px_-28px_rgba(0,0,0,0.65)] transition duration-300 hover:border-blue/35 hover:shadow-[0_20px_50px_-28px_hsl(217_91%_60%/0.18)] motion-safe:animate-fade-in-up anim-both motion-reduce:rotate-0 ${tilt} ${gridSpan(i)}`}
                  style={{ animationDelay: `${120 + i * 90}ms` }}
                >
                  <div aria-hidden className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br ${tone.wash} to-transparent opacity-70`} />

                  <div className={`relative flex flex-1 flex-col overflow-hidden rounded-2xl border ${tone.border} bg-background/20`}>
                    <div className={`relative w-full shrink-0 overflow-hidden ${aspectFor(i)}`}>
                      <LazyImage
                        src={item.image}
                        alt={item.imageAlt}
                        imgClassName={`object-cover ${featured ? "lg:object-[center_28%]" : "object-center"} transition-transform duration-1000 ease-out group-hover:scale-[1.05]`}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/10 sm:via-background/45" />
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_120%,hsl(var(--blue)/0.12),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2 sm:left-5 sm:top-5">
                        <span className="rounded-md border border-background/40 bg-background/55 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.26em] text-foreground backdrop-blur-md">
                          {refId}
                        </span>
                        <span className="rounded-md border border-border/50 bg-background/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground backdrop-blur-sm">
                          {item.year}
                        </span>
                      </div>
                    </div>

                    <div className="relative flex flex-1 flex-col justify-end border-t border-border/35 bg-background/65 px-5 py-5 backdrop-blur-md sm:px-6 sm:py-6">
                      <h3 className={`font-display font-semibold tracking-tight text-foreground ${featured ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"}`}>
                        {item.title}
                      </h3>
                      {item.issuer ? (
                        <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-blue/90">{item.issuer}</p>
                      ) : null}
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">{item.summary}</p>

                      <div className="mt-5 flex items-center justify-between gap-3 border-t border-border/30 pt-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                        <span className="text-cyan/80">validated outcome</span>
                        <span className="text-muted-foreground/70">{String(i + 1).padStart(2, "0")} / {String(achievements.length).padStart(2, "0")}</span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
