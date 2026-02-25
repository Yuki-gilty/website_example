"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { galleryItems, type GalleryItem } from "@/lib/content";
import { XMarkIcon } from "@heroicons/react/24/outline";

export function GallerySection() {
  const [active, setActive] = useState<GalleryItem | null>(null);

  return (
    <>
      <Section id="gallery" label="Gallery" title="空気感まで写したスタイル">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {galleryItems.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.05}>
              <motion.button
                type="button"
                className="group relative block overflow-hidden rounded-[12px] border border-[color:var(--border-soft)] bg-[color:var(--bg-surface)]"
                onClick={() => setActive(item)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div
                  initial={{ scale: 1.04 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="relative h-32 w-full md:h-44"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={700}
                    height={500}
                    className="h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/48 via-black/10 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
                </motion.div>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </Section>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md px-4"
            aria-modal="true"
            role="dialog"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 12 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl rounded-[14px] border border-white/20 bg-[color:var(--bg-surface)]/98 p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                type="button"
                aria-label="閉じる"
                onClick={() => setActive(null)}
                className="absolute right-3 top-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-subtle transition-colors hover:border-white hover:text-main"
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.95 }}
              >
                <XMarkIcon className="h-4 w-4" aria-hidden="true" />
              </motion.button>
              <div className="relative overflow-hidden rounded-[10px]">
                <Image
                  src={active.src}
                  alt={active.alt}
                  width={1280}
                  height={860}
                  className="h-[270px] w-full object-cover md:h-[430px]"
                />
              </div>
              <p className="mt-3 text-xs text-subtle">{active.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
