import React from "react";
import BlurFade from "./magicui/blur-fade";
import Link from "next/link";
import { contact } from "@/constants/navbar";

type Props = {};

const BLUR_FADE_DELAY = 0.04;

const ContactSection = (props: Props) => {
  return (
    <section id="contact" className="mb-10 lg:mb-28">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Contact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Want to chat? Just shoot me a dm{" "}
              <Link
                href={contact.social.LinkedIn.url}
                className="text-blue-500 hover:underline"
              >
                with a direct question on linkedin
              </Link>{" "}
              and I&apos;ll respond whenever I can. I will ignore all
              soliciting.
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default ContactSection;
