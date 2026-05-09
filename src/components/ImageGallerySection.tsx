import type { ReactNode } from "react";
import { LazyImage } from "@/components/LazyImage";

type GalleryImageItem = {
  src: string;
  alt: string;
  caption?: string;
};

type ImageGallerySection = {
  sectionId?: string;
  sectionClassName?: string;
  headingId?: string;
  headerRowClassName?: string;
  kickerClassName: string;
  kicker: string;
  title: string;
  description: string;
  decoration?: ReactNode;
  accent: keyof typeof figureAccent;
  aspectPreset: keyof typeof aspectFirst;
  images: GalleryImageItem[];
};

const figureAccent = {
  violet: "shadow-[inset_0_1px_0_hsl(var(--violet)/0.08)] bg-background-elevated/25",
  blue: "shadow-[inset_0_1px_0_hsl(var(--blue)/0.07)] bg-background-elevated/20",
} as const;

const overlayAccent = {
  violet: "from-background/80 via-transparent opacity-80",
  blue: "from-background/75 via-transparent opacity-90",
} as const;

const aspectFirst = {
  project: "aspect-[2.1/1] sm:aspect-[2.4/1]",
  blog: "aspect-[2.1/1] sm:aspect-[2.35/1]",
} as const;

export default function ImageGallerySection({
  sectionId,
  sectionClassName,
  headingId,
  headerRowClassName = "mb-6 flex items-end justify-between gap-4",
  kickerClassName,
  kicker,
  title,
  description,
  decoration,
  accent,
  aspectPreset,
  images,
}: ImageGallerySection) {
  const figAccent = figureAccent[accent];
  const ovAccent = overlayAccent[accent];
  const firstAspect = aspectFirst[aspectPreset];

  return (
    <section
      {...(sectionId ? { id: sectionId } : {})}
      {...(headingId ? { "aria-labelledby": headingId } : {})}
      className={sectionClassName}
    >
      <div className={headerRowClassName}>
        <div>
          <p {...(headingId ? { id: headingId } : {})} className={kickerClassName}>
            {kicker}
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{title}</h2>
          <p className="mt-2 max-w-lg text-sm text-muted-foreground">{description}</p>
        </div>
        {decoration}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {images.map((img, gi) => (
          <figure
            key={`${img.src}-${gi}`}
            className={`group/fig overflow-hidden rounded-2xl border border-border/45 ${figAccent} ${gi === 0 ? "sm:col-span-2" : ""
              }`}
          >
            <div className={`relative w-full overflow-hidden ${gi === 0 ? firstAspect : "aspect-[4/3]"}`}>
              <LazyImage
                src={img.src}
                alt={img.alt}
                imgClassName="transition-transform duration-700 ease-out group-hover/fig:scale-[1.03]"
              />
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${ovAccent}`} aria-hidden />
            </div>
            {img.caption ? (
              <figcaption className="border-t border-border/35 px-4 py-3 font-mono text-[11px] leading-relaxed text-muted-foreground sm:px-5">
                {img.caption}
              </figcaption>
            ) : (
              <figcaption className="sr-only">{img.alt}</figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}
