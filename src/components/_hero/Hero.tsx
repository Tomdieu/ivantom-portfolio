import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroImage from "./HeroImage";

type Props = {};

const Hero = (props: Props) => {

  return (
    <section id="hero" className="container mx-auto w-full py-6 sm:py-12 md:py-18">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          
          <HeroImage/>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-stone-900 dark:text-stone-100">
                Hi, I&apos;m Tomdieu Ivan
              </h1>
              <h2 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl text-stone-900">
                Full Stack Developer
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                A passionate Full Stack Software Developer 🚀 having an
                experience of building Web applications with JavaScript /
                Reactjs / Nodejs / Django and some other cool libraries and
                frameworks.
              </p>
            </div>
            <div className="space-x-4">
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
