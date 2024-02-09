"use client";

import { useScrollTop } from '@/hooks/use-scroll-top'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  const scrolled = useScrollTop()
  return (
    <header className={cn('px-5 md:px-0 flex items-center justify-center w-full py-5 sticky top-0 z-[50] bg-white',scrolled && "  ")}>
       <Link className="flex items-center justify-center cursor-pointer" href="#">
       <h1 className='text-xl font-bold'>Tomdieu Ivan</h1>

       </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href={"#projects"} className="text-sm font-medium hover:underline underline-offset-4">Projects</Link>
            <Link href={"#technology"} className="text-sm font-medium hover:underline underline-offset-4">Technology</Link>
            <Link href={"#about"} className="text-sm font-medium hover:underline underline-offset-4">About</Link>
        </nav>
    </header>
  )
}

export default Header