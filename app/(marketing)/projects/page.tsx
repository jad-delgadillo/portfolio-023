"use client";
import Link from "next/link";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { allDocs, allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { useState } from "react";
import styles from "./style.module.scss";
import Titles from "./titles";
import Descriptions from "./descriptions";
import { Dispatch, SetStateAction } from "react";

interface Project {
  title: string;
  description: string;
  speed: number;
}

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const data: Project[] = [
    {
      title: "Music Portfolio",
      description: "",
      speed: 0.5,
    },
    {
      title: "Icon Generator",
      description: "",
      speed: 0.5,
    },
    {
      title: "Buy me a Coffee",
      description: "",
      speed: 0.67,
    },
  ];
  const enhancedData = data.map((project) => {
    const correspondingPost = allPosts.find(
      (post) => post.title === project.title
    );
    if (!correspondingPost) {
      console.error(`No post found for project title: ${project.title}`);
      return { ...project, slug: "/" }; // default to the root or any other default value
    }
    return {
      ...project,
      slug: correspondingPost?.slug,
    };
  });

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0, y: 0 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-6xl font-semibold pb-2 bg-clip-text bg-gradient-to-r from-cyan-300 to-green-500 text-transparent">
          Projects
        </h1>
        <div className={styles.container}>
          <Titles data={enhancedData} setSelectedProject={setSelectedProject} />
          <Descriptions data={data} selectedProject={selectedProject} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
