const VARIANT_CLASS: Record<"project" | "blog" | "listViolet" | "listSuccess" | "travel", string> = {
  project: "pointer-events-none fixed inset-x-0 top-1/4 -z-10 mx-auto h-[min(80vh,52rem)] max-w-4xl rounded-full bg-gradient-primary opacity-[0.07] blur-[120px]",
  blog: "pointer-events-none fixed inset-x-0 top-1/4 -z-10 mx-auto h-[min(80vh,48rem)] max-w-4xl rounded-full bg-gradient-to-br from-blue/[0.07] via-transparent to-violet/[0.06] blur-[120px]",
  listViolet: "pointer-events-none fixed inset-x-0 top-1/3 -z-10 mx-auto h-[min(70vh,36rem)] max-w-3xl rounded-full bg-gradient-to-br from-violet/10 via-transparent to-blue/10 blur-[100px]",
  listSuccess: "pointer-events-none fixed inset-x-0 top-1/3 -z-10 mx-auto h-[min(72vh,40rem)] max-w-3xl rounded-full bg-gradient-to-br from-success/10 via-transparent to-blue/10 blur-[100px]",
  travel: "pointer-events-none fixed inset-x-0 top-1/4 -z-10 mx-auto h-[min(75vh,44rem)] max-w-4xl rounded-full bg-gradient-to-br from-cyan/12 via-transparent to-violet/10 blur-[110px]",
};

export default function PageAmbient({ variant }: { variant: keyof typeof VARIANT_CLASS }) {
  return <div aria-hidden className={VARIANT_CLASS[variant]} />;
}
