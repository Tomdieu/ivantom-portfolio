import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/navbar";
import { Analytics } from "@vercel/analytics/react"

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
  title: "TOMDIEU TCHADIEUKO IVAN GOTTFRIED - Full Stack Software Developer",
  keywords: "Tomdieu Ivan,ivantom, TOMDIEU TCHADIEUKO IVAN GOTTFRIED,tomdieu tchadieuko,ivan gottfied, Full Stack Developer, Software Engineer, Web Developer, ReactJS, NextJS, NodeJS, Django, Django REST Framework, Docker, Kubernetes, ExpressJS, Portfolio, JavaScript Developer, Python Developer, Remote Developer, Fullstack, Cloud Computing, API Development, Frontend, Backend, Web Applications, Software Engineering, Full Stack Web Developer, TailwindCSS, TypeScript",
  description: "Versatile Full Stack Software Developer with expertise in Django, Django REST Framework, Next.js, Express.js, Docker, Kubernetes, and React Native. Passionate about building robust web applications and delivering top-notch solutions using JavaScript, React, Node.js, and other cutting-edge frameworks and technologies.",
  openGraph: {
    url: "https://ivantomdieu.vercel.app/",
    title: "TOMDIEU TCHADIEUKO IVAN GOTTFRIED - Full Stack Software Developer",
    description: "I'm Tomdieu Tcahdieuko Ivan, a passionate Full Stack Software Developer with expertise in Django, Django REST Framework, Next.js, Express.js, Docker, Kubernetes, and React Native. With years of experience in building beautiful, functional, and responsive websites, I specialize in delivering professional-grade software solutions.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Tomdieu Ivan Portfolio",
      },
    ],
    type: "website",
    siteName:"Tomdieu Ivan Portfolio",
  },
  twitter: {
    site: "@IvanTomdieu",
    description: "Experienced Full Stack Developer specializing in Django, Next.js, and Docker. Visit my portfolio to learn more about my projects and expertise in software engineering.",
    title: "TOMDIEU TCHADIEUKO IVAN GOTTFRIED - Full Stack Developer",
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
  metadataBase: new URL("https://ivantomdieu.vercel.app/"),
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "TOMDIEU TCHADIEUKO IVAN GOTTFRIED",
              "alternateName": "Tomdieu Ivan",
              "jobTitle": "Software Developer",
              "url": "https://ivantomdieu.vercel.app/",
              "sameAs": [
                "https://www.linkedin.com/in/tomdieuivan/",
                "https://github.com/Tomdieu"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Work",
                "email": "mailto:ivan.tomdieu@gmail.com",
                "telephone": "+237650039773"
              },
              "knowsAbout": [
                "React",
                "Next.js",
                "Typescript",
                "Javascript",
                "Node.js",
                "Python",
                "Postgres",
                "Docker",
                "Kubernetes",
                "Java",
                "Django Rest Framework",
                "Ontology Web Language",
                "Prisma",
                "Tailwindcss",
                "React Native",
                "Expo",
                "Sequelize",
                "Websockets",
                "Uml"
              ],
              "alumniOf": [
                {
                  "@type": "EducationalOrganization",
                  "name": "University of Yaounde 1",
                  "url": "https://uy1.uninet.cm/",
                  "degree": "Master 1",
                  "logoUrl": "/uy1.png",
                  "startDate": "Oct 2023",
                  "endDate": "Jul 2024"
                },
                {
                  "@type": "EducationalOrganization",
                  "name": "University of Yaounde 1",
                  "url": "https://uy1.uninet.cm/",
                  "degree": "Bachelor Degree in Computer Science (Software Engineer)",
                  "logoUrl": "/uy1.png",
                  "startDate": "Oct 2020",
                  "endDate": "Jul 2023"
                },
                {
                  "@type": "EducationalOrganization",
                  "name": "Government Bilingual High School Yaounde",
                  "degree": "GCE Advanced Level",
                  "startDate": "Sep 2019",
                  "endDate": "Jun 2020"
                },
                {
                  "@type": "EducationalOrganization",
                  "name": "Government Bilingual High School Yaounde",
                  "degree": "GCE Ordinary Level",
                  "startDate": "Sep 2017",
                  "endDate": "Jun 2018"
                }
              ],
              "hasOccupation": [
                {
                  "@type": "Organization",
                  "name": "Coding Industry Sarl",
                  "url": "http://coding-industry.com/fr_fr/",
                  "location": "Remote",
                  "jobTitle": "Backend Developer",
                  "logoUrl": "./coding-industry.png",
                  "startDate": "Jun 2024",
                  "endDate": "Present",
                  "description": "Full Stack Developer. At Coding Industry, I specialize in building comprehensive full-stack applications. My key responsibilities include: Backend Development: Crafting and maintaining scalable and efficient server-side logic using Django. Frontend Development: Creating dynamic and responsive user interfaces with Next.js and React."
                },
                {
                  "@type": "Organization",
                  "name": "Sciences de la Professionnalisation",
                  "url": "https://esso-idp.com/",
                  "location": "Remote",
                  "jobTitle": "Fullstack Developer",
                  "logoUrl": "./esso-idp.jpg",
                  "startDate": "Aug 2023",
                  "endDate": "Present",
                  "description": ""
                },
                {
                  "@type": "Organization",
                  "name": "Revolution Travel & Services",
                  "url": "https://www.facebook.com/p/Revolution-Travel-Services-100064125607997/",
                  "location": "Ngousso",
                  "jobTitle": "Travel Consultant",
                  "startDate": "Sep 2024",
                  "endDate": "Present",
                  "description": "At Revolution Travel & Services, my primary responsibility is to book and sell airline tickets."
                }
              ]
            })
          }}
        />
      </head>

      <body className="">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
        <Analytics/>
      </body>
    </html>
  );
}
