import { experiences } from "@/constants/experiences";
import { ResumeCard } from "@/components/ResumeCard";
import BlurFade from "../magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

const Experiences = () => {
  return (
    <section id="work-experience" className="py-12">
      <div className="space-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-500">
              Career
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Work Experience
            </h2>
          </div>
        </BlurFade>

        <div className="space-y-1">
          {experiences.map((work, id) => (
            <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
              <ResumeCard
                experience={{
                  logoUrl: work.logoUrl,
                  altText: work.company,
                  title: work.company,
                  subtitle: work.title,
                  href: work.href,
                  badges: work.badges,
                  period: `${work.start} - ${work.end ?? "Present"}`,
                  description: work.description,
                }}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
