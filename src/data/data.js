
import {
    SiReact, SiNextdotjs, SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiTypescript, SiTailwindcss,
    SiNodedotjs, SiExpress, SiSpringboot, SiMysql, SiPostgresql, SiMongodb, SiPrisma, SiHibernate,
    SiWebrtc, SiAmazonaws, SiDocker, SiNginx, SiGrafana, SiKubernetes, SiPrometheus,
    SiGit, SiGithub, SiVisualstudiocode, SiPostman, SiFigma
} from "react-icons/si";

export const Bio = {
    name: "Harnoor Singh",
    roles: [
        "Full Stack Developer",
        "Freelancer",
    ],
    github: "https://github.com/harrykamboj1",
    leetCode: "https://leetcode.com/u/singhharnoor116/",
    resume:
        "https://drive.google.com/file/d/1CAGzp_qGVo5SBz3l5Q9Uho3gKu9SQrRn/view?usp=sharing",
    linkedin: "https://www.linkedin.com/in/harnoor-singh-3b163714b/",
    twitter: "https://twitter.com/Harnoor29581982",
};

export const skills = [
    {
        title: "Frontend",
        skills: [
            { name: "React Js", icon: SiReact },
            { name: "Next Js", icon: SiNextdotjs },
            { name: "HTML", icon: SiHtml5 },
            { name: "CSS", icon: SiCss3 },
            { name: "JavaScript", icon: SiJavascript },
            { name: "Bootstrap", icon: SiBootstrap },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Tailwind", icon: SiTailwindcss },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Node Js", icon: SiNodedotjs },
            { name: "ExpressJs", icon: SiExpress },
            { name: "SpringBoot", icon: SiSpringboot },
            { name: "MySQL", icon: SiMysql },
            { name: "Postgresql", icon: SiPostgresql },
            { name: "MongoDB", icon: SiMongodb },
            { name: "Prisma", icon: SiPrisma },
            { name: "Hibernate", icon: SiHibernate },
            { name: "WebRTC", icon: SiWebrtc },
        ],
    },
    {
        title: "DevOps",
        skills: [
            { name: "AWS", icon: SiAmazonaws },
            { name: "Docker", icon: SiDocker },
            { name: "Nginx", icon: SiNginx },
            { name: "Grafana", icon: SiGrafana },
            { name: "Kubernetes", icon: SiKubernetes },
            { name: "Prometheus", icon: SiPrometheus },
        ],
    },
    {
        title: "Others",
        skills: [
            { name: "Git", icon: SiGit },
            { name: "GitHub", icon: SiGithub },
            { name: "VS Code", icon: SiVisualstudiocode },
            { name: "Postman", icon: SiPostman },
            { name: "Figma", icon: SiFigma },
        ],
    },
];

export const experiences = [
    {
        id: 0,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo0QNWj_LLJz-ViXBA3x7kY5GFI4TvOAxQUQ&s",
        role: "Full Stack Developer",
        company: "Twinline Business Solutions",
        date: "June 2022 - Current",
        desc: `Developed and implemented REST APIs to facilitate communication between frontend and backend systems,Led the development of more than 10 end-to-end features, from requirements gathering to deployment on
production, Identified and resolved bugs to improve product quality and enhance user experience,
Built and maintained the company’s website, incorporating HTML, CSS, and jQuery for frontend development,
Utilized Reactjs, Java, Spring Boot, Hibernate, and Oracle Database to architect and implement scalable backend solutions`,
        skills: [
            "ReactJS",
            "Spring Boot",
            "Hibernate",
            "HTML",
            "CSS",
            "JavaScript",
            "Java",
            "AWS",
            "Tailwind Css",
            "Oracle"
        ],
        doc: "",
    },
    {
        id: 1,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5t8yotXeA7z1QWyiOJyKMIpPD_RAscPBRTg&s",
        role: "Software Developer Intern",
        company: "Starbuzz.ai",
        date: "Jan 2022 - June 2022",
        desc: `Developed more than 10 screens using Flutter and Dart for the mobile application, Collaborated with the team on API integration to facilitate communication between the mobile application and
backend services`,
        skills: [
            "Flutter",
            "Dart",
            "Java",
            "Nextjs"
        ],

    }

];


export const projects = [
    {
        id: 1,
        title: "Mindbook",
        date: "Jan 2026 - Feb 2026",
        description:
            "Mindbook is a Second Brain application that transforms your documents into an interactive knowledge base. It leverages RAG (Retrieval-Augmented Generation) to allow users to chat with their documents. Features include secure authentication with Clerk, document storage via Cloudflare R2, and vector search using Pgvector.",
        image:
            "./Mindbook.png",
        tags: [
            "Next.js",
            "FastAPI",
            "PostgreSQL",
            "Langchain",
            "LangGraph",
            "RAG",
            "Clerk",
            "Pgvector",
            "OpenAI",
            "Cloudflare R2",
            "Shadcn UI",
            "Tailwind CSS"
        ],
        category: "FullStack",
        github: "https://github.com/harrykamboj1/Mindbook-backend",
        webapp: "https://mindbook-rho.vercel.app/",
    },
    {
        id: 2,
        title: "Invisly.ai",
        date: "Oct 2025 - Nov 2025",
        description:
            "Invisly.ai is an advanced, AI-driven stock analysis platform that empowers retail investors with real-time insights, chart-driven analytics, AI agent recommendations, stock alerts, and curated financial news — all in a clean and fast interface.",
        image:
            "./invisly.png",
        tags: [
            "Nextjs",
            "MongoDB",
            "Tailwind Css",
            "Shadcn UI",
            "Inngest",
            "Langchain Agents",
            "Better Auth",
            "Gemini Api"
        ],
        category: "FullStack",
        github: "https://github.com/harrykamboj1/invisly",
        webapp: "https://invisly.vercel.app/",
    },
    {
        id: 3,
        title: "Flex AI",
        date: "Mar 2025 - Apr 2025",
        description:
            "Flex AI is a modern fitness platform powered by advanced AI technology. It provides personalized workout routines and diet plans tailored to individual goals, fitness levels, and dietary restrictions. Users can interact with an AI assistant through voice conversations to generate customized fitness programs.",
        image:
            "./Flexai.png",
        tags: [
            "Nextjs",
            "PostgressSQL",
            "Tailwind Css",
            "Shadcn UI",
            "Convex",
            "VAPI",
            "Clerk"
        ],
        category: "Frontend",
        github: "https://github.com/harrykamboj1/Flex-AI",
        webapp: "https://flex-ai-theta.vercel.app/",
    },
    {
        id: 4,
        title: "Gitlic",
        date: "Jan 2025 - Mar 2025",
        description:
            "GitLic is a full-stack SaaS tool designed to help developers work and collaborate on complex projects. It leverages an end-to-end RAG (Retrieve, Augment, Generate) pipeline to provide an intuitive and efficient experience for managing GitHub repositories and pull requests.",
        image:
            "./Gitlic.png",
        tags: [
            "Nextjs",
            "PostgressSQL",
            "Tailwind Css",
            "Shadcn UI",
            "Prisma",
            "Gemini AI",
            "LangChain",
            "Assembly AI",
            "Razorpay",
            "TRPC"
        ],
        category: "FullStack",
        github: "https://github.com/harrykamboj1/GitLic",
        webapp: "https://gitlic.vercel.app/",
    },
    {
        id: 5,
        title: "FinanceFlow",
        date: "May 2024 - June 2024",
        description:
            "This is a comprehensive Finance SaaS Platform designed to help you track your income and expenses, categorize transactions, and gain insights through detailed charts.",
        image:
            "./FinanceFlow.png",
        tags: ["Nextjs", "Reactjs", "Tanstack Query", "Tailwind CSS", "Recharts", "Hono", "Drizzle", "PostgresSql", "Clerk Auth"],
        category: "FullStack",
        github: "https://github.com/harrykamboj1/FinanceFlow",
        webapp: "https://finance-flow-lovat.vercel.app/",

    },
    {
        id: 6,
        title: "LeetCode Profile",
        date: "Apr 2022 - Current",
        description:
            "Showcasing consisten problem solving skills and algorithmic thinking.",
        image:
            "./LeetCode.png",
        tags: ["Data Structures", "Algorithm", "Java"],
        category: "DSA",
        github: "https://leetcode.com/u/singhharnoor116/",
        webapp: "https://leetcode.com/u/singhharnoor116/",
    },
    {
        id: 7,
        title: "Aims website",
        date: "Aug 2024 - Sep 2024",
        description:
            "Official website of Aims (IELTS | PTE | FRENCH)",
        image:
            "./aims-website.png",
        tags: ["Javascript", "Reactjs", "Next.js", "Tailwind"],
        category: "Frontend",
        github: "https://github.com/harrykamboj1/Aims-website",
        webapp: "https://aimseducation.org/",
    }
];
