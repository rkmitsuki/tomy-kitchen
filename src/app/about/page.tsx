import type { Metadata } from "next";
import { FaBowlFood, FaHeart, FaLeaf } from "react-icons/fa6";
import InfoCard from "@/components/InfoCard";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About Chef Tomas",
  description: "Meet Chef Tomas Tejeda and learn about the fresh, family-rooted cooking behind Tomy's Kitchen.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-surface px-5 pb-14 pt-32 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Story"
          title="Meet Chef Tomas"
          subtitle="Tomy's Kitchen is a Mountain View food truck built around generous plates, honest flavors, and the pace of a working kitchen."
        />
      </section>

      <section className="px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-2xl border border-border bg-surface p-4 shadow-[0_18px_48px_rgba(26,26,46,0.06)]">
            <div className="grid aspect-[4/5] place-items-center rounded-xl bg-[radial-gradient(circle_at_34%_24%,rgba(240,165,0,.72),transparent_28%),radial-gradient(circle_at_70%_70%,rgba(224,93,58,.74),transparent_32%),linear-gradient(135deg,rgba(26,26,46,.95),rgba(26,26,46,.76))] text-white">
              <div className="text-center">
                <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-accent">Chef Owner</p>
                <p className="mt-3 text-4xl font-extrabold">Tomas Tejeda</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-primary">Mountain View, CA</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-secondary sm:text-4xl">
              Fresh Mexican cooking with a focused food truck menu
            </h2>
            <div className="mt-6 grid gap-5 text-base leading-8 text-muted">
              <p>
                Chef Tomas Tejeda brings the practical rhythm of a food truck together with the care of a neighborhood
                kitchen. The menu keeps the range tight enough to stay fresh and broad enough for breakfast, lunch, and
                seafood cravings.
              </p>
              <p>
                Expect warm tortillas, bright salsas, crisp seafood, generous plates, and the kind of everyday service
                that makes a regular stop feel personal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Philosophy"
            title="Simple values, visible on every plate"
            subtitle="The food is straightforward by design: fresh ingredients, family-rooted flavor, and daily preparation."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <InfoCard icon={<FaLeaf aria-hidden />} title="Fresh Ingredients">
              Produce, seafood, tortillas, and proteins are handled for the day&apos;s service so each plate lands bright
              and satisfying.
            </InfoCard>
            <InfoCard icon={<FaHeart aria-hidden />} title="Family Recipes" delay={0.08}>
              The flavors are grounded in familiar Mexican cooking: balanced salsas, hearty plates, and a menu that
              values comfort.
            </InfoCard>
            <InfoCard icon={<FaBowlFood aria-hidden />} title="Made Daily" delay={0.16}>
              Breakfast, tacos, mains, and seafood are prepared with the pace and discipline of a small working kitchen.
            </InfoCard>
          </div>
        </div>
      </section>
    </>
  );
}
