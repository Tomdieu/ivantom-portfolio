import Image from 'next/image'
import React from 'react'

type Props = {}

const HeroImage = (props: Props) => {
  return (
    <>
    <Image
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden dark:hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            height="550"
            src="/logo.png"
            width="550"
          />
          <Image
            alt="Hero"
            className="mx-auto aspect-video hidden dark:block overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            height="550"
            src="/logo-white.png"
            width="550"
          />
    </>
  )
}

export default HeroImage