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
        label:"Android"
      }
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
    description: "A Small project that works with mapbox maps and position stack and geopapify api",
    tags:[
    {label:"Mapbox"},
    {label:"ReactJs"},
    {label:"Position Stack"},
    {label:"Geoapify"},

    ],
    image:"/trix.png",
    links: [
      {
        label: "Preview",
        href: "https://nv-trix.vercel.app/user",
        icon: <Globe size={16} />,
      },
    ],
    dates:"Jul 2022 - Sep 2022"
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
      {
        label: "Preview",
        href: "#",
        icon: <Globe size={16} />,
      },
    ],
  },
  {
    title: "NvHospital",
    description:
      "This is a website where realtor can go an add property which can either be for rent or sale and the a user visiting the website can contact the realtor it the property interest him/her ",
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
        label:"Desktop"
      }
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
        href: "https://github.com/Tomdieu/wikiculture",
        icon: <GitHubLogoIcon />,
      },
      // {
      //   label: "Preview",
      //   href: "#",
      //   icon: <Globe size={16} />,
      // },
    ],
  },
];
