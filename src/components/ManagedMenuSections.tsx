"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useMemo, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase-client";
import type { MenuCategory, MenuItem } from "@/lib/menu-data";
import { tomysImages } from "@/lib/site-content";
import ManagedImage from "./ManagedImage";
import Reveal from "./Reveal";

type ManagedMenuItem = MenuItem & { category: string; visible?: boolean; sortOrder?: number; imageSrc?: string };

function resolveItemImage(item: MenuItem | ManagedMenuItem, categoryFallback: string) {
  return typeof item.imageSrc === "string" && item.imageSrc ? item.imageSrc : categoryFallback;
}

export default function ManagedMenuSections({
  fallback,
  hiddenCategories = [],
}: {
  fallback: MenuCategory[];
  hiddenCategories?: string[];
}) {
  const [items, setItems] = useState<ManagedMenuItem[]>([]);

  useEffect(() => {
    if (!db) return;
    return onSnapshot(query(collection(db, "menuItems"), where("visible", "==", true)), (snapshot) => {
      setItems(snapshot.docs.map((doc) => doc.data() as ManagedMenuItem));
    });
  }, []);

  const categories = useMemo(() => {
    if (!items.length) return fallback.filter((category) => !hiddenCategories.includes(category.name));
    const fallbackOrder = fallback.map((category) => category.name);
    const names = Array.from(new Set(items.map((item) => item.category))).sort((left, right) => {
      const leftIndex = fallbackOrder.indexOf(left);
      const rightIndex = fallbackOrder.indexOf(right);

      if (leftIndex === -1 && rightIndex === -1) return left.localeCompare(right);
      if (leftIndex === -1) return 1;
      if (rightIndex === -1) return -1;
      return leftIndex - rightIndex;
    });

    return names
      .filter((name) => !hiddenCategories.includes(name))
      .map((name) => ({
        name,
        items: items
          .filter((item) => item.category === name)
          .sort((left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0)),
      }));
  }, [fallback, hiddenCategories, items]);

  return (
    <section className="px-5 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10">
        {categories.map((category) => {
          const categoryFallback = category.items[0]?.imageSrc || tomysImages.breakfastBurrito;
          return (
          <Reveal key={category.name} variant="float">
            <section id={category.name.toLowerCase().replaceAll(" ", "-")} className="scroll-mt-36 overflow-hidden rounded-[2rem] border border-border bg-surface shadow-[0_24px_80px_rgba(0,0,0,.24)]">
              <div className="relative h-36 sm:h-44">
                <ManagedImage imageKey={category.name} fallback={categoryFallback} alt={`${category.name} at Tomy's Kitchen`} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 sm:bottom-5 sm:left-7">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">Tomy&apos;s Kitchen</p>
                  <h2 className="mt-1 text-3xl font-black leading-none text-white sm:text-4xl">{category.name}</h2>
                </div>
              </div>
              <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-7 lg:grid-cols-3">
                {category.items.map((item, itemIndex) => (
                  <Reveal
                    key={`${category.name}-${item.name}`}
                    delay={Math.min(itemIndex * 0.04, 0.28)}
                    variant="float"
                  >
                    <article className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-background/60 p-4 transition hover:border-primary/40">
                      <div className="flex items-start gap-3">
                        <img
                          src={resolveItemImage(item, categoryFallback)}
                          alt={item.name}
                          className="h-16 w-16 shrink-0 rounded-xl object-cover"
                          loading="lazy"
                        />
                        <div className="min-w-0">
                          <h3 className="text-base font-black leading-tight text-secondary">{item.name}</h3>
                          <p className="mt-1 text-lg font-black text-primary">{item.price}</p>
                        </div>
                      </div>
                      {item.description ? (
                        <p className="text-sm font-semibold leading-6 text-muted">{item.description}</p>
                      ) : null}
                    </article>
                  </Reveal>
                ))}
              </div>
            </section>
          </Reveal>
          );
        })}
      </div>
    </section>
  );
}
