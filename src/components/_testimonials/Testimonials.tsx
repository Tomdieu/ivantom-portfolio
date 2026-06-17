"use client";

import React from "react";
import BlurFade from "../magicui/blur-fade";
import { useI18n } from "@/locales/client";
import { testimonialsData } from "@/data/testimonials";
import { Quote } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const Testimonials = () => {
  const t = useI18n();
  return (
    <section id="testimonials" className="py-12">
      <div className="space-y-8">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-500">
              {t("testimonials.badge")}
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t("testimonials.title")}
            </h2>
            <p className="text-muted-foreground max-w-xl">
              {t("testimonials.description")}
            </p>
          </div>
        </BlurFade>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonialsData.map((item, idx) => (
            <BlurFade key={item.id} delay={BLUR_FADE_DELAY * 14 + idx * 0.06}>
              <div className="group rounded-xl border border-border bg-card p-6 space-y-4 h-full hover:border-border/80 hover:shadow-md transition-all duration-300 relative">
                <Quote className="w-6 h-6 text-blue-500/20 absolute top-4 right-4" />
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  &ldquo;{t(item.quoteKey as Parameters<typeof t>[0])}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-border">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold">
                    {item.avatarInitials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.role}, {item.company}</p>
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
