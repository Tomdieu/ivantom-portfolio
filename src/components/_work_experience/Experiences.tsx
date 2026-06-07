"use client";

import { experiencesEn, experiencesFr } from "@/constants/experiences";
import { ResumeCard } from "@/components/ResumeCard";
import BlurFade from "../magicui/blur-fade";
import { useI18n, useCurrentLocale } from "@/locales/client";

const BLUR_FADE_DELAY = 0.04;

const Experiences = () => {
  const t = useI18n();
  const locale = useCurrentLocale();
  const experiences = locale === 'fr' ? experiencesFr : experiencesEn;
  return (
    <section id="work-experience" className="py-12">
      <div className="space-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-500">
              {t("experiences.badge")}
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t("experiences.title")}
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
                  period: `${work.start} - ${work.end ?? t("experiences.present")}`,
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
