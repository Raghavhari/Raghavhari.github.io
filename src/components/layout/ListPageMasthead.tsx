import type { ReactNode } from "react";

type ListPageMasthead = {
  theme: keyof typeof themes;
  marginBottomClass?: string;
  children: ReactNode;
};

const themes = {
  blogs: {
    inset: "shadow-[inset_0_1px_0_hsl(var(--violet)/0.08)]",
    topLine: "from-transparent via-blue/35 to-transparent",
    cornerTL: "border-blue/35",
    cornerTR: "border-violet/30",
  },
  oss: {
    inset: "shadow-[inset_0_1px_0_hsl(var(--success)/0.07)]",
    topLine: "from-transparent via-success/30 to-transparent",
    cornerTL: "border-success/35",
    cornerTR: "border-blue/30",
  },
} as const;

export default function ListPageMasthead({ theme, marginBottomClass = "mb-12", children }: ListPageMasthead) {
  const t = themes[theme];
  return (
    <header className={`relative overflow-hidden rounded-3xl border border-border/45 bg-background-elevated/15 px-6 py-10 sm:px-10 sm:py-12 md:px-14 ${t.inset} ${marginBottomClass}`}>
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" aria-hidden />
      <div aria-hidden className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r ${t.topLine}`} />
      <div className="pointer-events-none absolute left-5 top-5 sm:left-8 sm:top-8">
        <span className={`inline-block h-6 w-6 border-l-2 border-t-2 ${t.cornerTL}`} />
      </div>
      <div className="pointer-events-none absolute right-5 top-5 sm:right-8 sm:top-8">
        <span className={`inline-block h-6 w-6 border-r-2 border-t-2 ${t.cornerTR}`} />
      </div>
      {children}
    </header>
  );
}
