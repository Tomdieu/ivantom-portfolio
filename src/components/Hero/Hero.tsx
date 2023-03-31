import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

import { useStyles } from "./styles";

type Props = {};

const Hero = (props: Props) => {
  const classes = useStyles();
  return (
    <Grid
      container
      pt={5}
      pb={5}
      display={"flex"}
      alignItems={"center"}
      sx={(theme) => ({
        [theme.breakpoints.down("sm")]: {
          marginTop: theme.spacing(5),
        },
      })}
    >
      <Grid item sm={12} md={5} xs={12}>
        <Typography variant="h4" fontFamily={"Fira Code"} gutterBottom>
          Welcome To <br />
          My Personal Porfolio
        </Typography>
        <Typography
          variant="h5"
          maxWidth={500}
          textOverflow={"wrap"}
          gutterBottom
          fontFamily={"Fira Code"}
        >
          I am a Backend Developper and i develope backend web application in
          Django & Nodejs
        </Typography>
        <Button
          variant={"contained"}
          sx={(theme) => ({
            borderRadius: 5,
            backgroundColor: "black",
            "&:hover": { backgroundColor: "black" },
            [theme.breakpoints.down("sm")]: {
              width: "100%",
            },
          })}
        >
          Learn More
        </Button>
      </Grid>
      <Grid item md={5} sm={0} xs={0} className={classes.rightContainer}>
        <img src={"/logo-white.png"} alt={"Logo"} />
      </Grid>
    </Grid>
  );
};

export default Hero;
