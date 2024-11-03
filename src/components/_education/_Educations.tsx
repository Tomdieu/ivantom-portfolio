import { experiences } from "@/constants/experiences";
import { ResumeCard } from "@/components/ResumeCard";
import { educations } from "@/constants/educations";
import BlurFade from "../magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

const Educations = () => {
    return (
        <section id="work-experience">
            <div className="flex min-h-0 flex-col gap-y-3">
                <BlurFade delay={BLUR_FADE_DELAY * 7}>
                    <h2 className="text-xl font-bold">Education</h2>
                </BlurFade>

                {educations.map((education, id) => (
                    <BlurFade
                        key={education.school}
                        delay={BLUR_FADE_DELAY * 8 + id * 0.05}
                    >
                        <ResumeCard
                            key={education.school} experience={{
                                logoUrl: education.logoUrl,
                                altText: education.school,
                                title: education.school,
                                subtitle: education.degree,
                                href: education.href,
                                badges: undefined,
                                period: `${education.start} - ${education.end}`,
                                description: undefined
                            }}
                        />
                    </BlurFade>
                ))}
            </div>
        </section>
    )
}

export default Educations;