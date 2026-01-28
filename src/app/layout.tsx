import type { Metadata } from "next";
import "./globals.css";
import { RootLayoutClient } from "./component/RootLayoutClient";

export const metadata: Metadata = {
  title: {
    default: "Shri Susanta Ghosh | MLA Khanakul | BJP West Bengal",
    template: "%s | Shri Susanta Ghosh - MLA Khanakul",
  },
  description: "Official website of Shri Susanta Ghosh, Member of Legislative Assembly (MLA) from Khanakul constituency and State Secretary of BJP West Bengal. Dedicated to serving the people with transparency, integrity, and commitment to development.",
  keywords: [
    "Susanta Ghosh",
    "MLA Khanakul",
    "Khanakul MLA",
    "BJP West Bengal",
    "Hooghly MLA",
    "West Bengal MLA",
    "Khanakul constituency",
    "BJP State Secretary",
    "Arambagh",
    "West Bengal politics",
    "Khanakul development",
    "Susanta Ghosh MLA",
    "Legislative Assembly West Bengal",
    "Bharatiya Janata Party",
    "Khanakul news",
    "public service",
    "grassroots leadership",
  ],
  authors: [{ name: "Shri Susanta Ghosh" }],
  creator: "Shri Susanta Ghosh MLA Office",
  publisher: "Shri Susanta Ghosh MLA Office",
  metadataBase: new URL("https://susantaghosh.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://susantaghosh.in",
    siteName: "Shri Susanta Ghosh - MLA Khanakul",
    title: "Shri Susanta Ghosh | MLA Khanakul | BJP West Bengal",
    description: "Official website of Shri Susanta Ghosh, MLA from Khanakul constituency. Dedicated to serving the people with transparency, integrity, and commitment to development.",
    images: [
      {
        url: "/mla-shri-rajesh-kumar.jpg",
        width: 1200,
        height: 630,
        alt: "Shri Susanta Ghosh - MLA Khanakul",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shri Susanta Ghosh | MLA Khanakul | BJP West Bengal",
    description: "Official website of Shri Susanta Ghosh, MLA from Khanakul constituency and State Secretary of BJP West Bengal.",
    images: ["/mla-shri-rajesh-kumar.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  verification: {
    google: "google-site-verification-code", // Add actual verification code when available
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        ></link>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wdth,wght@0,75..100,300..800;1,75..100,300..800&display=swap"
          rel="stylesheet"
        ></link>


      </head>
      <body className="antialiased">
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
