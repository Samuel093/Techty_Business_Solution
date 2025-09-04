"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Service = {
  title: string;
  description: string;
  icon: string; // path under /public, e.g. /icons/megaphone.svg
};

const services: Service[] = [
  {
    title: "Online Marketing",
    description:
      "In the new era of technology we look in the future with certainty and pride.",
    icon: "/images/icons/icon4.png",
  },
  {
    title: "Startup Business",
    description:
      "In the new era of technology we look in the future with certainty and pride.",
    icon: "/images/icons/icon5.png",
  },
  {
    title: "Business Growth",
    description:
      "In the new era of technology we look in the future with certainty and pride.",
    icon: "/images/icons/icon6.png",
  },
  {
    title: "Development",
    description:
      "In the new era of technology we look in the future with certainty and pride.",
    icon: "/images/icons/icon7.png",
  },
];

export default function ServicesSection() {
  return (
    <section aria-labelledby="services-heading" className="bg-[#EEF8FB]">
      <div className="mx-auto max-w-7xl px-4 my-6 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1, ease: 'easeOut' }}
               viewport={{once: true}}

            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl mt-5 font-extrabold tracking-tight text-slate-900"
          >
            We provide the best <span className="text-emerald-500">service</span> solutions.
          </motion.h2>

          <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{once: true}}
                className="mt-4 text-sm sm:text-base text-slate-600">
            We’re constantly pushing the boundaries of what’s possible and seeking new
            ways to improve our services and help our clients achieve their goals.
          </motion.p>
        </div>

        {/* Cards grid */}
        <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{once: true}}
           
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, idx) => (
            <li key={idx}>
              <article className="group h-full flex flex-col justify-between bg-white rounded-xl p-6 shadow-sm  ring-black/3 hover:shadow-md transition">
                <div className=" ">
                  <div className="flex-none">
                    <motion.div
                         initial={{ opacity: 0, x: 50 }}
                         animate={{ opacity: 1, x: 0 }}
                         transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                       
                    className="h-14 w-14 rounded-full mb-5 bg-emerald-500 flex items-center justify-center">
                      <Image
                        src={s.icon}
                        alt={`${s.title} icon`}
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    </motion.div>
                  </div>

                  <div className="flex-1">
                    <motion.h3
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                        delay: 0.9
                        }}
                        className="text-xl font-bold text-slate-900">{s.title}</motion.h3>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                        delay: 0.
                        }}
                        className="mt-3 text-sm text-slate-500">{s.description}</motion.p>
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center text-emerald-500 font-medium"
                    aria-label={`Learn more about ${s.title}`}
                  >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.1 }}
                        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                        viewport={{once: true}}
                        className="mr-2">Learn more</motion.span>
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </article>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
