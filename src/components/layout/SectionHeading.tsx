import { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <div className="inline-flex items-center gap-2 rounded-full border border-blue/25 bg-blue/[0.08] px-3 py-1 text-xs font-medium uppercase tracking-widest text-blue">
        <span className="h-1 w-1 rounded-full bg-blue" />
        {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tight text-gradient">
        {title}
      </h2>
      {description && <p className="mt-4 text-muted-foreground leading-relaxed">{description}</p>}
    </div>
  );
}
