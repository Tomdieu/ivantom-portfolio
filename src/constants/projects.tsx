import {
  DiPython,
  DiJavascript1,
  DiReact,
  DiDjango,
  DiDocker,
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
    title: "A Mobile Money Application",
    description: "This is an android app to make money transfer",
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
    image: "next.svg",
  },
  {
    title: "A Chat Application",
    description:
      "This is a complete chat application that include group chats and single chats",
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
    title: "A Real Estate Website",
    description:
      "This is a website where realtor can go an add property which can either be for rent or sale and the a user visiting the website can contact the realtor it the property interest him/her ",
    image: "thirteen.svg",
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
    title: "A Djangi Website",
    description:
      "This is a web application where people can manage thier Djangi",
    image: "logo.png",
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
];
