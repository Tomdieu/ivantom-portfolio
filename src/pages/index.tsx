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
import React from "react";

type Props = {};

const index = (props: Props) => {
  return (
    <Container>
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
