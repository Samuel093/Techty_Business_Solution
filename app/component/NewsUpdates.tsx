"use client";

import { motion, useReducedMotion } from "framer-motion";
import ArticleCard from "./ArticleCard";
import { containerVariants, cardVariants } from "../animations/variants";

type Post = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  href: string;
};

// Demo posts (replace with API later)
const demoPosts: Post[] = [
  {
    id: 1,
    title: "5 reasons why Techty is the go‑to choice for small business",
    excerpt: "Let us manage your IT for you so that you can get back to doing what you do best",
    image: "/images/newsimg2.png",
    href: "/blogs",
  },
  {
    id: 2,
    title: "The future is now: Explore Techty’s AI‑Powered tools",
    excerpt: "Discover how we use AI to automate routine tasks and supercharge your team",
    image: "/images/newsimg1.png",
    href: "/blogs",
  },
  {
    id: 3,
    title: "Cybersecurity threats in 2025: How AI can keep you protecte",
    excerpt: "Our managed security stack helps you sleep better while we watch your perimeter",
    image: "/images/newsimg3.png",
    href: "/blogs",
  },
];

export default function NewsUpdates() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <motion.div
initial={{ opacity: 0, y: 12 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.5 }}
transition={{ duration: 0.10 }}
className="mx-auto mb-10 max-w-3xl text-center sm:mb-14"
>
<h2
id="news-heading"
className="text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl"
>
Here’s our latest updates from the{" "}
<span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
news
</span>
</h2>
</motion.div>

      <motion.ul
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants(!!prefersReducedMotion)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {demoPosts.map((post) => (
          <motion.li
            key={post.id}
            variants={cardVariants(!!prefersReducedMotion)}
          >
            <ArticleCard post={post} reducedMotion={!!prefersReducedMotion} />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}





