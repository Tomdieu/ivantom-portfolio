import React from "react";
import BlurFade from "./magicui/blur-fade";
import Link from "next/link";
import { contact } from "@/constants/navbar";
import { Mail, Phone, Linkedin, Github, Twitter } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "tomdieuivan",
    href: contact.social.LinkedIn.url,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Tomdieu",
    href: contact.social.GitHub.url,
    color: "text-foreground",
    bg: "bg-foreground/10",
  },
  // {
  //   icon: Phone,
  //   label: "Phone",
  //   value: contact.tel,
  //   href: `tel:${contact.tel}`,
  //   color: "text-emerald-500",
  //   bg: "bg-emerald-500/10",
  // },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 mb-16">
      <div className="space-y-8">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-500">
              Let&apos;s Talk
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get in Touch</h2>
            <p className="text-muted-foreground max-w-xl">
              Have a project in mind or want to collaborate? I&apos;m always open to new opportunities.
              Reach out through any of the channels below.
            </p>
          </div>
        </BlurFade>

        <div className="grid sm:grid-cols-2 gap-3 max-w-2xl">
          {contactMethods.map(({ icon: Icon, label, value, href, color, bg }, idx) => (
            <BlurFade key={label} delay={BLUR_FADE_DELAY * 17 + idx * 0.06}>
              <Link
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-border/80 hover:shadow-md transition-all duration-200 group"
              >
                <div className={`p-2.5 rounded-lg ${bg} shrink-0`}>
                  <Icon className={`h-5 w-5 ${color}`} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="text-sm font-medium truncate group-hover:text-blue-500 transition-colors">
                    {value}
                  </p>
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
