"use client";
import React, { useRef } from "react";
import { NavBar } from "@/components/NavBar";
import "./globals.css";
import { Poppins, Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader.js";
import styles from "@/components/styles.module.css";

// export const metadata = {
//   title: "Alwaysjad",
//   description: "Dangerously good coding.",
//   icons: {
//     icon: "/favicon.ico",
//   },
//   openGraph: {
//     title: "Alwaysjad",
//     description: "Dangerously good coding.",
//     url: "https://www.alwaysjad.com",
//     siteName: "Alwaysjad",
//     images: {
//       url: "https://res.cloudinary.com/dzepeibjw/image/upload/v1659152027/Metadata-image---alw_nrcnx6.png",
//       width: 1820,
//       height: 904,
//       alt: "Website link image banner",
//     },
//   },
// };

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const loader = useRef(null);
  const path = useRef(null);
  return (
    <html
      lang="en"
      className={`${inter.variable} bg-[#0b0d0d] text-white font-inter`}
    >
      <Head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
      </Head>
      <body className={`flex-col flex max-w-4xl lg:mx-auto ${styles.main}`}>
        <div className="flex flex-col justify-between min-h-screen">
          <div className="md:pt-40 pt-0 md:flex md:flex-row flex-col p-5 md:p-0">
            <div className="flex flex-row py-5 md:items-start justify-between">
              <Link href={"/"}>
                <div className="md:hidden font-semibold ">alw.</div>
              </Link>
              <NavBar />
            </div>

            <main className={`text-normal `}>
              <div ref={loader} className={styles.loader}>
                <svg>
                  <path ref={path}></path>
                </svg>
              </div>
              <Loader />
              {children}
            </main>
          </div>
          <div className="">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
