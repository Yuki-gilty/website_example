"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { SALON_NAME } from "@/lib/content";

const HERO_VIDEO_URL = process.env.NEXT_PUBLIC_HERO_VIDEO_URL?.trim();

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const play = () => video.play().catch(() => {});
    video.addEventListener("canplay", play);
    if (video.readyState >= 3) play();
    return () => video.removeEventListener("canplay", play);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, prefersReducedMotion ? 1 : 1.08],
  );
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, prefersReducedMotion ? 0 : -58],
  );
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.78]);

  const textVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[color:var(--bg-base)]">
      <motion.video
        ref={videoRef}
        style={{ scale: videoScale }}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        {...(HERO_VIDEO_URL
          ? { src: HERO_VIDEO_URL }
          : {
              children: (
                <>
                  <source src="/hero-bg.webm" type="video/webm" />
                  <source src="/hero-bg.mp4" type="video/mp4" />
                </>
              ),
            })}
        poster="/hero-bg-poster.jpg"
        preload="metadata"
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/42 via-black/56 to-[color:var(--bg-base)]/94" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(68%_56%_at_18%_82%,rgba(0,0,0,0.82),transparent_72%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(56%_46%_at_84%_80%,rgba(0,0,0,0.74),transparent_74%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(46%_36%_at_26%_18%,rgba(255,255,255,0.09),transparent_72%)]" />
      <div className="pointer-events-none absolute inset-0 bg-black/26 md:hidden" />

      <motion.div style={{ y: contentY, opacity: contentOpacity }}>
        <Container className="relative z-10 flex min-h-[calc(100vh-4rem)] flex-col gap-9 py-14 md:min-h-[calc(100vh-4.4rem)] md:flex-row md:items-end md:justify-between md:gap-12 md:py-24">
          <div className="max-w-[44rem] space-y-6 md:space-y-7">
            <motion.p
              className="inline-flex items-center rounded-full border border-white/22 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white/88 backdrop-blur-sm"
              initial="hidden"
              animate="visible"
              variants={textVariants}
              transition={{ duration: 0.68, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              Hair Salon / Tokyo Aoyama
            </motion.p>

            <motion.h1
              className="text-[2.45rem] leading-[1.08] tracking-[0.04em] text-main md:text-[3.95rem]"
              style={{
                fontFamily: "var(--font-display)",
                textShadow: "0 2px 10px rgba(0,0,0,0.42)",
              }}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              transition={{ duration: 0.78, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
            >
              {SALON_NAME}
              <span
                className="mt-3 block text-[0.93rem] font-normal tracking-[0.05em] text-white/86 md:text-[1.03rem]"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                静かに、かっこよく。余計なものを削ぎ落としたデザイン。
              </span>
            </motion.h1>

            <motion.p
              className="max-w-xl text-sm leading-[1.84] text-white/76 md:text-base"
              initial="hidden"
              animate="visible"
              variants={textVariants}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
            >
              髪質・骨格・ライフスタイルを丁寧に読み取り、作り込みすぎないのに
              印象が残るヘアデザインを提供します。
            </motion.p>

            <motion.div
              className="flex flex-col gap-3 sm:flex-row sm:items-center"
              initial="hidden"
              animate="visible"
              variants={textVariants}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.36 }}
            >
              <ButtonLink
                href="/reserve"
                aria-label="予約ページへ移動"
                className="min-h-11 px-6 !border-white/80 !bg-white/14 !text-white"
              >
                予約へ
              </ButtonLink>
              <ButtonLink
                href="#gallery"
                intent="ghost"
                aria-label="スタイルギャラリーへ移動"
                className="min-h-11 px-6 !border-white/24 !text-white/82"
              >
                スタイルを見る
              </ButtonLink>
            </motion.div>
          </div>

          <motion.aside
            className="relative w-full max-w-[394px] rounded-[18px] border border-white/23 bg-black/34 p-6 text-main shadow-[0_24px_55px_rgba(0,0,0,0.42)] backdrop-blur-xl"
            initial={{ scale: prefersReducedMotion ? 1 : 1.03, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 1.05,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.45,
            }}
          >
            <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
            <p className="text-[10px] uppercase tracking-[0.18em] text-white/70">Reservation</p>
            <p
              className="mt-3 text-[1.34rem] tracking-[0.02em] text-main"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              落ち着いた個室空間
            </p>
            <p className="mt-3 text-sm leading-[1.8] text-white/77">
              初回カウンセリングは30分。髪の悩みと希望を言語化し、最適なメニューを提案します。
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 text-[11px]">
              <div className="rounded-[12px] border border-white/20 bg-white/[0.03] px-4 py-3">
                <p className="uppercase tracking-[0.14em] text-white/62">Weekday</p>
                <p className="mt-1 text-[12px] text-main">11:00 - 20:00</p>
              </div>
              <div className="rounded-[12px] border border-white/20 bg-white/[0.03] px-4 py-3">
                <p className="uppercase tracking-[0.14em] text-white/62">Weekend</p>
                <p className="mt-1 text-[12px] text-main">10:00 - 19:00</p>
              </div>
            </div>
          </motion.aside>
        </Container>
      </motion.div>
    </section>
  );
}
