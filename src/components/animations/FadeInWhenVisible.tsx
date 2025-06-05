"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "zoom";
  delay?: number;
};

const directionVariants = {
  up: { y: 50, opacity: 0 },
  down: { y: -50, opacity: 0 },
  left: { x: 50, opacity: 0 },
  right: { x: -50, opacity: 0 },
  zoom: { scale: 0.8, opacity: 0 },
};

export const FadeInWhenVisible = ({
  children,
  direction = "up",
  delay = 0,
}: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={directionVariants[direction]}
      animate={inView ? { x: 0, y: 0, scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};
