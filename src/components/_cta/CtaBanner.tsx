"use client";

import React from "react";
import BlurFade from "../magicui/blur-fade";
import Link from "next/link";
import { useI18n, useCurrentLocale } from "@/locales/client";
import { DownloadCloudIcon, ArrowRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const CtaBanner = () => {
  const t = useI18n();
  const locale = useCurrentLocale();

  return (
    <section id="cta" className="py-12">
      <BlurFade delay={BLUR_FADE_DELAY * 15}>
        <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-blue-600/10 via-indigo-600/10 to-purple-600/10 dark:from-blue-600/20 dark:via-indigo-600/20 dark:to-purple-600/20 border border-blue-500/20 dark:border-blue-500/30 p-8 sm:p-12">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-sm text-green-600 dark:text-green-400 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              {t("cta.title")}
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight max-w-lg">
              {t("cta.title")}
            </h2>

            <p className="text-muted-foreground text-sm sm:text-base max-w-md">
              {t("cta.subtext")}
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href={locale === "fr" ? "/TOMDIEU-TCHADIEUKO-french.pdf" : "/TOMDIEU-TCHADIEUKO-english.pdf"}
                className="inline-flex h-10 items-center justify-center rounded-lg bg-foreground text-background px-5 text-sm font-medium shadow hover:bg-foreground/90 transition-colors gap-2"
              >
                <DownloadCloudIcon className="h-4 w-4" />
                {t("cta.viewCV")}
              </Link>
              <Link
                href="#contact"
                className="inline-flex h-10 items-center justify-center rounded-lg border border-input bg-background px-5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors gap-2"
              >
                {t("cta.contactMe")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </BlurFade>
    </section>
  );
};

export default CtaBanner;
