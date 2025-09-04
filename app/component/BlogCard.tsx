"use client";

import Image from "next/image";
import { Post } from "../lib/types/post2";

interface BlogCardProps {
  post: Post;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  const blogImages = [
    "/images/blog1.png",
    "/images/blog2.png",
    "/images/blog3.png",
    "/images/blog4.png",
    "/images/blog5.png",
    "/images/blog6.png",
  ];

  return (
    <div className="rounded-xl shadow-sm border border-gray-200 bg-white overflow-hidden hover:shadow-lg transition">
      {/* Blog Image */}
      <Image
        src={blogImages[index % blogImages.length]}
        alt={post.title}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />

      {/* Blog Content */}
      <div className="p-5">
        <p className="text-gray-500 text-sm mb-2">May 05, 2023</p>
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{post.title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">{post.body}</p>
      </div>
    </div>
  );
}
