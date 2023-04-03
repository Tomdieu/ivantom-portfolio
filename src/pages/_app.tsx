import "@/styles/globals.css";
import "../../public/font.css";
import type { AppProps } from "next/app";

import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@mui/styles";
import Head from "next/head";
import { Box } from "@mui/material";

let theme = createTheme({
  typography: {
    fontFamily: ["Fira Code", "monospace"].join(","),
  },
});
theme = responsiveFontSizes(theme);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          width={"100vw"}
          height={"100vh"}
          sx={{
            // backgroundColor: "rgba(23,60,100,.7)",
            backgroundColor: "#102A46",
            margin: 0,
            padding: 0,
            fontFamily: "Fira Code",
            overflow: "auto",
            "& > *": {
              color: "#fff",
              fontFamily: "Fira Code",
            },
          }}
        >
          <Component {...pageProps} />
        </Box>
      </ThemeProvider>
    </>
  );
}
