import Image from "next/image";
import React from "react";
import BlurFade from "../magicui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type Props = {};

const BLUR_FADE_DELAY = 0.04;


const HeroImage = (props: Props) => {
  return (
    <>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <Avatar className="size-56 border dark:hidden">
          <AvatarImage alt={'Tomdieu Ivan'} src={'/logo.png'} />
          <AvatarFallback>{'IT'}</AvatarFallback>
        </Avatar>
        <Avatar className="size-56 border hidden dark:block">
          <AvatarImage alt={'Tomdieu Ivan'} src={'/logo-white.png'} />
          <AvatarFallback>{'IT'}</AvatarFallback>
        </Avatar>
        {/* <Image
          alt="Hero"
          className="mx-auto aspect-video overflow-hidden dark:hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
          height="450"
          src="/logo.png"
          width="450"
        />
        <Image
          alt="Hero"
          className="mx-auto aspect-video hidden dark:block overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
          height="450"
          src="/logo-white.png"
          width="450"
        /> */}
      </BlurFade>
    </>
  );
};

export default HeroImage;
