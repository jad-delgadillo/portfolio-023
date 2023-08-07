"use client";
import Image from "next/image";
import React from "react";
import aboutPic from "../../public/me.jpg";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutPage() {
  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-center"
      >
        <div className="max-w-md md:max-w-none">
          <div className="flex flex-row">
            <h1 className="text-6xl font-semibold mb-2 bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500 text-transparent">
              About Me
            </h1>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
            </div>
          </div>
          <div className="flex md:flex md:flex-row flex-col m-auto items-center justify-center ">
            <div className="">
              <Image
                priority
                src={aboutPic}
                width={500}
                height={500}
                alt="Picture of me"
                className="rounded-lg saturate-[110%]"
                style={{ objectFit: "fill" }}
              />
            </div>
            <div className="md:max-w-sm md:ml-5 ml-0 mt-2 text-xl font-extralight">
              <p className="">
                Hello! I&#39;m <b>Jorge.</b> <br /> I am a{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text font-semibold text-transparent">
                  Full-Stack Developer
                </span>{" "}
                from the vibrant city of <b> Guadalajara, México 🇲🇽</b>
              </p>
              <p className="leading-normal ">
                When I&#39;m not coding, I dive into hobbies like making music,
                writing, reading, and traveling. These interests bring joy and
                shape a well-rounded perspective in my work. <br />{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text font-semibold text-transparent">
                  I&#39;m driven by curiosity and a passion for learning
                </span>{" "}
                qualities that fuel my continuous self-improvement and
                confidence in tackling new challenges head-on.
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text font-semibold text-transparent"></span>
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
}
