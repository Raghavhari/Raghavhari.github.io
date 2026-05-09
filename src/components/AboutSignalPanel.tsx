import { aboutMeta } from "@/data/about";

export function AboutSignalPanel() {
    return (
        <div className="relative aspect-[4/5] max-h-[min(100%,28rem)] overflow-hidden rounded-2xl border border-border/60 bg-secondary/20 shadow-elegant motion-reduce:rotate-0 -rotate-1 sm:-rotate-[0.8deg] lg:max-h-none lg:aspect-[4/5]">
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-blue/12 via-transparent to-violet/12" />
            <div aria-hidden className="pointer-events-none absolute inset-0 grid-bg opacity-55" />

            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.07] achievement-grid-drift"
                style={{
                    backgroundImage: "linear-gradient(hsl(var(--blue) / 0.35) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--cyan) / 0.22) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                }}
            />

            <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-blue/[0.08] to-transparent about-scan-vertical" />

            <div className="relative flex h-full flex-col items-center justify-center px-6 py-10">
                <svg className="absolute inset-0 h-full w-full text-blue/35" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <g className="about-ring-cw">
                        <circle cx="100" cy="118" r="78" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 9" opacity="0.9" />
                        <circle cx="100" cy="118" r="62" stroke="currentColor" strokeWidth="0.35" strokeDasharray="2 14" opacity="0.55" />
                    </g>
                    <g className="about-ring-ccw text-violet/30">
                        <circle cx="100" cy="118" r="94" stroke="currentColor" strokeWidth="0.4" strokeDasharray="10 16" opacity="0.75" />
                    </g>
                    <circle cx="100" cy="118" r="5" className="fill-cyan/50 about-beacon" />
                </svg>

                <div className="relative z-[1] flex flex-col items-center text-center">
                    <p className="font-mono text-[10px] uppercase tracking-[0.42em] text-muted-foreground">
                        Signal
                    </p>
                    <p className="mt-4 font-display text-4xl font-semibold tracking-tight text-gradient-primary sm:text-5xl">
                        HR
                    </p>
                    <p className="mt-3 max-w-[14rem] font-mono text-[11px] leading-relaxed text-muted-foreground">
                        Synthetic portrait · orbit locked to dossier{" "}
                        <span className="text-foreground/75">{aboutMeta.dossierId}</span>
                    </p>
                    <div className="mt-6 flex gap-1.5" aria-hidden>
                        {[0, 1, 2, 3, 4].map((k) => (
                            <span
                                key={k}
                                className="h-1 w-1 rounded-full bg-blue/70 motion-safe:animate-pulse"
                                style={{ animationDelay: `${k * 160}ms` }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="relative flex items-center justify-between gap-3 border-t border-border/45 bg-background/60 px-4 py-3 backdrop-blur-sm">
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    Field · live
                </span>
                <span className="font-mono text-[10px] text-muted-foreground/80">
                    {aboutMeta.dossierId}
                </span>
            </div>
        </div>
    );
}
