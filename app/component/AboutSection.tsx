"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  /** Path under /public, e.g. '/images/about-photo.jpg' */
  imageSrc?: string;
};

export default function AboutSection({ imageSrc = "/images/about.png" }: Props) {
  return (
    <section
      aria-labelledby="about-heading"
      className="bg-[#EEF8FB]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 mt-10 md:mt-4 gap-10 lg:grid-cols-12 lg:items-center">
          {/* Left: Image */}
          <div className="lg:col-span-6">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{once: true}} 
            className="w-full overflow-hidden rounded-md lg:rounded-lg shadow-lg">
              <Image
                src={imageSrc}
                alt="Two colleagues reviewing documents at a desk"
                width={900}
                height={600}
                className="w-full h-auto object-cover block"
                priority
              />
            </motion.div>
          </div>

          {/* Right: Copy */}
          <div className="lg:col-span-6">
            <motion.h2
             initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1, ease: 'easeOut' }}
               viewport={{once: true}}
            id="about-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              <span className="text-emerald-500">About</span>{" "}
              <span className="">Techty</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.10 }}
           viewport={{once: true}}
            
            className="mt-6 max-w-xl text-base leading-7 text-slate-700">
              We’re constantly pushing the boundaries of what’s possible and seeking new ways to improve our services and help our clients achieve their goals.
            </motion.p>

            <div className="mt-8 space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{once: true}}
              >
                <h3 className="text-xl font-semibold text-slate-900">Vision</h3>
                <p className="mt-3 max-w-xl text-slate-700 leading-7">
                  Our vision is to create a better financial future for everyone. We believe that everyone deserves access to financial services and resources that empower them to achieve their goals.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{once: true}}
              >
                <h3 className="text-xl font-semibold text-slate-900">Mission</h3>
                <p className="mt-3 max-w-xl text-slate-700 leading-7">
                  We’re on a mission to empower people to take control of their finances and achieve their goals. We believe that everyone should have access to the tools and resources they need to make smart financial decisions.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
