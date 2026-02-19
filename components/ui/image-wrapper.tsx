"use client";

import { motion } from "framer-motion";
import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type ImageWrapperProps = ImageProps & {
  className?: string;
};

export function ImageWrapper({ className, ...props }: ImageWrapperProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      className={`relative overflow-hidden ${className || ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: loaded ? 1 : 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <Image
        {...props}
        onLoad={() => setLoaded(true)}
        className={`transition-opacity duration-500 ${className ?? ""}`}
      />
    </motion.div>
  );
}
