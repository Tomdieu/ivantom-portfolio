import React from "react";

import { Box, Container, Typography } from "@mui/material";
import SectionDivider from "../global/SectionDivider";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Container>
      {/* <SectionDivider /> */}
      <hr
        style={{
          marginBottom: 20,
          marginTop: 10,
          height: 5,
          backgroundColor: "#fff",
        }}
      />
      <Box>
        <Typography variant={"h5"} fontFamily={"Fira Code"} gutterBottom>
          Name : Tomdieu Ivan
        </Typography>
        <Typography variant={"h5"} fontFamily={"Fira Code"} gutterBottom>
          Email :{" "}
          <a href="mailto:ivan.tomdieu@gmail.com">ivan.tomdieu@gmail.com</a>
        </Typography>
      </Box>
      <Typography textAlign={"center"} gutterBottom>
        Copyright &copy; {new Date().getFullYear()}
      </Typography>
    </Container>
  );
};

export default Footer;
