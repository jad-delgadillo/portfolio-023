"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Figures from "@/components/Figures";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect } from "react";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main>
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
