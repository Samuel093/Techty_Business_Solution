'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

interface TechtyBlogHeroProps {
  /** Path to the featured image inside /public (default: /images/techty-blog-hero.jpg) */
  featureImage?: string
}

export default function TechtyBlogHero({ featureImage = '/images/blog.png' }: TechtyBlogHeroProps) {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-gray-50">
      {/* HERO HEADING */}
      <section className="mx-auto max-w-7xl px-4">
        <div className="py-10 sm:py-14 md:py-16 mt-14 md:mt-10 text-center">
          <motion.h1
                   initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                viewport={{once: true}}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold 
          tracking-tight text-gray-900">Our Blog</motion.h1>
          <motion.p
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{
                       delay: 0.10
                   }}
             className="mx-auto mt-4 max-w-3xl text-base sm:text-lg text-gray-500">
            We’re constantly pushing the boundaries of what’s possible and seeking new ways to improve our
            services.
          </motion.p>
        </div>

        {/* FEATURED POST CARD */}
        <motion.article
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
             className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image side */}
            <div className="relative h-56 sm:h-72 md:h-full md:min-h-[20rem] lg:min-h-[22rem]">
              <Image
                src={featureImage}
                alt="Team working in a modern office on computers"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Content side */}
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-gray-500 text-sm">May 30, 2023</p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold leading-tight text-gray-900">
                5 reasons why Techty is the go-to choice for small business.
              </h2>
              <p className="mt-4 text-gray-600">
                Let us manage your IT for you so that you can get back to doing what you do best.
              </p>
            </div>
          </div>
        </motion.article>

        <div className="h-10" />
      </section>
    </header>
  )
}
