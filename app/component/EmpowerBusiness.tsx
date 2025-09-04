"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { motion } from "framer-motion";

type Step = { n: string; title: string; blurb: string };

const STEPS: Step[] = [
  {
    n: "01",
    title: "Collect Ideas",
    blurb: "Creating or improving products to meet our user needs.",
  },
  {
    n: "02",
    title: "Data Analysis",
    blurb: "Creating or improving products to meet our user needs.",
  },
  {
    n: "03",
    title: "Analyze Product",
    blurb: "Creating or improving products to meet our user needs.",
  },
];

export default function EmpowerBusiness() {
  return (
    <section
      aria-labelledby="empower-heading"
      className="mx-auto max-w-7xl  px-4 py-10 md:py-14 sm:px-6 lg:px-8"
    >
      {/* Heading */}
      <motion.div
          initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{once: true}}
      
      className="text-center   md:mb-20">
        <h2
          id="empower-heading"
          className="text-3xl  font-semibold leading-tight text-slate-900 sm:text-4xl md:text-5xl"
        >
          Empower your business
          <br />
          with cutting-edge{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
            solutions.
          </span>
        </h2>
      </motion.div>

      {/* Steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{once: true}}
      
      className="mt-10 border-b border-slate-200 pb-6">
        <div className="grid gap-8 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="flex items-start gap-4">
                <div className="shrink-0 text-4xl font-semibold leading-none text-emerald-500 sm:text-5xl">
                  {s.n}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-[36ch] text-sm text-slate-600">
                    {s.blurb}
                  </p>
                </div>
              </div>

              {/* Subtle green underline on first item (like the mock) */}
              {i === 0 && (
                <span
                  aria-hidden
                  className="pointer-events-none mt-4 block h-0.5 w-1/2 bg-emerald-400"
                />
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Image + Content */}
      <div className="mt-10 grid items-start gap-8 lg:mt-12 lg:grid-cols-12">
        {/* Image */}
        <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileTap={{ scale: 0. }}
              viewport={{once: true}}
        
        className="lg:col-span-6">
          <div className="group relative overflow-hidden rounded-3xl shadow-lg ring-1 ring-slate-900/10">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/empowerbusiness.png"
                alt="Hands holding a phone while working on a laptop."
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                priority={false}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="lg:col-span-6">
          <motion.h3
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1, ease: 'easeOut' }}
           viewport={{once: true}}
          className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Collect Ideas
          </motion.h3>

          <motion.p
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{once: true}}
         
          className="mt-3 max-w-prose text-slate-600 sm:text-lg">
            With our Techty company, you can create landing pages that convert
            more visitors than any other website. You can easily create a page
            using a variety of unique blocks.
          </motion.p>

          <motion.ul
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.5 }}
             viewport={{once: true}}
             className="mt-6 space-y-4 text-slate-800">
            {[
              "We collect ideas from different design inspirations,",
              "Analysis data for any kind of corrections.",
              "Finalize the product for the production to be done.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                {/* Check icon (inline SVG) */}
                <svg
                  className="mt-1 h-5 w-5 flex-none"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle cx="10" cy="10" r="9" className="stroke-emerald-500" strokeWidth="2" />
                  <path
                    d="M6 10.5l2.5 2.5L14 8"
                    className="stroke-emerald-600"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="leading-7">{item}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.8 }}
             viewport={{once: true}}
          className="mt-8">
            <Link
              href="#request-demo"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition
                         hover:bg-emerald-600 active:scale-[.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/30"
            >
              Request a Free Demo
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
