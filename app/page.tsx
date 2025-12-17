import Home from "@/components/home"
import About from "@/components/about"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Milan Sahoo - Junior Software Developer | Full Stack Developer Portfolio",
  description:
    "I am Milan Sahoo, a Junior Software Developer passionate about creating impactful solutions using cutting-edge technologies. Expertise in full-stack development, AI, and IoT projects.",
  keywords: [
    "Milan Sahoo",
    "Software Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "AI",
    "IoT",
    "Brainware University",
    "Web Development",
    "JavaScript",
    "TypeScript",
  ],
}

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Milan Sahoo",
    url: "https://react-protfilio.vercel.app",
    image: "https://react-protfilio.vercel.app/images/pic.png",
    jobTitle: "Junior Software Developer",
    description:
      "Junior Software Developer passionate about creating impactful solutions using cutting-edge technologies",
    sameAs: [
      "https://github.com/Milan721166",
      "https://www.linkedin.com/in/milan-sahoo",
      "https://twitter.com/milansahoo",
    ],
    worksFor: {
      "@type": "Organization",
      name: "AGNIRATH AEROSPACE AND DEFENCE RESEARCH PRIVATE LIMITED",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Brainware University",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Full Stack Development",
      "AI",
      "IoT",
      "Robotics",
      "Web Development",
      "MongoDB",
      "Express.js",
      "REST API",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kolkata",
      addressCountry: "India",
    },
  }

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

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Milan Sahoo Portfolio",
    url: "https://react-protfilio.vercel.app",
    description: "Professional portfolio of Milan Sahoo - Junior Software Developer",
    author: {
      "@type": "Person",
      name: "Milan Sahoo",
    },
    inLanguage: "en-US",
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <main>
        <Home />
        <About />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
