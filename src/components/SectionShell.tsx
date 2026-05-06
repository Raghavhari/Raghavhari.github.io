import { ReactNode } from "react";

type SectionShell = {
    id: string;
    index: number;
    label: string;
    children: ReactNode;
};

export function SectionShell({ id, index, label, children }: SectionShell) {
    return (
        <section id={id} className="group/section scroll-mt-28 md:scroll-mt-32">
            <div className="relative overflow-hidden rounded-2xl border border-border/40 bg-background-elevated/20 shadow-[inset_0_1px_0_hsl(var(--blue)/0.06)]">
                <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.35]" aria-hidden />
                <div aria-hidden className="pointer-events-none absolute -right-4 top-4 font-display text-[clamp(4rem,14vw,9rem)] font-bold leading-none tracking-tighter text-foreground/[0.04] transition-colors duration-500 group-hover/section:text-foreground/[0.07]">
                    {String(index + 1).padStart(2, "0")}
                </div>
                <div className="relative border-b border-border/35 px-6 py-4 sm:px-8">
                    <div className="flex items-center gap-3">
                        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-blue/80">§ {label}</span>
                        <div className="h-px flex-1 bg-gradient-to-r from-blue/25 via-border/50 to-transparent" />
                    </div>
                    <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{label}</h2>
                </div>
                <div className="relative px-6 py-8 sm:px-8 sm:py-10">
                    <div className="max-w-none text-base leading-relaxed text-muted-foreground sm:text-lg">{children}</div>
                </div>
            </div>
        </section>
    );
}
