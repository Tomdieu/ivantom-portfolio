import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  languagesContainer: {},
  language: {
    display: "flex",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(1),
    width: "fit-content",
    padding: theme.spacing(1),
    cursor: "pointer",
    "& ::selection": {
      background: "transparent",
    },
    "&:hover": {
      backgroundColor: "rgba(255,255,255,.4)",
      backdropFilter: "blur(4px)",
    },
  },
}));
