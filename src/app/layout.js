"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./components/Providers";
import Loading from "./loading";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  applicationName: "MOVIE-REQUEST",
  title: "MOVIE-REQUEST",
  description:
    "A simple realtime chat application without authentication created using Next.js and Firebase",
  generator: "Next.js",
  manifest: "/manifest.json",
  authors: [
    { name: "Sameemul Haque" },
    {
      name: "Sameemul Haque",
      url: "https://sameem.dev/",
    },
  ],
};

export const viewport = {
  themeColor: "black",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000); // ⬅️ loader time (ms)

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className + " overflow-hidden"}>
        {showLoader ? (
          <Loading />
        ) : (
          <Providers>{children}</Providers>
        )}
      </body>
    </html>
  );
}
