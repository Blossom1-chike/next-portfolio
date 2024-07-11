// "use client";
import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const fira = Fira_Code({ subsets: ["latin"], variable: "--font--firacode" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Person",
              name: "Blossom Chikezie",
              url: "https://blossom-portfolio.vercel.app/",
              sameAs: [
                "https://github.com/Blossom1-chike",
                "https://www.linkedin.com/in/blossom-chikezie/",
                "https://twitter.com/blosomtechsiast",
                // Other social profiles
              ],
              author: {
                "@type": "Person",
                name: "Blossom Chikezie",
              },
              jobTitle: "Software Engineer",
              alumniOf: "Babcock University",
            }),
          }}
        />
      </head>
      <body className={fira.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
