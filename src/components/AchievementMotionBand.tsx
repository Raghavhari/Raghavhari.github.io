import { TILE_ACCENTS } from "@/data/achievements";
import { Award, Sparkles, Trophy } from "lucide-react";

const TILE_ICONS = [Trophy, Award, Sparkles, Trophy] as const;

type AchievementMotionBand = {
    index: number;
    year: string;
    refId: string;
    tone: (typeof TILE_ACCENTS)[number];
};

export function AchievementMotionBand({ index, year, refId, tone }: AchievementMotionBand) {
    const Icon = TILE_ICONS[index % TILE_ICONS.length];
    const driftClass = index % 2 === 0 ? "" : "motion-safe:[animation-direction:reverse]";

    return (
        <div className="relative w-full shrink-0 overflow-hidden min-h-[10.5rem] sm:min-h-[11.25rem]">
            <div aria-hidden className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${tone.wash} to-transparent opacity-80`} />
            <div
                aria-hidden
                className={`pointer-events-none absolute -inset-[40%] opacity-[0.11] achievement-grid-drift ${driftClass}`}
                style={{
                    backgroundImage:
                        "linear-gradient(hsl(var(--foreground) / 0.06) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.04) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />
            <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-full w-[120%] -translate-x-[10%] bg-gradient-to-r from-transparent via-blue/[0.07] to-transparent motion-safe:animate-gradient-shift bg-[length:200%_100%]" />

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <Icon
                    className="text-foreground/[0.07] h-32 w-32 sm:h-36 sm:w-36 motion-safe:transition-transform motion-safe:duration-1000 motion-safe:ease-out motion-safe:group-hover:scale-110 motion-safe:group-hover:text-foreground/[0.1]"
                    strokeWidth={0.85}
                    aria-hidden
                />
            </div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/5 sm:via-background/40" />

            <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2 sm:left-5 sm:top-5">
                <span className="rounded-md border border-background/40 bg-background/55 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.26em] text-foreground backdrop-blur-md">
                    {refId}
                </span>
                <span className="rounded-md border border-border/50 bg-background/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground backdrop-blur-sm">
                    {year}
                </span>
            </div>

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_120%,hsl(var(--blue)/0.14),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>
    );
}
