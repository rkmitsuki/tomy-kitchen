"use client";

import { useEffect, useState } from "react";
import type { IconType } from "react-icons";
import { FaBurger, FaFish, FaGlobe, FaPepperHot, FaPizzaSlice } from "react-icons/fa6";
import { motion, useReducedMotion } from "framer-motion";

type Stamp = {
  name: string;
  icon: IconType;
  rotate: number;
  home?: boolean;
};

const stamps: Stamp[] = [
  { name: "Mexicano", icon: FaPepperHot, rotate: -6, home: true },
  { name: "Mediterranean", icon: FaFish, rotate: 5 },
  { name: "Italian", icon: FaPizzaSlice, rotate: -4 },
  { name: "American", icon: FaBurger, rotate: 7 },
  { name: "Continental", icon: FaGlobe, rotate: -3 },
];

export default function PassportStamps() {
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev >= stamps.length - 1 ? 1 : prev + 1));
    }, 1800);
    return () => clearInterval(id);
  }, [prefersReducedMotion]);

  return (
    <div className="relative overflow-hidden rounded-[2rem] border-2 border-dashed border-white/15 bg-[var(--kitchen-night)] bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.025)_0px,rgba(255,255,255,0.025)_2px,transparent_2px,transparent_14px)] p-8 sm:p-12">
      <div className="pointer-events-none absolute left-6 top-6 text-[10px] font-black uppercase tracking-[0.3em] text-white/35">
        Tomy&apos;s Kitchen · Catering Passport
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-8 sm:mt-6 sm:justify-start sm:gap-x-6">
        {stamps.map((stamp, index) => {
          const isActive = stamp.home || index === activeIndex;
          return (
            <motion.div
              key={stamp.name}
              animate={{ scale: isActive ? 1.08 : 1, rotate: isActive ? 0 : stamp.rotate }}
              whileHover={{ scale: 1.12, rotate: 0 }}
              transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              className="cursor-default select-none"
            >
              <div
                className={`relative grid h-28 w-28 place-items-center rounded-full border-[3px] text-center transition-colors duration-500 sm:h-32 sm:w-32 ${
                  stamp.home
                    ? "border-primary text-primary"
                    : isActive
                      ? "border-primary text-primary"
                      : "border-white/25 text-white/55"
                }`}
                style={{ boxShadow: isActive ? "0 0 0 4px rgba(228,95,60,.16)" : undefined }}
              >
                <div
                  className={`absolute inset-1.5 rounded-full border border-dashed transition-colors duration-500 ${
                    isActive ? "border-primary/50" : "border-white/15"
                  }`}
                />
                <div className="flex flex-col items-center gap-1.5">
                  <stamp.icon aria-hidden className="text-xl" />
                  <span className="px-1 text-[10px] font-black uppercase leading-tight tracking-[0.08em]">{stamp.name}</span>
                  {stamp.home ? <span className="text-[8px] font-black uppercase tracking-[0.18em]">Home base</span> : null}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
