import React, { useState } from "react";

import {
  Box,
  TextField,
  Typography,
  Grid,
  Button,
  Paper,
  Snackbar,
  Alert,
  AlertProps,
  AlertColor,
  SnackbarCloseReason,
} from "@mui/material";
import { Send } from "@mui/icons-material";

import { useStyles } from "./styles";
import SectionDivider from "../global/SectionDivider";

type Props = {};

type Message = {
  name: string;
  email: string;
  message: string;
};

const initialData: Message = {
  name: "",
  email: "",
  message: "",
};

type Status = {
  message: string;
  severity: AlertColor;
};

const Contact = (props: Props) => {
  const classes = useStyles();
  const [message, setMessage] = useState<Message>(initialData);
  const [openSnack, setOpenSnack] = useState(false);
  const [status, setStatus] = useState<Status>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
    setStatus(null);
  };

  const handleSentMessage = (e) => {
    e.preventDefault();
    fetch("/api/send_mail", {
      method: "POST",
      body: JSON.stringify(message),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOpenSnack(true);
        setStatus({
          message: String(data),
          severity: "success",
        });
      })
      .catch((err) => {
        console.log(err);
        setOpenSnack(true);

        setStatus({
          message: err,
          severity: "success",
        });
      });
  };
  return (
    <Box className={classes.root}>
      <SectionDivider />
      <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          severity={status?.severity || "success"}
          onClose={handleClose}
          sx={{ width: "100%" }}
        >
          {status && status.message}
        </Alert>
      </Snackbar>
      <Typography
        fontFamily={"Fira Code"}
        gutterBottom
        variant="h3"
        className={classes.heading}
        color={"#fff"}
        borderColor={"#fff"}
      >
        Contact Me
      </Typography>
      <Box
        component={Paper}
        mt={5}
        // 163D66
        sx={(theme) => ({
          // backgroundColor: "#102A46",
          backgroundColor: "inherit",
        })}
      >
        <Grid
          container
          p={0.8}
          spacing={2}
          component={"form"}
          onSubmit={handleSentMessage}
        >
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              required
              fullWidth
              name="name"
              className={classes.input}
              value={message.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type={"email"}
              required
              label="Email"
              name="email"
              fullWidth
              className={classes.input}
              value={message.email}
              onChange={handleChange}
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
              name="message"
              className={classes.input}
              value={message.message}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              size="large"
              type="submit"
              className={classes.sendButton}
              endIcon={<Send />}
              onClick={handleSentMessage}
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
