export const spanClasses = {
  tall: "md:row-span-2 md:h-[640px] h-[420px]",
  wide: "md:col-span-2 h-[320px]",
  default: "h-[320px]",
} as const;

export const layout = {
  page: "relative pb-24 sm:pb-28",
  pageLoose: "relative pb-24 sm:pb-32",
  container: "container max-w-6xl",
} as const;
