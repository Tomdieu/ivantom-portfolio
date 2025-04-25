import React from 'react'
import { Badge } from "@/components/ui/badge";
import BlurFade from '../magicui/blur-fade';

const BLUR_FADE_DELAY = 0.04;


type Props = {}

const Skills = (props: Props) => {
    const skills = [
        "React",
        "Next.js",
        "Typescript",
        "Javascript",
        "Node.js",
        "Python",
        "Postgres",
        "Docker",
        "Kubernetes",
        "Java",
        "Django Rest Framework",
        "Ontology Web Language",
        "Prisma",
        "Tailwindcss",
        "React Native",
        "Expo",
        "Sequelize",
        "Websockets",
        "Uml"
    ]
    return (
        <section id="skills" className={"font-poppins py-12"}>
            {/*<SectionDivider/>*/}
            <div className="flex min-h-0 flex-col gap-y-3 mt-8">
                <BlurFade delay={BLUR_FADE_DELAY * 9}>
                    <h2 className="text-xl font-bold">Skills</h2>
                </BlurFade>

                <div className="flex flex-wrap gap-1">
                    {skills.map((skill, id) => (
                        <BlurFade key={id} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>

                            <Badge key={skill}>{skill}</Badge>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills