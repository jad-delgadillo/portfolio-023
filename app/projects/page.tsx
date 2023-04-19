"use client";
import Project from "@/components/Project";
import Link from "next/link";
import React from "react";
import { FiCoffee, FiMusic, FiMessageCircle } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectsPage() {
  return (
    <AnimatePresence>
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="flex flex-row">
          <h1 className="text-6xl font-semibold leading-none pb-2 mb-2 bg-clip-text bg-gradient-to-r from-cyan-300 to-green-500 text-transparent">
            Projects.
          </h1>
        </div>
        <p className="mb-1 text-xl">
          Here are a few side projects I&#39;ve been working on. Check them out!
        </p>
        <h2 className="text-4xl font-semibold leading-relaxed inline-block">
          Web Apps
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0 }}
          className="flex md:flex-row flex-col"
        >
          <div></div>

          <Project
            id="buy-me-a-coffee"
            icon={<FiCoffee size={30} className="flex items-center" />}
            name="Buy me a coffee"
            description="A good way to support your favorite web developer."
          />
          <Project
            id="chat-app"
            icon={<FiMessageCircle size={30} className="flex items-center" />}
            name="Chat"
            description="The correct way to communicate."
          />
          <Project
            id="music-portfolio"
            icon={<FiMusic size={30} className="flex items-center" />}
            name="Music Portfolio"
            description="Dangerously good music."
          />
        </motion.div>
        {/* <h2 className="text-4xl font-semibold mt-4 leading-relaxed inline-block ">
          Mobile Apps
        </h2> */}
      </motion.section>
    </AnimatePresence>
  );
}
