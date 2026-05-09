import BlogCard from "@/components/blog/BlogCard";
import { blogs } from "@/data/blog";
import { useMemo, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import PageAmbient from "@/components/layout/PageAmbient";
import ListPageMasthead from "@/components/layout/ListPageMasthead";
import { layout } from "@/lib/styles";
import { ordinalFromEnd } from "@/lib/refIds";

type SortType = "newest" | "oldest" | "readTime";

function issueIndex(slug: string) {
  const i = blogs.findIndex((b) => b.slug === slug);
  return ordinalFromEnd(i, blogs.length, 2);
}

export default function Blogs() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortType>("newest");

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    blogs.forEach((b) => b.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags).sort();
  }, []);

  const filteredAndSortedBlogs = useMemo(() => {
    let filtered = blogs;
    if (selectedTags.length > 0) {
      filtered = filtered.filter((b) => selectedTags.some((tag) => b.tags.includes(tag)));
    }
    const sorted = [...filtered];
    switch (sortBy) {
      case "oldest":
        sorted.reverse();
        break;
      case "readTime":
        sorted.sort((a, b) => parseInt(b.readTime, 10) - parseInt(a.readTime, 10));
        break;
      case "newest":
      default:
        break;
    }
    return sorted;
  }, [selectedTags, sortBy]);

  const featuredPosts = filteredAndSortedBlogs.filter((b) => b.featured).slice(0, 1);
  const regularPosts = filteredAndSortedBlogs.filter((b) => !b.featured);

  return (
    <div className={layout.page}>
      <PageAmbient variant="listViolet" />

      <section className={`${layout.container} pt-4`}>
        <ListPageMasthead theme="blogs">
          <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-blue/80">Dispatch</p>
          <h1 className="mt-4 font-display text-[clamp(1.75rem,4.5vw,3rem)] font-semibold leading-[1.12] tracking-tight text-foreground">
            Notes from the trenches.
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Things I&apos;ve learned shipping software! backend, infra, and the human side of engineering. Filter by tag or
            sort the feed; featured essays stay pinned up top.
          </p>
          <p className="mt-6 font-mono text-[11px] text-muted-foreground">
            <span className="text-foreground/80">{filteredAndSortedBlogs.length}</span>
            <span className="mx-2 text-border">/</span>
            <span>{blogs.length} published</span>
          </p>
        </ListPageMasthead>

        <div className="mb-12 rounded-2xl border border-border/40 bg-background/35 p-4 backdrop-blur-md sm:p-5">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex flex-col gap-3">
              <span className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.35em] text-muted-foreground">
                <SlidersHorizontal className="h-3.5 w-3.5 text-blue/70" strokeWidth={1.75} />
                Sort
              </span>
              <div className="flex flex-wrap gap-2">
                {(["newest", "oldest", "readTime"] as const).map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSortBy(option)}
                    className={`rounded-lg border px-3 py-2 font-mono text-[11px] uppercase tracking-wider transition-all duration-300 ${sortBy === option
                        ? "border-blue/40 bg-blue/[0.08] text-blue"
                        : "border-border/45 text-muted-foreground hover:border-border hover:text-foreground"
                      }`}
                  >
                    {option === "readTime" ? "Read time" : option.charAt(0).toUpperCase() + option.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-3 lg:max-w-2xl lg:pl-8">
              <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-muted-foreground">Tags</span>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() =>
                      setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
                    }
                    className={`group flex items-center gap-1.5 rounded-lg border px-3 py-2 font-mono text-[11px] transition-all duration-300 ${selectedTags.includes(tag)
                        ? "border-violet/40 bg-violet/[0.08] text-violet"
                        : "border-border/45 text-muted-foreground hover:border-border hover:text-foreground"
                      }`}
                  >
                    {tag}
                    {selectedTags.includes(tag) ? <X className="h-3 w-3 opacity-80" strokeWidth={2} /> : null}
                  </button>
                ))}
              </div>
              {selectedTags.length > 0 ? (
                <button
                  type="button"
                  onClick={() => setSelectedTags([])}
                  className="self-start font-mono text-[11px] uppercase tracking-wider text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                >
                  Clear {selectedTags.length} filter{selectedTags.length > 1 ? "s" : ""}
                </button>
              ) : null}
            </div>
          </div>
        </div>

        {filteredAndSortedBlogs.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-border/40 bg-background-elevated/20 py-20 text-center">
            <p className="max-w-sm text-muted-foreground">No articles match these tags. Try clearing filters.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedTags([]);
                setSortBy("newest");
              }}
              className="mt-6 rounded-full border border-border/55 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-foreground transition-colors hover:border-blue/40"
            >
              Reset
            </button>
          </div>
        ) : (
          <>
            {featuredPosts.length > 0 ? (
              <div className="mb-14">
                <div className="mb-6 flex items-end justify-between gap-4 border-b border-border/35 pb-4">
                  <h2 className="font-mono text-[10px] uppercase tracking-[0.45em] text-muted-foreground">Featured essays</h2>
                  <span className="hidden font-mono text-[10px] text-muted-foreground/70 sm:inline">Longer reads · pinned</span>
                </div>
                <div className="grid grid-cols-1 gap-6 lg:gap-8">
                  {featuredPosts.map((blog, idx) => (
                    <div
                      key={blog.slug}
                      className="motion-safe:animate-fade-in-up anim-both"
                      style={{ animationDelay: `${idx * 80}ms` }}
                    >
                      <BlogCard {...blog} featured indexLabel={issueIndex(blog.slug)} />
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {regularPosts.length > 0 ? (
              <div>
                {featuredPosts.length > 0 ? (
                  <div className="mb-6 flex items-end justify-between gap-4 border-b border-border/35 pb-4">
                    <h2 className="font-mono text-[10px] uppercase tracking-[0.45em] text-muted-foreground">Archive</h2>
                    <span className="hidden font-mono text-[10px] text-muted-foreground/70 sm:inline">Newest in this view</span>
                  </div>
                ) : null}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
                  {regularPosts.map((blog, idx) => (
                    <div
                      key={blog.slug}
                      className="motion-safe:animate-fade-in-up anim-both"
                      style={{ animationDelay: `${(featuredPosts.length + idx) * 60}ms` }}
                    >
                      <BlogCard {...blog} indexLabel={issueIndex(blog.slug)} />
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </>
        )}
      </section>
    </div>
  );
}
