import { frameRef, railByIndex, spanLabel, TravelEntry } from "@/data/travel";
import { LazyImage } from "./LazyImage";
import { Calendar, MapPin } from "lucide-react";
import { spanClasses } from "@/lib/styles";

export function TravelFrame({ t, i }: { t: TravelEntry; i: number }) {
    const rail = railByIndex[i % railByIndex.length];

    return (
        <figure
            className={`group/frame relative overflow-hidden rounded-2xl border border-border/45 bg-background-elevated/25 shadow-[inset_0_1px_0_hsl(var(--cyan)/0.06)] transition-all duration-500 hover:border-cyan/25 hover:shadow-[0_28px_60px_-32px_hsl(var(--blue)/0.2)] motion-safe:animate-fade-in-up anim-both ${spanClasses[t.span]}`}
            style={{ animationDelay: `${i * 65}ms` }}
        >
            <div aria-hidden className={`absolute left-0 top-0 z-[1] h-full w-[3px] bg-gradient-to-b ${rail}`} />
            <div className="pointer-events-none absolute inset-0 z-[1] opacity-0 transition-opacity duration-500 group-hover/frame:opacity-100 [background:radial-gradient(ellipse_90%_70%_at_80%_100%,hsl(var(--violet)/0.12),transparent_55%)]" />

            <div className="absolute inset-0">
                <LazyImage
                    src={t.image}
                    alt={t.place}
                    imgClassName="transition-transform duration-1100 ease-out group-hover/frame:scale-[1.05]"
                />
            </div>

            <div className="pointer-events-none absolute inset-0 z-[1] bg-background/25 mix-blend-multiply transition-opacity duration-500 group-hover/frame:opacity-[0.12]" aria-hidden />
            <div className="absolute inset-0 z-[1] bg-gradient-to-t from-background via-background/55 to-transparent" aria-hidden />
            <div className="absolute inset-0 z-[1] rounded-2xl ring-1 ring-inset ring-foreground/0 transition-all duration-500 group-hover/frame:ring-cyan/25" aria-hidden />

            <div className="absolute left-4 right-4 top-4 z-[2] flex items-start justify-between gap-2">
                <div className="flex items-center gap-2 rounded-lg border border-border/50 bg-background/65 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.28em] text-foreground/85 backdrop-blur-md">
                    <MapPin className="h-3 w-3 shrink-0 text-cyan" strokeWidth={1.75} />
                    {frameRef(i)}
                </div>
                <span className="rounded-md border border-border/45 bg-background/55 px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-muted-foreground backdrop-blur-md">
                    {spanLabel(t.span)}
                </span>
            </div>

            <div className="pointer-events-none absolute -right-6 top-1/2 z-[2] hidden -translate-y-1/2 rotate-90 font-mono text-[10px] uppercase tracking-[0.5em] text-foreground/[0.06] sm:block" aria-hidden>
                field · note
            </div>

            <figcaption className="absolute inset-x-0 bottom-0 z-[2] p-5 md:p-6">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.32em] text-cyan/90">
                    <Calendar className="h-3.5 w-3.5" strokeWidth={1.75} />
                    {t.date}
                </div>
                <h3 className="mt-2.5 font-display text-xl font-semibold leading-tight tracking-tight text-foreground md:text-2xl">
                    {t.place}
                </h3>
                <p className="mt-2 max-w-lg text-pretty text-sm leading-relaxed text-muted-foreground line-clamp-2 md:line-clamp-3">
                    {t.note}
                </p>
            </figcaption>
        </figure>
    );
}
