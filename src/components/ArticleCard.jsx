import React, { useState } from "react";
import { ArrowUpRight, BookOpen } from "lucide-react";

const ArticleCard = ({ article }) => {
  const [imageFailed, setImageFailed] = useState(false);
  const date = article.publishedAt
    ? new Date(`${article.publishedAt}T00:00:00`)
    : null;
  const hasDate = date && !Number.isNaN(date.getTime());

  return (
    <article className="h-full min-w-0">
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="writing-card group flex h-full flex-col overflow-hidden rounded-xl border border-foreground/10 bg-foreground/[0.025] transition-colors hover:border-foreground/25 hover:bg-foreground/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
      >
        <div className="relative aspect-[16/9] overflow-hidden border-b border-foreground/10 bg-foreground/5">
          {article.coverImage && !imageFailed ? (
            <img
              src={article.coverImage}
              alt=""
              loading="lazy"
              onError={() => setImageFailed(true)}
              className="h-full w-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.03]"
            />
          ) : (
            <div className="writing-cover flex h-full items-center justify-center" aria-hidden="true">
              <BookOpen size={36} strokeWidth={1.25} className="text-foreground/40" />
            </div>
          )}
          <span className="absolute bottom-4 left-4 rounded-full border border-foreground/10 bg-background/95 px-3 py-1 text-[11px] font-medium text-foreground/80">
            Published on X
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          {hasDate && (
            <time dateTime={article.publishedAt} className="mb-3 text-xs text-foreground/60">
              {date.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          )}
          <h3 className="text-xl font-semibold leading-snug tracking-tight text-foreground [overflow-wrap:anywhere]">
            {article.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-foreground/60 [overflow-wrap:anywhere]">
            {article.summary}
          </p>
          {article.tags?.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Topics">
              {article.tags.map((tag) => (
                <li key={tag} className="rounded-full bg-foreground/5 px-2.5 py-1 text-xs text-foreground/70">
                  {tag}
                </li>
              ))}
            </ul>
          )}
          <span className="mt-auto flex items-center justify-between gap-3 pt-6 text-sm font-medium text-foreground/80 group-hover:text-foreground">
            Read on X
            <ArrowUpRight size={18} aria-hidden="true" className="transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5" />
          </span>
          <span className="sr-only"> (opens in a new tab)</span>
        </div>
      </a>
    </article>
  );
};

export default ArticleCard;
