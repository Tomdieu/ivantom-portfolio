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
  icon: React.ReactNode;
  label: string;
};

type ProjectType = {
  title: string;
  description: string;
  image?: string;
  source?: string;
  visit?: string;
  tags?: TagType[];
  id?: number;
};

export const projectsData: ProjectType[] = [
  {
    title: "Momo app Clone",
    description: "This is a Mobile money android app to make money transfer,withdraw and top up transactions.This app have translation feature which means can change language from french to english",
    source: "https://github.com/Tomdieu/momo-app-clone",
    tags: [
      {
        label: "Javascript",
        icon: <DiJavascript1 size={32} />,
      },
      {
        label: "Python",
        icon: <DiPython size={32} />,
      },
      {
        label: "React Native",
        icon: <DiReact size={32} />,
      },
      {
        label: "Django",
        icon: <DiDjango size={32} />,
      },
      {
        label: "Django Rest Framework",
        icon: <DiDjango size={32} />,
      },
      {
        label: "Docker",
        icon: <DiDocker size={32} />,
      },
    ],
    image: "/momo-app-icon.jpg",
  },
  {
    source: "https://github.com/Tomdieu/NvChat",
    title: "Nv Chat Application",
    image: "/nv-chat-icon.png",
    description:
      "NvChat is a complete chat application that include group chats and single chats and also have a post section where people can like and comment posts",
    tags: [
      {
        label: "TypeScript",
        icon: <DiJavascript1 size={32} />,
      },
      {
        label: "Python",
        icon: <DiPython size={32} />,
      },
      {
        label: "Django",
        icon: <DiDjango size={32} />,
      },
      {
        label: "Django Rest Framework",
        icon: <DiDjango size={32} />,
      },
    ],
  },
  {
    source: "https://github.com",
    title: "A Real Estate Website",
    description:
      "This is a website where realtor can go an add property which can either be for rent or sale and the a user visiting the website can contact the realtor it the property interest him/her ",
    image: "/logo.png",
    tags: [
      {
        label: "TypeScript",
        icon: <DiJavascript1 size={32} />,
      },
      {
        label: "NextJs",
        icon: <DiReact size={32} />,
      },
      {
        label: "Python",
        icon: <DiPython size={32} />,
      },
      {
        label: "Django",
        icon: <DiDjango size={32} />,
      },
      {
        label: "Django Rest Framework",
        icon: <DiDjango size={32} />,
      },
    ],
  },
  {
    source: "https://github.com",

    title: "A Djangi Website",
    description:
      "This is a web application where people can manage thier Djangi",
    image: "/logo.png",
    tags: [
      {
        label: "Javascript",
        icon: <DiJavascript1 size={32} />,
      },
      {
        label: "Html",
        icon: <DiHtml5 size={32} />,
      },
      {
        label: "Python",
        icon: <DiPython size={32} />,
      },
      {
        label: "Django",
        icon: <DiDjango size={32} />,
      },
      {
        label: "Css",
        icon: <DiCss3 size={32} />,
      },
    ],
  },
];
