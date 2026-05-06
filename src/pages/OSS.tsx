import { useState } from "react";
import { oss } from "@/data/oss";
import type { OssContribution } from "@/data/oss";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import PageAmbient from "@/components/layout/PageAmbient";
import ListPageMasthead from "@/components/layout/ListPageMasthead";
import { layout } from "@/lib/styles";

function ContributionCard({ item }: { item: OssContribution }) {
  return (
    <a
      href={item.prUrl}
      target="_blank"
      rel="noreferrer"
      className="group relative flex overflow-hidden rounded-2xl border border-border/45 bg-background-elevated/15 shadow-[inset_0_1px_0_hsl(var(--blue)/0.05)] transition-all duration-500 hover:border-blue/30 hover:shadow-[0_0_24px_hsl(var(--blue)/0.12)]"
    >
      <div aria-hidden className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-blue via-blue/45 to-transparent" />
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:radial-gradient(ellipse_70%_80%_at_100%_0%,hsl(var(--violet)/0.06),transparent_55%)]" />

      <div className="relative flex min-w-0 flex-1 flex-col gap-4 p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-6 md:p-7">
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <span className="font-mono text-foreground font-medium">{item.name}</span>
            <span className="text-border">•</span>
            <span>{item.date}</span>
          </div>

          <h2 className="mt-2 text-base font-medium text-foreground sm:text-lg">
            {item.prTitle}
          </h2>
        </div>

        <div className="flex shrink-0 items-center border-t border-border/35 pt-4 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-blue transition-all duration-300 group-hover:gap-2">
            View PR
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
          </span>
        </div>
      </div>
    </a>
  );
}

export default function OSS() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  
  const totalPages = Math.ceil(oss.length / itemsPerPage);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = oss.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    document.querySelector('section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={layout.page}>
      <PageAmbient variant="listSuccess" />

      <section className={`${layout.container} pt-4`}>
        <ListPageMasthead theme="oss" marginBottomClass="mb-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-success/85">Upstream</p>
              <h1 className="mt-4 font-display text-[clamp(1.75rem,4.5vw,3rem)] font-semibold leading-[1.12] tracking-tight text-foreground">
                Open Source Contributions
              </h1>
              <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                A log of my pull requests and patches to various open source projects. Each card opens the GitHub pull request page in a new tab.
              </p>
            </div>
          </div>
        </ListPageMasthead>

        <div className="space-y-4 pb-10">
          {currentItems.map((o, idx) => (
            <div key={`${o.name}-${startIndex + idx}`} className="motion-safe:animate-fade-in-up anim-both" style={{ animationDelay: `${idx * 55}ms` }}>
              <ContributionCard item={o} />
            </div>
          ))}
          {oss.length === 0 && (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-border/40 bg-background-elevated/20 py-20 text-center">
              <p className="text-muted-foreground">No contributions logged yet.</p>
            </div>
          )}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 pb-20">
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/45 bg-background-elevated/15 text-foreground transition-all duration-300 hover:border-blue/30 hover:bg-blue/5 hover:text-blue disabled:pointer-events-none disabled:opacity-50"
              aria-label="Previous page"
              title="Previous page"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <span className="font-mono text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/45 bg-background-elevated/15 text-foreground transition-all duration-300 hover:border-blue/30 hover:bg-blue/5 hover:text-blue disabled:pointer-events-none disabled:opacity-50"
              aria-label="Next page"
              title="Next page"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
