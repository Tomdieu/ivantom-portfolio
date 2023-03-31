import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles((theme) => ({
  link: {
    fontWeight: "bold",
    "&:hover": {
      color: "tomato",
    },
  },
}));
