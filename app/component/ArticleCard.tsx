"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Post = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  href: string;
};

type ArticleCardProps = {
  post: Post;
  reducedMotion: boolean;
};

export default function ArticleCard({ post, reducedMotion }: ArticleCardProps) {
  return (
    <motion.article
      className="group relative overflow-hidden rounded-xl shadow-lg bg-white"
      initial={reducedMotion ? false : { opacity: 0, y: 30 }}
      whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={
        reducedMotion
          ? undefined
          : { type: "spring", stiffness: 240, damping: 22 }
      }
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          width={400}
          height={250}
          className={`h-56 w-full object-cover transition-all duration-500 ${
            reducedMotion
              ? "group-hover:opacity-80" // fade hover
              : "group-hover:scale-105" // zoom hover
          }`}
        />

        {reducedMotion && (
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{post.title}</h3>
        <p className="mt-2 text-gray-600">{post.excerpt}</p>

        <Link
          href={post.href}
          className="mt-3 inline-block text-indigo-600 font-medium hover:underline"
        >
          Read more →
        </Link>
      </div>
    </motion.article>
  );
}
