import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Globe } from "lucide-react";
import {
  DiPython,
  DiJavascript1,
  DiReact,
  DiDjango,
  DiDocker,
  DiHtml5,
  DiCss3,
} from "react-icons/di";

type TagType = {
  icon?: React.ReactNode;
  label: string;
};

type LinkType = {
  icon?: React.ReactNode;
  label: string;
  href: string;
};

export type ProjectType = {
  title: string;
  description: string;
  image?: string;
  source?: string;
  visit?: string;
  tags?: TagType[];
  id?: number;
  dates?: string;
  links?: LinkType[];
  slugOverride?: string;
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-")
}

export function getProjectBySlug(slug: string): ProjectType | undefined {
  return projectsData.find((p) => getProjectSlug(p) === slug)
}

export function getProjectSlug(project: ProjectType): string {
  return project.slugOverride ?? slugify(project.title)
}

export { slugify as slugifyProject }

export const projectsData: ProjectType[] = [
  {
    title: "NameGen",
    description:
      "A combinatoric letter permutations & phonetic name generator designed to create unique combination of words and names from the alphabet with customizable slot constraints, batch controls, and flow modes.",
    tags: [
      {
        label: "NextJs",
      },
      {
        label: "TypeScript",
        icon: <DiJavascript1 size={16} />,
      },
      {
        label: "React",
        icon: <DiReact size={16} />,
      },
      {
        label: "Tailwind CSS",
      },
      {
        label: "Combinatorics Engine",
      },
    ],
    image: "/namegen.png",
    dates: "Sep 2024",
    links: [
      {
        label: "Github",
        href: "https://github.com/Tomdieu/namegen",
        icon: <GitHubLogoIcon />,
      },
      {
        label: "Preview",
        href: "https://namegen-phi.vercel.app/",
        icon: <Globe size={16} />,
      },
    ],
  },
  {
    title: "JoyFund",
    description:
      "A mobile-first healthcare crowdfunding platform that digitises Cameroon's traditional Njangi solidarity culture. Donors create milestone-based campaigns (birthdays, weddings), friends contribute via MTN MoMo or Orange Money, and funds are disbursed as care vouchers directly to partner hospitals — enabling transparent, fraud-proof healthcare funding across 6 user portals with a voucher-based escrow mechanism.",
    tags: [
      {
        label: "Django",
        icon: <DiDjango size={16} />,
      },
      {
        label: "Django Rest Framework",
        icon: <DiDjango size={16} />,
      },
      {
        label: "NextJs",
      },
      {
        label: "Python",
        icon: <DiPython size={16} />,
      },
      {
        label: "React",
        icon: <DiReact size={16} />,
      },
      {
        label: "Docker",
        icon: <DiDocker size={16} />,
      },
      {
        label: "PostgreSQL",
      },
      {
        label: "GeoDjango",
      },
      {
        label: "RabbitMQ",
      },
      {
        label: "Redis",
      },
      {
        label: "Celery",
      },
      {
        label: "WebSockets",
      },
    ],
    image: "/joyfund.png",
    dates: "Feb 2026 - May 2026",
    links: [
      {
        label: "Preview",
        href: "https://joy-fund.com",
        icon: <Globe size={16} />,
      },
    ],
  },
  {
    title: "Durable Impact Academy",
    description: "A modern, high-performance e-learning platform rebuilt from a legacy PHP system to Next.js after a complete UX/UI redesign. Built with a statically-generated frontend and headless CMS, achieving a 98/100 Lighthouse performance score and significantly boosting organic student enrollment.",
    tags: [
      {
        label: "NextJs",
      },
    ],
    image: "/durableimpactacademy.png",
    dates: "Apr 2025",
    links: [
      {
        label: "Preview",
        href: "https://durableimpactacademy.com",
        icon: <Globe size={16} />,
      },
    ],
  },
  {
    title: "Trixly",
    description:
      "An all-in-one productivity tool for freelancers and teams. **Problem:** Existing tools were bloated and expensive. **Solution:** Engineered a lightweight platform with Next.js and Prisma to track time, manage projects, write daily reports, and export client-ready insights. **Impact:** Streamlined workflow management for independent contractors.",
    tags: [
      {
        label: "NextJs",
      },
      {
        label: "Prisma",
      },
    ],
    image: "/trixly.png",
    dates: "Jan 2026 - Mar 2026",
    links: [
      {
        label: "Preview",
        href: "https://trixly.vercel.app/",
        icon: <Globe size={16} />,
      },
    ],
  },
  {
    title: "F.I.B.E.M Ambasade",
    description: "A webapp project for the Embassy of Guinea-Bissau in France.",
    tags: [
      {
        label: "NextJs",
      },
      {
        label: "Prisma",
      },
      {
        label: "Next-international",
      },
    ],
    image: "/fibem.png",
    dates: "Mar 2026",
    links: [
      {
        label: "Preview",
        href: "https://fibem-ambasade.vercel.app",
        icon: <Globe size={16} />,
      },
    ],
  },
  {
    title: "OhKeroh",
    description:
      "An assignment submission platform for students to submit and track their assignments. Built in partnership with Durable Impact.",
    tags: [
      {
        label: "Django",
        icon: <DiDjango size={16} />,
      },
      {
        label: "NextJs",
      },
      {
        label: "Next-international",
      },
    ],
    image: "/ohkeroh.png",
    dates: "Jan 2026 - Feb 2026",
    links: [
      {
        label: "Preview",
        href: "https://ohkeroh.com/",
        icon: <Globe size={16} />,
      },
    ],
  },
  {
    title: "Menu Daily",
    description:
      "A web platform for daily menu management, built under Coding Industry Sarl as frontend developer.",
    tags: [
      {
        label: "NextJs",
      },
    ],
    image: "/menu-daily.png",
    dates: "2025",
    links: [
      {
        label: "Preview",
        href: "https://daily-menus.com",
        icon: <Globe size={16} />,
      },
    ],
  },
  {
    title: "Easy Immo",
    description:
      "A modern real estate management platform for property owners in Cameroon, built under Coding Industry Sarl. Easy Immo allows landlords to centralize the management of their buildings, tenants, and concierges — including rent tracking, payment history, financial reports, contract storage, and automated reminders.",
    tags: [
      {
        label: "NextJs",
      },
    ],
    image: "/easy-immo.png",
    dates: "2025",
    links: [
      {
        label: "Preview",
        href: "https://easy-immo.coding-industry.com/",
        icon: <Globe size={16} />,
      },
    ],
  },
  {
    title: "FigmaToReact",
    description:
      "An automated design-to-code converter. **Problem:** Manual translation from Figma to React creates a massive bottleneck for frontend teams. **Solution:** Engineered a robust parser using MDA (Model Driven Architecture) and Eclipse Modeling Framework to generate semantic React components directly from Figma APIs. **Impact:** Bridged the gap between design and development, reducing UI implementation time significantly.",
    source: "https://github.com/Tomdieu/FigmaToReact",
    tags: [
      {
        label: "Python",
        icon: <DiPython size={16} />,
      },
      {
        label: "Java",
      },
      {
        label: "ATL",
      },
      {
        label: "EMF",
      },
      {
        label: "Eclipse Modeling Framework",
      },
      {
        label: "Model Transformation",
      },
      {
        label: "React",
        icon: <DiReact size={16} />,
      },
      {
        label: "Figma API",
      },
    ],
    slugOverride: "figma-to-react",
    image: "/FigmaToReact.png",
    dates: "Jan 2025 - Jun 2025",
    links: [
      {
        label: "Github",
        href: "https://github.com/Tomdieu/FigmaToReact",
        icon: <GitHubLogoIcon />,
      },
    ],
  },
  {
    title: "Revolution Travel & Services",
    description:
      "A digital storefront for a modern travel agency. **Problem:** Need for a centralized platform to handle flight bookings and comprehensive travel solutions. **Solution:** Built a fast, responsive Next.js application that showcases services and facilitates customer inquiries. **Impact:** Enhanced the agency's digital presence and streamlined the booking pipeline for clients.",
    source: "https://github.com/Tomdieu/pouantou-revolution-travel",
    tags: [
      {
        label: "NextJs",
      },
    ],
    image: "/revolution-travel.png",
    dates: "July 2025",
    links: [
      {
        label: "Github",
        href: "https://github.com/Tomdieu/pouantou-revolution-travel",
        icon: <GitHubLogoIcon />,
      },
      {
        label: "Preview",
        href: "https://puantou-revolution-travel.vercel.app/",
        icon: <Globe size={16} />,
      },
    ],
  },
  {
    title: "AI News Automation Tool",
    description:
      "Python script that automates finding news articles related to Artificial Intelligence from BBC Innovation website, filtering by date, classifying using Google Gemini, and providing a web interface for review and PDF export.",
    source: "https://github.com/Tomdieu/automation-test",
    tags: [
      {
        label: "Python",
        icon: <DiPython size={16} />,
      },
      {
        label: "Streamlit",
      },
      {
        label: "Google Gemini API",
      },
      {
        label: "Web Scraping",
      },
      {
        label: "SQLite",
      },
    ],
    image: "/django.png",
    dates: "Apr 2025",
    links: [
      {
        label: "Github",
        href: "https://github.com/Tomdieu/automation-test",
        icon: <GitHubLogoIcon />,
      },
    ],
  },
  {
    title: "E-Recruitment CMR",
    description:
      "A digital hiring platform tailored for the Cameroonian job market. **Problem:** HR teams struggled with fragmented application tracking systems. **Solution:** Developed an end-to-end electronic recruitment platform using Django and React to manage job postings, applications, and interviews. **Impact:** Streamlined the hiring pipeline and improved candidate experience.",
    source: "https://github.com/Tomdieu/erecruitement-cmr",
    tags: [
      {
        label: "Python",
        icon: <DiPython size={16} />,
      },
      {
        label: "Django",
        icon: <DiDjango size={16} />,
      },
      {
        label: "React",
        icon: <DiReact size={16} />,
      },
      {
        label: "PostgreSQL",
      },
      {
        label: "Redux",
      },
    ],
    image: "/erecruitment.png",
    dates: "Mar 2025 - Apr 2025",
    links: [
      {
        label: "Github",
        href: "https://github.com/Tomdieu/erecruitement-cmr",
        icon: <GitHubLogoIcon />,
      },
    ],
  },
  {
    title: "ClassConnect",
    description:
      "Cameroon's first adaptive e-learning platform — a comprehensive ecosystem democratizing quality education from middle school to university and professional upskilling. Problem: fragmented access to structured curricula, local payments, and live collaboration. Solution: architected a hybrid Django 5 + DRF + Channels/Celery/Redis backend and Next.js 15 (React 19, TypeScript, Tailwind, Zustand, NextAuth v5, next-international) frontend with class/subject hierarchies, resource library (videos/PDFs/exercises), Jitsi live classrooms, WebSocket forums & real-time chat, OAuth2/Google auth, bilingual FR/EN, and MTN/Orange Money subscriptions via FreemoPay/CamPay. Impact: 1,780+ commits, Docker + PostgreSQL monolith designed for microservices scale, live at classconnect.cm — open-sourced at github.com/Tomdieu/class-connect.",
    source: "https://github.com/Tomdieu/class-connect",
    tags: [
      {
        label: "NextJs",
      },
      {
        label: "Django",
        icon: <DiDjango size={16} />,
      },
      {
        label: "Django Rest Framework",
        icon: <DiDjango size={16} />,
      },
      {
        label: "TypeScript",
        icon: <DiJavascript1 size={16} />,
      },
      {
        label: "Python",
        icon: <DiPython size={16} />,
      },
      {
        label: "PostgreSQL",
      },
      {
        label: "Docker",
        icon: <DiDocker size={16} />,
      },
      {
        label: "WebSockets",
      },
      {
        label: "Jitsi Meet",
      },
      {
        label: "Tailwind CSS",
      },
    ],
    image: "/classconnect.png",
    dates: "Jan 2025 - Apr 2025",
    links: [
      {
        label: "Github",
        href: "https://github.com/Tomdieu/class-connect",
        icon: <GitHubLogoIcon />,
      },
      {
        label: "Preview",
        href: "https://classconnect.cm/",
        icon: <Globe size={16} />,
      },
    ],
  },
  {
    title: "OngolaPhone",
    description:
      "Digital storefront for a phone seller at Avenue Kennedy, Yaoundé — moved his stall online so clients see live stock and order remotely. Problem: 30+ daily WhatsApp calls asking 'what do you have?' with stale photos and lost orders. Solution: React + Vite + Django REST catalogue with real-time in-stock badges, search/filter by brand/price, and online order-intent flow (delivery/pickup). Impact: after-hours discovery, seller manages stock in <1 min without a developer — live at ongolaphone.com. Built at Coding Industry Sarl.",
    tags: [
      {
        label: "Javascript",
        icon: <DiJavascript1 size={16} />,
      },
      {
        label: "Python",
        icon: <DiPython size={16} />,
      },
      {
        label: "Django",
        icon: <DiDjango size={16} />,
      },
      {
        label: "Django Rest Framework",
        icon: <DiDjango size={16} />,
      },
      {
        label: "ViteJs",
      },
      {
        label: "React",
        icon: <DiReact size={16} />,
      },
    ],
    image: "/ongolaphone.png",
    dates: "Jul 2024 - Oct 2024",
    links: [
      {
        label: "Preview",
        href: "https://ongolaphone.com/",
        icon: <Globe size={16} />,
      },
    ],
  },

  {
    title: "Wikiculture",
    description:
      "WikiCulture is a project that aims to group all the culture of Cameroon.",
    source: "https://github.com/Tomdieu/wikiculture",
    tags: [
      {
        label: "Javascript",
        icon: <DiJavascript1 size={16} />,
      },
      {
        label: "Python",
        icon: <DiPython size={16} />,
      },
      {
        label: "React Native",
        icon: <DiReact size={16} />,
      },
      {
        label: "Django",
        icon: <DiDjango size={16} />,
      },
      {
        label: "Django Rest Framework",
        icon: <DiDjango size={16} />,
      },
      {
        label: "Docker",
        icon: <DiDocker size={16} />,
      },
      {
        label: "NextJs",
      },
      {
        label: "Minikube",
      },
      {
        label: "Kubernetes",
      },
      {
        label: "Microiservices",
      },
    ],
    image: "/wikiculture.png",
    dates: "Jan 2024 - Jun 2024",
    links: [
      {
        label: "Github",
        href: "https://github.com/Tomdieu/wikiculture",
        icon: <GitHubLogoIcon />,
      },
      {
        label: "Preview",
        href: "https://wikiculture.vercel.app/",
        icon: <Globe size={16} />,
      },
    ],
  },
  {
    title: "Url Shortener",
    description: "A web app to shorten long urls",
    source: "https://github.com/Tomdieu/wikiculture",
    tags: [
      {
        label: "Javascript",
        icon: <DiJavascript1 size={16} />,
      },

      {
        label: "NextJs",
      },
      {
        label: "Prisma",
      },
      {
        label: "React Query",
      },
    ],
    image: "/trixurl.png",
    dates: "Sep 2023 - Dec 2023",
    links: [
      {
        label: "Github",
        href: "https://github.com/Tomdieu/url-shortener",
        icon: <GitHubLogoIcon />,
      },
      {
        label: "Preview",
        href: "https://trixurl.vercel.app/",
        icon: <Globe size={16} />,
      },
    ],
  },
  {
    title: "annonce-ventes-voiture",
    description: "un site d'annonce des ventes des voiture",
    source: "https://github.com/Tomdieu/wikiculture",
    tags: [
      {
        label: "React Js",
      },

      {
        label: "ViteJs",
      },
      {
        label: "Django Rest framework",
      },
    ],
    image: "/annonce-ventes.png",
    dates: "Jul 2023 - Aug 2023",
    links: [
      {
        label: "Github",
        href: "https://github.com/Tomdieu/annonce-ventes-voiture",
        icon: <GitHubLogoIcon />,
      },
      {
        label: "Preview",
        href: "https://annonce-ventes-voiture.vercel.app/",
        icon: <Globe size={16} />,
      },
    ],
  },
  {
    title: "AgroHelp",
    description: "application d'aide à la décision agricole",
    source: "https://github.com/Tomdieu/wikiculture",
    tags: [
      {
        label: "Microiservices",
      },

      {
        label: "Django",
      },
      {
        label: "Django Rest framework",
      },
      {
        label: "Fast api",
      },
      { label: "ExpressJs" },
      { label: "Adnroid app" },
    ],
    image: "/django.png",
    dates: "Apr 2023 - Jul 2023",
    links: [
      {
        label: "Github",
        href: "https://github.com/BrownofDarkness/AgroHelp/",
        icon: <GitHubLogoIcon />,
      },
    ],
  },
  {
    title: "Trix Wallet",
    description:
      "This is a Mobile money android app to make money transfer,withdraw and top up transactions.This app have translation feature which means can change language from french to english",
    source: "https://github.com/Tomdieu/momo-app-clone",
    tags: [
      {
        label: "Javascript",
        icon: <DiJavascript1 size={16} />,
      },
      {
        label: "Python",
        icon: <DiPython size={16} />,
      },
      {
        label: "React Native",
        icon: <DiReact size={16} />,
      },
      {
        label: "Django",
        icon: <DiDjango size={16} />,
      },
      {
        label: "Django Rest Framework",
        icon: <DiDjango size={16} />,
      },
      {
        label: "Docker",
        icon: <DiDocker size={16} />,
      },
      {
        label: "Android",
      },
    ],
    image: "/trixwallet.png",
    dates: "Oct 2022 - Jan 2023",
    links: [
      {
        label: "Github",
        href: "https://github.com/Tomdieu/momo-app-clone",
        icon: <GitHubLogoIcon />,
      },
    ],
  },
  {
    title: "Map project",
    description:
      "A Small project that works with mapbox maps and position stack and geopapify api",
    tags: [
      { label: "Mapbox" },
      { label: "ReactJs" },
      { label: "Position Stack" },
      { label: "Geoapify" },
    ],
    image: "/nv-trix.png",
    links: [
      {
        label: "Preview",
        href: "https://nv-trix.vercel.app/user",
        icon: <Globe size={16} />,
      },
    ],
    dates: "Jul 2022 - Sep 2022",
  },
  {
    source: "https://github.com/Tomdieu/NvChat",
    title: "Nv Chat Application",
    image: "/nvchat.jpg",
    description:
      "NvChat is a complete chat application that include group chats and single chats and also have a post section where people can like and comment posts",
    tags: [
      {
        label: "TypeScript",
        icon: <DiJavascript1 size={16} />,
      },
      {
        label: "Python",
        icon: <DiPython size={16} />,
      },
      {
        label: "Django",
        icon: <DiDjango size={16} />,
      },
      {
        label: "Django Rest Framework",
        icon: <DiDjango size={16} />,
      },
    ],
    links: [
      {
        label: "Github",
        href: "https://github.com/Tomdieu/NvChat",
        icon: <GitHubLogoIcon />,
      },
    ],
  },
  {
    title: "NvHospital",
    description:
      "NvHospital is a desktop app for dental consultation made with python and pyside6",
    image: "/qt.png",
    tags: [
      {
        label: "PyQt5",
        icon: <DiReact size={16} />,
      },
      {
        label: "Python",
        icon: <DiPython size={16} />,
      },
      {
        label: "Desktop",
      },
    ],
    links: [
      {
        label: "Github",
        href: "https://github.com/Tomdieu/NvHospital",
        icon: <GitHubLogoIcon />,
      },
    ],
  },
  {
    title: "A Djangi Website",
    description:
      "This is a web application where people can manage thier Djangi",
    image: "/logo-white.png",
    tags: [
      {
        label: "Javascript",
        icon: <DiJavascript1 size={16} />,
      },
      {
        label: "Html",
        icon: <DiHtml5 size={16} />,
      },
      {
        label: "Python",
        icon: <DiPython size={16} />,
      },
      {
        label: "Django",
        icon: <DiDjango size={16} />,
      },
      {
        label: "Css",
        icon: <DiCss3 size={16} />,
      },
      {
        label: "Bootstrap Css",
      },
    ],
    links: [
      {
        label: "Github",
        href: "https://github.com/Tomdieu/",
        icon: <GitHubLogoIcon />,
      },
    ],
  },
];
