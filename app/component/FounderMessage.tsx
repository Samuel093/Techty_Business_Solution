import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface FounderMessageProps {
  /** Path to the image inside /public (default: /images/founder.jpg) */
  imageSrc?: string;
  /** Founder name shown in the signature */
  name?: string;
  /** Founder role shown below name */
  role?: string;
  /** Tailwind class to color the "Founder" word in the heading */
  highlightColorClass?: string;
}

export default function FounderMessage({
  imageSrc = "/images/md1.png",
  name = "John Williams",
  role = "Founder, CEO",
  highlightColorClass = "text-emerald-500",
}: FounderMessageProps) {
  return (
    <section aria-labelledby="founder-heading" className="mx-auto max-w-7xl px-4 py-10 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        {/* Text column */}
        <div>
          <motion.h2
             initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{once: true}}  
          id="founder-heading" className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">
            Message from <span className={highlightColorClass}>Founder</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{once: true}}
            className="space-y-6 text-gray-700 leading-relaxed tracking-wide">
            <p>
              I would like to take a moment to express my sincere gratitude for choosing our IT
              services. As the founder of this company, I am proud to say that we are committed to
              providing the best possible solutions for your business needs.
            </p>

            <p>
              We understand the challenges that come with managing an enterprise in the digital age,
              and we are dedicated to delivering innovative and reliable IT services to help you
              navigate these challenges with ease.
            </p>

            <p>
              Our team of experts is constantly working to improve our services and stay up-to-date
              with the latest technological advancements. We strive to provide personalized
              solutions that cater to your specific requirements, ensuring that your business
              operations run smoothly and efficiently.
            </p>

            <div className="mt-6">
              <p className="font-semibold text-lg text-gray-900">{name}</p>
              <p className="text-sm text-gray-500">{role}</p>
            </div>
          </motion.div>
        </div>

        {/* Image column */}
        <div className="w-full flex justify-center lg:justify-end">
          <motion.div
              initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}

            className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl overflow-hidden rounded-md shadow-xl
              transform transition-transform duration-300 hover:scale-105 will-change-transform motion-reduce:transform-none"
          >
            {/* parent container determines height at breakpoints so next/image with `fill` works reliably */}
            <div className="relative w-full h-64 sm:h-96 lg:h-[36rem]">
              <Image
                 src={imageSrc}
                 alt={`${name} — ${role}`}
                 fill
                 sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 40vw"
                 className="object-cover object-top"
                 priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
