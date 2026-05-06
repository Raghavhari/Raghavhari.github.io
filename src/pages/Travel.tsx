import { travel } from "@/data/travel";
import { layout } from "@/lib/styles";
import PageAmbient from "@/components/layout/PageAmbient";
import ListPageMasthead from "@/components/layout/ListPageMasthead";
import { Compass, Plane } from "lucide-react";
import { TravelFrame } from "@/components/TravelFrame";

export default function Travel() {
  return (
    <div className={layout.pageLoose}>
      <PageAmbient variant="travel" />

      <section className={`${layout.container} pt-4`}>
        <ListPageMasthead theme="travel">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.45em] text-cyan/85">
                <Plane className="h-3.5 w-3.5" strokeWidth={1.75} />
                Field notes
              </p>
              <h1 className="mt-4 font-display text-[clamp(1.75rem,4.5vw,3rem)] font-semibold leading-[1.12] tracking-tight text-foreground">
                Frames from the road.
              </h1>
              <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                A loose gallery from the other half of my life! layovers, trails, and quiet streets. Hover a frame for a
                little more light; each tile is tagged like a contact sheet.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-stretch lg:flex-col">
              <div className="rounded-xl border border-border/45 bg-background/45 px-5 py-4 backdrop-blur-sm">
                <p className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
                  <Compass className="h-3.5 w-3.5 text-violet/80" strokeWidth={1.75} />
                  Roll
                </p>
                <p className="mt-2 font-display text-2xl font-semibold tabular-nums text-foreground">{travel.length}</p>
                <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">frames logged</p>
              </div>
              <div className="rounded-xl border border-border/45 bg-background/45 px-5 py-4 backdrop-blur-sm">
                <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground">Coverage</p>
                <p className="mt-2 font-mono text-sm leading-snug text-foreground/90">Oct 2029 — MaR 2026</p>
                <p className="mt-1 font-mono text-[11px] text-muted-foreground">non-exhaustive · personal</p>
              </div>
            </div>
          </div>
        </ListPageMasthead>

        <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
          Contact sheet · bento grid
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[320px] md:gap-5">
          {travel.map((t, i) => (
            <TravelFrame key={`${t.place}-${i}`} t={t} i={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
