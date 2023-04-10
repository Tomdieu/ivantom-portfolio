import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles((theme) => ({
  link: {
    fontWeight: "bold",
    "&:hover": {
      color: "tomato",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: ".7rem",
    },
  },
  linkIcon: {
    borderRadius: "50%",
    "&: >*": {
      borderRadius: "50%",
    },
    backgroundColor: "transparent",
    "&:hover": {
      boxShadow: "0px 0px 3px 5px #fff",
    },
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.7rem",
    },
  },
}));
