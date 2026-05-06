import { Link } from "react-router-dom";
import { layout } from "@/lib/styles";

export default function BlogDetailNotFound() {
  return (
    <section className={`${layout.container} pb-24 pt-8`}>
      <div className="flex flex-col items-center justify-center rounded-2xl border border-violet/20 bg-violet/[0.03] py-24 text-center">
        <p className="text-muted-foreground">Article not found.</p>
        <Link to="/blogs" className="mt-6 font-mono text-sm uppercase tracking-wider text-violet transition-colors hover:text-foreground">
          ← All writing
        </Link>
      </div>
    </section>
  );
}
