export type ProficiencyLevel = {
  level: "expert" | "proficient" | "familiar";
  label: string;
  technologies: string[];
};

export const proficiencyData: ProficiencyLevel[] = [
  {
    level: "expert",
    label: "Expert",
    technologies: ["Python", "Django", "React", "Next.js", "TypeScript", "PostgreSQL", "Docker"],
  },
  {
    level: "proficient",
    label: "Proficient",
    technologies: ["Redis", "Celery", "RabbitMQ", "REST APIs", "Nginx", "Git"],
  },
  {
    level: "familiar",
    label: "Familiar",
    technologies: ["React Native", "AWS", "GraphQL", "MapLibre/Mapbox"],
  },
];
