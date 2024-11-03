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

export type ProjectType = {
  title: string;
  description: string;
  image?: string;
  source?: string;
  visit?: string;
  tags?: TagType[];
  id?: number;
  dates?:string;
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
        label:"NextJs"
      },
      {
        label:"Minikube"
      },
      {
        label:"Kubernetes"
      },
      {
        label:"Microiservices"
      }
    ],
    image: "/trixwallet.png",
    dates:"Jan 2024 - Jun 2024"
  },
  {
    title: "Url Shortener",
    description:
      "A web app to shorten long urls",
    source: "https://github.com/Tomdieu/wikiculture",
    tags: [
      {
        label: "Javascript",
        icon: <DiJavascript1 size={16} />,
      },
      
      {
        label:"NextJs"
      },
      {
        label:"Prisma"
      },
      {
        label:"React Query"
      }
    ],
    image: "/trixwallet.png",
    dates:"Sep 2023 - Dec 2023"
  },
  {
    title: "annonce-ventes-voiture",
    description:
      "un site d'annonce des ventes des voiture",
    source: "https://github.com/Tomdieu/wikiculture",
    tags: [
      {
        label: "React Js",
      },
      
      {
        label:"ViteJs"
      },
      {
        label:"Django Rest framework"
      }
    ],
    image: "/trixwallet.png",
    dates:"Jul 2023 - Aug 2023"
  },
  {
    title: "AgroHelp",
    description:
      "un site d'annonce des ventes des voiture",
    source: "https://github.com/Tomdieu/wikiculture",
    tags: [
      {
        label: "Microiservices",
      },
      
      {
        label:"Django"
      },
      {
        label:"Django Rest framework"
      },
      {
        label:"Fast api"
      },
      {label:"ExpressJs"}
    ],
    image: "/trixwallet.png",
    dates:"Apr 2023 - Jul 2023"
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
    ],
    image: "/trixwallet.png",
    dates:"Oct 2022 - Jan 2023"
  },
  {
    source: "https://github.com/Tomdieu/NvChat",
    title: "Nv Chat Application",
    image: "/nvchat.svg",
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
  },
  {
    source: "https://github.com",
    title: "NvHospital",
    description:
      "This is a website where realtor can go an add property which can either be for rent or sale and the a user visiting the website can contact the realtor it the property interest him/her ",
    image: "/logo.png",
    tags: [
      {
        label: "PyQt5",
        icon: <DiReact size={16} />,
      },
      {
        label: "Python",
        icon: <DiPython size={16} />,
      },
    ],
  },
  {
    source: "https://github.com",

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
        label:"Bootstrap Css"
      }
    ],
  },
];
