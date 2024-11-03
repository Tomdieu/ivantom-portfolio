import { experiences } from "@/constants/experiences";
import { ResumeCard } from "@/components/ResumeCard";
import BlurFade from "../magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;


const Experiences = () => {
    return (
        <section id="work-experience">
            <div className="flex min-h-0 flex-col gap-y-3">
                <BlurFade delay={BLUR_FADE_DELAY * 5}>
                    <h2 className="text-xl font-bold">Work Experience</h2>
                </BlurFade>

                {experiences.map((work, id) => (
                    <BlurFade
                        key={work.company}
                        delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                    >
                        <ResumeCard
                            key={work.company}
                            experience={{
                                logoUrl: work.logoUrl,
                                altText: work.company,
                                title: work.company,
                                subtitle: work.title,
                                href: work.href,
                                badges: work.badges,
                                period: `${work.start} - ${work.end ?? "Present"}`,
                                description: work.description
                            }}
                        />
                    </BlurFade>
                ))}
            </div>
        </section>
    )
}

export default Experiences;