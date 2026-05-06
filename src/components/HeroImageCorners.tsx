type HeroImageCorners = {
  tl?: string;
  tr?: string;
  bl?: string;
  br?: string;
};

export default function HeroImageCorners({ tl = "border-blue/35", tr = "border-violet/30", bl = "border-cyan/25", br = "border-blue/20" }: HeroImageCorners) {
  return (
    <>
      <div className="pointer-events-none absolute inset-x-5 top-5 flex justify-between sm:inset-x-8 sm:top-6">
        <span className={`h-7 w-7 border-l-2 border-t-2 sm:h-8 sm:w-8 ${tl}`} aria-hidden />
        <span className={`h-7 w-7 border-r-2 border-t-2 sm:h-8 sm:w-8 ${tr}`} aria-hidden />
      </div>
      <div className="pointer-events-none absolute inset-x-5 bottom-5 flex justify-between sm:inset-x-8 sm:bottom-6">
        <span className={`h-7 w-7 border-b-2 border-l-2 sm:h-8 sm:w-8 ${bl}`} aria-hidden />
        <span className={`h-7 w-7 border-b-2 border-r-2 sm:h-8 sm:w-8 ${br}`} aria-hidden />
      </div>
    </>
  );
}
