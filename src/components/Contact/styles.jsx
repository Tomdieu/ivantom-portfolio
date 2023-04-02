import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.grey[100],
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    // padding: theme.spacing(1),
  },
  heading: {
    // fontWeight: "bold",
  },
  input: {
    color: "#fff",
    borderColor: "#fff",

    "& >*": {
      color: "#fff",
    },
    "& .MuiOutlinedInput-input,.MuiFormLabel-root": {
      color: "#fff",
      borderColor: "#fff",
    },
    "& .MuiFormControl-root": {
      color: "#fff",
      borderColor: "#ccc",
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: "#ccc",
    },
    "& > *": {
      borderColor: "#fff",
    },
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
