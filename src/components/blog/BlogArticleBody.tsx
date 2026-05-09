import type { Blog, ContentBlock } from "@/data/blog";
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import vscDarkPlus from 'react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus';

export default function BlogArticleBody({ blog }: { blog: Blog }) {
  const blocks: (ContentBlock | { type: "text"; text: string })[] =
    blog.contentBlocks && blog.contentBlocks.length > 0
      ? blog.contentBlocks
      : [{ type: "text" as const, text: blog.content }];

  return (
    <div className="mt-14 lg:mt-16">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div>
          <div className="rounded-xl border border-violet/15 bg-violet/[0.04] p-6 sm:p-8">
            <p className="text-pretty font-display text-lg font-medium leading-snug text-foreground/95 sm:text-xl">
              {blog.preview}
            </p>
          </div>

          <div className="relative mt-10 pl-5 sm:pl-7">
            <div className="absolute left-0 top-1 bottom-1 w-px bg-gradient-to-b from-violet/50 via-blue/30 to-transparent" aria-hidden />
            <div className="text-base leading-[1.8] text-foreground/88 sm:text-lg">
              {blocks.map((block, idx) => {
                if (block.type === "image") {
                  const { src, alt, caption } = block.image;
                  return (
                    <figure key={`${blog.slug}-img-${idx}`} className="my-8 mx-auto max-w-2xl">
                      <div className="overflow-hidden rounded-xl border border-border/50 bg-muted/20">
                        <img
                          src={src}
                          alt={alt}
                          loading="lazy"
                          className="h-auto w-full object-cover"
                        />
                      </div>
                      {caption ? (
                        <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">{caption}</figcaption>
                      ) : null}
                    </figure>
                  );
                }

                if (block.type === "code") {
                  return (
                    <div key={`${blog.slug}-code-${idx}`} className="my-8 mx-auto max-w-4xl overflow-hidden rounded-xl border border-border/50 shadow-sm text-sm sm:text-base">
                      <SyntaxHighlighter
                        language={block.language || "javascript"}
                        style={vscDarkPlus}
                        customStyle={{
                          margin: 0,
                          padding: "1.25rem",
                          borderRadius: "0.75rem",
                          backgroundColor: "#1e1e1e",
                        }}
                      >
                        {block.code}
                      </SyntaxHighlighter>
                    </div>
                  );
                }

                if (block.type === "text") {
                  return (
                    <div key={`${blog.slug}-txt-${idx}`} className="whitespace-pre-wrap my-6 first:mt-0 last:mb-0">
                      {block.text}
                    </div>
                  );
                }

                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
