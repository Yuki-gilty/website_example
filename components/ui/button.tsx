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
      ? "bg-[color:var(--accent)] text-[color:var(--bg-base)]"
      : "bg-transparent text-main";

  const subtleClasses = subtle
    ? "border-[color:var(--border-soft)] bg-[color:var(--bg-base)]"
    : "border-[color:var(--border-subtle)] bg-[color:var(--bg-surface)]";

  const widthClasses = fullWidth ? "w-full" : "";

  return [
    "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-[8px]",
    "border px-4 py-2 text-[11px] font-medium tracking-[0.16em] uppercase",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg-base)]",
    intentClasses,
    subtleClasses,
    widthClasses,
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");
}

const MOTION_CONFLICT_PROPS = [
  "onAnimationStart",
  "onAnimationEnd",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onHoverStart",
  "onHoverEnd",
  "onTap",
  "onTapStart",
  "onTapCancel",
] as const;

type ButtonProps = CommonButtonProps &
  Omit<ComponentProps<"button">, (typeof MOTION_CONFLICT_PROPS)[number]>;

export function Button({ intent, subtle, fullWidth, className, ...props }: ButtonProps) {
  return (
    <motion.button
      className={baseButtonClasses({ intent, subtle, fullWidth, className })}
      whileHover={{
        y: -2,
        scale: 1.02,
        boxShadow: intent === "primary"
          ? "0 4px 16px rgba(198, 165, 106, 0.25), 0 0 0 1px rgba(198, 165, 106, 0.1)"
          : "0 2px 8px rgba(198, 165, 106, 0.15), 0 0 0 1px rgba(198, 165, 106, 0.2)",
        borderColor: intent === "primary"
          ? "rgba(198, 165, 106, 1)"
          : "rgba(198, 165, 106, 0.5)",
        backgroundColor: intent === "primary"
          ? "rgba(198, 165, 106, 0.95)"
          : "rgba(17, 17, 20, 0.6)",
        transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
      }}
      whileTap={{
        y: 0,
        scale: 0.98,
        transition: { duration: 0.1 },
      }}
      style={{
        boxShadow: intent === "primary"
          ? "0 0 0 0 rgba(198, 165, 106, 0)"
          : "0 0 0 0 rgba(198, 165, 106, 0)",
      }}
      animate={{
        boxShadow: intent === "primary"
          ? "0 0 0 0 rgba(198, 165, 106, 0)"
          : "0 0 0 0 rgba(198, 165, 106, 0)",
      }}
      transition={{
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
      }}
      {...props}
    >
      <motion.span
        className="relative z-10"
        initial={{ opacity: 1 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {props.children}
      </motion.span>
      {intent === "primary" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
        />
      )}
    </motion.button>
  );
}

type ButtonLinkProps = CommonButtonProps &
  { href: string } &
  Omit<ComponentProps<typeof Link>, (typeof MOTION_CONFLICT_PROPS)[number]>;

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
        y: -2,
        scale: 1.02,
        boxShadow: intent === "primary"
          ? "0 4px 16px rgba(198, 165, 106, 0.25), 0 0 0 1px rgba(198, 165, 106, 0.1)"
          : "0 2px 8px rgba(198, 165, 106, 0.15), 0 0 0 1px rgba(198, 165, 106, 0.2)",
        borderColor: intent === "primary"
          ? "rgba(198, 165, 106, 1)"
          : "rgba(198, 165, 106, 0.5)",
        backgroundColor: intent === "primary"
          ? "rgba(198, 165, 106, 0.95)"
          : "rgba(17, 17, 20, 0.6)",
        transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
      }}
      whileTap={{
        y: 0,
        scale: 0.98,
        transition: { duration: 0.1 },
      }}
      style={{
        boxShadow: intent === "primary"
          ? "0 0 0 0 rgba(198, 165, 106, 0)"
          : "0 0 0 0 rgba(198, 165, 106, 0)",
      }}
      animate={{
        boxShadow: intent === "primary"
          ? "0 0 0 0 rgba(198, 165, 106, 0)"
          : "0 0 0 0 rgba(198, 165, 106, 0)",
      }}
      transition={{
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
      }}
      {...props}
    >
      <motion.span
        className="relative z-10"
        initial={{ opacity: 1 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>
      {intent === "primary" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
        />
      )}
    </MotionLink>
  );
}


