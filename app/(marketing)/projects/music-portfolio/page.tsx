"use client";
import React from "react";
import thumb from "../music-portfolio/thumb.png";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const stack = [
  {
    name: "Next",
  },
  {
    name: "Tailwind",
  },
  {
    name: "TypeScript",
  },
  {
    name: "Framer",
  },
];

export default function MusicPortfolioPage() {
  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <main className="text-xl">
          <div className="flex flex-col flex-auto max-w-[500px]">
            <h1 className="text-4xl font-semibold leading-none pb-2 mb-1 bg-clip-text bg-gradient-to-r from-cyan-300 to-green-500 text-transparent">
              Music Portfolio
            </h1>
            <div className="mb-1">
              <Link target="_blank" href={"https://music.alwaysjad.dev"}>
                <Image
                  src={thumb}
                  alt="picture of the website project."
                  width={500}
                  height={500}
                  className="rounded-2xl mb-1 border border-neutral-700 hover:scale-[101%] hover:shadow-green-300 shadow-sm transition-all"
                />
              </Link>
            </div>
            <div className="flex flex-row mb-1">
              {stack.map((item, idx) => {
                return (
                  <div key={idx}>
                    <h2 className="border flex py-1 px-2 m-1 text-base rounded-lg border-cyan-200 text-cyan-200 cursor-default">
                      {item.name}
                    </h2>
                  </div>
                );
              })}
            </div>
            <p className="text-justify text-base font-light bg-neutral-900 p-2 mt-1 rounded-lg border text-neutral-100 border-neutral-700">
              Introducing my new music portfolio website that showcases my work
              on the music industry. Built with Next, Tailwind, TypeScript, and
              Framer-Motion, The website offers a sleek and modern platform.
              With customizable design options and easy navigation, the website
              ensures that the music work stands out and captures the attention
              of the audience. The website also provides a seamless user
              experience, allowing visitors to easily browse and listen to the
              music projects.
            </p>
            <div className="inline-block">
              <Link
                href={"https://github.com/jad-delgadillo/music-portfolio"}
                passHref
                target="_blank"
              >
                <div className="text-justify text-base font-light bg-neutral-900 p-2 mt-3 inline-block rounded-lg border text-neutral-100 hover:border-cyan-300 hover:text-cyan-200 border-neutral-700">
                  <p>Source Code</p>
                </div>
              </Link>
              <Link
                href={"https://music.alwaysjad.dev"}
                passHref
                target="_blank"
              >
                <div className="text-justify text-base font-light ml-2 bg-neutral-900 p-2 mt-3 inline-block rounded-lg border text-neutral-100 hover:border-cyan-300 hover:text-cyan-200 border-neutral-700">
                  <p>Live Website</p>
                </div>
              </Link>
            </div>
          </div>
        </main>
      </motion.section>
    </AnimatePresence>
  );
}