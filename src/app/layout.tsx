import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/navbar";
import { Analytics } from "@vercel/analytics/react";
import { projectsData } from "@/constants/projects"; // Corrected import name

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
  keywords: "TOMDIEU TCHADIEUKO IVAN GOTTFRIED, Tomdieu Ivan, Ivan Tomdieu, Ivan Gottfried, développeur full stack, full stack developer, ingénieur logiciel, software engineer, développeur web, web developer, ReactJS, NextJS, NodeJS, Django, Django REST Framework, Docker, Kubernetes, ExpressJS, développeur JavaScript, JavaScript developer, développeur Python, Python developer, développeur freelance, freelance developer, développeur à distance, remote developer, développement d'API, API development, développement frontend, frontend development, développement backend, backend development, applications web, web applications, génie logiciel, software engineering, développeur web full stack, full stack web developer, TailwindCSS, TypeScript, développeur React Native, React Native developer, consultant informatique, IT consultant, développeur camerounais, Cameroonian developer, intégration continue, continuous integration, déploiement continu, continuous deployment, architecture logicielle, software architecture, développement agile, agile development, expert SEO, SEO specialist, optimisation pour moteurs de recherche, search engine optimization, développement mobile, mobile development, expert cloud computing, cloud computing expert, DevOps, sécurité web, web security, migration de base de données, database migration",
  description: "TOMDIEU TCHADIEUKO IVAN GOTTFRIED - Versatile Full Stack Software Developer with expertise in Django, Django REST Framework, Next.js, Express.js, Docker, Kubernetes, and React Native. Passionate about building robust web applications and delivering top-notch solutions using JavaScript, React, Node.js, and other cutting-edge frameworks and technologies.",
  openGraph: {
    url: "https://ivantomdieu.vercel.app/",
    title: "TOMDIEU TCHADIEUKO IVAN GOTTFRIED - Full Stack Software Developer",
    description: "I'm Tomdieu Tchadieuko Ivan, a passionate Full Stack Software Developer with expertise in Django, Django REST Framework, Next.js, Express.js, Docker, Kubernetes, and React Native. With years of experience in building beautiful, functional, and responsive websites, I specialize in delivering professional-grade software solutions.",
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
    description: "Tomdieu Ivan - Experienced Full Stack Developer specializing in Django, Next.js, and Docker. Visit my portfolio to learn more about my projects and expertise in software engineering.",
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
  verification:{
    google:"oL_X940seqpUmflSfAjNxmf39DH707nkgHr__ALLx7c"
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
  // Generate WorkExample schema for projects
  const workExamples = projectsData.map(project => ({ // Corrected variable name
    "@type": "WorkExample",
    "name": project.title,
    "description": project.description,
    "url": project.links?.find(link => link.label === "Preview")?.href || project.links?.find(link => link.label === "Github")?.href, // Prefer preview link, added optional chaining
    "image": project.image ? `https://ivantomdieu.vercel.app${project.image}` : undefined, // Added check for image existence
    "keywords": project.tags?.map(tag => tag.label).join(", "), // Added optional chaining
    "creator": {
      "@type": "Person",
      "name": "TOMDIEU TCHADIEUKO IVAN GOTTFRIED"
    },
    // Add potentialAction if there's a live preview
    ...(project.links?.find(link => link.label === "Preview") && {
      "potentialAction": {
        "@type": "ViewAction",
        "target": project.links.find(link => link.label === "Preview")?.href
      }
    })
  }));

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
              "givenName": "Ivan Gottfried",
              "familyName": "Tomdieu Tchadieuko",
              "alternateName": "Tomdieu Ivan",
              "description": "Versatile Full Stack Software Developer with expertise in Django, Django REST Framework, Next.js, Express.js, Docker, Kubernetes, and React Native. Passionate about building robust web applications and delivering top-notch solutions.",
              "gender": "Male",
              "nationality": "Cameroonian",
              "image": {
                "@type": "ImageObject",
                "url": "https://ivantomdieu.vercel.app/logo.png",
                "width": "1200",
                "height": "630",
                "caption": "Tomdieu Ivan - Full Stack Developer"
              },
              "jobTitle": "Full Stack Software Developer",
              "url": "https://ivantomdieu.vercel.app/",
              "sameAs": [
                "https://www.linkedin.com/in/tomdieuivan/",
                "https://github.com/Tomdieu",
                "https://twitter.com/IvanTomdieu"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Work",
                "email": "ivan.tomdieu@gmail.com",
                "telephone": "+237650039773"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Yaounde",
                "addressCountry": "Cameroon"
              },
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "Coding Industry Sarl",
                  "url": "http://coding-industry.com/fr_fr/",
                  "logo": "https://ivantomdieu.vercel.app/coding-industry.png"
                },
                {
                  "@type": "Organization",
                  "name": "Sciences de la Professionnalisation",
                  "url": "https://esso-idp.com/",
                  "logo": "https://ivantomdieu.vercel.app/esso-idp.jpg"
                },
                {
                  "@type": "Organization",
                  "name": "Revolution Travel & Services",
                  "url": "https://www.facebook.com/p/Revolution-Travel-Services-100064125607997/"
                }
              ],
              "workExperience": [
                {
                  "@type": "WorkExperience",
                  "name": "Backend Developer",
                  "description": "Full Stack Developer specializing in building comprehensive full-stack applications. Key responsibilities include crafting and maintaining scalable server-side logic using Django and creating dynamic user interfaces with Next.js and React.",
                  "startDate": "2024-06",
                  "endDate": "",
                  "employerName": "Coding Industry Sarl",
                  "workLocation": {
                    "@type": "Place",
                    "name": "Remote"
                  }
                },
                {
                  "@type": "WorkExperience",
                  "name": "Fullstack Developer",
                  "startDate": "2023-08",
                  "endDate": "",
                  "employerName": "Sciences de la Professionnalisation",
                  "workLocation": {
                    "@type": "Place",
                    "name": "Remote"
                  }
                },
                {
                  "@type": "WorkExperience",
                  "name": "Travel Consultant",
                  "description": "Responsible for booking and selling airline tickets.",
                  "startDate": "2024-09",
                  "endDate": "",
                  "employerName": "Revolution Travel & Services",
                  "workLocation": {
                    "@type": "Place",
                    "name": "Ngousso, Cameroon"
                  }
                }
              ],
              "alumniOf": [
                {
                  "@type": "EducationalOrganization",
                  "name": "University of Yaounde 1",
                  "url": "https://uy1.uninet.cm/",
                  "logo": "https://ivantomdieu.vercel.app/uy1.png"
                }
              ],
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "Master 1 in Computer Science",
                  "credentialCategory": "Master's Degree",
                  "dateCreated": "2024-07",
                  "validFrom": "2023-10",
                  "educationalLevel": "Graduate",
                  "recognizedBy": {
                    "@type": "EducationalOrganization",
                    "name": "University of Yaounde 1"
                  }
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "Bachelor Degree in Computer Science (Software Engineering)",
                  "credentialCategory": "Bachelor's Degree",
                  "dateCreated": "2023-07",
                  "validFrom": "2020-10",
                  "educationalLevel": "Undergraduate",
                  "recognizedBy": {
                    "@type": "EducationalOrganization",
                    "name": "University of Yaounde 1"
                  }
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "GCE Advanced Level",
                  "credentialCategory": "High School",
                  "dateCreated": "2020-06",
                  "validFrom": "2019-09",
                  "recognizedBy": {
                    "@type": "EducationalOrganization",
                    "name": "Government Bilingual High School Yaounde"
                  }
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "GCE Ordinary Level",
                  "credentialCategory": "Middle School",
                  "dateCreated": "2018-06",
                  "validFrom": "2017-09",
                  "recognizedBy": {
                    "@type": "EducationalOrganization",
                    "name": "Government Bilingual High School Yaounde"
                  }
                }
              ],
              "knowsAbout": [
                "Full Stack Development",
                "Web Application Architecture", 
                "API Development",
                "Cloud Computing",
                "Software Engineering"
              ],
              "skills": [
                {
                  "@type": "DefinedTerm",
                  "name": "Frontend Development",
                  "termCode": "frontend",
                  "inDefinedTermSet": {
                    "@type": "DefinedTermSet",
                    "name": "Technical Skills"
                  }
                },
                {
                  "@type": "DefinedTerm",
                  "name": "Backend Development",
                  "termCode": "backend",
                  "inDefinedTermSet": {
                    "@type": "DefinedTermSet",
                    "name": "Technical Skills"
                  }
                },
                {
                  "@type": "DefinedTerm",
                  "name": "DevOps & Database",
                  "termCode": "devops",
                  "inDefinedTermSet": {
                    "@type": "DefinedTermSet",
                    "name": "Technical Skills"
                  }
                },
                {
                  "@type": "DefinedTerm",
                  "name": "Other Skills",
                  "termCode": "other",
                  "inDefinedTermSet": {
                    "@type": "DefinedTermSet",
                    "name": "Technical Skills"
                  }
                }
              ],
              "workExample": workExamples // Add the generated work examples here
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
