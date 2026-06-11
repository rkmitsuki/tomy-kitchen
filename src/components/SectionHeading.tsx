"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl ${className}`}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      ) : null}
      <h1 className="text-3xl font-extrabold tracking-normal text-secondary sm:text-4xl lg:text-5xl">
        {title}
      </h1>
      {subtitle ? <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{subtitle}</p> : null}
    </motion.div>
  );
}
