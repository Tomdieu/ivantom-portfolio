import Image from "next/image";
import Link from "next/link";
import React from "react";
import BlurFade from "../magicui/blur-fade";
import { DownloadCloudIcon, MapPin, ArrowRight } from "lucide-react";
import { Icons } from "@/components/icons";
import { contact } from "@/constants/navbar";

const BLUR_FADE_DELAY = 0.04;

const Hero = () => {
  const socialLinks = [
    { href: contact.social.GitHub.url, icon: Icons.github, label: "GitHub" },
    { href: contact.social.LinkedIn.url, icon: Icons.linkedin, label: "LinkedIn" },
    { href: contact.social.X.url, icon: Icons.x, label: "Twitter" },
  ];

  return (
    <section id="hero" className="py-12 sm:py-20 w-full">
      <div className="flex items-center justify-between flex-col-reverse sm:flex-row gap-10 sm:gap-12">
        {/* Text content */}
        <div className="flex flex-col justify-center space-y-6 flex-1">
          {/* Availability badge */}
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-sm text-green-600 dark:text-green-400 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Available for new opportunities
            </div>
          </BlurFade>

          {/* Name & title */}
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground font-medium tracking-widest uppercase">
                Hello, I&apos;m
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                Tomdieu Ivan
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold bg-linear-to-r from-blue-600 via-blue-400 to-indigo-400 inline-block text-transparent bg-clip-text">
                Full Stack Software Engineer
              </h2>
            </div>
          </BlurFade>

          {/* Bio */}
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <p className="max-w-xl text-muted-foreground text-base leading-relaxed">
              Passionate developer with 3+ years building production-grade web & mobile applications.
              Specialized in <span className="text-foreground font-medium">Django</span>,{" "}
              <span className="text-foreground font-medium">React</span>, and{" "}
              <span className="text-foreground font-medium">Next.js</span> — turning ideas into
              scalable digital products.
            </p>
          </BlurFade>

          {/* Location */}
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 shrink-0 text-blue-500" />
              <span>Yaoundé, Cameroon</span>
            </div>
          </BlurFade>

          {/* CTA buttons */}
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/TomdieuTchadieukoIvanGottfried-Software-Engineer-Resume.pdf"
                className="inline-flex h-10 items-center justify-center rounded-lg bg-foreground text-background px-5 text-sm font-medium shadow hover:bg-foreground/90 transition-colors gap-2"
              >
                <DownloadCloudIcon className="h-4 w-4" />
                Download CV
              </Link>
              <Link
                href="#contact"
                className="inline-flex h-10 items-center justify-center rounded-lg border border-input bg-background px-5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors gap-2"
              >
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </BlurFade>

          {/* Social links */}
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </BlurFade>

          {/* Stats */}
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              {[
                { value: "3+", label: "Years Exp." },
                { value: "18+", label: "Projects" },
                { value: "10+", label: "Technologies" },
              ].map(({ value, label }) => (
                <div key={label} className="space-y-1">
                  <p className="text-2xl font-bold text-foreground">{value}</p>
                  <p className="text-xs text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>

        {/* Profile photo */}
        <BlurFade delay={BLUR_FADE_DELAY} className="shrink-0">
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-blue-500/30 to-indigo-600/20 blur-3xl scale-110" />
            <div className="relative size-52 sm:size-60 md:size-72 rounded-2xl overflow-hidden border border-border shadow-2xl ring-1 ring-white/10">
              <Image
                src="/ivantom.jpeg"
                alt="Tomdieu Ivan — Full Stack Software Engineer"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 640px) 208px, (max-width: 768px) 240px, 288px"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-3 -right-3 bg-background border border-border rounded-xl px-3 py-2 shadow-lg">
              <p className="text-xs font-semibold text-foreground">Full Stack</p>
              <p className="text-[10px] text-muted-foreground">Engineer</p>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default Hero;
