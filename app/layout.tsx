import { NavBar } from "@/components/NavBar";
import "./globals.css";
import { Poppins } from "next/font/google";
import Figures from "@/components/Figures";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

export const metadata = {
  title: "Jorge Delgadillo",
  description: "Dangerous good coding.",
  icons: {
    shortcut: "/favicon.ico",
  },
};

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} bg-neutral-950  text-white font-poppins`}
    >
      <Head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css"
          rel="stylesheet"
        />
      </Head>
      <body className="flex-col flex max-w-4xl lg:mx-auto">
        <div className="flex flex-col justify-between min-h-screen">
          <div className="md:pt-40 pt-0 md:flex md:flex-row flex-col p-5 md:p-0">
            <div className="flex flex-row py-5 md:items-start justify-between">
              <Link href={"/"}>
                <div className="md:hidden font-semibold ">alw.</div>
              </Link>
              <NavBar />
            </div>

            <main className="text-normal">
              {/* <Figures /> */}
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
