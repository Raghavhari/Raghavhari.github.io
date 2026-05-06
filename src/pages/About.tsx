import { useState } from "react";
import { User } from "lucide-react";
import { LazyImage } from "@/components/LazyImage";
import SectionHeading from "@/components/layout/SectionHeading";
import { aboutBeats, aboutMeta, aboutProfilePhoto, BEAT_ACCENTS } from "@/data/about";

export default function About() {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section id="about" className="container py-28">
      <SectionHeading
        eyebrow="About"
        title="A short story."
        description="Three beats from the last few years! the work, the ownership, and the conversations that keep me sharp."
      />

      <div className="mt-4 grid gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14 lg:items-start">
        <div className="flex flex-col gap-8 lg:col-span-7">
          <header className="relative overflow-hidden rounded-2xl border border-border/55 bg-background-elevated/35 px-5 py-4 sm:px-6">
            <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" aria-hidden />
            <div className="relative flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                  Dossier
                </p>
                <p className="mt-1 font-mono text-sm text-foreground/90">{aboutMeta.dossierId}</p>
              </div>
              <dl className="flex flex-col gap-1 font-mono text-[11px] text-muted-foreground sm:text-right">
                <div className="flex justify-between gap-8 sm:justify-end">
                  <dt className="text-muted-foreground/70">Focus</dt>
                  <dd className="text-foreground/80">{aboutMeta.tagline}</dd>
                </div>
                <div className="flex justify-between gap-8 sm:justify-end">
                  <dt className="text-muted-foreground/70">Tenure</dt>
                  <dd className="text-foreground/80">{aboutMeta.tenure}</dd>
                </div>
              </dl>
            </div>
          </header>

          <div className="space-y-4" aria-label="About story beats">
            {aboutBeats.map((beat, i) => (
              <article
                key={beat.id}
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-background-elevated/25 p-5 pl-5 transition duration-300 hover:border-blue/35 hover:shadow-[0_0_0_1px_hsl(var(--blue)/0.12)] sm:p-6 sm:pl-7"
              >
                <div className={`absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b ${BEAT_ACCENTS[i]} opacity-90`} aria-hidden />
                <div className="relative flex gap-4 sm:gap-5">
                  <span className="mt-0.5 shrink-0 font-mono text-[11px] tabular-nums text-muted-foreground/80" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
                      {beat.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                      {beat.body}
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-blue/[0.08] to-transparent opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" aria-hidden />
              </article>
            ))}
          </div>
        </div>

        <div className="relative flex flex-col items-center lg:col-span-5 lg:-mt-14 lg:self-start xl:-mt-16 2xl:-mt-20">
          <div className="relative mx-auto w-full max-w-md lg:-translate-y-1">
            <p className="mb-3 text-center font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground lg:mb-2">
              Reference still
            </p>

            <div className="relative px-4 pb-4 pt-1 sm:px-5 sm:pb-5 lg:pt-0">
              <span className="pointer-events-none absolute left-2 top-0 h-7 w-7 border-l-2 border-t-2 border-blue/45 sm:left-3" aria-hidden />
              <span className="pointer-events-none absolute right-2 top-0 h-7 w-7 border-r-2 border-t-2 border-violet/40 sm:right-3" aria-hidden />
              <span className="pointer-events-none absolute bottom-0 left-2 h-7 w-7 border-b-2 border-l-2 border-cyan/35 sm:left-3" aria-hidden />
              <span className="pointer-events-none absolute bottom-0 right-2 h-7 w-7 border-b-2 border-r-2 border-blue/30 sm:right-3" aria-hidden />

              <div aria-hidden className="pointer-events-none absolute inset-6 -z-10 rounded-2xl border border-dashed border-border/50 bg-secondary/20 motion-reduce:translate-x-0 motion-reduce:translate-y-0 sm:inset-8 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3" />

              <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-secondary/25 shadow-elegant motion-reduce:rotate-0 -rotate-1 sm:-rotate-[0.8deg]">
                <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-blue/10 via-transparent to-violet/10" />
                <div className="relative aspect-[4/5] overflow-hidden">
                  {!photoFailed ? (
                    <LazyImage
                      src={aboutProfilePhoto.src}
                      alt={aboutProfilePhoto.alt}
                      imgClassName="object-center"
                      onError={() => setPhotoFailed(true)}
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-muted/30 p-8 text-center text-muted-foreground">
                      <User className="h-16 w-16 opacity-40" strokeWidth={1.25} aria-hidden />
                      <p className="text-sm leading-relaxed">
                        Add your photo as{" "}
                        <span className="font-mono text-foreground/80">public/profile.jpg</span>
                      </p>
                    </div>
                  )}
                </div>

                <div className="relative flex items-center justify-between gap-3 border-t border-border/45 bg-background/60 px-4 py-3 backdrop-blur-sm">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    Portrait · candid
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground/80">{aboutMeta.dossierId}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
