"use client";

import type { IconType } from "react-icons";
import { FaBurger, FaFish, FaGlobe, FaPepperHot, FaPizzaSlice } from "react-icons/fa6";
import { motion } from "framer-motion";

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
  return (
    <div className="relative overflow-hidden rounded-[2rem] border-2 border-dashed border-border bg-[repeating-linear-gradient(135deg,rgba(0,0,0,0.015)_0px,rgba(0,0,0,0.015)_2px,transparent_2px,transparent_14px)] bg-cream p-8 sm:p-12">
      <div className="pointer-events-none absolute left-6 top-6 text-[10px] font-black uppercase tracking-[0.3em] text-[#171615]/40">
        Tomy&apos;s Kitchen · Catering Passport
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-8 sm:mt-6 sm:justify-start sm:gap-x-6">
        {stamps.map((stamp, index) => (
          <motion.div
            key={stamp.name}
            initial={{ opacity: 0, scale: 2, rotate: 0 }}
            whileInView={{ opacity: 1, scale: 1, rotate: stamp.rotate }}
            whileHover={{ scale: 1.08, rotate: 0, transition: { duration: 0.25 } }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.15, ease: [0.34, 1.56, 0.64, 1] }}
            className="cursor-default select-none"
          >
            <div
              className={`relative grid h-28 w-28 place-items-center rounded-full border-[3px] text-center sm:h-32 sm:w-32 ${
                stamp.home
                  ? "border-primary text-primary"
                  : "border-[#171615]/30 text-[#171615]/65"
              }`}
              style={{ boxShadow: stamp.home ? "0 0 0 4px rgba(228,95,60,.12)" : undefined }}
            >
              <div className={`absolute inset-1.5 rounded-full border border-dashed ${stamp.home ? "border-primary/50" : "border-[#171615]/20"}`} />
              <div className="flex flex-col items-center gap-1.5">
                <stamp.icon aria-hidden className="text-xl" />
                <span className="px-1 text-[10px] font-black uppercase leading-tight tracking-[0.08em]">{stamp.name}</span>
                {stamp.home ? <span className="text-[8px] font-black uppercase tracking-[0.18em]">Home base</span> : null}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
