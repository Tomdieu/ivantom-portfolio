import {
  Accomplishment,
  Footer,
  Header,
  Hero,
  Projects,
  Skills,
  Technology,
  Timeline,
  Contact,
} from "@/components";
import About from "@/components/About/About";
import { Container } from "@mui/material";
import Head from "next/head";
import React from "react";

type Props = {};

const index = (props: Props) => {
  return (
    <Container>
      <Head>
        <title>Tomdieu | Portfolio</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />

        <link rel="icon" href="/ninga.png" />
        <meta property="og:title" content="Tomdieu Ivan" />
        <meta property="og:image" content="/logo.png" />
        <meta
          property="og:description"
          content="Tomdieu Ivan(ivantom) portfolio website"
        />
        <meta property="og:url" content="https://ivantom-porfolio.vercel.app" />
      </Head>
      <Header />
      <Container>
        <Hero />
        <Projects />
        <Technology />
        <Skills />
        <About />
        <Contact />
        {/* <Timeline />
        <Accomplishment /> */}
        <Footer />
      </Container>
    </Container>
  );
};

export default index;
