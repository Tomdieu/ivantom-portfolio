"use client";

import { educationsEn, educationsFr } from "@/constants/educations";
import { ResumeCard } from "@/components/ResumeCard";
import BlurFade from "../magicui/blur-fade";
import { useI18n, useCurrentLocale } from "@/locales/client";

const BLUR_FADE_DELAY = 0.04;

const Educations = () => {
  const t = useI18n();
  const locale = useCurrentLocale();
  const educations = locale === 'fr' ? educationsFr : educationsEn;
  return (
    <section id="education" className="py-12">
      <div className="space-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-500">
              {t("educations.badge")}
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t("educations.title")}
            </h2>
          </div>
        </BlurFade>

        <div className="space-y-1">
          {educations.map((education, id) => (
            <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
              <ResumeCard
                experience={{
                  logoUrl: education.logoUrl,
                  altText: education.school,
                  title: education.school,
                  subtitle: education.degree,
                  href: education.href,
                  badges: undefined,
                  period: `${education.start} - ${education.end}`,
                  description: undefined,
                }}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Educations;
