import { SiReact, SiNodedotjs, SiDocker, SiExpo } from "react-icons/si";
import { type IconType } from "react-icons";

export type ServiceItem = {
  icon: IconType;
  titleKey: string;
  descriptionKey: string;
  technologies: string[];
};

export const servicesData: ServiceItem[] = [
  {
    icon: SiReact,
    titleKey: "services.items.webapp.title",
    descriptionKey: "services.items.webapp.description",
    technologies: ["React", "Next.js", "Django", "Node.js", "TypeScript", "PostgreSQL"],
  },
  {
    icon: SiNodedotjs,
    titleKey: "services.items.api.title",
    descriptionKey: "services.items.api.description",
    technologies: ["REST APIs", "PostgreSQL / PostGIS", "Celery", "RabbitMQ", "Redis"],
  },
  {
    icon: SiDocker,
    titleKey: "services.items.devops.title",
    descriptionKey: "services.items.devops.description",
    technologies: ["Docker Compose", "Nginx", "CI/CD",  "VPS"],
  },
  {
    icon: SiExpo,
    titleKey: "services.items.mobile.title",
    descriptionKey: "services.items.mobile.description",
    technologies: ["React Native", "Expo", "PWA", "Push Notifications", "Offline Support"],
  },
];
