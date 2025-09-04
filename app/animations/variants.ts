// src/components/animations/variants.ts
import { Variants } from "framer-motion";

/**
 * Container variant
 * - staggerChildren only if reducedMotion = false
 */
export const containerVariants = (reducedMotion: boolean): Variants =>
  reducedMotion
    ? {}
    : {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.2 },
        },
      };

/**
 * Card variant
 * - spring animation if reducedMotion = false
 */
export const cardVariants = (reducedMotion: boolean): Variants =>
  reducedMotion
    ? {}
    : {
        hidden: { opacity: 0, y: 30 },
        show: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 240, damping: 22 },
        },
      };
