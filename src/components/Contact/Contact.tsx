import React from "react";

import { Box, TextField, Typography, Grid, Button, Paper } from "@mui/material";
import { Send } from "@mui/icons-material";

import { useStyles } from "./styles";
import SectionDivider from "../global/SectionDivider";

type Props = {};

const Contact = (props: Props) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <SectionDivider />
      <Typography
        fontFamily={"Fira Code"}
        gutterBottom
        variant="h3"
        className={classes.heading}
      >
        Contact Me
      </Typography>
      <Box
        component={Paper}
        mt={5}
        // 163D66
        sx={(theme) => ({
          backgroundColor: "#102A46",
        })}
      >
        <Grid container p={0.8} spacing={2} component={"form"}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              required
              fullWidth
              className={classes.input}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type={"email"}
              required
              label="Email"
              fullWidth
              className={classes.input}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              placeholder={"Write your message here!"}
              fullWidth
              multiline
              required
              rows={4}
              className={classes.input}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              size="large"
              type="submit"
              className={classes.sendButton}
              endIcon={<Send />}
            >
              Send Message
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;
