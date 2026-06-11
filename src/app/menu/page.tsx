import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { menuCategories } from "@/lib/menu-data";

export const metadata: Metadata = {
  title: "Menu",
  description: "Explore Tomy's Kitchen breakfast, tacos, mains, seafood cocktails, and drinks in Mountain View.",
};

export default function MenuPage() {
  return (
    <>
      <section className="bg-surface px-5 pb-14 pt-32 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Fresh Daily"
          title="Our Menu"
          subtitle="Everything made fresh daily by Chef Tomas, from breakfast sandwiches to seafood cocktails."
        />
      </section>

      <section className="px-5 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[240px_1fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <nav
              aria-label="Menu categories"
              className="flex gap-2 overflow-x-auto rounded-xl border border-border bg-surface p-2 shadow-sm lg:flex-col"
            >
              {menuCategories.map((category) => (
                <a
                  key={category.name}
                  href={`#${category.name.toLowerCase().replaceAll(" ", "-")}`}
                  className="whitespace-nowrap rounded-lg px-4 py-3 text-sm font-bold text-muted transition hover:bg-background hover:text-primary"
                >
                  {category.name}
                </a>
              ))}
            </nav>
          </aside>

          <div className="grid gap-8">
            {menuCategories.map((category) => (
              <section
                key={category.name}
                id={category.name.toLowerCase().replaceAll(" ", "-")}
                className="scroll-mt-28 rounded-2xl border border-border bg-surface p-5 shadow-[0_18px_48px_rgba(26,26,46,0.05)] sm:p-7"
              >
                <div className="mb-6 flex items-center justify-between gap-4 border-b border-border pb-4">
                  <h2 className="text-2xl font-extrabold text-secondary">{category.name}</h2>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.14em] text-primary">
                    {category.items.length} items
                  </span>
                </div>
                <div className="grid gap-5">
                  {category.items.map((item) => (
                    <article key={item.name} className="grid gap-2 sm:grid-cols-[1fr_auto] sm:gap-5">
                      <div>
                        <h3 className="text-base font-bold text-secondary">{item.name}</h3>
                        <p className="mt-1 text-sm leading-6 text-muted">{item.description}</p>
                      </div>
                      <p className="text-base font-extrabold text-primary sm:text-right">{item.price}</p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
