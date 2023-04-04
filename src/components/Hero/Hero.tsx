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
        [theme.breakpoints.down("md")]: {
          marginTop: theme.spacing(7),
        },
      })}
    >
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
          I am a Backend Developer and i develope backend web application in
          Django & Nodejs
        </Typography>
        <Button
          variant={"contained"}
          href="/ivantom-cv.pdf"
          target="_blank"
          sx={(theme) => ({
            borderRadius: 5,
            backgroundColor: "black",
            "&:hover": { backgroundColor: "black" },
            [theme.breakpoints.down("sm")]: {
              width: "100%",
            },
          })}
        >
          Download Resume
        </Button>
      </Grid>
      <Grid item md={5} sm={0} xs={0} className={classes.rightContainer}>
        <Image
          src={"/logo-white.png"}
          alt={"Logo"}
          width={480}
          height={480}
          style={{ width: "100%", height: "100%" }}
        />
      </Grid>
    </Grid>
  );
};

export default Hero;
