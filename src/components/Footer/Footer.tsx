import React from "react";

import { Box, Typography } from "@mui/material";
import SectionDivider from "../global/SectionDivider";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Box>
      <SectionDivider />
      <Box>
        <Typography fontFamily={"Fira Code"}>Footer</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
