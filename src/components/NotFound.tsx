import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { layout } from "@/lib/styles";

const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error("404:", location.pathname);
  }, [location.pathname]);

  return (
    <section className={`${layout.container} flex min-h-[70vh] flex-col items-center justify-center text-center`}>
      <div className="font-display text-[120px] md:text-[180px] font-semibold leading-none text-gradient-primary">404</div>
      <p className="mt-2 text-xl text-muted-foreground">This page got lost in the routing layer.</p>
      <Link to="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow-primary transition-all duration-300 hover:scale-[1.02]">
        <ArrowLeft className="h-4 w-4" />
        Back home
      </Link>
    </section>
  );
};

export default NotFound;
