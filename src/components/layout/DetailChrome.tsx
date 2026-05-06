import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

type DetailBackLink = {
  to: string;
  children: ReactNode;
  hoverClass: string;
}

export function DetailBackLink({ to, children, hoverClass }: DetailBackLink) {
  return (
    <Link to={to} className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors ${hoverClass}`}>
      <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.75} />
      {children}
    </Link>
  );
}

export function MetaDot() {
  return (
    <span className="hidden text-border sm:inline" aria-hidden>
      ·
    </span>
  );
}
