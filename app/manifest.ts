import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Milan Sahoo - Junior Software Developer Portfolio",
    short_name: "Milan Sahoo",
    description:
      "Professional portfolio of Milan Sahoo - Junior Software Developer specializing in Full Stack Development, AI, and IoT projects.",
    start_url: "/",
    display: "standalone",
    background_color: "#081b29",
    theme_color: "#081b29",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/images/pic.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: "/images/pic.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    categories: ["portfolio", "technology", "development"],
    lang: "en-US",
  }
}
