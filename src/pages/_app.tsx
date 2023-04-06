import "@/styles/globals.css";
import "../../public/font.css";
import type { AppProps } from "next/app";

import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@mui/styles";
import { Box } from "@mui/material";
import { NextSeo } from "next-seo";

let theme = createTheme({
  typography: {
    fontFamily: ["Fira Code", "monospace"].join(","),
  },
});
theme = responsiveFontSizes(theme);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Tomdieu Ivan | Portfolio"
        description="I'm a software engineer and fullstack web developer with experience in building beautiful, functional and responsive websites."
        canonical="https://ivantom-portfolio.vercel.app/"
        openGraph={{
          url: "https://ivantom-portfolio.vercel.app/",
          title: "Tomdieu Ivan | Portfolio",
          description:
            "I'm a software engineer and fullstack web developer with experience in building beautiful, functional and responsive websites.",
          images: [
            {
              url: "/logo.png",
              width: 1200,
              height: 630,
              alt: "Tomdieu Ivan Portfolio",
            },
          ],
          site_name: "Tomdieu Ivan (ivantom)",
        }}
        twitter={{
          handle: "@IvanTomdieu",
          site: "@IvanTomdieu",
          cardType: "This is my twitter profile",
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/ninga.png",
          },
          {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/logo.png",
          },
        ]}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Tomdieu Ivan, Portfolio, Web Developer, Software Engineer, Full-Stack, ReactJS, NextJS, NodeJS, ExpressJS, Django",
          },
          {
            name: "author",
            content: "Tomdieu Ivan",
          },
          {
            name: "robots",
            content: "index, follow",
          },
          {
            name: "apple-mobile-web-app-title",
            content: "Tomdieu Ivan Portfolio",
          },
          {
            name: "application-name",
            content: "Tomdieu Ivan Portfolio",
          },
          {
            name: "msapplication-TileColor",
            content: "#00aba9",
          },
          {
            name: "theme-color",
            content: "#ffffff",
          },
          {
            property: "og:type",
            content: "website",
          },
          {
            property: "og:image:alt",
            content: "Tomdieu Ivan Portfolio",
          },
          {
            property: "og:locale",
            content: "en_US",
          },
          {
            property: "og:site_name",
            content: "Tomdieu Ivan (ivantom)",
          },
          {
            property: "fb:app_id",
            content: "1234567890",
          },
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
          },
        ]}
      />
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
