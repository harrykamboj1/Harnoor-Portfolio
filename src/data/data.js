import {
    SiReact,
    SiNextdotjs,
    SiJavascript,
    SiTypescript,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiSpringboot,
    SiPostgresql,
    SiMongodb,
    SiHibernate,
    SiWebrtc,
    SiDocker,
    SiGit,
    SiGithub,
    SiOpenjdk,
    SiPython,
    SiMysql,
    SiRedis,
    SiCloudflare,
    SiVercel,
    SiGithubactions,
    SiLangchain,
    SiLanggraph,
    SiElasticsearch,
    SiOpenai,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { OracleIcon } from "./skillIcons.jsx";

export const Bio = {
    name: "Harnoor Singh",
    roles: [
        "Full Stack Developer",
        "Software Engineer",
    ],
    phone: "+91 78892 25504",
    email: "singhharnoor116@gmail.com",
    github: "https://github.com/harrykamboj1",
    leetCode: "https://leetcode.com/u/singhharnoor116/",
    resume:
        "https://drive.google.com/file/d/1NDvKGJuzOBm3qlZyyy_7MaRefwLC8XdU/view?usp=sharing",
    linkedin: "https://www.linkedin.com/in/harnoor-singh-3b163714b/",
    twitter: "https://twitter.com/Harnoor29581982",
};

export const skills = [
    {
        title: "Languages",
        skills: [
            { name: "Java", icon: SiOpenjdk },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Python", icon: SiPython },
            { name: "SQL", icon: SiMysql },
            { name: "JavaScript", icon: SiJavascript },
        ],
    },
    {
        title: "Frameworks",
        skills: [
            { name: "Spring Boot", icon: SiSpringboot },
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Express", icon: SiExpress },
            { name: "React", icon: SiReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "Tailwind CSS", icon: SiTailwindcss },
        ],
    },
    {
        title: "AI / LLM",
        skills: [
            { name: "LangChain", icon: SiLangchain },
            { name: "LangGraph", icon: SiLanggraph },
            { name: "RAG", icon: SiElasticsearch },
            { name: "AI Agents", icon: SiOpenai },
        ],
    },
    {
        title: "Databases",
        skills: [
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "MongoDB", icon: SiMongodb },
            { name: "Oracle", icon: OracleIcon },
            { name: "Redis", icon: SiRedis },
        ],
    },
    {
        title: "Tools & Infra",
        skills: [
            { name: "Docker", icon: SiDocker },
            { name: "AWS", icon: FaAws },
            { name: "Git", icon: SiGit },
            { name: "GitHub", icon: SiGithub },
            { name: "Cloudflare", icon: SiCloudflare },
            { name: "CI/CD", icon: SiGithubactions },
            { name: "Vercel", icon: SiVercel },
            { name: "WebRTC", icon: SiWebrtc },
            { name: "Hibernate", icon: SiHibernate },
        ],
    },
];

export const experiences = [
    {
        id: 0,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo0QNWj_LLJz-ViXBA3x7kY5GFI4TvOAxQUQ&s",
        role: "Software Developer",
        company: "Twinline Business Solutions — Gurugram, Haryana",
        date: "May 2022 – Present",
        desc: `Built in-house AI agents for collections field-force planning that generate monthly, weekly, and daily route plans, suggesting optimal visit schedules for field officers.

Delivered 30+ production-ready full-stack features across loan origination and collections platforms, improving adoption and operational efficiency.

Designed high-throughput RESTful microservices and optimized backend services (Java, Spring Boot, Hibernate, PostgreSQL), cutting API response time by 25% under peak load.

Reduced peak database load by 30–40% through SQL tuning, ORM optimization, and multi-layer caching (Redis + Hibernate L1/L2).

Built a real-time Video KYC platform with WebRTC for secure remote fintech onboarding.

Scaled the collections platform to millions of monthly transactions with high availability during peak cycles; contributed to high-volume UPI payment infrastructure for reliability and fault tolerance.

Built a scalable DOCX → HTML → PDF pipeline, improving document processing throughput by about 40%.

Automated loan decisioning through Credit Bureau integrations and Business Rule Engine flows.`,
        skills: [
            "Java",
            "Spring Boot",
            "AI Agents",
            "Hibernate",
            "PostgreSQL",
            "Redis",
            "React",
            "WebRTC",
            "Oracle",
            "REST APIs",
            "Agile",
        ],
        doc: "",
    },
    {
        id: 1,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5t8yotXeA7z1QWyiOJyKMIpPD_RAscPBRTg&s",
        role: "Software Developer Intern",
        company: "Starbuzz.ai",
        date: "Jan 2022 – June 2022",
        desc: `Built 10+ screens in Flutter and Dart for the mobile app of Starbuzz.ai, an AI-powered influencer marketing platform for creator discovery and campaign management.

Integrated the mobile app with backend REST APIs, working with the team on API contracts and data flow between the app and services.`,
        skills: ["Flutter", "Dart", "Java", "Next.js", "REST APIs"],
    },
];

export const projects = [
    {
        id: 1,
        title: "AIMS",
        date: "Jan 2026 – Apr 2026",
        description:
            "Full-stack French and IELTS learning app used by 3000+ students: speaking and writing practice, timed drills, mock tests, progress tracking, and AI-based feedback. ElevenLabs STT for transcription; Groq API for LLM-driven responses and speaking/writing evaluation.",
        image: "./aims-website-1.png",
        tags: [
            "Node.js",
            "Express.js",
            "JavaScript",
            "Supabase",
            "PostgreSQL",
            "Groq API",
            "ElevenLabs STT",
            "Resend API",
        ],
        category: "FullStack",
        github: "https://github.com/harrykamboj1/Aims-website",
        webapp: "https://aimseducation.org/",
    },
    {
        id: 2,
        title: "Mindbook",
        date: "Jan 2026 – Feb 2026",
        description:
            "Production-grade RAG platform for real-time conversational querying over documents and websites using LangGraph agents and OpenAI. Scalable async ingestion with Celery and Redis for OCR, chunking, and vector embeddings. Vector retrieval and context orchestration tuned for answer quality and latency.",
        image: "./Mindbook.png",
        tags: [
            "Next.js 15",
            "Python",
            "LangChain",
            "LangGraph",
            "Docker",
            "Redis",
            "Celery",
            "PostgreSQL",
            "AWS",
            "OpenAI",
            "RAG",
        ],
        category: "FullStack",
        github: "https://github.com/harrykamboj1/Mindbook-backend",
        webapp: "https://mindbook-rho.vercel.app/",
    },
    {
        id: 3,
        title: "Invisly.ai",
        date: "Oct 2025 – Nov 2025",
        description:
            "LLM-powered risk profiling with personalized investment insights and email automation. Multi-agent research pipeline using LangChain Deep Agents for market news, fundamental, and technical analysis. Real-time AI market summarization for concise investor insights.",
        image: "./invisly.png",
        tags: [
            "Next.js",
            "Tailwind CSS",
            "PostgreSQL",
            "MongoDB",
            "Inngest",
            "LangChain",
            "Gemini",
            "Deep Agents",
        ],
        category: "FullStack",
        github: "https://github.com/harrykamboj1/invisly",
        webapp: "https://invisly.vercel.app/",
    },
    {
        id: 4,
        title: "Flex AI",
        date: "Mar 2025 – Apr 2025",
        description:
            "AI fitness platform with personalized workouts and diet plans. Voice conversations with an AI assistant to generate tailored programs based on goals and constraints.",
        image: "./Flexai.png",
        tags: [
            "Next.js",
            "PostgreSQL",
            "Tailwind CSS",
            "Convex",
            "VAPI",
            "Clerk",
        ],
        category: "Frontend",
        github: "https://github.com/harrykamboj1/Flex-AI",
        webapp: "https://flex-ai-theta.vercel.app/",
    },
    {
        id: 5,
        title: "Gitlic",
        date: "Jan 2025 – Mar 2025",
        description:
            "Full-stack SaaS for collaborating on complex projects with an end-to-end RAG pipeline for GitHub repos and pull requests.",
        image: "./Gitlic.png",
        tags: [
            "Next.js",
            "PostgreSQL",
            "Tailwind CSS",
            "Prisma",
            "Gemini AI",
            "LangChain",
            "Assembly AI",
            "Razorpay",
            "tRPC",
        ],
        category: "FullStack",
        github: "https://github.com/harrykamboj1/GitLic",
        webapp: "https://gitlic.vercel.app/",
    },
    {
        id: 6,
        title: "FinanceFlow",
        date: "May 2024 – June 2024",
        description:
            "Finance SaaS to track income and expenses, categorize transactions, and visualize insights with charts.",
        image: "./FinanceFlow.png",
        tags: [
            "Next.js",
            "React",
            "TanStack Query",
            "Tailwind CSS",
            "Recharts",
            "Hono",
            "Drizzle",
            "PostgreSQL",
            "Clerk",
        ],
        category: "FullStack",
        github: "https://github.com/harrykamboj1/FinanceFlow",
        webapp: "https://finance-flow-lovat.vercel.app/",
    },
    {
        id: 7,
        title: "LeetCode Profile",
        date: "Apr 2022 – Present",
        description:
            "Consistent problem-solving practice: data structures, algorithms, and Java.",
        image: "./LeetCode.png",
        tags: ["Data Structures", "Algorithms", "Java"],
        category: "DSA",
        github: "https://leetcode.com/u/singhharnoor116/",
        webapp: "https://leetcode.com/u/singhharnoor116/",
    },
];

export const openSource = [
    {
        repo: "aaif-goose/goose",
        name: "Goose",
        description:
            "An open source, extensible AI agent that goes beyond code suggestions — install, execute, edit, and test with any LLM.",
        stars: "51k+",
        language: "Rust / TypeScript",
        link: "https://github.com/aaif-goose/goose",
        contributions: [
            {
                title: "Add search filter to the provider grid",
                status: "Merged",
                link: "https://github.com/aaif-goose/goose/pull/10437",
            },
            {
                title: "Hide nested config values in the Configuration Editor",
                status: "Merged",
                link: "https://github.com/aaif-goose/goose/pull/10390",
            },
            {
                title: "Relabel settings 'Session' tab to 'External Backend'",
                status: "Merged",
                link: "https://github.com/aaif-goose/goose/pull/10318",
            },
            {
                title: "Dedupe Nostr session deep link imports",
                status: "Merged",
                link: "https://github.com/aaif-goose/goose/pull/9918",
            },
        ],
    },
    {
        repo: "andrewyng/aisuite",
        name: "aisuite",
        description:
            "Andrew Ng's unified interface to multiple generative AI providers.",
        stars: "14k+",
        language: "Python",
        link: "https://github.com/andrewyng/aisuite",
        contributions: [
            {
                title: "Preserve Gemini thought signatures across multi-step tool calls",
                status: "In Review",
                link: "https://github.com/andrewyng/aisuite/pull/325",
            },
        ],
    },
    {
        repo: "rohitg00/agentmemory",
        name: "agentmemory",
        description:
            "Persistent memory for AI coding agents based on real-world benchmarks.",
        stars: "25k+",
        language: "TypeScript",
        link: "https://github.com/rohitg00/agentmemory",
        contributions: [
            {
                title: "Add per-session LLM token budget with hard cap and soft warn",
                status: "In Review",
                link: "https://github.com/rohitg00/agentmemory/pull/934",
            },
        ],
    },
];
