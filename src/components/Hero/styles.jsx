import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  leftContainer: {},
  rightContainer: {
    display: "block",

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));
