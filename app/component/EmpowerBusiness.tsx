"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

type Step = {
  n: string;
  title: string;
  blurb: string;
  image: string;
  description: string;
  checklist: string[];
  button: string;
};

const STEPS: Step[] = [
  {
    n: "01",
    title: "Collect Ideas",
    blurb: "Creating or improving products to meet our user needs.",
    image: "/images/empowerbusiness.png",
    description:
      "With our Techty company, you can create landing pages that convert more visitors than any other website. You can easily create a page using a variety of unique blocks.",
    checklist: [
      "We collect ideas from different design inspirations,",
      "Analysis data for any kind of corrections.",
      "Finalize the product for the production to be done.",
    ],
    button: "Request a Free Demo",
  },
  {
    n: "02",
    title: "Data Analysis",
    blurb: "Creating or improving products to meet our user needs.",
    image: "/images/data-analysis.png",
    description:
      "We analyze your business data to uncover patterns, optimize decisions, and drive growth.",
    checklist: [
      "Advanced analytics to identify opportunities.",
      "Data cleaning and correction.",
      "Generate insights for informed strategies.",
    ],
    button: "Start Data Analysis",
  },
  {
    n: "03",
    title: "Analyze Product",
    blurb: "Creating or improving products to meet our user needs.",
    image: "/images/final.png",
    description:
      "We help refine your product through research, testing, and market feedback.",
    checklist: [
      "Comprehensive product evaluation.",
      "User feedback collection.",
      "Refinement for market adoption.",
    ],
    button: "Analyze with Us",
  },
];

export default function EmpowerBusiness() {
  const [active, setActive] = React.useState("01");
  const activeStep = STEPS.find((s) => s.n === active)!;

  return (
    <section
      aria-labelledby="empower-heading"
      className="mx-auto max-w-7xl px-4 py-10 md:py-16 sm:px-6 lg:px-8"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center md:mb-20"
      >
        <h2
          id="empower-heading"
          className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl md:text-5xl"
        >
          Empower your business
          <br />
          with cutting-edge{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
            solutions.
          </span>
        </h2>
      </motion.div>

      {/* Tabs */}
      <div className="mt-10 border-b border-slate-200">
        <div className="grid gap-8 md:grid-cols-3">
          {STEPS.map((s) => (
            <button
              key={s.n}
              onClick={() => setActive(s.n)}
              className="relative pb-6 text-left"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`shrink-0 text-4xl font-semibold sm:text-5xl ${
                    active === s.n ? "text-emerald-500" : "text-slate-700"
                  }`}
                >
                  {s.n}
                </div>
                <div>
                  <h3
                    className={`text-base font-semibold ${
                      active === s.n ? "text-emerald-500" : "text-slate-900"
                    }`}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-[36ch] text-sm text-slate-600">
                    {s.blurb}
                  </p>
                </div>
              </div>

              {/* underline indicator aligned with border */}
              {active === s.n && (
                <span
                  aria-hidden
                  className="absolute bottom-0 left-0 block h-0.5 w-full bg-emerald-400"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Active Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep.n}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.5 }}
          className="mt-10 grid items-start gap-8 lg:mt-12 lg:grid-cols-12"
        >
          {/* Image */}
          <div className="lg:col-span-6">
            <div className="group relative overflow-hidden rounded-3xl shadow-lg ring-1 ring-slate-900/10">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={activeStep.image}
                  alt={activeStep.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-6">
            <h3 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              {activeStep.title}
            </h3>
            <p className="mt-3 max-w-prose text-slate-600 sm:text-lg">
              {activeStep.description}
            </p>
            <ul className="mt-6 space-y-4 text-slate-800">
              {activeStep.checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-5 w-5 flex-none"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="9"
                      className="stroke-emerald-500"
                      strokeWidth="2"
                    />
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
            </ul>
            <div className="mt-8">
              <Link
                href="#request-demo"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600 active:scale-[.98]"
              >
                {activeStep.button}
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

