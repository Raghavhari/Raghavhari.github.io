import type { Blog } from "@/data/blog";
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import vscDarkPlus from 'react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus';

export default function BlogArticleBody({ blog }: { blog: Blog }) {
  const blocks = blog.contentBlocks;

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
                    <figure key={`${blog.slug}-img-${idx}`} className="my-10 mx-auto max-w-3xl">
                      <div className="overflow-hidden rounded-2xl border border-border/50 bg-muted/20 shadow-lg flex items-center justify-center">
                        <img
                          src={src}
                          alt={alt}
                          loading="lazy"
                          style={{ maxHeight: "600px", width: "100%", objectFit: "contain", display: "block" }}
                          className="transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                      {caption ? (
                        <figcaption className="mt-4 text-center font-mono text-xs uppercase tracking-wider text-muted-foreground/80">{caption}</figcaption>
                      ) : null}
                    </figure>
                  );
                }

                if (block.type === "code") {
                  return (
                    <div key={`${blog.slug}-code-${idx}`} className="my-10 mx-auto max-w-4xl overflow-hidden rounded-xl border border-border/50 shadow-xl text-sm sm:text-base">
                      <div className="flex items-center gap-2 border-b border-border/30 bg-background/60 px-4 py-2">
                        <div className="flex gap-1.5">
                          <div className="h-2.5 w-2.5 rounded-full bg-red-500/40" />
                          <div className="h-2.5 w-2.5 rounded-full bg-amber-500/40" />
                          <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/40" />
                        </div>
                        {block.language && (
                          <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-muted-foreground/70">{block.language}</span>
                        )}
                      </div>
                      <SyntaxHighlighter
                        language={block.language || "javascript"}
                        style={vscDarkPlus}
                        customStyle={{
                          margin: 0,
                          padding: "1.5rem",
                          borderRadius: "0 0 0.75rem 0.75rem",
                          backgroundColor: "#0d0d0d",
                        }}
                      >
                        {block.code}
                      </SyntaxHighlighter>
                    </div>
                  );
                }

                if (block.type === "text") {
                  return (
                    <div key={`${blog.slug}-txt-${idx}`} className="whitespace-pre-wrap my-8 first:mt-0 last:mb-0">
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
