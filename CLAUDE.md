# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Harnoor Singh's personal portfolio — a single-page React app (Create React App, JavaScript, no TypeScript) styled with Tailwind CSS and animated with Framer Motion. Deployed on Vercel at harnoor-portfolio.vercel.app.

## Commands

- `npm start` — dev server at http://localhost:3000
- `npm run build` — production build into `build/` (gitignored)
- `npm test` — Jest via react-scripts in watch mode; run a single file with `npm test -- ComponentName` (no test files currently exist)

There is no separate lint command; ESLint runs through react-scripts with the `react-app` config during start/build.

## Architecture

**Content lives in data, not components.** All portfolio content (bio, skills, work experience, projects, open-source contributions) is defined in [src/data/data.js](src/data/data.js), which exports `Bio`, `skills`, `experiences`, `projects`, and `openSource`. Section components in `src/components/` map over these arrays into card components (e.g. `WorkExperience` → `ExperienceCard`, `ProjectSection` → `ProjectCard`, `Skills` → `SkillCard`). To update portfolio content, edit `data.js` — don't touch the components. Skill icons come from `react-icons` plus custom SVGs in [src/data/skillIcons.jsx](src/data/skillIcons.jsx).

**Page composition.** [src/App.js](src/App.js) stacks the sections in order (Navbar → HeroSection → Skills → WorkExperience → ProjectSection → OpenSourceSection → Footer) inside a `max-w-4xl` centered main column. Adding a section means creating a component and inserting it here.

**Styling.** Dark-theme-only design driven by two CSS variables (`--background`, `--foreground`) declared in [src/index.css](src/index.css) and mapped to Tailwind `background`/`foreground` colors in [tailwind.config.js](tailwind.config.js). `index.css` also holds custom utilities (dot-pattern background, marquee helpers) that pair with the `marquee` keyframes in the Tailwind config — the skills marquee relies on a duplicated row translating by exactly -50%. Font is Inter via Google Fonts import.

**Animation.** Framer Motion variants are centralized in [src/utils/motion.js](src/utils/motion.js) and reused across section components.

**Odd ones out.** Navbar section links use `react-scroll`, and `ExperienceCard` is the one component styled with `styled-components` rather than Tailwind. Several other dependencies in package.json (MUI, three.js/react-three, emailjs, typewriter-effect) are leftovers from an earlier design and are unused by the current components.
