"use client";

import React from "react";
import BlurFade from "../magicui/blur-fade";
import { useI18n } from "@/locales/client";
import { servicesData } from "@/data/services";

const BLUR_FADE_DELAY = 0.04;

const Services = () => {
  const t = useI18n();
  return (
    <section id="services" className="py-12">
      <div className="space-y-8">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-500">
              {t("services.badge")}
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t("services.title")}
            </h2>
            <p className="text-muted-foreground max-w-xl">
              {t("services.description")}
            </p>
          </div>
        </BlurFade>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service, idx) => {
            const Icon = service.icon;
            return (
              <BlurFade key={service.titleKey} delay={BLUR_FADE_DELAY * 8 + idx * 0.08}>
                <div className="group rounded-xl border border-border bg-card p-5 space-y-4 h-full hover:border-border/80 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-sm">
                      {t(service.titleKey as Parameters<typeof t>[0])}
                    </h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {t(service.descriptionKey as Parameters<typeof t>[0])}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-md bg-secondary text-secondary-foreground px-2 py-0.5 text-[10px] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
