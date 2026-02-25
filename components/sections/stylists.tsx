"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { stylists } from "@/lib/content";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export function StylistSection() {
  return (
    <Section id="stylists" label="Stylist" title="髪の個性を引き出すスタイリスト">
      <div className="grid gap-6 md:grid-cols-2">
        {stylists.map((stylist, index) => (
          <Reveal
            key={stylist.name}
            delay={index * 0.08}
            className="group flex gap-4 rounded-[12px] border border-[color:var(--border-soft)] bg-[color:var(--bg-surface)]/88 p-4 transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--border-subtle)] hover:shadow-[0_14px_28px_rgba(0,0,0,0.35)]"
          >
            <motion.div
              className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[10px] bg-[color:var(--bg-surface-soft)]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src={`https://images.unsplash.com/photo-${stylist.photoId || "1524504388940-b1c1722653e1"}?auto=format&fit=crop&w=240&q=85`}
                alt={stylist.name}
                fill
                sizes="80px"
                className="object-cover"
              />
            </motion.div>
            <div className="flex flex-1 flex-col justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-subtle/80">{stylist.role}</p>
                <p className="mt-1 text-sm font-medium text-main">{stylist.name}</p>
                <p className="mt-2 text-xs text-subtle">{stylist.specialty}</p>
              </div>
              {stylist.instagram && (
                <motion.a
                  href={stylist.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-subtle transition-colors hover:text-main"
                  whileHover={{ x: 2, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  Instagram
                  <ArrowUpRightIcon className="h-3 w-3" aria-hidden="true" />
                </motion.a>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
