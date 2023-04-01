import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.grey[100],
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    padding: theme.spacing(1),
  },
  heading: {
    // fontWeight: "bold",
  },
  input: {
    // backgroundColor: "#fff",
    color: "#fff",
    // "& .MuiInputBase-root": {
    //   color: "#fff",
    // },
    // "& input": {
    //   color: "#fff",
    // },
    // "& .MuiFormLabel-root": {
    //   color: "#fff",
    // },
    // "& .MuiFormLabel-root.Mui-focused": {
    //   color: "#fff",
    // },
  },
  sendButton: {
    marginTop: theme.spacing(2),
    backgroundColor: "black",
    color: "#fff",
    "&:hover": {
      backgroundColor: "black",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));
