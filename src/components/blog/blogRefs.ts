import { blogs } from "@/data/blog";
import { ordinalFromEnd } from "@/lib/refIds";

export function blogRef(slug: string) {
  const i = blogs.findIndex((b) => b.slug === slug);
  return `BLG-${ordinalFromEnd(i, blogs.length)}`;
}
