import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

import { useStyles } from "./styles";

type Props = {};

const Hero = (props: Props) => {
  const classes = useStyles();
  return (
    <Grid container pt={5} pb={5} display={"flex"} alignItems={"center"}>
      <Grid item sm={12} md={5} xs={12}>
        <Typography variant="h4" gutterBottom>
          Welcome To <br />
          My Personal Porfolio
        </Typography>
        <Typography
          variant="h5"
          maxWidth={500}
          textOverflow={"wrap"}
          gutterBottom
        >
          I am a Backend Developper and i develope backend web application in
          Django & Nodejs
        </Typography>
        <Button
          sx={(theme) => ({ borderRadius: 5 })}
          variant={"contained"}
          onClick={() => {}}
        >
          Learn More
        </Button>
      </Grid>
      <Grid item md={5} className={classes.rightContainer}>
        <img src={"/logo-white.png"} alt={"Logo"} />
      </Grid>
    </Grid>
  );
};

export default Hero;
