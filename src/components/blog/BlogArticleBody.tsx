import type { Blog } from "@/data/blog";

export default function BlogArticleBody({ blog }: { blog: Blog }) {
  return (
    <div className="mt-14 lg:mt-16">
      <div className="mx-auto max-w-3xl lg:mx-0 lg:max-w-none lg:grid lg:grid-cols-[minmax(0,42rem)_1fr] lg:gap-12 xl:gap-16">
        <div>
          <div className="rounded-xl border border-violet/15 bg-violet/[0.04] p-6 sm:p-8">
            <p className="text-pretty font-display text-lg font-medium leading-snug text-foreground/95 sm:text-xl">
              {blog.preview}
            </p>
          </div>

          <div className="relative mt-10 pl-5 sm:pl-7">
            <div className="absolute left-0 top-1 bottom-1 w-px bg-gradient-to-b from-violet/50 via-blue/30 to-transparent" aria-hidden />
            <div className="whitespace-pre-wrap text-base leading-[1.8] text-foreground/88 sm:text-lg">{blog.content}</div>
          </div>
        </div>

        <aside className="mt-12 hidden lg:mt-0 lg:block">
          <div className="sticky top-28 space-y-6">
            <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-muted-foreground">In this piece</p>
            <ul className="space-y-3 border-l border-border/40 pl-4 font-mono text-[11px] text-muted-foreground">
              {blog.tags.slice(0, 4).map((tag) => (
                <li key={tag} className="leading-snug">
                  {tag}
                </li>
              ))}
            </ul>
            <p className="max-w-[12rem] text-xs leading-relaxed text-muted-foreground/80">
              Scroll the column for the full draft — figures sit below when present.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
