"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -15% 0px",
    amount: 0.2,
  });
  const prefersReducedMotion = useReducedMotion();

  const visible = prefersReducedMotion 
    ? { opacity: 1, y: 0 } 
    : { opacity: 1, y: 0, scale: 1 };
  const hidden = prefersReducedMotion 
    ? { opacity: 1, y: 0 } 
    : { opacity: 0, y: 20, scale: 0.98 };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={hidden}
      animate={isInView ? visible : hidden}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: prefersReducedMotion ? 0 : delay,
      }}
    >
      {children}
    </motion.div>
  );
}

