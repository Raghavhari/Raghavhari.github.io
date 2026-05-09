import { useState } from "react";
import { oss } from "@/data/oss";
import PageAmbient from "@/components/layout/PageAmbient";
import ListPageMasthead from "@/components/layout/ListPageMasthead";
import { layout } from "@/lib/styles";
import { ContributionCard } from "@/components/ContributionCard";
import { Pagination } from "@/components/Pagination";

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
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </section>
    </div>
  );
}
