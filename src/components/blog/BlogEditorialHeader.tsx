import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { blogRef } from "./blogRefs";
import type { Blog } from "@/data/blog";

export default function BlogEditorialHeader({ blog }: { blog: Blog }) {
  return (
    <header className="border-l-2 border-violet/50 pl-5 sm:pl-6">
      <div className="flex flex-col gap-6 pb-2 pt-2 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-3">
          <Link to="/blogs" className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-violet">
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" strokeWidth={1.75} />
            All writing
          </Link>
          <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground/90">
            <span className="text-foreground/85">{blogRef(blog.slug)}</span>
            <span className="mx-2 text-border" aria-hidden>
              /
            </span>
            <span className="text-violet/80">{blog.slug}</span>
          </p>
        </div>
        <div className="flex flex-wrap gap-3 font-mono text-[11px] text-muted-foreground sm:justify-end">
          <span className="inline-flex items-center gap-2 rounded-lg border border-blue/20 bg-blue/[0.06] px-3 py-1.5">
            <Calendar className="h-3.5 w-3.5 text-blue/75" strokeWidth={1.75} />
            {blog.date}
          </span>
          <span className="inline-flex items-center gap-2 rounded-lg border border-violet/20 bg-violet/[0.06] px-3 py-1.5">
            <Clock className="h-3.5 w-3.5 text-violet/75" strokeWidth={1.75} />
            {blog.readTime}
          </span>
        </div>
      </div>
    </header>
  );
}
