import { BookOpen } from "lucide-react";
import type { BlogImage } from "@/data/blog";
import { LazyImage } from "@/components/LazyImage";

export default function BlogArticleFigures({ images }: { images: BlogImage[] }) {
  if (images.length === 0) return null;

  return (
    <section className="mx-auto mt-20 max-w-4xl lg:max-w-5xl" aria-labelledby="blog-figures-heading">
      <div className="mb-10 flex flex-col gap-4 border-b border-violet/20 pb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p id="blog-figures-heading" className="font-mono text-[10px] uppercase tracking-[0.45em] text-violet/85">
            Figures
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Illustrations for this essay
          </h2>
          <p className="mt-2 max-w-lg text-sm text-muted-foreground">
            Diagrams, photos, or UI shots — stacked with captions so the reading flow stays uninterrupted.
          </p>
        </div>
        <BookOpen className="h-9 w-9 shrink-0 text-violet/25 sm:h-10 sm:w-10" strokeWidth={1} aria-hidden />
      </div>

      <ul className="space-y-12 sm:space-y-14">
        {images.map((img, i) => (
          <li key={`${img.src}-${i}`} className={`${i % 2 === 1 ? "sm:ml-6 sm:mr-0 lg:ml-12" : "sm:mr-6 sm:ml-0 lg:mr-12"} list-none`}>
            <figure className="group/fig overflow-hidden rounded-2xl border border-border/40 bg-background-elevated/20 shadow-[0_20px_50px_-28px_hsl(var(--violet)/0.35)] ring-1 ring-violet/10">
              <div
                className={`relative w-full overflow-hidden ${i === 0 ? "aspect-[2.05/1] sm:aspect-[2.2/1]" : "aspect-[4/3] sm:aspect-[16/10]"
                  }`}
              >
                <LazyImage
                  src={img.src}
                  alt={img.alt}
                  imgClassName="transition-transform duration-700 ease-out group-hover/fig:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-background/50 via-transparent to-violet/[0.06]" aria-hidden />
              </div>
              {img.caption ? (
                <figcaption className="border-t border-border/35 px-5 py-4 font-mono text-[11px] leading-relaxed text-muted-foreground sm:px-6">
                  {img.caption}
                </figcaption>
              ) : (
                <figcaption className="sr-only">{img.alt}</figcaption>
              )}
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
