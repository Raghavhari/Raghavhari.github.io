import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";

const nav = [
  { to: "/", displayPath: "~", caption: "portfolio · projects" },
  { to: "/blogs", displayPath: "/blogs", caption: "writing" },
  { to: "/oss", displayPath: "/oss", caption: "open source" },
  { to: "/travel", displayPath: "/travel", caption: "field notes" },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const routeActive = (to: string) =>
    to === "/" ? location.pathname === "/" || location.pathname.startsWith("/projects") : location.pathname.startsWith(to);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-5 sm:px-6 sm:pt-7">
        <div className="container pointer-events-auto">
          <div className="relative flex flex-col gap-5 border-b border-border/35 pb-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
            <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 h-px w-full max-w-[min(100%,14rem)] bg-gradient-to-r from-blue/50 via-transparent to-transparent sm:max-w-xs" />

            <Link
              to="/"
              className="group relative z-10 shrink-0 font-display text-xl font-semibold tracking-tight text-foreground transition-colors hover:text-blue sm:text-2xl"
            >
              harish<span className="text-muted-foreground">.dev</span>
            </Link>

            <nav className="hidden md:flex md:flex-1 md:justify-end lg:absolute lg:inset-x-0 lg:z-[5] lg:flex lg:justify-center lg:pointer-events-none">
              <div className="relative lg:pointer-events-auto">
                <div aria-hidden className="pointer-events-none absolute inset-y-0 left-1/2 w-[min(92vw,42rem)] -translate-x-1/2 -skew-x-[14deg] rounded-sm border border-blue/25 bg-gradient-to-r from-blue/[0.07] via-secondary/20 to-violet/[0.06] shadow-[inset_0_1px_0_hsl(var(--blue)/0.15)] backdrop-blur-md" />
                <div className="relative flex skew-x-[14deg] flex-wrap items-center justify-center gap-x-1 px-6 py-2.5 font-mono text-[13px] sm:gap-x-2 sm:px-10">
                  {nav.map((n, i) => (
                    <span key={n.to} className="flex items-center skew-x-0">
                      {i > 0 && (
                        <span className="mx-2 hidden select-none text-muted-foreground/35 sm:inline" aria-hidden>
                          ::
                        </span>
                      )}
                      <Link
                        to={n.to}
                        data-active={routeActive(n.to)}
                        className="group/nav relative whitespace-nowrap text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background data-[active=true]:text-cyan"
                      >
                        <span aria-hidden className="mr-1 inline text-blue/45 group-hover/nav:text-blue/70">
                          {routeActive(n.to) ? "›" : "·"}
                        </span>
                        <span className={routeActive(n.to) ? "text-foreground" : ""}>{n.displayPath}</span>
                        <span
                          aria-hidden
                          className={`absolute -bottom-1 left-0 hidden h-px w-full origin-left bg-gradient-to-r from-blue to-violet transition-transform duration-300 md:block ${
                            routeActive(n.to)
                              ? "scale-x-100"
                              : "scale-x-0 group-hover/nav:scale-x-100 group-focus-visible/nav:scale-x-100"
                          }`}
                        />
                      </Link>
                    </span>
                  ))}
                </div>
              </div>
            </nav>

            <div className="relative z-10 flex shrink-0 items-center gap-3 sm:gap-4 md:h-full md:items-center md:self-stretch md:justify-end">
              <a
                href="mailto:harishraghavmr@gmail.com"
                className="group/mail hidden h-10 items-center gap-2 border border-border/55 bg-transparent px-3 font-mono text-[11px] uppercase tracking-[0.22em] leading-none text-muted-foreground transition-colors hover:border-blue/40 hover:text-foreground md:inline-flex"
              >
                mail
                <ArrowUpRight className="h-3.5 w-3.5 opacity-70 transition-transform group-hover/mail:-translate-y-px group-hover/mail:translate-x-px" aria-hidden />
              </a>

              <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                className="flex items-center gap-3 border border-border/55 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground transition-colors hover:border-blue/35 hover:text-foreground md:hidden"
                aria-expanded={open}
                aria-controls="mobile-route-overlay"
                aria-label="Open navigation"
              >
                <Menu className="h-4 w-4 text-blue/80" strokeWidth={1.75} aria-hidden />
                routes
              </button>
            </div>
          </div>
        </div>
      </header>

      {open ? (
        <div
          id="mobile-route-overlay"
          className="fixed inset-0 z-[70] flex flex-col bg-background md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(hsl(0_0%_100%)_1px,transparent_1px),linear-gradient(90deg,hsl(0_0%_100%)_1px,transparent_1px)] [background-size:48px_48px]" />

          <div className="relative flex items-center justify-between border-b border-border/40 px-5 py-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">Jump</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-11 w-11 items-center justify-center border border-border/55 text-foreground transition-colors hover:border-blue/40"
              aria-label="Close navigation"
            >
              <X className="h-5 w-5" strokeWidth={1.5} aria-hidden />
            </button>
          </div>

          <nav className="relative flex flex-1 flex-col justify-center px-5 pb-16 pt-8" aria-label="Mobile primary">
            <ul className="flex flex-col gap-3">
              {nav.map((n, i) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    data-active={routeActive(n.to)}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-6 border-l-2 border-transparent py-4 pl-5 transition-colors hover:border-blue/45 hover:bg-blue/[0.04] data-[active=true]:border-cyan data-[active=true]:bg-cyan/[0.06]"
                  >
                    <span className="w-8 shrink-0 font-mono text-xs tabular-nums text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col gap-2">
                      <span className="font-display text-4xl font-semibold leading-none tracking-tight text-foreground sm:text-5xl">
                        {n.displayPath}
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                        {n.caption}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <a
              href="mailto:harishraghavmr@gmail.com"
              className="mt-14 inline-flex w-fit items-center gap-3 border border-blue/35 bg-blue/[0.06] px-6 py-4 font-mono text-xs uppercase tracking-[0.28em] text-foreground transition-colors hover:bg-blue/[0.12]"
            >
              mail
              <ArrowUpRight className="h-4 w-4 text-blue" aria-hidden />
            </a>
          </nav>
        </div>
      ) : null}
    </>
  );
}
