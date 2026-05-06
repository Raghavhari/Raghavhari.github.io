import { ExternalLink, Layers } from "lucide-react";
import { useParams, Navigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { LazyImage } from "@/components/LazyImage";
import { IconGithub } from "@/components/icons/SocialBrandIcons";
import PageAmbient from "@/components/layout/PageAmbient";
import { DetailBackLink, MetaDot } from "@/components/layout/DetailChrome";
import HeroImageCorners from "@/components/HeroImageCorners";
import ImageGallerySection from "@/components/ImageGallerySection";
import { layout } from "@/lib/styles";
import { ordinalFromEnd } from "@/lib/refIds";
import { SectionShell } from "./SectionShell";

const sections = [
  { key: "overview", label: "Overview", id: "overview" },
  { key: "why", label: "Why I Built This", id: "why" },
  { key: "useCase", label: "Use Case", id: "use-case" },
  { key: "learned", label: "What I Learned", id: "learned" },
  { key: "challenges", label: "Challenges", id: "challenges" },
] as const;

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  if (!project) return <Navigate to="/" replace />;

  const projectIndex = projects.findIndex((p) => p.slug === project.slug);
  const refId = `PRJ-${ordinalFromEnd(projectIndex, projects.length)}`;
  const cover = project.coverImage;
  const gallery = project.gallery ?? [];

  return (
    <article className={layout.page}>
      <PageAmbient variant="project" />

      <div className={layout.container}>
        <div className="flex flex-col gap-6 pb-10 pt-2 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-4">
            <DetailBackLink to="/#projects" hoverClass="hover:text-blue">
              Case studies
            </DetailBackLink>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground/90">
              <span className="text-foreground/80">{refId}</span>
              <MetaDot />
              <span className="text-muted-foreground">/{project.slug}</span>
              <MetaDot />
              <span
                className={
                  project.status === "Live"
                    ? "inline-flex items-center gap-1.5 text-success"
                    : "inline-flex items-center gap-1.5 text-muted-foreground"
                }
              >
                <span className={`h-1 w-1 rounded-full ${project.status === "Live" ? "bg-success shadow-[0_0_8px_hsl(var(--success)/0.6)]" : "bg-muted-foreground"}`} />
                {project.status}
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 sm:justify-end">
            {project.tags.map((t) => (
              <span key={t} className="rounded-md border border-border/55 bg-background/50 px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
        </div>

        <header className="relative overflow-hidden rounded-3xl border border-border/45 shadow-[0_40px_80px_-40px_hsl(var(--blue)/0.25)]">
          {cover ? (
            <>
              <div className="relative aspect-[20/11] min-h-[220px] w-full sm:aspect-[2.35/1] sm:min-h-[280px] md:min-h-[320px]">
                <LazyImage src={cover.src} alt={cover.alt} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/25" aria-hidden />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_20%,hsl(var(--blue)/0.12),transparent_55%)]" aria-hidden />
                <HeroImageCorners />
              </div>
              <div className="relative -mt-4 px-6 pb-8 pt-2 sm:-mt-8 sm:px-10 sm:pb-10 md:px-12">
                <p className="font-mono text-[10px] uppercase tracking-[0.45em] text-blue/70">Field report</p>
                <h1 className="mt-3 font-display text-[clamp(1.85rem,5vw,3.25rem)] font-semibold leading-[1.1] tracking-tight text-foreground">
                  {project.name}
                </h1>
                <p className="mt-4 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">{project.short}</p>
              </div>
            </>
          ) : (
            <div className="relative glass p-8 md:p-12">
              <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-gradient-primary opacity-20 blur-3xl" aria-hidden />
              <div className="relative flex flex-col gap-6 md:flex-row md:items-start">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-primary font-display text-2xl font-semibold text-primary-foreground shadow-glow-primary">
                  {project.name[0]}
                </div>
                <div className="min-w-0">
                  <h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">{project.name}</h1>
                  <p className="mt-3 max-w-xl text-muted-foreground leading-relaxed">{project.short}</p>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-3 border-t border-border/40 bg-background/40 px-6 py-5 backdrop-blur-sm sm:px-10 md:px-12">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow-primary transition-transform duration-300 hover:scale-[1.02]"
              >
                <ExternalLink className="h-4 w-4" />
                Live
              </a>
            ) : null}
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background-elevated/60 px-5 py-2.5 text-sm font-medium text-foreground transition-colors duration-300 hover:border-blue/40"
              >
                <IconGithub className="h-4 w-4" />
                Source
              </a>
            ) : null}
          </div>
        </header>

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_13.5rem] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_15rem]">
          <div className="flex min-w-0 flex-col gap-12 lg:gap-14">
            {sections.map((s, i) => (
              <SectionShell key={s.key} id={s.id} index={i} label={s.label}>
                <p>{project[s.key]}</p>
              </SectionShell>
            ))}

            {gallery.length > 0 ? (
              <ImageGallerySection
                sectionId="gallery"
                sectionClassName="scroll-mt-28 md:scroll-mt-32"
                kickerClassName="font-mono text-[10px] uppercase tracking-[0.4em] text-violet/80"
                kicker="Visuals"
                title="Screens & context"
                description="Imagery you can swap for real screenshots, architecture diagrams, or product captures."
                decoration={<Layers className="hidden h-8 w-8 shrink-0 text-border sm:block" strokeWidth={1} aria-hidden />}
                accent="violet"
                aspectPreset="project"
                images={gallery}
              />
            ) : null}

            <section id="stack" className="scroll-mt-28 md:scroll-mt-32">
              <div className="relative overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br from-blue/[0.06] via-background-elevated/30 to-violet/[0.05] p-6 sm:p-8">
                <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-gradient-primary opacity-10 blur-3xl" aria-hidden />
                <div className="relative">
                  <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-cyan/80">06 · Stack</p>
                  <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">What powers it</h2>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((t) => (
                      <li key={t}>
                        <span className="inline-flex rounded-lg border border-border/55 bg-background/60 px-3 py-1.5 font-mono text-sm text-foreground/90 shadow-sm transition-colors duration-300 hover:border-blue/35 hover:text-blue">
                          {t}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <aside className="hidden lg:block">
            <nav aria-label="On this page" className="lg:sticky lg:top-28 xl:top-32 rounded-2xl border border-border/40 bg-background/40 p-4 backdrop-blur-md">
              <p className="px-1 font-mono text-[9px] uppercase tracking-[0.35em] text-muted-foreground">Jump</p>
              <ul className="mt-4 space-y-1 border-t border-border/30 pt-4">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="block rounded-lg px-2 py-2 font-mono text-[11px] text-muted-foreground transition-colors hover:bg-blue/[0.06] hover:text-foreground">
                      {s.label}
                    </a>
                  </li>
                ))}
                {gallery.length > 0 ? (
                  <li>
                    <a href="#gallery" className="block rounded-lg px-2 py-2 font-mono text-[11px] text-muted-foreground transition-colors hover:bg-violet/[0.06] hover:text-foreground">
                      Visuals
                    </a>
                  </li>
                ) : null}
                <li>
                  <a href="#stack" className="block rounded-lg px-2 py-2 font-mono text-[11px] text-muted-foreground transition-colors hover:bg-cyan/[0.06] hover:text-foreground">
                    Stack
                  </a>
                </li>
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    </article>
  );
}
