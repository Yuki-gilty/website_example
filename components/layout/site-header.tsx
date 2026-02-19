"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { SALON_NAME } from "@/lib/content";

const NAV_ITEMS = [
  { href: "#concept", label: "Concept" },
  { href: "#menu", label: "Menu" },
  { href: "#stylists", label: "Stylist" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#access", label: "Access" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky top-0 z-40 border-b border-[color:var(--border-soft)]/70 backdrop-blur-sm transition-all duration-500 ease-out ${
        scrolled ? "bg-[color:var(--bg-base)]/95 backdrop-blur-md" : "bg-[color:var(--bg-base)]/80 backdrop-blur-sm"
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-4 md:h-18">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-serif text-sm tracking-[0.18em] text-main">
            {SALON_NAME}
          </span>
          <span className="hidden text-[11px] uppercase tracking-[0.18em] text-subtle/80 md:block">
            Hair Salon
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.18em] text-subtle md:flex">
          {NAV_ITEMS.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 + 0.2, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector(item.href);
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="relative transition-colors duration-300 hover:text-main after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[color:var(--accent)] after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href="#access">予約へ</ButtonLink>
        </div>

        <button
          type="button"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--border-soft)] text-subtle transition-colors hover:border-[color:var(--accent)]/70 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <XMarkIcon className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Bars3Icon className="h-4 w-4" aria-hidden="true" />
          )}
        </button>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-t border-[color:var(--border-soft)] bg-[color:var(--bg-base)]/98 overflow-hidden"
          >
        <Container className="py-4">
          <nav className="flex flex-col gap-3 text-xs tracking-[0.16em] uppercase text-subtle">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
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
            <ButtonLink href="#access" fullWidth>
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

