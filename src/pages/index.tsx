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
        <link rel="stylesheet" href="/font.css" />
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
      </Container>
      <Footer />
    </Container>
  );
};

export default index;
