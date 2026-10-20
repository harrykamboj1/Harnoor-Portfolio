import React from "react";
import { ArrowUpRight, BookOpen } from "lucide-react";
import ArticleCard from "./ArticleCard";
import { articles, articlesUrl } from "../data/articles";

const WritingSection = () => (
  <section className="scroll-mt-24 py-20" id="Writing" aria-labelledby="writing-heading">
    <div className="mb-12">
      <h2 id="writing-heading" className="mb-4 text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">
        Writing
      </h2>
      <p className="text-foreground/60">Ideas, notes, and things I learn along the way.</p>
    </div>

    {articles.length > 0 ? (
      <>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {articles.slice(0, 4).map((article) => (
            <ArticleCard key={article.url} article={article} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={articlesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-sm text-foreground/60 transition-colors hover:border-foreground hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
          >
            View all articles on X <ArrowUpRight size={15} aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </>
    ) : (
      <a
        href={articlesUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="writing-card group flex flex-col gap-6 rounded-xl border border-foreground/10 bg-foreground/[0.025] p-6 transition-colors hover:border-foreground/25 hover:bg-foreground/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground sm:flex-row sm:items-center sm:p-8"
      >
        <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-foreground/10 bg-foreground/5 text-foreground/60">
          <BookOpen size={28} strokeWidth={1.5} aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="mb-2 text-xs font-medium text-foreground/50">@Harnoor29581982</p>
          <h3 className="text-xl font-semibold tracking-tight text-foreground">Articles on X</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground/60">Read my long-form writing, published on X.</p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-foreground/80 group-hover:text-foreground">
          Explore articles <ArrowUpRight size={18} aria-hidden="true" />
          <span className="sr-only"> (opens in a new tab)</span>
        </span>
      </a>
    )}
  </section>
);

export default WritingSection;
