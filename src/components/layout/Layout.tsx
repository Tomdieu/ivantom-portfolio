import React from 'react'
import Head from 'next/head'
import { Html } from 'next/document'

type Props = {
    children:React.ReactNode
}

const Layout = (props: Props) => {
    const {children} = props
  return (
    <Html>
      <Head>
        <title>Real Estate</title>
      </Head>
      <body>
      {children}
      </body>
    </Html>
  )
}

export default Layout