"use client";

import Image from "next/image";
import LogoTicker from "./LogoTicker";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-[#F0F8FF]"
    >
    
      <div className="mx-auto max-w-7xl mt-10 px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Main Grid */}
        <div className="grid flex-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">
          {/* Left column */}
          <div>
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl md:text-5xl"
            >
              Secure <span className="text-emerald-500">business</span>
              <br /> with Techty security.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-5 max-w-xl text-slate-600 sm:text-lg"
            >
              We have considered our solutions to support every stage of your
              growth. We are the fastest and easiest way to launch an attractive
              and feature-complete SaaS showcase.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-7 flex flex-wrap items-center gap-4"
            >
              <a
                href="#demo"
                className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600"
              >
                Request a Free Demo
              </a>
              <a
                href="#expert"
                className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
              >
                Hire an expert
              </a>
            </motion.div>
          </div>

          {/* Right column */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="rounded-2xl border border-slate-200 bg-white p-2 shadow-lg"
            >
              <Image
                src="/images/heroimg1.png"
                alt="Professional working at laptop"
                width={680}
                height={420}
                className="h-auto w-full rounded-xl object-cover"
                priority
              />
            </motion.div>

            {/* Trustpilot */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <span className="inline-block rounded bg-emerald-500 px-2 py-0.5 text-white">
                  ★
                </span>
                Trustpilot
              </div>
              <div className="flex items-center text-amber-500">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i} className="text-lg leading-none">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-sm text-slate-600">4900+ • 5 stars</p>
            </motion.div>
          </div>
        </div>

        {/* Logos row */}
        <div className="mt-12 grid grid-cols-12 items-center gap-6">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="col-span-12 md:col-span-3 text-sm font-medium uppercase tracking-wide text-slate-700"
          >
            Thousands of <br /> businesses use Techty
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-9"
          >
            <LogoTicker />
          </motion.div>
        </div>
      </div>
    </section>
  );
}


