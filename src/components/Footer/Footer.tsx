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
        <Typography fontFamily={"Fira Code"} gutterBottom>
          Name : Tomdieu Ivan
        </Typography>
        <Typography fontFamily={"Fira Code"} gutterBottom>
          Email : ivan.tomdieu@gmail.com
        </Typography>
      </Box>
      <Typography textAlign={"center"} gutterBottom>
        Copyright &copy; {new Date().getFullYear()}
      </Typography>
    </Container>
  );
};

export default Footer;
