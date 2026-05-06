import { useEffect, useLayoutEffect, useRef, useState } from "react";

const BOOT_LINES = [
  "// ingress: harish.dev",
  "verify origin … ok",
  "hydrate shell … ok",
  "signal routes … ready",
] as const;

export default function PageLoader() {
  const [mounted, setMounted] = useState(true);
  const [exiting, setExiting] = useState(false);
  const timers = useRef<number[]>([]);

  useLayoutEffect(() => {
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reduced = mq.matches;

    const bootMs = reduced ? 80 : 1450;
    const exitMs = reduced ? 80 : 520;

    const clearAll = () => {
      timers.current.forEach((id) => window.clearTimeout(id));
      timers.current = [];
    };

    timers.current.push(
      window.setTimeout(() => setExiting(true), bootMs),
      window.setTimeout(() => {
        document.documentElement.style.overflow = "";
        setMounted(false);
        clearAll();
      }, bootMs + exitMs),
    );

    return () => {
      clearAll();
      document.documentElement.style.overflow = "";
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col bg-background transition-[opacity,filter] duration-500 ease-out motion-reduce:duration-150 ${
        exiting ? "pointer-events-none opacity-0 blur-[2px]" : "opacity-100"
      }`}
      aria-hidden={exiting}
    >
      <span className="sr-only">Loading portfolio…</span>

      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.55]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_42%,hsl(217_91%_60%/0.09),transparent_72%)]" />

      <div className="pointer-events-none absolute inset-x-6 top-8 flex justify-between sm:inset-x-10">
        <span className="h-6 w-6 border-l-2 border-t-2 border-blue/40" />
        <span className="h-6 w-6 border-r-2 border-t-2 border-violet/35" />
      </div>
      <div className="pointer-events-none absolute inset-x-6 bottom-8 flex justify-between sm:inset-x-10">
        <span className="h-6 w-6 border-b-2 border-l-2 border-cyan/30" />
        <span className="h-6 w-6 border-b-2 border-r-2 border-blue/25" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[45%] overflow-hidden">
        <div className="loader-scan-sweep absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-transparent via-white/[0.06] to-transparent motion-reduce:hidden" />
      </div>

      <div className="relative z-[1] flex flex-1 flex-col items-center justify-center px-6 pb-24 pt-16">
        <div className="relative mb-12 flex h-[5.5rem] w-[5.5rem] items-center justify-center sm:h-28 sm:w-28">
          <div aria-hidden className="loader-ring-slow absolute inset-0 rounded-2xl border border-dashed border-blue/25 motion-reduce:opacity-40" />
          <div aria-hidden className="loader-ring-slow-reverse absolute inset-3 rounded-xl border border-violet/20 motion-reduce:opacity-35" />
          <div aria-hidden className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-[0.15] blur-2xl" />
          <span className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-primary font-display text-xl font-bold text-white shadow-glow-primary ring-2 ring-background sm:h-16 sm:w-16 sm:text-2xl">
            H
          </span>
        </div>

        <p className="font-mono text-[10px] uppercase tracking-[0.48em] text-muted-foreground">Boot sequence</p>
        <p className="mt-3 font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          harish<span className="text-muted-foreground">.dev</span>
        </p>

        <div className="mt-10 w-full max-w-[min(100%,20rem)] space-y-2 text-left sm:max-w-md">
          {BOOT_LINES.map((line, i) => (
            <p
              key={line}
              className="loader-line font-mono text-[11px] leading-relaxed text-muted-foreground sm:text-xs"
              style={{ animationDelay: `${180 + i * 240}ms` }}
            >
              <span className="mr-2 inline-block w-4 shrink-0 text-[10px] tabular-nums text-blue/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              {line}
            </p>
          ))}
        </div>
      </div>

      <div className="relative z-[1] px-8 pb-10 sm:px-12">
        <div className="mx-auto max-w-lg">
          <div className="flex items-center justify-between gap-4 font-mono text-[9px] uppercase tracking-[0.35em] text-muted-foreground">
            <span className="text-blue/70">channel open</span>
            <span className="text-muted-foreground/70">await handoff</span>
          </div>
          <div className="mt-3 h-[3px] overflow-hidden rounded-full bg-border/70">
            <div className="loader-bar-track h-full rounded-full bg-gradient-to-r from-blue via-violet to-cyan" />
          </div>
        </div>
      </div>
    </div>
  );
}
