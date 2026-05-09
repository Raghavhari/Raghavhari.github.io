import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

function blogLogoFromTags(tags: string[]) {
  const t = new Set(tags.map((tag) => tag.toLowerCase()));
  if (t.has("django")) return { label: "DJANGO", accent: "emerald" as const };
  if (t.has("java")) return { label: "JAVA", accent: "orange" as const };
  if (t.has("javascript")) return { label: "JAVASCRIPT", accent: "yellow" as const };
  return { label: "BLOG", accent: "blue" as const };
}

export type BlogCardProps = {
  slug: string;
  title: string;
  preview: string;
  date: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
  coverImage?: unknown;
  indexLabel?: string;
};

export default function BlogCard({ slug, title, preview, date, readTime, tags, featured = false, indexLabel }: BlogCardProps) {
  const logo = blogLogoFromTags(tags);
  return (
    <Link
      to={`/blogs/${slug}`}
      className={`group relative flex w-full flex-col overflow-hidden rounded-2xl border border-border/45 bg-background-elevated/20 text-left shadow-[inset_0_1px_0_hsl(var(--blue)/0.06)] transition-all duration-500 hover:border-blue/35 hover:shadow-[0_24px_60px_-28px_hsl(var(--blue)/0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${featured ? "md:min-h-[20rem] lg:flex-row" : ""
        }`}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:radial-gradient(ellipse_80%_60%_at_80%_0%,hsl(var(--violet)/0.08),transparent_55%)]" />

      <div
        aria-hidden
        className={`relative shrink-0 overflow-hidden border-border/40 bg-background/40 ${featured
            ? "aspect-[16/10] w-full lg:aspect-auto lg:w-[min(44%,420px)] lg:border-r lg:border-border/35"
            : "h-20 w-full border-b border-border/35 sm:h-24"
          }`}
      >
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div
          className={`absolute inset-0 ${logo.accent === "emerald"
              ? "[background:radial-gradient(ellipse_65%_60%_at_30%_35%,hsl(142_70%_45%/0.22),transparent_60%)]"
              : logo.accent === "orange"
                ? "[background:radial-gradient(ellipse_65%_60%_at_30%_35%,hsl(24_95%_55%/0.22),transparent_60%)]"
                : logo.accent === "yellow"
                  ? "[background:radial-gradient(ellipse_65%_60%_at_30%_35%,hsl(48_95%_55%/0.22),transparent_60%)]"
                  : "[background:radial-gradient(ellipse_65%_60%_at_30%_35%,hsl(var(--blue)/0.18),transparent_60%)]"
            }`}
        />
        <div className="absolute inset-0 [background:radial-gradient(ellipse_55%_50%_at_80%_35%,hsl(var(--violet)/0.18),transparent_62%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/80 lg:bg-gradient-to-r lg:from-transparent lg:via-background/10 lg:to-background/85" />
        <div className="absolute -inset-x-16 top-0 h-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent opacity-0 blur-md transition-opacity duration-500 motion-safe:animate-pulse group-hover:opacity-100" />

        <div className="absolute inset-0 grid place-items-center px-6">
          <span
            className={`select-none text-center font-display font-semibold uppercase tracking-[0.35em] text-transparent opacity-90 [background-size:220%_220%] [background-position:0%_50%] motion-safe:animate-[gradient_6s_ease_infinite] ${featured
                ? "text-[clamp(1.4rem,3.2vw,2.4rem)]"
                : "text-[clamp(1.05rem,2.6vw,1.6rem)]"
              } ${logo.accent === "emerald"
                ? "bg-gradient-to-r from-emerald-200 via-emerald-50 to-violet-200 bg-clip-text"
                : logo.accent === "orange"
                  ? "bg-gradient-to-r from-orange-200 via-orange-50 to-violet-200 bg-clip-text"
                  : logo.accent === "yellow"
                    ? "bg-gradient-to-r from-yellow-200 via-yellow-50 to-violet-200 bg-clip-text"
                    : "bg-gradient-to-r from-blue-200 via-blue-50 to-violet-200 bg-clip-text"
              }`}
          >
            {logo.label}
          </span>
        </div>

        {featured ? (
          <span className="absolute left-4 top-4 rounded-md border border-blue/30 bg-background/70 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.35em] text-blue backdrop-blur-sm">
            Featured
          </span>
        ) : null}
      </div>

      <div className={`relative flex min-w-0 flex-1 flex-col p-6 sm:p-8 ${featured ? "lg:py-10" : ""}`}>
        {indexLabel ? (
          <span className="mb-3 font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground/90">Issue · {indexLabel}</span>
        ) : null}

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 shrink-0 text-blue/60" strokeWidth={1.75} />
            {date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 shrink-0 text-violet/60" strokeWidth={1.75} />
            {readTime}
          </span>
        </div>

        <h3
          className={`mt-4 font-display font-semibold leading-snug tracking-tight text-foreground transition-colors duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue group-hover:to-violet group-hover:bg-clip-text ${featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
            }`}
        >
          {title}
        </h3>

        <p className={`mt-3 text-pretty leading-relaxed text-muted-foreground ${featured ? "text-base sm:max-w-2xl" : "text-sm sm:text-base"}`}>
          {preview}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-md border border-border/50 bg-background/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition-colors group-hover:border-blue/25 group-hover:text-foreground/90">
              {tag}
            </span>
          ))}
        </div>

        <span className="mt-auto inline-flex items-center gap-2 pt-6 font-mono text-xs uppercase tracking-[0.2em] text-blue transition-all duration-300 group-hover:gap-3">
          Read
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
        </span>
      </div>
    </Link>
  );
}
