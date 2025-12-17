import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import NavBar from "@/components/nav-bar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: {
    default: "Milan Sahoo - Junior Software Developer | Full Stack Portfolio",
    template: "%s | Milan Sahoo Portfolio",
  },
  description:
    "I am Milan Sahoo, a Junior Software Developer passionate about creating impactful solutions using cutting-edge technologies. Student at Brainware University with expertise in full-stack development, AI, and IoT projects.",
  keywords: [
    "Milan Sahoo",
    "Junior Software Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Brainware University",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "AI Research",
    "IoT Projects",
    "Robotics",
    "Software Engineer",
    "AGNIRATH AEROSPACE",
    "Web Development Portfolio",
    "Software Engineering Portfolio",
    "Kolkata Developer",
    "India Developer",
    "Full Stack Engineer",
    "React.js Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "API Development",
    "Responsive Web Design",
    "Modern Web Applications",
    "Tech Portfolio",
    "Hire Developer",
    "Freelance Developer",
  ],
  authors: [{ name: "Milan Sahoo", url: "https://github.com/Milan721166" }],
  creator: "Milan Sahoo",
  publisher: "Milan Sahoo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://react-protfilio.vercel.app"),
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://react-protfilio.vercel.app",
    title: "Milan Sahoo - Junior Software Developer | Full Stack Portfolio",
    description:
      "Explore Milan Sahoo's portfolio showcasing full-stack development projects, AI research, and IoT solutions. Student at Brainware University specializing in modern web technologies.",
    siteName: "Milan Sahoo Portfolio",
    images: [
      {
        url: "/images/pic.png",
        width: 1200,
        height: 630,
        alt: "Milan Sahoo - Junior Software Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Milan Sahoo - Junior Software Developer Portfolio",
    description:
      "Junior Software Developer passionate about creating impactful solutions with cutting-edge technologies. Full-stack development, AI, and IoT.",
    images: ["/images/pic.png"],
    creator: "@milansahoo",
  },
  alternates: {
    canonical: "https://react-protfilio.vercel.app",
  },
  generator: "Next.js",
  applicationName: "Milan Sahoo Portfolio",
  referrer: "origin-when-cross-origin",
  category: "technology",
  classification: "Portfolio Website",
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    other: {
      me: ["milan@example.com", "https://github.com/Milan721166"],
    },
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#081b29",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          color: "#ededed",
          backgroundColor: "#081b29",
        }}
      >
        <NavBar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
