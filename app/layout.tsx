import { NavBar } from "@/components/NavBar";
import "./globals.css";
import { Poppins } from "next/font/google";
import Figures from "@/components/Figures";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Jorge Delgadillo",
  description: "Dangerous good coding.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} bg-neutral-950 text-white font-poppins`}
    >
      <Head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css"
          rel="stylesheet"
        />
      </Head>
      <body className="min-h-screen max-w-5xl m-auto md:pt-40 pt-0 md:flex md:flex-row flex-col p-5 md:p-0">
        <div className="flex flex-row py-5 md:items-start items-center justify-between">
          <Link href={"/"}>
            <div className="md:hidden font-semibold ">alw.</div>
          </Link>
          <NavBar />
        </div>
        <main className="text-normal">
          {/* <Figures /> */}
          {children}
        </main>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></Script>
      </body>
    </html>
  );
}
