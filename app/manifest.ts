import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Portfolio d'Elone Maccioni",
    short_name: "Portfolio Elone",
    description: "Portfolio de développeur full stack Elone Maccioni",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/avatar.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/avatar.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
} 