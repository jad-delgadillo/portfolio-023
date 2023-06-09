"use client";
import Project from "@/components/Project";
import Link from "next/link";
import React from "react";
import { FiCoffee, FiMusic, FiMessageCircle } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { allDocs, allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { formatDate } from "@/lib/utils";

export default function ProjectsPage() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        className="container max-w-4xl "
      >
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <div className="flex-1 space-y-4">
            <div className="flex flex-col">
              <h1 className="text-6xl font-semibold leading-none pb-2 mb-2 bg-clip-text bg-gradient-to-r from-cyan-300 to-green-500 text-transparent">
                Projects.
              </h1>
              <p className="-mb-2 text-xl">
                Here are a few side projects I&#39;ve been working on. Check
                them out!
              </p>
            </div>
          </div>
        </div>
        <hr className="my-8" />
        {posts?.length ? (
          <div className="grid gap-10 sm:grid-cols-2">
            {posts.map((post, index) => (
              <motion.article
                key={post._id}
                className="group relative flex flex-col space-y-2 rounded-lg ring-neutral-900 p-4 shadow-black shadow-md bg-neutral-900 hover:bg-neutral-800 transition-all"
              >
                {post.image && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={804}
                    height={452}
                    className="rounded-md border border-white bg-muted transition-colors"
                    priority={index <= 1}
                  />
                )}
                <h2 className="text-2xl font-semibold leading-none pb-2 bg-clip-text bg-gradient-to-r from-cyan-300 to-green-500 text-transparent">
                  {post.title}
                </h2>
                {post.description && (
                  <p className="text-muted-foreground">{post.description}</p>
                )}

                {/* {post.date && (
                  <p className="text-sm text-muted-foreground">
                    {formatDate(post.date)}
                  </p>
                )} */}
                <Link href={post.slug} className="absolute inset-0">
                  <span className="sr-only">View Article</span>
                </Link>
              </motion.article>
            ))}
          </div>
        ) : (
          <p>No posts published.</p>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
