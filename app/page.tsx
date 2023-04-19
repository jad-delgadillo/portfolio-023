"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Figures from "@/components/Figures";
import { motion, AnimatePresence } from "framer-motion";

export default function HomePage() {
  return (
    <main className="">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Hero />
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
