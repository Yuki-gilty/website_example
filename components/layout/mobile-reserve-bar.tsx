"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button";

export function MobileReserveBar() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
      className="fixed inset-x-0 bottom-0 z-30 border-t border-[color:var(--border-soft)] bg-[color:var(--bg-base)]/96 backdrop-blur-sm md:hidden"
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-6 py-3">
        <div className="flex flex-col text-[10px] leading-snug text-subtle">
          <span className="uppercase tracking-[0.16em] text-subtle/80">
            Reservation
          </span>
          <span>混雑の少ない時間帯もご案内できます。</span>
        </div>
        <ButtonLink href="#access" className="whitespace-nowrap px-3 py-1.5 text-[10px]">
          予約へ
        </ButtonLink>
      </div>
    </motion.div>
  );
}

