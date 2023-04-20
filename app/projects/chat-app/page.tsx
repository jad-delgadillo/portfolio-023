"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import thumb from "../music-portfolio/thumb.png";
import { motion, AnimatePresence } from "framer-motion";

const stack = [
  {
    name: "Remix",
  },
  {
    name: "TypeScript",
  },
  {
    name: "Tailwind",
  },
  {
    name: "Supabase",
  },
];

export default function ChatAppPage() {
  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <main className="text-xl">
          <div className="flex flex-col flex-auto max-w-[500px]">
            <h1 className="text-4xl font-semibold leading-none pb-2 mb-1 bg-clip-text bg-gradient-to-r from-cyan-300 to-green-500 text-transparent">
              Chat-Remix
            </h1>
            <div className="mb-1">
              <Link target="_blank" href={"https://chat-remix.vercel.app/"}>
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
              Imagine a website that serves as a one-stop-shop for web
              developers, providing valuable tips and tricks on how to build
              amazing web applications. <br />
              This is a convinient tool and solution to support your favorite
              developer.
            </p>
            <div className="inline-block">
              <Link
                href={"https://github.com/jad-delgadillo/chat-remix"}
                passHref
                target="_blank"
              >
                <div className="text-justify text-base font-light bg-neutral-900 p-2 mt-3 inline-block rounded-lg border text-neutral-100 hover:border-cyan-300 hover:text-cyan-200 border-neutral-700">
                  <p>Source Code</p>
                </div>
              </Link>
              <Link
                href={"https://chat-remix.vercel.app/"}
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
