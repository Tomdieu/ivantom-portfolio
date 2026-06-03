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
};

export const projectsData: ProjectType[] = [
  {
    title: "JoyFund",
    description:
      "A mobile-first healthcare crowdfunding and voucher platform targeting Cameroon, built for Durable Impact. JoyFund enables donors to fund medical campaigns with full transparency through a voucher-based escrow mechanism, proportional surplus refunds, and real-time notifications. Features six distinct portals (Donor, Contributor, Social Worker, Hospital, Hospital Admin, System Admin) with MTN MoMo and Orange Money payment integration via Campay Pay.",
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
    image: "/joyfund-logo.jpeg",
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
    title: "Durable impact academy",
    description: "Website of the Durable impact academy",
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
      "Trixly is an all-in-one platform for freelancers and teams to track time, manage projects, write daily reports, and export client-ready insights — without the bloat.",
    tags: [
      {
        label: "NextJs",
      },
      {
        label: "Prisma",
      },
    ],
    image: "/time.png",
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
    title: "FigmaToReact",
    description:
      "Convert Figma designs to React apps automatically using MDA (Model Driven Architecture) and formal model transformations. An innovative tool that bridges the gap between design and development by automatically generating React components from Figma designs.",
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
      "Revolution Travel & Services is a travel agency that specializes in booking and selling airline tickets, providing comprehensive travel solutions to clients.",
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
      "An electronic recruitment platform for managing job applications, interviews, and the hiring process in Cameroon.",
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
      "ClassConnect is an educational platform that connects students and teachers with integrated notification systems.",
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
        label: "NextJs",
      },
    ],
    image: "/classconnect.png",
    dates: "Jan 2025 - Apr 2025",
    links: [
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
      "OngolaPhone is a platform for mobile device services and solutions developed during my time at Coding Industry Sarl. The project features comprehensive mobile phone management and service solutions.",
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
    image: "/ongolaphone.svg",
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
    image: "/wikiculture.jpeg",
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
    image: "/trix.png",
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
