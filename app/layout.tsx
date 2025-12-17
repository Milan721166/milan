import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import NavBar from "@/components/nav-bar"
import Footer from "@/components/footer"
import Home from "@/components/home"
import About from "@/components/about"
import Skills from "@/components/skills"
import Contact from "@/components/contact"


/* ================================
   SEO METADATA
================================ */
export const metadata: Metadata = {
  title:
    "Milan Sahoo | Junior Software Developer at Digontom | Full Stack Engineer",

  description:
    "Milan Sahoo is a Junior Software Developer at Digontom specializing in Full Stack Development using React, Next.js, Node.js, MongoDB, Flask, AI, IoT, and Robotics. Diploma holder in Computer Science Engineering from Brainware University with research publications and real-world project experience.",

  keywords: [
    "Milan Sahoo",
    "Junior Software Developer",
    "Digontom",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MongoDB",
    "Express.js",
    "Flask Developer",
    "AI Projects",
    "IoT Projects",
    "Robotics",
    "Brainware University",
    "Software Engineer Portfolio India",
  ],

  authors: [{ name: "Milan Sahoo" }],
  creator: "Milan Sahoo",
  publisher: "Milan Sahoo",
  category: "Technology",
  applicationName: "Milan Sahoo Portfolio",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: "https://react-protfilio.vercel.app",
  },

  openGraph: {
    title:
      "Milan Sahoo | Junior Software Developer at Digontom | Full Stack Engineer",
    description:
      "Official portfolio of Milan Sahoo – Junior Software Developer at Digontom with expertise in Full Stack Development, AI, IoT, Robotics, and research publications.",
    url: "https://react-protfilio.vercel.app",
    siteName: "Milan Sahoo Portfolio",
    images: [
      {
        url: "https://react-protfilio.vercel.app/images/pic.png",
        width: 800,
        height: 800,
        alt: "Milan Sahoo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Milan Sahoo | Junior Software Developer at Digontom",
    description:
      "Junior Software Developer at Digontom | Full Stack Engineer | AI | IoT | Robotics",
    images: ["https://react-protfilio.vercel.app/images/pic.png"],
    creator: "@milansahoo",
  },
}

/* ================================
   PAGE COMPONENT
================================ */
export default function Page() {
  /* -------- PERSON SCHEMA -------- */
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Milan Sahoo",
    url: "https://react-protfilio.vercel.app",
    image: "https://react-protfilio.vercel.app/images/pic.png",
    jobTitle: "Junior Software Developer",
    email: "mailto:milansahoo7211662005@gmail.com",
    telephone: "+91-6296740204",

    identifier: [
      {
        "@type": "PropertyValue",
        propertyID: "ORCID",
        value: "https://orcid.org/0009-0007-0619-3682",
      },
      {
        "@type": "PropertyValue",
        propertyID: "GoogleScholar",
        value:
          "https://scholar.google.com/citations?hl=en&user=nv4z2z4AAAAJ",
      },
    ],

    worksFor: [
      {
        "@type": "Organization",
        name: "Digontom",
        description: "Software development and technology solutions company",
      },
      {
        "@type": "Organization",
        name: "AGNIRATH AEROSPACE AND DEFENCE RESEARCH PRIVATE LIMITED",
      },
    ],

    affiliation: {
      "@type": "Organization",
      name: "Digontom",
    },

    hasOccupation: {
      "@type": "Occupation",
      name: "Junior Software Developer",
      occupationLocation: {
        "@type": "Country",
        name: "India",
      },
      skills: [
        "React.js",
        "Next.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Flask",
        "REST API",
        "AI",
        "IoT",
        "Robotics",
      ],
    },

    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Brainware University",
    },

    address: {
      "@type": "PostalAddress",
      addressLocality: "West Medinipur",
      addressRegion: "West Bengal",
      addressCountry: "India",
    },

    knowsAbout: [
      "Full Stack Development",
      "React.js",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Flask",
      "AI",
      "IoT",
      "Robotics",
      "REST API",
      "Computer Networks",
      "Data Structures and Algorithms",
    ],

    knowsLanguage: ["Bengali", "English", "Hindi"],

    sameAs: [
      "https://github.com/Milan721166",
      "https://www.linkedin.com/in/milan-sahoo",
      "https://twitter.com/milansahoo",
      "https://orcid.org/0009-0007-0619-3682",
      "https://scholar.google.com/citations?hl=en&user=nv4z2z4AAAAJ",
    ],
  }

  /* -------- WEBSITE SCHEMA -------- */
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Milan Sahoo Portfolio",
    url: "https://react-protfilio.vercel.app",
    inLanguage: "en-IN",
    author: {
      "@type": "Person",
      name: "Milan Sahoo",
    },
  }

  /* -------- BREADCRUMB SCHEMA -------- */
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://react-protfilio.vercel.app/#home",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://react-protfilio.vercel.app/#about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Skills",
        item: "https://react-protfilio.vercel.app/#skills",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contact",
        item: "https://react-protfilio.vercel.app/#contact",
      },
    ],
  }

  return (
    <>
      {/* JSON-LD STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* PAGE CONTENT */}
      <main>
        <NavBar />
        <Home />
        <About />
        <Skills />
        <Contact />
        <Footer/>
      </main>
    </>
  )
}
