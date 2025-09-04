"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Reusable Feature type
type Feature = {
  title: string;
  description: string;
  icon: string; // now string instead of React.ElementType for image src
};

// Content pulled from the reference image
const features: Feature[] = [
  {
    title: "SEO Team Expert",
    description:
      "Creating products to meet our user needs and market demands.",
    icon: "/images/icon3.png", // replace with your actual image path
  },
  {
    title: "Strategic Planning",
    description:
      "Improving products to meet our user needs and market demands.",
    icon: "/images/icon2.png",
  },
  {
    title: "24/7 Live Support",
    description:
      "We are ready to help you all day and our customer service are active",
    icon: "/images/icon1.png",
  },
];

export default function UnleashSection() {
  return (
    <section
      aria-labelledby="unleash-heading"
      className="relative overflow-hidden bg-[#F6FBFF]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
        {/* Layout: text on the left, features on the right (stacks on mobile) */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Heading */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              viewport={{once: true}}

              className="lg:col-span-5">
            <h2
              id="unleash-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-slate-900"
            >
              <span className="text-emerald-500">Unleash</span>{" "}
              businesses’
              <br className="hidden sm:block" />
              <span className="block">full potential</span>
            </h2>
          </motion.div>

          {/* Features */}
          <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                viewport={{once: true}}
                
          className="lg:col-span-7">
            <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <li key={index} className="flex flex-col">
                  <div className="mb-5 inline-flex h-16 w-16 md:h-18 md:w-18 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-emerald-200">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={30}
                      height={30}
                      className="h-8 w-8 object-contain"
                    />
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

