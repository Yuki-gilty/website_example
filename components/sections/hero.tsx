"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { SALON_NAME } from "@/lib/content";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const textVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative overflow-hidden border-b border-[color:var(--border-soft)] bg-[color:var(--bg-base)]">
      <Container className="relative flex min-h-[70vh] flex-col gap-10 py-16 md:flex-row md:items-center md:py-24">
        <div className="relative z-10 max-w-xl space-y-8">
          <motion.p
            className="text-xs uppercase tracking-[0.18em] text-subtle"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            Hair Salon — Tokyo Aoyama
          </motion.p>

          <motion.h1
            className="font-serif text-[2.1rem] leading-snug tracking-[0.08em] text-main md:text-[2.4rem]"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            {SALON_NAME}
            <span className="mt-1 block text-[0.95rem] font-normal tracking-[0.06em] text-subtle md:text-base">
              静かに、輪郭だけを研ぎ澄ますヘアサロン。
            </span>
          </motion.h1>

          <motion.p
            className="max-w-md text-sm leading-relaxed text-subtle md:text-base"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            毎日を少しだけ軽くするための髪型を、過剰な演出ではなく、
            さりげないバランスでつくります。
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          >
            <ButtonLink href="#access">予約へ</ButtonLink>
            <ButtonLink href="#gallery" intent="ghost">
              スタイルを見る
            </ButtonLink>
          </motion.div>

          <motion.div
            className="mt-6 flex gap-6 text-[11px] text-subtle"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          >
            <div>
              <p className="uppercase tracking-[0.18em] text-subtle/70">Hours</p>
              <p>Weekday 11:00–20:00</p>
              <p>Weekend 10:00–19:00</p>
            </div>
            <div>
              <p className="uppercase tracking-[0.18em] text-subtle/70">Place</p>
              <p>Aoyama, Tokyo</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="relative ml-auto h-[260px] w-full max-w-sm overflow-hidden rounded-[12px] border border-[color:var(--border-soft)] bg-[color:var(--bg-surface)] md:h-[360px]"
          initial={{ scale: prefersReducedMotion ? 1 : 1.05, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ 
            duration: prefersReducedMotion ? 0.0 : 1.3, 
            ease: [0.16, 1, 0.3, 1], 
            delay: 0.4 
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=85"
            alt="プロフェッショナルなヘアサロンの作業風景"
            fill
            priority
            sizes="(min-width: 1024px) 380px, 100vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
          <div className="pointer-events-none absolute bottom-4 left-4 text-[11px] text-subtle">
            <p className="font-serif tracking-[0.16em] text-main">Quiet Confidence</p>
            <p className="mt-1">LUXE / AOYAMA Studio</p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

