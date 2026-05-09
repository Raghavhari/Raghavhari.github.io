import { OssContribution } from "@/data/oss";
import { ArrowUpRight } from "lucide-react";

export function ContributionCard({ item }: { item: OssContribution }) {
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
