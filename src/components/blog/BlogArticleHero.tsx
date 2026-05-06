import { LazyImage } from "@/components/LazyImage";
import type { Blog } from "@/data/blog";

export default function BlogArticleHero({ blog }: { blog: Blog }) {
  const cover = blog.coverImage;

  if (cover) {
    return (
      <div className="relative mt-8">
        <div className="relative overflow-hidden rounded-2xl ring-1 ring-violet/20 sm:rounded-3xl">
          <div className="relative aspect-[20/11] min-h-[200px] w-full sm:aspect-[2.25/1] sm:min-h-[260px]">
            <LazyImage src={cover.src} alt={cover.alt} />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/15" aria-hidden />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_85%_15%,hsl(var(--violet)/0.14),transparent_50%)]" aria-hidden />
          </div>
        </div>

        <div className="relative z-10 -mt-10 px-1 sm:-mt-14 sm:px-4 md:px-8">
          <div className="mx-auto max-w-4xl rounded-2xl border border-border/50 bg-background/90 px-6 py-6 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.75)] backdrop-blur-md sm:px-8 sm:py-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-violet/80">Essay</p>
            <h1 className="mt-3 font-display text-[clamp(1.6rem,4vw,2.75rem)] font-semibold leading-[1.1] tracking-tight text-foreground">
              {blog.title}
            </h1>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2 border-t border-border/35 pt-6 sm:mt-10">
          {blog.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-violet/25 bg-violet/[0.06] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8 rounded-2xl border border-violet/20 bg-gradient-to-br from-violet/[0.07] via-background to-background px-6 py-10 sm:px-10 sm:py-12">
      <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-violet/80">Essay</p>
      <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
        {blog.title}
      </h1>
      <div className="mt-8 flex flex-wrap gap-2 border-t border-border/30 pt-6">
        {blog.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-violet/25 bg-background/60 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
