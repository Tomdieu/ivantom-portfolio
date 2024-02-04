import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='px-5 md:px-0 flex items-center justify-center w-full py-5 absolute top-0 left-0 right-0 z-[50] border-b bg-white'>
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