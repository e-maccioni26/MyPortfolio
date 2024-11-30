import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "800", "600", "500"], 
  display: "swap", 
  variable: "--font-montserrat", 
});

export const metadata: Metadata = {
  title: "Portoflio | Elone Maccioni",
  description: "I'm Développeur Full Stack React and Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased bg-animated`}
      >
        {children}
      </body>
    </html>
  );
}
