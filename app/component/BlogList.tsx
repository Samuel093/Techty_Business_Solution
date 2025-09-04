"use client";

import { useEffect, useState } from "react";
import { fetchPosts } from "../lib/api2";
import { Post } from "../lib/types/post2";
import BlogCard from "./BlogCard";
import { motion } from "framer-motion";

export default function BlogList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchPosts();
        setPosts(result);
      } catch (err: any) {
        setError(true);
        setErrorMessage(err.message || "Something went wrong while fetching posts.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (error) {
    return (
      <section className="w-full py-16 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-red-600 mb-2">⚠ Error Occurred</h2>
        <p className="text-gray-700 mb-6">{errorMessage}</p>
        <button
          onClick={() => location.reload()}
          className="px-6 py-2 bg-green-600 text-white font-medium rounded-lg shadow hover:bg-green-700 transition"
        >
          Retry
        </button>
      </section>
    );
  }

  return (
    <section className="w-full py-16 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{once: true}}
          className="text-center max-w-2xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold mb-4">Read All Articles</h2>
        <p className="text-gray-600">
          We’re constantly pushing the boundaries of what’s possible and seeking new ways to improve our services.
        </p>
      </motion.div>

      {/* Blog Grid */}
      <motion.div
         initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{once: true}}
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="rounded-xl shadow-sm border border-gray-200 bg-white overflow-hidden animate-pulse"
              >
                {/* Image placeholder */}
                <div className="w-full h-48 bg-gray-300"></div>

                {/* Content placeholder */}
                <div className="p-5 space-y-3">
                  <div className="w-24 h-4 bg-gray-300 rounded"></div>
                  <div className="w-3/4 h-5 bg-gray-400 rounded"></div>
                  <div className="w-full h-4 bg-gray-300 rounded"></div>
                  <div className="w-2/3 h-4 bg-gray-300 rounded"></div>
                </div>
              </div>
            ))
          : posts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
      </motion.div>
    </section>
  );
}

