"use client";

import { useEffect, useState } from "react";
import { fetchPosts } from "../lib/api";
import { Post } from "../lib/types/post";
import Image from "next/image";
import { motion } from "framer-motion";

const DataFetch = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // 👇  client avatars 
  const avatars = [
    "/images/client1.png",
    "/images/client2.png",
    "/images/client3.png",
    "/images/client4.png",
    "/images/client10.png",
    "/images/client6.jpg",
    "/images/client7.jpg",
    "/images/client8.png",
    "/images/client10.png",
  ];

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchPosts();
        setPosts(result.slice(0, 9)); // limit to 9 posts
      } catch (err: any) {
        setError(true);
        setErrorMessage(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center">
        <p className="text-2xl font-semibold text-red-600">⚠ Error Occurred</p>
        <p className="text-lg">{errorMessage}</p>
        <button
          onClick={() => location.reload()}
          className="mt-4 rounded-lg bg-green-600 px-6 py-2 text-white font-medium hover:bg-green-700 transition"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <section className="w-full font-sans py-16 px-4 sm:px-8 md:px-12">
      <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{once: true}}
      className="text-3xl sm:text-4xl md:text-5xl font-bold text-center leading-snug">
        Read what our{" "}
        <span className="text-green-500">customers</span> <br />
        are saying about us
      </motion.h1>

      {loading ? (
        // ✅ Skeleton Loader
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="animate-pulse flex flex-col gap-4 p-6 rounded-2xl border border-gray-200 shadow-sm"
            >
              <div className="flex gap-1">
                <div className="h-5 w-5 rounded bg-gray-300" />
                <div className="h-5 w-5 rounded bg-gray-300" />
                <div className="h-5 w-5 rounded bg-gray-300" />
                <div className="h-5 w-5 rounded bg-gray-300" />
                <div className="h-5 w-5 rounded bg-gray-300" />
              </div>
              <div className="h-6 w-2/3 bg-gray-300 rounded" />
              <div className="h-4 w-full bg-gray-200 rounded" />
              <div className="h-4 w-3/4 bg-gray-200 rounded" />

              <div className="flex items-center gap-4 mt-4">
                <div className="h-12 w-12 bg-gray-300 rounded-full" />
                <div className="flex flex-col gap-2">
                  <div className="h-4 w-24 bg-gray-300 rounded" />
                  <div className="h-3 w-20 bg-gray-200 rounded" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // ✅ Final Fetched Data
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{once: true}} 
            
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 p-6 rounded-2xl border border-green-400 shadow-md hover:shadow-xl transition"
            >
              {/* Stars */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Image
                    key={i}
                    src="/images/staricon.png"
                    alt="star"
                    width={20}
                    height={20}
                  />
                ))}
              </div>

              {/* Post content */}
              <p className="font-semibold text-lg">{post.title}</p>
              <p className="text-gray-600 text-sm italic">"{post.body}"</p>

              {/* User Info */}
              <div className="flex items-center gap-4 mt-4">
                <Image
                  src={avatars[index % avatars.length]} // 👈 unique image per post
                  alt="avatar"
                  width={50}
                  height={50}
                  className="rounded-full border"
                />
                <div>
                  <p className="font-semibold">Customer {index + 1}</p>
                  <p className="text-gray-500 text-sm">Verified User</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default DataFetch;

