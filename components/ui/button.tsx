"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ComponentProps } from "react";

const MotionLink = motion(Link);

type CommonButtonProps = {
  intent?: "primary" | "ghost";
  subtle?: boolean;
  fullWidth?: boolean;
  className?: string;
};

function baseButtonClasses({
  intent = "primary",
  subtle,
  fullWidth,
  className,
}: CommonButtonProps) {
  const intentClasses =
    intent === "primary"
      ? "bg-white/[0.07] text-main border-white/60"
      : "bg-transparent text-white/76 border-white/22";

  const subtleClasses = subtle ? "bg-transparent" : "";
  const widthClasses = fullWidth ? "w-full" : "";

  return [
    "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-[8px]",
    "border px-5 py-2 text-[11px] font-semibold tracking-[0.12em] uppercase backdrop-blur-sm",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--text-main)]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg-base)]",
    intentClasses,
    subtleClasses,
    widthClasses,
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");
}

type MotionConflictProps =
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onDragStart"
  | "onDrag"
  | "onDragEnd"
  | "onHoverStart"
  | "onHoverEnd"
  | "onTap"
  | "onTapStart"
  | "onTapCancel";

type ButtonProps = CommonButtonProps & Omit<ComponentProps<"button">, MotionConflictProps>;

export function Button({ intent, subtle, fullWidth, className, ...props }: ButtonProps) {
  return (
    <motion.button
      className={baseButtonClasses({ intent, subtle, fullWidth, className })}
      whileHover={{
        y: -1.5,
        scale: 1.008,
        borderColor:
          intent === "primary" ? "rgba(255,255,255,0.86)" : "rgba(255,255,255,0.42)",
        color: "rgba(250,250,254,1)",
        backgroundColor:
          intent === "primary" ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.03)",
        boxShadow:
          intent === "primary"
            ? "0 10px 22px rgba(0, 0, 0, 0.34)"
            : "0 8px 18px rgba(0, 0, 0, 0.24)",
        transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
      }}
      whileTap={{ y: 0, scale: 0.985, transition: { duration: 0.1 } }}
      {...props}
    >
      <span className="relative z-10">{props.children}</span>
    </motion.button>
  );
}

type ButtonLinkProps = CommonButtonProps &
  { href: string } &
  Omit<ComponentProps<typeof Link>, MotionConflictProps>;

export function ButtonLink({
  intent,
  subtle,
  fullWidth,
  className,
  href,
  children,
  ...props
}: ButtonLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <MotionLink
      href={href}
      onClick={handleClick}
      className={baseButtonClasses({ intent, subtle, fullWidth, className })}
      whileHover={{
        y: -1.5,
        scale: 1.008,
        borderColor:
          intent === "primary" ? "rgba(255,255,255,0.86)" : "rgba(255,255,255,0.42)",
        color: "rgba(250,250,254,1)",
        backgroundColor:
          intent === "primary" ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.03)",
        boxShadow:
          intent === "primary"
            ? "0 10px 22px rgba(0, 0, 0, 0.34)"
            : "0 8px 18px rgba(0, 0, 0, 0.24)",
        transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
      }}
      whileTap={{ y: 0, scale: 0.985, transition: { duration: 0.1 } }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </MotionLink>
  );
}
