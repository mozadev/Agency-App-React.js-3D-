import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    hitss,
    pionier,
    unfv,
} from "../assets";

export const navLinks = [

    {
        id: "experience",
        title: "Experience",
    },
    {
        id: "projects",
        title: "Projects",
    },

    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [


    {
        title: "Full Stack Developer",
        company_name: "Hitss Peru",
        icon: hitss,
        iconBg: "#383E56",
        date: "October 2023 - Present",
        points: [
            "Built REST APIs with FastAPI and backend ETL modules (ingest → transform → load) consumed by a React + TypeScript dashboard.",
            "Implemented Celery + Redis (retries, scheduling, results) and WebSockets for per-device/process live progress with RBAC (role-based access control using JWT/permissions).",
            "Network Patch Orchestrator (UI + API): Excel uploads, batch execution, real-time tracking, validations and exports.",
            "Validation Portal: Word/Excel ingestion and rule-based comparisons with data quality gates, job tracking and notifications.",
            "Impact: 70–80% cycle-time reduction and ~90% fewer manual errors; reporting improved from daily to hourly.",
            "Selenium automations (SharePoint): logged in, navigated portals and downloaded reports; scheduled jobs with retries.",
            "Backend ETL (Python/pandas): ingested those reports plus Excel, then cleaned/normalized and merged datasets; validations; loaded into PostgreSQL for Analytics.",
            "Desktop ERP extraction (pywinauto): orchestrated as modular ETLs in the backend and triggered from the dashboard with role-based permissions (RBAC); frontend consumed results and enabled report downloads.",
            "Deployments: Docker + Nginx with CI pipelines (GitLab/GitHub Actions), basic hardening and 12-Factor config.",
            "Stack: React, TypeScript, MUI, Highcharts, FastAPI, Django, Celery, Redis, PostgreSQL, WebSockets, Selenium, pywinauto, pandas, Docker, Nginx, CI/CD.",
        ],
    },

    {
        title: "Full Stack Developer",
        company_name: "Pionier",
        icon: pionier,
        iconBg: "#383E56",
        date: "March 2023 - Octubre 2023",
        points: [
            "Modeled multi-table datasets and exposed REST endpoints in Python (FastAPI) for operational reports with filters/pagination and validations.",
            "Built React + TypeScript (MUI) dashboards/forms for Textile Visual Control, Dispatch Plan, Real Lead Time per area/order, and Yarn Lot Quality (parameters, states, search).",
            "Implemented RBAC and business rules (e.g., block barcode reads for past operations) and backend ETLs (pandas/openpyxl) to clean/normalize/merge data into PostgreSQL and Excel exports.",
            "Maintained domain catalogs/rules (e.g., fabric families 315/316, curve distribution, sample-order unlink) and shipped with Docker + CI/CD.",
            "Stack: Python (FastAPI), SQL/PostgreSQL, React, TypeScript, MUI, pandas, Docker, Git.",
        ],
    },

];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [

    {
        name: "Agency ",
        description:
            "Web-based platform that merge expertise in development with a futuristic vision to offer software solutions that transform businesses. Specialized in blockchain, microservices development with Django REST Framework, and web platforms using React and Next.js..",
        tags: [
            {
                name: "React.js",
                color: "blue-text-gradient",
            },
            {
                name: "Next.js",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        web_link: "https://agency.webmoza.com/",
        source_code_link: "https://github.com/mozadev/Frontend-Next.js-of--App-Microservicios-Django-Backend-/",
    },
    // {
    //     name: "Car Rent",
    //     description:
    //         "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    //     tags: [
    //         {
    //             name: "react",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "mongodb",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "tailwind",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     image: carrent,
    //     source_code_link: "https://github.com/",
    // },
    // {
    //     name: "Job IT",
    //     description:
    //         "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    //     tags: [
    //         {
    //             name: "react",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "restapi",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "scss",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     image: jobit,
    //     source_code_link: "https://github.com/",
    // },
    // {
    //     name: "Trip Guide",
    //     description:
    //         "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //     tags: [
    //         {
    //             name: "nextjs",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "supabase",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "css",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     image: tripguide,
    //     source_code_link: "https://github.com/",
    // },
];

export { services, technologies, experiences, testimonials, projects };