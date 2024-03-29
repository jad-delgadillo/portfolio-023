"use client";
import { notFound } from "next/navigation";
import { allAuthors, allPosts } from "contentlayer/generated";

import { Mdx } from "@/components/mdx-components";

import "@/styles/mdx.css";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { env } from "@/env.mjs";
import { absoluteUrl, cn, formatDate } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { AnimatePresence, motion } from "framer-motion";
import { use } from "react";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: any) {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

// export async function generateMetadata({
//   params,
// }: PostPageProps): Promise<Metadata> {
//   const post = await getPostFromParams(params);

//   if (!post) {
//     return {};
//   }

//   const url = env.NEXT_PUBLIC_APP_URL;

//   const ogUrl = new URL(`${url}/api/og`);
//   ogUrl.searchParams.set("heading", post.title);
//   ogUrl.searchParams.set("type", "Blog Post");
//   ogUrl.searchParams.set("mode", "dark");

//   return {
//     title: post.title,
//     description: post.description,
//     authors: post.authors.map((author: any) => ({
//       name: author,
//     })),
//     openGraph: {
//       title: post.title,
//       description: post.description,
//       type: "article",
//       url: absoluteUrl(post.slug),
//       images: [
//         {
//           url: ogUrl.toString(),
//           width: 1200,
//           height: 630,
//           alt: post.title,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: post.title,
//       description: post.description,
//       images: [ogUrl.toString()],
//     },
//   };
// }

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  const authors = post.authors.map((author: any) =>
    allAuthors.find(({ slug }) => slug === `/authors/${author}`)
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      className="container relative max-w-3xl py-6 lg:py-0"
    >
      <div>
        <h1 className=" inline-block font-heading  text-4xl lg:text-6xl font-semibold leading-none pb-2 bg-clip-text bg-gradient-to-r from-cyan-300 to-green-500 text-transparent">
          {post.title}
        </h1>
        {authors?.length ? (
          <div className="mt-4 flex space-x-4">
            {authors.map((author: any) =>
              author ? (
                <Link
                  key={author._id}
                  href={`https://twitter.com/${author.twitter}`}
                  className="flex items-center space-x-2 text-sm"
                >
                  <Image
                    src={author.avatar}
                    alt={author.title}
                    width={42}
                    height={42}
                    className="rounded-full bg-white"
                  />
                  <div className="flex-1 text-left leading-tight">
                    <p className="font-medium">{author.title}</p>
                    <p className="text-[12px] text-muted-foreground">
                      @{author.twitter}
                    </p>
                  </div>
                </Link>
              ) : null
            )}
          </div>
        ) : null}
      </div>
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={780}
          height={405}
          className="mb-8 rounded-md border bg-muted transition-colors"
          priority
        />
      )}
      <Mdx code={post.body.code} />
      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link
          href="/projects"
          className={cn(buttonVariants({ variant: "ghost" }))}
        >
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          See all projects
        </Link>
      </div>
    </motion.article>
  );
}
