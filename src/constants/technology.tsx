import { DiDatabase, DiReact } from "react-icons/di";
import { CgDesktop } from "react-icons/cg";

type Tech = {
  icon: React.ReactNode;
  title: string;
  desc1: string;
  desc2: string;
};

export const technologyData: Tech[] = [
  {
    icon: <DiReact />,
    title: "Front-End",
    desc1: "Experience with",
    desc2: "Html, Css, React.js & NextJs",
  },
  {
    icon: <DiDatabase />,
    title: "Backend-End",
    desc1: "Experience with",
    desc2: "Django and Express Js",
  },
  {
    icon: <CgDesktop />,
    title: "Desktop",
    desc1: "Experience with",
    desc2: "PyQt Framework and Electron js",
  },
];
