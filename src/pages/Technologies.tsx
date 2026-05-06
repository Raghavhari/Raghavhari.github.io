import { LANE_ACCENTS, SPINE_TAPS, techGroups, traceStrength } from "@/data/tech";
import SectionHeading from "../components/layout/SectionHeading";

export default function Technologies() {
  return (
    <section id="tech" className="container py-28">
      <SectionHeading
        eyebrow="Stack"
        title="Tools of the trade."
        description="The stack I reach for. Mostly boring, occasionally exciting, always chosen on purpose."
      />

      <div className="relative overflow-hidden rounded-3xl glass transition-[box-shadow,transform,border-color] duration-500 ease-smooth hover:-translate-y-px hover:border-blue/40 hover:shadow-elegant">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-70" />
        <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[min(100%,720px)] -translate-x-1/2 rounded-full bg-gradient-to-b from-blue/10 via-transparent to-transparent blur-3xl" />

        <svg className="pointer-events-none absolute inset-x-0 top-[7.25rem] hidden h-28 w-full lg:block" viewBox="0 0 1200 112" preserveAspectRatio="none" aria-hidden>
          <defs>
            <linearGradient id="tech-spine-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(217 91% 60% / 0.2)" />
              <stop offset="50%" stopColor="hsl(262 83% 68% / 0.45)" />
              <stop offset="100%" stopColor="hsl(189 94% 55% / 0.2)" />
            </linearGradient>
          </defs>
          <path
            d="M 40 20 L 1160 20"
            fill="none"
            stroke="url(#tech-spine-grad)"
            strokeWidth="1.25"
            className="schematic-spine opacity-95"
          />
          {[150, 430, 710, 990].map((cx, i) => (
            <line
              key={SPINE_TAPS[i]}
              x1={cx}
              y1={20}
              x2={cx}
              y2={72}
              stroke={SPINE_TAPS[i]}
              strokeWidth="1"
              strokeDasharray="4 7"
              opacity={0.85}
            />
          ))}
        </svg>

        <header className="relative border-b border-border/50 px-5 py-5 sm:px-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
              Stack topology
            </p>
            <p className="max-w-xl font-mono text-[11px] leading-relaxed text-muted-foreground/90 sm:text-right">
              <span className="text-foreground/80">Read left → right</span>
              { " — shape the service, run it somewhere safe, move and store bytes, then watch it in prod." }
            </p>
          </div>
        </header>

        <div className="relative grid grid-cols-1 lg:grid-cols-4">
          {techGroups.map((group, i) => {
            const lane = LANE_ACCENTS[i];
            return (
              <div
                key={group.label}
                className="relative border-t border-border/40 px-5 py-8 sm:px-8 lg:border-r lg:border-t-0 lg:last:border-r-0"
              >
                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className={`font-mono text-xs tabular-nums ${lane.index}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-xl font-semibold tracking-tight">
                        {group.label}
                      </h3>
                    </div>
                    <p className="mt-2 font-mono text-[12px] text-muted-foreground">
                      {group.blurb}
                    </p>
                  </div>
                  <span className={`mt-1 h-2 w-2 shrink-0 rounded-full ${lane.node}`} aria-hidden />
                </div>

                <ul className="relative mt-10 list-none space-y-0 p-0">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="group/item flex cursor-default items-center gap-3 border-t border-border/35 py-3 first:border-t-0 first:pt-0"
                    >
                      <span className="select-none font-mono text-[10px] text-muted-foreground/45">
                        ▸
                      </span>
                      <span className={`min-w-0 shrink-0 font-mono text-sm text-foreground/85 transition-colors duration-300 ${lane.hoverText}`}>
                        {item}
                      </span>
                      <div className="relative ml-auto hidden min-h-[2px] flex-1 overflow-hidden sm:block">
                        <div className="h-px w-full bg-border/55" />
                        <div
                          className={`absolute left-0 top-0 h-px bg-gradient-to-r ${lane.rail} opacity-80`}
                          style={{ width: `${traceStrength(item)}%` }}
                        />
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
    </section>
  );
}
