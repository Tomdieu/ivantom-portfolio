import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  leftContainer: {},
  rightContainer: {
    display: "block",

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  btn: {
    borderRadius: 5,
    backgroundColor: "black",
    "&:hover": { backgroundColor: "black" },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));
