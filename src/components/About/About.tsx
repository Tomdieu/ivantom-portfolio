import { Box, Typography } from "@mui/material";
import React from "react";
import SectionDivider from "../global/SectionDivider";

type Props = {};

const About = (props: Props) => {
  return (
    <Box id="about">
      <SectionDivider />
      <Box>
        <Typography variant="h3" fontFamily={'Fira Code'} gutterBottom>
          About Me
        </Typography>
        <Typography
          variant="h5"
          textAlign={"justify"}
          color={"#ccc"}
          fontFamily={"Fira Code"}
          gutterBottom
        >
          Currently student in 3rd year in computer sciences with the ambition
          to become an expert in software development. Self-taught, I have
          extensive experience in programming development with python and
          JavaScript languages and its frameworks (Django, Express Js, React.Js,
          PyQt Framework)
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
