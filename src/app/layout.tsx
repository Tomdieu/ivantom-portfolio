import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const poppins = localFont({
  src: [
    {
      path: "../../public/fonts/Poppins/Poppins-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Poppins/Poppins-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/Poppins/Poppins-Black.ttf",
      weight: "800",
    },
  ],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Tomdieu Ivan | Portfolio",
  keywords:"Tomdieu Ivan, Portfolio, Web Developer, Software Engineer, Full-Stack, ReactJS, NextJS, NodeJS, ExpressJS, Django",
  description:
    "I'm a software engineer and fullstack web developer with experience in building beautiful, functional and responsive websites.",
  openGraph: {
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
    type: "website",
  },
  twitter: {
    site: "@IvanTomdieu",
    description:
      "I'm a software engineer and fullstack web developer with experience in building beautiful, functional and responsive websites.",
    title: "Tomdieu Ivan | Portfolio",
    creator: "Tomdieu Ivan",
    card: "summary_large_image",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Tomdieu Ivan Portfolio",
      },
    ],
  },
  creator: "Tomdieu Ivan",
  authors: [{ name: "Tomdieu Ivan", url: "https://github.com/tomdieu" }],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://ivantom-portfolio.vercel.app/"),
  icons: [
    {
      url: "/ninga.png",
      rel: "icon",
      type: "image/png",
    },
    {
      url: "/logo.png",
      rel: "apple-touch-icon",
      sizes: "180x180",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable}`}
      suppressHydrationWarning
      translate={"no"}
    >
      <body className="">{children}</body>
    </html>
  );
}
