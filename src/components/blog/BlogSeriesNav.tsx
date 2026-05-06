import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Blog } from "@/data/blog";

export default function BlogSeriesNav({ prev, next }: { prev: Blog | null; next: Blog | null }) {
  return (
    <nav className="mx-auto mt-20 max-w-5xl pt-10" aria-label="Adjacent articles">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-violet/30 to-transparent" aria-hidden />
      <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">In this series</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {prev ? (
          <Link
            to={`/blogs/${prev.slug}`}
            className="group flex flex-col rounded-2xl border border-border/45 bg-background-elevated/15 p-5 transition-all duration-300 hover:border-blue/35 hover:bg-blue/[0.04] sm:p-6"
          >
            <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" strokeWidth={1.75} />
              Previous
            </span>
            <span className="mt-3 font-display text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-blue">
              {prev.title}
            </span>
          </Link>
        ) : (
          <span className="hidden sm:block" aria-hidden />
        )}
        {next ? (
          <Link
            to={`/blogs/${next.slug}`}
            className="group flex flex-col rounded-2xl border border-border/45 bg-background-elevated/15 p-5 text-right transition-all duration-300 hover:border-violet/35 hover:bg-violet/[0.04] sm:p-6"
          >
            <span className="inline-flex items-center justify-end gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Next
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={1.75} />
            </span>
            <span className="mt-3 font-display text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-violet">
              {next.title}
            </span>
          </Link>
        ) : null}
      </div>
    </nav>
  );
}
