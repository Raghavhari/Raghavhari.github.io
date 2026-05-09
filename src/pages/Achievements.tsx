import { AchievementMotionBand } from "@/components/AchievementMotionBand";
import { IndexChapter } from "@/components/IndexChapter";
import { achievements, TILE_ACCENTS } from "@/data/achievements";
import { Award } from "lucide-react";

export default function Achievements() {
  return (
    <IndexChapter
      id="achievements"
      chapter={5}
      code="ACH · PROOF"
      eyebrow="Achievements"
      title="Proof on the wall."
      description="Milestones, recognition, and outcomes! the stuff that doesn't fit neatly into a commit graph."
      accent="violet"
      reverse={false}
      bleed
    >
      <div className="relative">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/55 bg-secondary/30 text-violet">
              <Award className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground">Polaroid wall</p>
              <p className="mt-1 font-mono text-[11px] text-muted-foreground">
                <span className="text-foreground/80">{achievements.length}</span> highlights · tilt on large screens
              </p>
            </div>
          </div>
          <p className="max-w-xs font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground/90 leading-relaxed">
            Hover tiles · gradient drift
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-border/40 bg-background/20 p-4 sm:p-6 lg:p-8">
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-35" aria-hidden />
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/35 to-transparent" />

          <div className="relative grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
            {achievements.map((item, i) => {
              const tone = TILE_ACCENTS[i % TILE_ACCENTS.length];
              const refId = `ACH-${String(achievements.length - i).padStart(3, "0")}`;
              const tilt = i % 2 === 0 ? "lg:-rotate-[0.45deg]" : "lg:rotate-[0.45deg]";

              return (
                <article
                  key={item.id}
                  className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-background-elevated/25 shadow-[0_12px_40px_-28px_rgba(0,0,0,0.65)] transition duration-300 hover:border-violet/35 hover:shadow-[0_20px_50px_-28px_hsl(var(--violet)/0.12)] motion-safe:animate-fade-in-up anim-both motion-reduce:rotate-0 ${tilt} lg:col-span-4 lg:min-h-[18.5rem]`}
                  style={{ animationDelay: `${120 + i * 90}ms` }}
                >
                  <div aria-hidden className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br ${tone.wash} to-transparent opacity-70`} />

                  <div className={`relative flex flex-1 flex-col overflow-hidden rounded-2xl border ${tone.border} bg-background/20`}>
                    <AchievementMotionBand
                      index={i}
                      year={item.year}
                      refId={refId}
                      tone={tone}
                    />

                    <div className="relative flex flex-1 flex-col justify-end border-t border-border/35 bg-background/65 px-5 py-5 backdrop-blur-md sm:px-6 sm:py-6">
                      <h3 className="font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                        {item.title}
                      </h3>
                      {item.issuer ? (
                        <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-violet/90">{item.issuer}</p>
                      ) : null}
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">{item.summary}</p>

                      <div className="mt-5 flex items-center justify-between gap-3 border-t border-border/30 pt-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                        <span className="text-cyan/80">validated outcome</span>
                        <span className="text-muted-foreground/70">
                          {String(i + 1).padStart(2, "0")} / {String(achievements.length).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </IndexChapter>
  );
}
