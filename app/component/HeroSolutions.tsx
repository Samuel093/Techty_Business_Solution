"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { motion } from "framer-motion";

export default function HeroSolutions() {
  return (
    <section
      aria-labelledby="solutions-heading"
      className="mx-auto max-w-7xl px-4 py-16 md:my-12 my-5  sm:px-6 lg:px-8"
    >
      <div className="grid items-center gap-10 lg:grid-cols-12">
        {/* Left column — text */}
        <div className="lg:col-span-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{once:true}}
            id="solutions-heading"
            className="text-3xl font-semibold leading-tight text-slate-900 sm:text-5xl md:text-5xl"
          >
            Our most priority is to
            <br />
            provide the effective{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
              solutions.
            </span>
          </motion.h1>

          <motion.p
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1, ease: 'easeOut' }}
               viewport={{once: true}}
          className="mt-5 max-w-xl text-slate-600 sm:text-lg">
            With a library full of thousands of templates to choose from, go
            idea to launch in minutes. Try uploading your own for sale.
          </motion.p>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.5 }}
             viewport={{once: true}}
          className="mt-8">
            <Link
              href="#request-demo"
              className="block w-full max-w-xs rounded-xl bg-slate-900 px-4 py-3 text-center text-white transition
                         hover:bg-slate-800 active:scale-[.98] focus-visible:outline-none
                         focus-visible:ring-2 focus-visible:ring-slate-900/30"
            >
              Request a Free Demo
            </Link>
          </motion.div>
        </div>

        {/* Right column — image with zoom + floating stat card */}
        <div className="relative lg:col-span-6">
          <motion.div
                 initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        delay: 0.10
                                    }}
          className="group relative overflow-hidden rounded-3xl shadow-lg ring-1 ring-slate-900/10">
            {/* Maintain aspect ratio on all screens */}
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/herosolution.png"
                alt="Person working on laptop with a glass of water on the desk."
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 560px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </motion.div>
          {/* Floating metric card */}
          <motion.aside
               initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.1 }}
                            viewport={{once: true}}

            aria-label="Project revenue preview card"
            className="absolute -bottom-12 left-4 right-auto w-[min(10%,28rem)] md:w-[min(80%,28rem)] rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-900/10
                       max-sm:left-4 max-sm:right-4 max-sm:w-auto animate-float"
          >
            <div className="text-2xl md:text-4xl font-bold tracking-tight text-slate-900">
              $946K
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              As a translator, I want to integrate Crowdin webhook to notify
              translators about changed strings.
            </p>
            <div className="mt-4 inline-flex rounded-lg bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
              Refactoring
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
