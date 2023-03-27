import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'

import Layout from '@/components/Layout'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>

    </Head>
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />

      </Layout>
    </ChakraProvider>
  </>
}
