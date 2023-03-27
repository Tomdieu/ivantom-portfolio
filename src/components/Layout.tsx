import React from 'react'
import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'

type Props = {
  children: React.ReactNode
}

const Layout = (props: Props) => {
  const { children } = props
  return (
    <>
      <Head>
        <title>Real Estate</title>
      </Head>
      <Box maxWidth={"1280px"} p={5}>
        <header>
          <Navbar />
        </header>
        <main>
          {children}
        </main>
        <footer>
          Footer
        </footer>
      </Box>
    </>
  )
}

export default Layout