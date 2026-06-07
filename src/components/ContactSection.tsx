"use client";

import React from "react";
import BlurFade from "./magicui/blur-fade";
import Link from "next/link";
import { contact } from "@/constants/navbar";
import { Mail, Linkedin, Github, ArrowRight } from "lucide-react";
import { useI18n } from '@/locales/client';

const BLUR_FADE_DELAY = 0.04;

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    color: "from-rose-500 to-red-500",
    shadow: "hover:shadow-rose-500/20 dark:hover:shadow-rose-500/10",
    borderHover: "hover:border-rose-500/30",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "tomdieuivan",
    href: contact.social.LinkedIn.url,
    color: "from-blue-500 to-indigo-500",
    shadow: "hover:shadow-blue-500/20 dark:hover:shadow-blue-500/10",
    borderHover: "hover:border-blue-500/30",
  },
  {
    icon: Github,
    title: "GitHub",
    value: "Tomdieu",
    href: contact.social.GitHub.url,
    color: "from-zinc-700 to-zinc-900 dark:from-zinc-200 dark:to-zinc-400",
    shadow: "hover:shadow-zinc-500/20 dark:hover:shadow-zinc-500/10",
    borderHover: "hover:border-zinc-500/30",
    iconColor: "text-white dark:text-zinc-900",
  },
];

const ContactSection = () => {
  const t = useI18n();
  return (
    <section id="contact" className="py-20 mb-16 relative overflow-hidden rounded-2xl bg-slate-50/50 dark:bg-slate-900/20 border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-sm">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 px-8 sm:px-16 flex flex-col lg:flex-row gap-16 items-center justify-between">
        <div className="space-y-8 max-w-xl flex-1">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
              </span>
              {t('contact.badge')}
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              {t('contact.title').split('\\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br className="hidden sm:block" />
                </React.Fragment>
              ))}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
              {t('contact.description')}
            </p>
          </BlurFade>
        </div>

        <div className="w-full lg:w-auto flex flex-col gap-5 min-w-[320px] sm:min-w-100">
          {contactMethods.map(({ icon: Icon, title, value, href, color, shadow, borderHover, iconColor }, idx) => (
            <BlurFade key={title} delay={BLUR_FADE_DELAY * 17 + idx * 0.06}>
              <Link
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group flex items-center justify-between p-5 rounded-2xl bg-white dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${shadow} ${borderHover} backdrop-blur-md`}
              >
                <div className="flex items-center gap-5">
                  <div className={`flex items-center justify-center w-14 h-14 rounded-xl bg-linear-to-br ${color} shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${iconColor || "text-white"}`} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">{title}</p>
                    <p className="font-semibold text-slate-900 dark:text-white text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {value}
                    </p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors">
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transform group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </Link>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
