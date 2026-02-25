"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { SALON_NAME } from "@/lib/content";

const NAV_ITEMS = [
  { href: "#news", label: "News" },
  { href: "#concept", label: "Concept" },
  { href: "#menu", label: "Menu" },
  { href: "#stylists", label: "Stylist" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Voices" },
  { href: "#access", label: "Access" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -96 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky top-0 z-40 border-b border-[color:var(--border-soft)] transition-all duration-500 ${
        scrolled
          ? "bg-[color:var(--bg-base)]/86 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          : "bg-[color:var(--bg-base)]/60 backdrop-blur-md"
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-4 md:h-[4.4rem]">
        <Link href="/" className="flex items-baseline gap-2">
          <span
            className="text-sm tracking-[0.16em] text-main"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {SALON_NAME}
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.18em] text-subtle/80 md:block">
            Hair Salon
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-[11px] uppercase tracking-[0.12em] text-white/74 md:flex">
          {NAV_ITEMS.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 + 0.22, duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={isHome ? item.href : `/${item.href}`}
                onClick={(e) => {
                  if (!isHome) return;
                  e.preventDefault();
                  const target = document.querySelector(item.href);
                  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="relative transition-colors duration-300 hover:text-main after:absolute after:-bottom-[2px] after:left-0 after:h-[1px] after:w-0 after:bg-white/88 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink
            href="/reserve"
            intent="ghost"
            aria-label="予約ページへ移動"
            className="!px-4 !py-2 !text-[10px] !tracking-[0.12em] !text-white/70 !border-white/20"
          >
            予約へ
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--border-soft)] text-subtle transition-colors hover:border-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <XMarkIcon className="h-4 w-4" aria-hidden="true" /> : <Bars3Icon className="h-4 w-4" aria-hidden="true" />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-[color:var(--border-soft)] bg-[color:var(--bg-surface)]/96 md:hidden"
          >
            <Container className="py-4">
              <nav className="flex flex-col gap-3 text-xs uppercase tracking-[0.16em] text-subtle">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={isHome ? item.href : `/${item.href}`}
                    onClick={(e) => {
                      setOpen(false);
                      if (!isHome) return;
                      e.preventDefault();
                      const target = document.querySelector(item.href);
                      if (target) {
                        setTimeout(() => {
                          target.scrollIntoView({ behavior: "smooth", block: "start" });
                        }, 100);
                      }
                    }}
                    className="py-1 transition-colors duration-300 hover:text-main"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-4">
                <ButtonLink href="/reserve" fullWidth>
                  予約へ
                </ButtonLink>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
