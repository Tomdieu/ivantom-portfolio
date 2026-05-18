import React from "react";
import {
  DiPhp,
  DiCode,
  DiDjango,
  DiJava,
  DiJavascript1,
  DiPython,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";

type languageType = {
  language: string;
  icon?: React.ReactNode;
};

export const languages: languageType[] = [
  {
    language: "Python",
    icon: <DiPython size={32} />,
  },
  {
    language: "Javascript",
    icon: <DiJavascript1 size={32} />,
  },
  {
    language: "C /C++ Language",
    icon: <DiCode size={32} />,
  },
  {
    language: "PHP",
    icon: <DiPhp size={32} />,
  },
  {
    language: "Java",
    icon: <DiJava size={32} />,
  },
];

export const frameworks: languageType[] = [
  {
    icon: <DiDjango size={32} />,
    language: "Django",
  },
  {
    icon: <DiNodejsSmall size={32} />,
    language: "Express",
  },
  {
    icon: <DiReact size={32} />,
    language: "React",
  },
  {
    language: "PyQt Framework",
  },
];
