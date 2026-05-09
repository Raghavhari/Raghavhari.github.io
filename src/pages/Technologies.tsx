import { LANE_ACCENTS, SPINE_TAPS, techGroups, traceStrength } from "@/data/tech";
import { IndexChapter } from "@/components/IndexChapter";

export default function Technologies() {
  return (
    <IndexChapter
      id="tech"
      chapter={2}
      code="STK · TOPOLOGY"
      eyebrow="Stack"
      title="Tools chosen on purpose."
      description="Mostly boring, occasionally exciting! the stack I reach for to shape services, run them safely, move bytes, and watch them in prod."
      accent="violet"
      reverse
      bleed={false}
    >
      <div className="relative">
        <div aria-hidden className="pointer-events-none absolute -left-6 top-1/2 hidden h-[min(28rem,70%)] w-32 -translate-y-1/2 rounded-full bg-violet/[0.06] blur-3xl lg:block" />

        <svg
          className="pointer-events-none absolute left-0 right-0 top-0 hidden h-24 w-full lg:block"
          viewBox="0 0 900 96"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <linearGradient id="tech-spine-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(217 91% 60% / 0.25)" />
              <stop offset="50%" stopColor="hsl(262 83% 68% / 0.45)" />
              <stop offset="100%" stopColor="hsl(189 94% 55% / 0.25)" />
            </linearGradient>
          </defs>
          <path d="M 24 28 L 876 28" fill="none" stroke="url(#tech-spine-grad)" strokeWidth="1.25" className="schematic-spine opacity-90" />
          {[112, 302, 492, 682].map((cx, i) => (
            <line
              key={SPINE_TAPS[i]}
              x1={cx}
              y1={28}
              x2={cx}
              y2={72}
              stroke={SPINE_TAPS[i]}
              strokeWidth="1"
              strokeDasharray="4 7"
              opacity={0.85}
            />
          ))}
        </svg>

        <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground lg:mb-10 lg:pl-1">
          Four lanes · staggered depth
        </p>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-4 lg:gap-5 xl:gap-4">
          {techGroups.map((group, i) => {
            const lane = LANE_ACCENTS[i];
            const stagger = i % 2 === 1 ? "xl:translate-y-8" : "xl:-translate-y-1";

            return (
              <div key={group.label} className={`relative overflow-hidden rounded-2xl border border-border/50 bg-background-elevated/25 shadow-[inset_0_1px_0_hsl(var(--blue)/0.06)] transition duration-300 hover:border-violet/35 hover:shadow-[0_0_0_1px_hsl(var(--violet)/0.08)] ${stagger}`}>
                <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" aria-hidden />
                <div aria-hidden className="pointer-events-none absolute -right-12 top-0 h-28 w-28 rounded-full bg-gradient-to-br from-blue/[0.07] to-transparent blur-2xl" />

                <div className="relative border-b border-border/40 px-5 py-4 sm:px-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className={`font-mono text-xs tabular-nums ${lane.index}`}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-display text-lg font-semibold tracking-tight sm:text-xl">{group.label}</h3>
                      </div>
                      <p className="mt-2 font-mono text-[12px] leading-relaxed text-muted-foreground">{group.blurb}</p>
                    </div>
                    <span className={`mt-1 h-2 w-2 shrink-0 rounded-full ${lane.node}`} aria-hidden />
                  </div>
                </div>

                <ul className="relative list-none space-y-0 p-0 px-5 py-4 sm:px-6 sm:py-5">
                  {group.items.map((item) => (
                    <li key={item} className="group/item flex cursor-default items-center gap-3 border-t border-border/35 py-3 first:border-t-0 first:pt-0">
                      <span className="select-none font-mono text-[10px] text-muted-foreground/45">▸</span>
                      <span className={`min-w-0 shrink-0 font-mono text-sm text-foreground/85 transition-colors duration-300 ${lane.hoverText}`}>
                        {item}
                      </span>
                      <div className="relative ml-auto hidden min-h-[2px] flex-1 overflow-hidden sm:block">
                        <div className="h-px w-full bg-border/55" />
                        <div className={`absolute left-0 top-0 h-px bg-gradient-to-r ${lane.rail} opacity-80`} style={{ width: `${traceStrength(item)}%` }} />
                      </div>
                      <span className={`hidden h-1.5 w-1.5 shrink-0 rounded-full opacity-45 transition-opacity duration-300 sm:block ${lane.node} group-hover/item:opacity-100`} aria-hidden />
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </IndexChapter>
  );
}
