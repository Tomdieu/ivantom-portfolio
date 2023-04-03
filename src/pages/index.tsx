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
      </Head>
      <Header />
      <Container>
        <Hero />
        <Projects />
        <Technology />
        <Skills />
        <About />
        {/* <Contact /> */}
        {/* <Timeline />
        <Accomplishment /> */}
        <Footer />
      </Container>
      
    </Container>
  );
};

export default index;
