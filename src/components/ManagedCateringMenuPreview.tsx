"use client";

import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase-client";
import type { MenuItem } from "@/lib/menu-data";
import { resolveCateringMenuHeading } from "@/lib/section-content";
import Reveal from "./Reveal";

export default function ManagedCateringMenuPreview({
  items,
}: {
  items: MenuItem[];
}) {
  const [heading, setHeading] = useState(resolveCateringMenuHeading());

  useEffect(() => {
    if (!db) return;
    return onSnapshot(doc(db, "siteContent", "settings"), (snapshot) => {
      setHeading(resolveCateringMenuHeading(snapshot.data()?.cateringMenuHeading as string | undefined));
    });
  }, []);

  return (
    <section className="px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
        <Reveal>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-accent">Catering menu</p>
          <h2 className="mt-4 text-4xl font-black leading-none tracking-[-0.03em] text-secondary sm:text-6xl">{heading}</h2>
          <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-muted">
            These favorites travel well, feed groups cleanly, and make it easy to start the order before you add anything else.
          </p>
        </Reveal>
        <div className="grid gap-4">
          {items.map((item) => (
            <Reveal key={item.name} className="rounded-3xl border border-border bg-surface p-5" variant="float">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-2xl font-black text-secondary">{item.name}</h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-muted">{item.description}</p>
                </div>
                <p className="text-xl font-black text-primary">{item.price}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
