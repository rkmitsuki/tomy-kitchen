"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/location", label: "Location" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    return scrollY.on("change", (latest) => setIsScrolled(latest > 24));
  }, [scrollY]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const solidNav = !isHome || isScrolled || isOpen;

  return (
    <motion.header
      animate={{
        backgroundColor: solidNav ? "rgba(255,255,255,0.96)" : "rgba(255,255,255,0)",
        boxShadow: solidNav ? "0 12px 32px rgba(26,26,46,0.08)" : "0 0 0 rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.25 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-transparent backdrop-blur-md"
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className={`text-xl font-extrabold tracking-normal transition-colors ${
            solidNav ? "text-primary" : "text-white"
          }`}
          aria-label="Tomy's Kitchen home"
        >
          Tomy&apos;s Kitchen
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-semibold transition-colors ${
                  solidNav ? "text-secondary hover:text-primary" : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
                {active ? (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-accent"
                  />
                ) : null}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className={`grid h-11 w-11 place-items-center rounded-full border md:hidden ${
            solidNav
              ? "border-border text-secondary hover:bg-background"
              : "border-white/30 text-white hover:bg-white/10"
          }`}
        >
          {isOpen ? <FaTimes aria-hidden /> : <FaBars aria-hidden />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="border-t border-border bg-surface px-5 pb-6 shadow-xl md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2 pt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-3 py-3 text-base font-semibold ${
                    pathname === link.href
                      ? "bg-background text-primary"
                      : "text-secondary hover:bg-background"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
