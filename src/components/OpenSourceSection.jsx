import React, { useEffect, useState } from "react";
import { Github, Star, GitMerge, GitPullRequest, ExternalLink } from "lucide-react";
import { openSource as staticOpenSource } from "../data/data";

const GITHUB_USER = "harrykamboj1";
// Repos to hide from the section (e.g. hiring assignments, own forks)
const EXCLUDED_REPOS = ["recruitlyio/assignments-fullstack"];
const CACHE_KEY = "oss-contributions-v1";
const CACHE_TTL_MS = 60 * 60 * 1000;

const formatStars = (count) => {
  if (count >= 1000) return `${Math.floor(count / 1000)}k+`;
  return `${count}`;
};

const fetchContributions = async () => {
  const searchRes = await fetch(
    `https://api.github.com/search/issues?q=author:${GITHUB_USER}+type:pr&per_page=50&sort=created&order=desc`
  );
  if (!searchRes.ok) throw new Error(`GitHub search failed: ${searchRes.status}`);
  const search = await searchRes.json();

  const prsByRepo = new Map();
  for (const item of search.items || []) {
    const repo = item.repository_url.split("/").slice(-2).join("/");
    const owner = repo.split("/")[0];
    const merged = Boolean(item.pull_request?.merged_at);
    const open = item.state === "open";
    // Skip own repos, excluded repos, and PRs that were closed without merging
    if (owner === GITHUB_USER || EXCLUDED_REPOS.includes(repo)) continue;
    if (!merged && !open) continue;

    if (!prsByRepo.has(repo)) prsByRepo.set(repo, []);
    prsByRepo.get(repo).push({
      title: item.title,
      status: merged ? "Merged" : "In Review",
      link: item.html_url,
    });
  }

  const projects = await Promise.all(
    [...prsByRepo.entries()].map(async ([repo, contributions]) => {
      const repoRes = await fetch(`https://api.github.com/repos/${repo}`);
      if (!repoRes.ok) throw new Error(`GitHub repo fetch failed: ${repoRes.status}`);
      const meta = await repoRes.json();
      return {
        repo,
        name: meta.name,
        description: meta.description || "",
        stars: formatStars(meta.stargazers_count),
        starCount: meta.stargazers_count,
        language: meta.language || "",
        link: meta.html_url,
        contributions,
      };
    })
  );

  projects.sort((a, b) => b.starCount - a.starCount);
  return projects;
};

const useOpenSourceContributions = () => {
  const [projects, setProjects] = useState(staticOpenSource);

  useEffect(() => {
    let cancelled = false;

    try {
      const cached = JSON.parse(localStorage.getItem(CACHE_KEY));
      if (cached && Date.now() - cached.at < CACHE_TTL_MS && cached.projects?.length) {
        setProjects(cached.projects);
        return;
      }
    } catch {
      // ignore corrupt cache
    }

    fetchContributions()
      .then((live) => {
        if (cancelled || live.length === 0) return;
        setProjects(live);
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), projects: live }));
        } catch {
          // storage full/unavailable — live data still rendered
        }
      })
      .catch(() => {
        // API unavailable or rate-limited — static fallback stays rendered
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return projects;
};

const StatusBadge = ({ status }) => {
  const merged = status === "Merged";
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium ${
        merged
          ? "bg-emerald-500/10 text-emerald-400"
          : "bg-amber-500/10 text-amber-400"
      }`}
    >
      {merged ? <GitMerge size={11} /> : <GitPullRequest size={11} />}
      {status}
    </span>
  );
};

const OpenSourceSection = () => {
  const projects = useOpenSourceContributions();

  return (
    <section className="py-20" id="OpenSource">
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground mb-4">
          Open Source
        </h2>
        <p className="text-zinc-400">
          Contributions to projects I use and care about.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <div
            key={project.repo}
            className="rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:border-white/20 hover:bg-white/10"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-lg font-semibold text-foreground hover:text-white"
              >
                <Github size={18} className="text-zinc-400 group-hover:text-white transition-colors" />
                {project.name}
                <span className="hidden sm:inline text-xs font-mono font-normal text-zinc-500">
                  {project.repo}
                </span>
              </a>
              <div className="flex items-center gap-3 text-xs text-zinc-400">
                <span className="inline-flex items-center gap-1">
                  <Star size={12} className="text-yellow-400" />
                  {project.stars}
                </span>
                <span className="font-mono text-zinc-500">{project.language}</span>
              </div>
            </div>

            <p className="mb-4 text-sm text-zinc-400">{project.description}</p>

            <ul className="flex flex-col gap-2">
              {project.contributions.map((pr) => (
                <li key={pr.link}>
                  <a
                    href={pr.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-3 rounded-lg border border-white/5 bg-black/20 px-4 py-2.5 transition-all hover:border-white/15 hover:bg-black/40"
                  >
                    <span className="flex items-center gap-3 min-w-0">
                      <StatusBadge status={pr.status} />
                      <span className="truncate text-sm text-zinc-300 group-hover:text-white transition-colors">
                        {pr.title}
                      </span>
                    </span>
                    <ExternalLink
                      size={14}
                      className="shrink-0 text-zinc-600 group-hover:text-zinc-300 transition-colors"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OpenSourceSection;
