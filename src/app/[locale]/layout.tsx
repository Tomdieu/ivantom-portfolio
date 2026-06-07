import { ThemeProvider } from "@/components/theme-provider";
import "../globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
import { projectsData } from "@/constants/projects";
import { I18nProviderClient } from '@/locales/client';

const poppins = localFont({
  src: [
    {
      path: "../../../public/fonts/Poppins/Poppins-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../../public/fonts/Poppins/Poppins-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../../public/fonts/Poppins/Poppins-Black.ttf",
      weight: "800",
    },
  ],
  variable: "--font-poppins",
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const canonicalUrl = `https://ivantomdieu.vercel.app/${locale}`;

  return {
    metadataBase: new URL("https://ivantomdieu.vercel.app/"),
    title: {
      default: "Tomdieu Ivan | Senior Full Stack Software Engineer",
      template: "%s | Tomdieu Ivan",
    },
    description: "Senior Full Stack Developer based in Cameroon specializing in Django, React, and Next.js. I architect and build scalable, production-ready web and mobile applications.",
    keywords: ["Software Engineer Cameroon", "Full Stack Developer", "Django Developer", "Next.js Developer", "React Developer", "AI Engineer", "Robotics Engineer", "Tomdieu Ivan", "Ivan Gottfried", "Développeur Full Stack", "Web Developer"],
    authors: [{ name: "Tomdieu Ivan", url: "https://github.com/tomdieu" }],
    creator: "Tomdieu Ivan",
    publisher: "Tomdieu Ivan",
    category: "technology",
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': 'https://ivantomdieu.vercel.app/en',
        'fr': 'https://ivantomdieu.vercel.app/fr',
        'x-default': 'https://ivantomdieu.vercel.app/en',
      },
    },
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
    verification: {
      google: "oL_X940seqpUmflSfAjNxmf39DH707nkgHr__ALLx7c"
    },
    icons: [
      {
        url: "/ti.png",
        rel: "icon",
        type: "image/png",
      },
      {
        url: "/ti.png",
        rel: "apple-touch-icon",
        sizes: "180x180",
      },
    ],
    openGraph: {
      title: "Tomdieu Ivan | Senior Full Stack Software Engineer",
      description: "Senior Full Stack Developer based in Cameroon specializing in Django, React, and Next.js.",
      url: canonicalUrl,
      siteName: "Tomdieu Ivan Portfolio",
      images: [
        {
          url: "/ti.png",
          width: 1200,
          height: 630,
          alt: "Tomdieu Ivan - Full Stack Engineer",
        },
      ],
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Tomdieu Ivan | Senior Full Stack Software Engineer",
      description: "Building scalable digital products with Django and Next.js.",
      site: "@IvanTomdieu",
      creator: "@IvanTomdieu",
      images: ["/ti.png"],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Generate enhanced WorkExample schema for projects with better SEO
  const workExamples = projectsData.map((project, index) => ({
    "@type": "WorkExample",
    "@id": `https://ivantomdieu.vercel.app/#project-${index + 1}`,
    "name": `${project.title} - ${project.description?.split('.')[0]}`,
    "description": project.description,
    "url": project.links?.find(link => link.label === "Preview")?.href || project.links?.find(link => link.label === "Github")?.href,
    "image": project.image ? `https://ivantomdieu.vercel.app${project.image}` : undefined,
    "keywords": project.tags?.map(tag => tag.label).join(", "),
    "dateCreated": project.dates || "2024",
    "programmingLanguage": project.tags?.map(tag => tag.label).filter(tag => 
      ['Python', 'JavaScript', 'Java', 'TypeScript'].includes(tag)
    ),
    "applicationCategory": "WebApplication",
    "operatingSystem": "Web Browser",
    "creator": {
      "@type": "Person",
      "@id": "https://ivantomdieu.vercel.app/#person",
      "name": "TOMDIEU TCHADIEUKO IVAN GOTTFRIED",
      "alternateName": "Tomdieu Ivan"
    },
    "author": {
      "@type": "Person",
      "@id": "https://ivantomdieu.vercel.app/#person",
      "name": "TOMDIEU TCHADIEUKO IVAN GOTTFRIED"
    },
    "publisher": {
      "@type": "Person", 
      "@id": "https://ivantomdieu.vercel.app/#person",
      "name": "TOMDIEU TCHADIEUKO IVAN GOTTFRIED"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://ivantomdieu.vercel.app/"
    },
    // Add GitHub repository information
    ...(project.links?.find(link => link.label === "Github") && {
      "codeRepository": project.links.find(link => link.label === "Github")?.href
    }),
    // Add live demo information
    ...(project.links?.find(link => link.label === "Preview") && {
      "potentialAction": {
        "@type": "ViewAction",
        "target": project.links.find(link => link.label === "Preview")?.href,
        "name": `View ${project.title} Live Demo`
      }
    }),
    // Add download action for GitHub
    ...(project.links?.find(link => link.label === "Github") && {
      "downloadUrl": project.links.find(link => link.label === "Github")?.href
    })
  }));

  return (
    <html
      lang={locale}
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
              "@id": "https://ivantomdieu.vercel.app/#person",
              "name": "TOMDIEU TCHADIEUKO IVAN GOTTFRIED",
              "givenName": "Ivan Gottfried",
              "familyName": "Tomdieu Tchadieuko",
              "alternateName": "Tomdieu Ivan",
              "description": "Full Stack Software Developer. A passionate Full Stack Software Developer with a proven track record of building scalable and efficient web applications. Skilled in modern technologies, including JavaScript, React.js (2+ years experience), Node.js, and Django (3+ years experience), alongside a strong command of popular frameworks and libraries. Dedicated to crafting maintainable code and delivering impactful digital solutions, with a keen interest in continuous learning and innovation.",
              "gender": "Male",
              "nationality": "Cameroonian",
              "image": {
                "@type": "ImageObject",
                "url": "https://ivantomdieu.vercel.app/ti.png",
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
                "email": "ivan.tomdieu@gmail.com"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Yaounde",
                "addressCountry": "Cameroon"
              },
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "Durable Impact",
                  "url": "https://durableimpact.org/",
                  "logo": "https://ivantomdieu.vercel.app/durable-impact-logo.png"
                },
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
                  "name": "Backend Engineer",
                  "description": "Led backend architecture and infrastructure development, architected highly scalable RESTful APIs utilizing Django Rest Framework, and optimized database queries with Celery/Redis.",
                  "startDate": "2026-01",
                  "endDate": "",
                  "employerName": "Durable Impact",
                  "workLocation": {
                    "@type": "Place",
                    "name": "Hybrid / Remote"
                  }
                },
                {
                  "@type": "WorkExperience",
                  "name": "Backend Developer",
                  "description": "Full Stack Developer specializing in building comprehensive full-stack applications. Key responsibilities include crafting and maintaining scalable server-side logic using Django and creating dynamic user interfaces with Next.js and React.",
                  "startDate": "2024-06",
                  "endDate": "2026-01",
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
                  "name": "Master 2 in Computer Science",
                  "credentialCategory": "Master's Degree",
                  "dateCreated": "2025-11",
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
                "Software Engineering",
                "Model Driven Architecture",
                "Eclipse Modeling Framework",
                "ATL Transformation",
                "Figma to React Conversion",
                "Travel Booking Systems",
                "Recruitment Platforms",
                "Educational Technology",
                "Mobile Money Applications",
                "Chat Applications",
                "Cultural Heritage Platforms"
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
              "workExample": workExamples
            })
          }}
        />
        
        {/* Additional schema for project portfolio as ItemList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "@id": "https://ivantomdieu.vercel.app/#portfolio",
              "name": "Tomdieu Ivan - Software Development Portfolio Projects",
              "description": "A comprehensive portfolio of software development projects by TOMDIEU TCHADIEUKO IVAN GOTTFRIED, showcasing expertise in Django, React, Model Driven Architecture, and full-stack development.",
              "url": "https://ivantomdieu.vercel.app/",
              "numberOfItems": workExamples.length,
              "itemListElement": workExamples.map((project, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "SoftwareApplication",
                  "@id": project["@id"],
                  "name": project.name,
                  "description": project.description,
                  "url": project.url,
                  "image": project.image,
                  "keywords": project.keywords,
                  "dateCreated": project.dateCreated,
                  "programmingLanguage": project.programmingLanguage,
                  "applicationCategory": project.applicationCategory,
                  "operatingSystem": project.operatingSystem,
                  "creator": project.creator,
                  "author": project.author,
                  "codeRepository": project.codeRepository,
                  "downloadUrl": project.downloadUrl
                }
              }))
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
            <I18nProviderClient locale={locale}>
              {children}
              <Footer />
              <Navbar />
            </I18nProviderClient>
          </TooltipProvider>
        </ThemeProvider>
        <Analytics/>
      </body>
    </html>
  );
}
