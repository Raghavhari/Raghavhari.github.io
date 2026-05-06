import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { LazyImage } from "@/components/LazyImage";
import type { BlogImage } from "@/data/blog";

export type BlogCardProps = {
  slug: string;
  title: string;
  preview: string;
  date: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
  coverImage?: BlogImage;
  indexLabel?: string;
};

export default function BlogCard({ slug, title, preview, date, readTime, tags, featured = false, coverImage, indexLabel }: BlogCardProps) {
  return (
    <Link
      to={`/blogs/${slug}`}
      className={`group relative flex w-full flex-col overflow-hidden rounded-2xl border border-border/45 bg-background-elevated/20 text-left shadow-[inset_0_1px_0_hsl(var(--blue)/0.06)] transition-all duration-500 hover:border-blue/35 hover:shadow-[0_24px_60px_-28px_hsl(var(--blue)/0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${featured ? "md:min-h-[20rem] lg:flex-row" : ""
        }`}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:radial-gradient(ellipse_80%_60%_at_80%_0%,hsl(var(--violet)/0.08),transparent_55%)]" />

      {coverImage ? (
        <div
          className={`relative shrink-0 overflow-hidden border-border/40 bg-background/50 ${featured
              ? "aspect-[16/10] w-full lg:aspect-auto lg:w-[min(44%,420px)] lg:border-r lg:border-border/35"
              : "aspect-[16/9] w-full sm:aspect-[2.2/1] sm:max-h-[200px]"
            }`}
        >
          <LazyImage
            src={coverImage.src}
            alt={coverImage.alt}
            imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-background/10 lg:to-background/85" />
          {featured ? (
            <span className="absolute left-4 top-4 rounded-md border border-blue/30 bg-background/70 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.35em] text-blue backdrop-blur-sm">
              Featured
            </span>
          ) : null}
        </div>
      ) : null}

      <div className={`relative flex min-w-0 flex-1 flex-col p-6 sm:p-8 ${featured && coverImage ? "lg:py-10" : ""}`}>
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
