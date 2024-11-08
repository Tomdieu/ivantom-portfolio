"use client";

import { useScrollTop } from '@/hooks/use-scroll-top'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from '../toggle-theme';

type Props = {
  className?: string
}

const Header = ({className}: Props) => {
  const scrolled = useScrollTop()
  return (
    <header className={cn(className,'flex items-center justify-between w-full py-5 sticky top-0 left-0 right-0 z-[50]',scrolled && "border-b")}>
       <Link className="flex items-center justify-center cursor-pointer" href="#">
       <h1 className='text-xl font-bold'>Tomdieu Ivan</h1>

       </Link>
        <nav className="ml-auto gap-4 sm:gap-6 items-center hidden sm:flex">
            <Link href={"#projects"} className="text-sm font-medium hover:underline underline-offset-4">Projects</Link>
            <Link href={"#skills"} className="text-sm font-medium hover:underline underline-offset-4">Skills</Link>
            <Link href={"#about"} className="text-sm font-medium hover:underline underline-offset-4">About</Link>
          <ModeToggle/>

        </nav>
    </header>
  )
}

export default Header