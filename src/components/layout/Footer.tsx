import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, Radio } from "lucide-react";
import { IconGithub, IconLinkedin, IconX } from "@/components/icons/SocialBrandIcons";

const routes = [
  { to: "/", label: "~", caption: "Portfolio & projects" },
  { to: "/blogs", label: "/blogs", caption: "Essays & notes" },
  { to: "/oss", label: "/oss", caption: "Open source" },
  { to: "/travel", label: "/travel", caption: "Field frames" },
] as const;

const social = [
  { Icon: IconGithub, href: "https://github.com/Raghavhari", label: "GitHub" },
  { Icon: IconLinkedin, href: "https://www.linkedin.com/in/raghav-hari/", label: "LinkedIn" },
  { Icon: IconX, href: "https://x.com/harishraghav__", label: "X" },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-28 overflow-hidden border-t border-border/40 sm:mt-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.14]" aria-hidden />
      <div className="pointer-events-none absolute -left-1/4 top-0 h-[28rem] w-[70%] rounded-full bg-gradient-to-br from-blue/[0.09] via-transparent to-violet/[0.06] blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/35 to-transparent" aria-hidden />

      <span className="pointer-events-none absolute -bottom-6 right-[-0.05em] select-none font-display text-[clamp(4.5rem,22vw,14rem)] font-bold leading-none tracking-tighter text-foreground/[0.045]" aria-hidden>
        EOF
      </span>

      <div className="container relative pt-14 pb-10 sm:pt-16 sm:pb-12">
        <div className="pointer-events-none absolute left-4 top-6 flex gap-2 sm:left-6 sm:top-8" aria-hidden>
          <span className="h-5 w-5 border-l-2 border-t-2 border-blue/30" />
        </div>
        <div className="pointer-events-none absolute right-4 top-6 sm:right-6 sm:top-8" aria-hidden>
          <span className="inline-block h-5 w-5 border-r-2 border-t-2 border-violet/25" />
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10 lg:gap-y-14">
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-border/45 bg-background-elevated/35 p-6 shadow-[inset_0_1px_0_hsl(var(--blue)/0.08),0_24px_80px_-40px_hsl(var(--blue)/0.2)] backdrop-blur-sm sm:p-7">
              <div className="pointer-events-none absolute -right-16 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-gradient-primary opacity-[0.12] blur-2xl" aria-hidden />
              <div className="relative flex items-start gap-3">
                <span className="relative mt-1 flex h-2.5 w-2.5 shrink-0">
                  <span className="absolute inset-0 animate-ping rounded-full bg-success/40 motion-reduce:animate-none" />
                  <span className="relative block h-2.5 w-2.5 rounded-full bg-success shadow-[0_0_12px_hsl(var(--success)/0.55)]" />
                </span>
                <div>
                  <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                    <Radio className="h-3 w-3 text-success/90" strokeWidth={1.75} />
                    Channel open
                  </p>
                  <p className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    harish<span className="text-muted-foreground">.dev</span>
                  </p>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    Backend, distributed systems, and the occasional photograph. This site is a living sketchbook! thanks
                    for making it to the bottom.
                  </p>
                </div>
              </div>

              <a
                href="mailto:harishraghavmr@gmail.com"
                className="group/mail relative mt-6 inline-flex items-center gap-3 overflow-hidden rounded-xl border border-blue/30 bg-gradient-to-r from-blue/[0.08] to-violet/[0.05] px-4 py-3 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:border-blue/50 hover:shadow-[0_0_32px_-8px_hsl(var(--blue)/0.45)]"
              >
                <Mail className="h-4 w-4 text-blue/80" strokeWidth={1.75} />
                <span className="relative">Say hello</span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover/mail:-translate-y-0.5 group-hover/mail:translate-x-0.5 group-hover/mail:text-blue" />
              </a>
            </div>
          </div>

          {/* Route map */}
          <nav className="lg:col-span-4" aria-label="Site sections">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-cyan/75">Jump</p>
            <ul className="mt-5 space-y-1">
              {routes.map((r, i) => (
                <li key={r.to}>
                  <Link
                    to={r.to}
                    className="group flex items-baseline gap-4 rounded-xl py-2.5 pl-1 pr-3 transition-colors hover:bg-blue/[0.04]"
                  >
                    <span className="w-7 shrink-0 font-mono text-[10px] tabular-nums text-muted-foreground/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="font-mono text-sm text-blue/90 transition-colors group-hover:text-blue">
                        {r.label}
                      </span>
                      <span className="mt-0.5 block font-mono text-[11px] text-muted-foreground transition-colors group-hover:text-muted-foreground/90">
                        {r.caption}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="h-3.5 w-3.5 shrink-0 text-muted-foreground/0 transition-all duration-300 group-hover:-translate-y-px group-hover:translate-x-px group-hover:text-blue/70"
                      strokeWidth={1.75}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col justify-between gap-10 lg:col-span-3">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-violet/75">Elsewhere</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {social.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="group flex h-11 w-11 items-center justify-center rounded-xl border border-border/55 bg-background/50 text-muted-foreground transition-all duration-300 hover:border-violet/40 hover:text-violet hover:shadow-[0_0_24px_-6px_hsl(var(--violet)/0.35)] sm:h-12 sm:w-12"
                  >
                    <Icon className="h-[18px] w-[18px] transition-transform duration-300 group-hover:scale-110" />
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border/40 bg-background/30 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              <p className="text-foreground/70">© {year} Harish Raghav</p>
              <p className="mt-2 leading-relaxed text-muted-foreground/85">All rights reserved · Built with care</p>
            </div>
          </div>
        </div>

        {/* Closing transmission line */}
        <div className="relative mt-14 flex flex-col items-center gap-3 border-t border-border/35 pt-8 sm:mt-16">
          <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden />
          <p className="text-center font-mono text-[10px] uppercase tracking-[0.55em] text-muted-foreground/70">
            — end of transmission —
          </p>
        </div>
      </div>
    </footer>
  );
}
