import type { Metadata } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/layout/navbar/navbar";
import { Providers } from "./provider";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import MouseFollower from "@/components/fancy/mouse/mouse-follower";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

export const metadata: Metadata = {
  title: "Mar John Cornelio | Full-Stack Software Developer",
  description:
    "Full-Stack Software Developer skilled in React.js, .NET, Blazor, Node.js, and database management. Passionate about building scalable, user-friendly web applications with modern frameworks and clean code.",
  keywords: [
    "Full-Stack Developer",
    "React.js Developer",
    ".NET Developer",
    "Blazor Developer",
    "Node.js",
    "Express.js",
    "Web Application Development",
    "API Integration",
    "Tailwind CSS",
    "Material UI",
    "MudBlazor",
    "MongoDB",
    "MySQL",
    "MSSQL",
    "Software Developer Portfolio",
  ],
  authors: [{ name: "Mar John Cornelio" }],
  openGraph: {
    title: "Mar John Cornelio | Full-Stack Software Developer",
    description:
      "Explore the portfolio of Mar John Cornelio, a passionate software developer specializing in React.js, .NET, Node.js, and scalable web applications.",
    url: "https://mar-portfolio-topaz.vercel.app/",
    siteName: "Mar John Cornelio Portfolio",
    images: [
      {
        url: "https://mar-portfolio-topaz.vercel.app/landing/mar-image.webp",
        width: 1200,
        height: 630,
        alt: "Mar John Cornelio - Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mar John Cornelio | Full-Stack Software Developer",
    description:
      "Full-Stack Developer skilled in React.js, .NET, Node.js, and database-driven applications. Building scalable, impactful web solutions.",
    images: ["https://mar-portfolio-topaz.vercel.app/landing/mar-image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="googleb482ad8197af901c.html"
        />
      </head>
      <body
        className={` ${bricolage.variable}  ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Navbar />
          <MouseFollower />
          {children}
          <ThemeToggle />
        </Providers>
      </body>
    </html>
  );
}
