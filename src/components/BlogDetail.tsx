import { blogs } from "@/data/blog";
import { useParams } from "react-router-dom";
import { useMemo } from "react";
import PageAmbient from "@/components/layout/PageAmbient";
import BlogDetailNotFound from "@/components/blog/BlogDetailNotFound";
import BlogEditorialHeader from "@/components/blog/BlogEditorialHeader";
import BlogArticleHero from "@/components/blog/BlogArticleHero";
import BlogArticleBody from "@/components/blog/BlogArticleBody";
import BlogSeriesNav from "@/components/blog/BlogSeriesNav";
import { layout } from "@/lib/styles";

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();

  const { blog, prev, next } = useMemo(() => {
    const b = blogs.find((x) => x.slug === slug);
    const i = b ? blogs.indexOf(b) : -1;
    return {
      blog: b,
      prev: i > 0 ? blogs[i - 1] : null,
      next: i >= 0 && i < blogs.length - 1 ? blogs[i + 1] : null,
    };
  }, [slug]);

  if (!blog) {
    return <BlogDetailNotFound />;
  }

  return (
    <article className={layout.page}>
      <PageAmbient variant="blog" />

      <div className={layout.container}>
        <BlogEditorialHeader blog={blog} />
        <BlogArticleHero blog={blog} />
        <BlogArticleBody blog={blog} />
        <BlogSeriesNav prev={prev} next={next} />
      </div>
    </article>
  );
}
