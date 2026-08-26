"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLinkIcon, CheckCircle2 } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { useCurrentLocale } from "@/locales/client";
import { classconnectContentEn, classconnectContentFr } from "@/data/classconnect-case-study";
import { projectsData, getProjectSlug } from "@/constants/projects";
import BlurFade from "../magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

export default function ClassConnectCaseStudy() {
  const locale = useCurrentLocale();
  const content = locale === "fr" ? classconnectContentFr : classconnectContentEn;

  const projectIndex = projectsData.findIndex((p) => getProjectSlug(p) === "classconnect");
  const prevProject = projectIndex > 0 ? getProjectSlug(projectsData[projectIndex - 1]) : undefined;
  const nextProject =
    projectIndex < projectsData.length - 1
      ? getProjectSlug(projectsData[projectIndex + 1])
      : undefined;

  const isFr = locale === "fr";

  return (
    <article className="space-y-16 sm:space-y-20">
      {/* ===== HERO ===== */}
      <section className="space-y-6">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="flex flex-wrap gap-2 mb-4">
            {content.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md border border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400 px-2.5 py-0.5 text-[11px] font-medium"
              >
                {tag}
              </span>
            ))}
            <span className="inline-flex items-center gap-1.5 rounded-md border border-green-500/20 bg-green-500/10 text-green-600 dark:text-green-400 px-2.5 py-0.5 text-[11px] font-medium">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
              </span>
              {content.statusBadge}
            </span>
          </div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {content.projectName}
            </h1>
            <p className="text-base text-muted-foreground sm:text-lg max-w-2xl">
              {content.tagline}
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="flex flex-wrap gap-3">
            <Link
              href={content.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-foreground text-background px-5 text-sm font-medium shadow hover:bg-foreground/90 transition-colors gap-2"
            >
              <ExternalLinkIcon className="h-4 w-4" />
              {isFr ? "Visiter le site →" : "Visit Live Site →"}
            </Link>
            <Link
              href={content.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-lg border border-input bg-background px-5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors gap-2"
            >
              <GitHubLogoIcon className="h-4 w-4" />
              GitHub
            </Link>
            <Link
              href="/#contact"
              className="inline-flex h-10 items-center justify-center rounded-lg border border-input bg-background px-5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors gap-2"
            >
              {isFr ? "Construire avec moi ?" : "Want to build something with impact?"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground">
            <div>
              <span className="font-semibold text-foreground">{isFr ? "Mon Rôle" : "My Role"}:</span> {content.role}
            </div>
            <div>
              <span className="font-semibold text-foreground">{isFr ? "Organisation" : "Organisation"}:</span> {content.organisation}
            </div>
          </div>
        </BlurFade>
      </section>

      {/* Hero image */}
      {content.heroImage && (
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden border border-border">
            <Image
              src={content.heroImage}
              alt="ClassConnect"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
              priority
            />
          </div>
        </BlurFade>
      )}

      {/* ===== THE PROBLEM ===== */}
      <section className="space-y-8">
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-500">
              {isFr ? "Chapitre I" : "Chapter I"}
            </span>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {isFr ? "Le Problème" : "The Problem"}
            </h2>
          </div>
        </BlurFade>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.problemStats.map((stat, i) => (
            <BlurFade key={stat.label} delay={BLUR_FADE_DELAY * 7 + i * 0.06}>
              <div className="rounded-xl border border-border bg-card p-5 space-y-2 h-full hover:border-border/80 hover:shadow-sm transition-all">
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">{stat.detail}</p>
              </div>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={BLUR_FADE_DELAY * 8}>
          <div className="space-y-4 max-w-3xl">
            {content.problemNarrative.map((paragraph, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </BlurFade>
      </section>

      {/* ===== SOLUTION ===== */}
      <section className="space-y-8">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-500">
              {isFr ? "Chapitre II" : "Chapter II"}
            </span>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {isFr ? "La Solution — Un Écosystème d'Apprentissage Unifié" : "The Solution — A Unified Learning Ecosystem"}
            </h2>
          </div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 10}>
          <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 dark:bg-blue-500/10 p-6 sm:p-8">
            <p className="text-base text-foreground/90 leading-relaxed sm:text-lg italic">
              {content.solutionNarrative}
            </p>
          </div>
        </BlurFade>

        <div className="space-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {isFr ? "Comment ça marche" : "How it works"}
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
          </BlurFade>

          <div className="space-y-0">
            {content.timeline.map((step, i) => (
              <BlurFade key={step.step} delay={BLUR_FADE_DELAY * 12 + i * 0.04}>
                <div className="relative flex gap-5 pb-8 last:pb-0 group">
                  {i < content.timeline.length - 1 && (
                    <div className="absolute left-[15px] top-8 bottom-0 w-px bg-border group-last:hidden" />
                  )}
                  <div className="relative flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border-2 border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold">
                    {step.step}
                  </div>
                  <div className="flex-1 min-w-0 pt-1">
                    <h4 className="text-sm font-semibold">{step.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TECHNICAL CONTRIBUTION ===== */}
      <section className="space-y-8">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-500">
              {isFr ? "Chapitre III" : "Chapter III"}
            </span>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {isFr ? "Ma Contribution Technique" : "My Technical Contribution"}
            </h2>
            <p className="text-muted-foreground max-w-xl text-sm">
              {isFr ? "Architecte Full-Stack Principal & Fondateur" : "Lead Full-Stack Engineer & Platform Architect"}
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              {isFr ? "Stack Technique" : "Technology Stack"}
            </h3>
            <div className="flex flex-wrap gap-2">
              {content.techStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1 rounded-md border border-border bg-secondary text-secondary-foreground px-2.5 py-1 text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </BlurFade>

        <div className="space-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              {isFr ? "Défis Techniques Clés" : "Key Engineering Challenges"}
            </h3>
          </BlurFade>
          <div className="grid gap-4 sm:grid-cols-2">
            {content.challenges.map((challenge, i) => (
              <BlurFade key={challenge.title} delay={BLUR_FADE_DELAY * 16 + i * 0.05}>
                <div className="rounded-xl border border-border bg-card p-5 space-y-2 h-full hover:border-border/80 hover:shadow-sm transition-all">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-blue-500 shrink-0" />
                    <h4 className="text-sm font-semibold">{challenge.title}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PLATFORM FEATURES ===== */}
      <section className="space-y-8">
        <BlurFade delay={BLUR_FADE_DELAY * 17}>
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-500">
              {isFr ? "Chapitre IV" : "Chapter IV"}
            </span>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {isFr ? "Fonctionnalités de la Plateforme" : "Platform Features"}
            </h2>
          </div>
        </BlurFade>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.features.map((feature, i) => (
            <BlurFade key={feature.title} delay={BLUR_FADE_DELAY * 18 + i * 0.04}>
              <div className="rounded-xl border border-border bg-card p-5 space-y-2 h-full hover:border-border/80 hover:shadow-sm transition-all hover:-translate-y-0.5">
                <h4 className="text-sm font-semibold">{feature.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* ===== SYSTEM ACTORS ===== */}
      <section className="space-y-8">
        <BlurFade delay={BLUR_FADE_DELAY * 19}>
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-500">
              {isFr ? "Chapitre V" : "Chapter V"}
            </span>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {isFr ? "Acteurs du Système" : "System Actors"}
            </h2>
          </div>
        </BlurFade>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.actors.map((actor, i) => (
            <BlurFade key={actor.role} delay={BLUR_FADE_DELAY * 20 + i * 0.04}>
              <div className="rounded-xl border border-border bg-card p-5 space-y-2 h-full hover:border-border/80 hover:shadow-sm transition-all">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-bold">
                  {actor.role.charAt(0)}
                </div>
                <h4 className="text-sm font-semibold">{actor.role}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{actor.description}</p>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* ===== GOALS & METRICS ===== */}
      <section className="space-y-8">
        <BlurFade delay={BLUR_FADE_DELAY * 21}>
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-500">
              {isFr ? "Chapitre VI" : "Chapter VI"}
            </span>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {isFr ? "Objectifs & Indicateurs" : "Project Goals & Indicators"}
            </h2>
          </div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 22}>
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="text-left px-5 py-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground">
                    {isFr ? "Objectif" : "Goal"}
                  </th>
                  <th className="text-left px-5 py-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground">
                    {isFr ? "Indicateur" : "Indicator"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {content.metrics.map((metric) => (
                  <tr key={metric.goal} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="px-5 py-3.5 text-foreground font-medium">{metric.goal}</td>
                    <td className="px-5 py-3.5 text-muted-foreground">{metric.indicator}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </BlurFade>
      </section>

      {/* ===== LESSONS LEARNED ===== */}
      <section className="space-y-8">
        <BlurFade delay={BLUR_FADE_DELAY * 25}>
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-500">
              {isFr ? "Chapitre VII" : "Chapter VII"}
            </span>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {isFr ? "Leçons Apprises" : "Lessons Learned"}
            </h2>
          </div>
        </BlurFade>

        <div className="space-y-4">
          {content.lessons.map((lesson, i) => (
            <BlurFade key={i} delay={BLUR_FADE_DELAY * 26 + i * 0.05}>
              <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 hover:border-border/80 hover:shadow-sm transition-all">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed">{lesson}</p>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* ===== BOTTOM NAV + CTA ===== */}
      <section className="space-y-8 pt-4">
        <BlurFade delay={BLUR_FADE_DELAY * 27}>
          <div className="rounded-xl border border-blue-500/20 bg-linear-to-br from-blue-500/5 to-indigo-500/5 dark:from-blue-500/10 dark:to-indigo-500/10 p-8 text-center space-y-4">
            <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
              {isFr ? "Construire la prochaine plateforme éducative ?" : "Building the next learning platform?"}
            </h3>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              {isFr
                ? "Discutons de votre vision — de l'idée au déploiement à grande échelle."
                : "Let's discuss your vision — from idea to scale."}
            </p>
            <Link
              href="/#contact"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-foreground text-background px-6 text-sm font-medium shadow hover:bg-foreground/90 transition-colors gap-2"
            >
              {isFr ? "Parlons-en" : "Let's Talk"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </BlurFade>

        <div className="flex items-center justify-between pt-6 border-t border-border">
          <div>
            {prevProject && (
              <Link
                href={`/projects/${prevProject}`}
                className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                {isFr ? "Projet Précédent" : "Previous Project"}
              </Link>
            )}
          </div>
          <div>
            {nextProject && (
              <Link
                href={`/projects/${nextProject}`}
                className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {isFr ? "Projet Suivant" : "Next Project"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            )}
          </div>
        </div>
      </section>
    </article>
  );
}
