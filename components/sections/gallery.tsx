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
      <Section id="gallery" label="Gallery" title="空気ごと写したスナップ">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {galleryItems.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.06}>
              <motion.button
                type="button"
                className="group relative block overflow-hidden rounded-[8px] border border-[color:var(--border-soft)] bg-[color:var(--bg-surface)]"
                onClick={() => setActive(item)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="overflow-hidden rounded-[6px]">
                  <motion.div
                    initial={{ scale: 1.05 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative h-32 w-full md:h-40"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </motion.div>
                </div>
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
            aria-modal="true"
            role="dialog"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl rounded-[10px] border border-[color:var(--border-soft)] bg-[color:var(--bg-surface)]/98 p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                type="button"
                aria-label="閉じる"
                onClick={() => setActive(null)}
                className="absolute right-3 top-3 z-10 inline-flex h-7 w-7 items-center justify-center rounded-full border border-[color:var(--border-soft)] text-subtle transition-all duration-300 hover:border-[color:var(--accent)]/70 hover:bg-[color:var(--bg-surface)] hover:scale-110"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
              >
                <XMarkIcon className="h-4 w-4" aria-hidden="true" />
              </motion.button>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="relative overflow-hidden rounded-[6px]"
              >
                <Image
                  src={active.src}
                  alt={active.alt}
                  width={960}
                  height={640}
                  className="h-[260px] w-full object-cover md:h-[360px]"
                />
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-3 text-xs text-subtle"
              >
                {active.alt}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

