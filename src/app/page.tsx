import Link from "next/link";
import { FaClock, FaLocationDot, FaPhone, FaStar } from "react-icons/fa6";
import InfoCard from "@/components/InfoCard";
import SectionHeading from "@/components/SectionHeading";
import { featuredItems } from "@/lib/menu-data";

const featureGradients = [
  "from-primary/90 via-accent/70 to-secondary",
  "from-accent/90 via-primary/70 to-secondary",
  "from-secondary via-primary/75 to-accent/80",
  "from-primary/80 via-secondary to-accent/80",
];

export default function Home() {
  return (
    <>
      <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden bg-secondary px-5 pt-28 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_22%_18%,rgba(240,165,0,0.35),transparent_28%),linear-gradient(135deg,rgba(224,93,58,0.96),rgba(26,26,46,0.94)_58%,rgba(26,26,46,1))]" />
        <div className="absolute inset-0 -z-10 opacity-[0.18] [background-image:linear-gradient(30deg,rgba(255,255,255,.35)_12%,transparent_12.5%,transparent_87%,rgba(255,255,255,.35)_87.5%,rgba(255,255,255,.35)),linear-gradient(150deg,rgba(255,255,255,.35)_12%,transparent_12.5%,transparent_87%,rgba(255,255,255,.35)_87.5%,rgba(255,255,255,.35))] [background-size:72px_124px]" />

        <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full bg-white/12 px-4 py-2 text-sm font-bold text-accent ring-1 ring-white/16">
              5.0 Yelp rating • Mountain View
            </p>
            <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-normal sm:text-6xl lg:text-7xl">
              Authentic Mexican Street Food
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
              Fresh breakfast, tacos, seafood, and daily plates from Chef Tomas Tejeda on El Camino Real.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/menu"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-7 text-base font-bold text-white shadow-lg shadow-primary/25 transition hover:bg-primary-hover"
              >
                View Our Menu
              </Link>
              <Link
                href="/location"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/28 px-7 text-base font-bold text-white transition hover:bg-white/10"
              >
                Find the Truck
              </Link>
            </div>
          </div>

          <div className="mb-10 rounded-2xl border border-white/16 bg-white/10 p-5 shadow-2xl backdrop-blur-md lg:mb-0">
            <div className="grid aspect-[4/3] place-items-center rounded-xl bg-[radial-gradient(circle_at_28%_28%,rgba(240,165,0,.82),transparent_26%),radial-gradient(circle_at_70%_62%,rgba(224,93,58,.88),transparent_30%),linear-gradient(135deg,rgba(255,255,255,.18),rgba(255,255,255,.04))]">
              <div className="max-w-xs text-center">
                <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-white/72">Made Fresh Daily</p>
                <p className="mt-3 text-4xl font-extrabold">Tacos • Breakfast • Seafood</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="House Favorites"
            title="Food truck classics with serious craft"
            subtitle="A small, focused menu of breakfast staples, tacos, seafood, and hearty plates prepared fresh for the day."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredItems.map((item, index) => (
              <InfoCard key={item.name} title={item.name} delay={index * 0.08}>
                <div className={`mb-5 h-32 rounded-lg bg-gradient-to-br ${featureGradients[index]}`} />
                <div>
                  <span className="mb-3 inline-flex rounded-full bg-accent/16 px-3 py-1 text-sm font-extrabold text-secondary">
                    {item.price}
                  </span>
                  <p>{item.description}</p>
                </div>
              </InfoCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 py-10 shadow-[0_-1px_0_var(--border),0_1px_0_var(--border)] sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <div className="flex gap-4">
            <FaLocationDot className="mt-1 text-2xl text-primary" aria-hidden />
            <div>
              <h2 className="font-bold text-secondary">Address</h2>
              <p className="mt-1 text-sm text-muted">239 W El Camino Real, Mountain View, CA 94040</p>
            </div>
          </div>
          <div className="flex gap-4">
            <FaClock className="mt-1 text-2xl text-primary" aria-hidden />
            <div>
              <h2 className="font-bold text-secondary">Hours</h2>
              <p className="mt-1 text-sm text-muted">Monday-Saturday, 8:30 AM-3:00 PM</p>
            </div>
          </div>
          <div className="flex gap-4">
            <FaPhone className="mt-1 text-2xl text-primary" aria-hidden />
            <div>
              <h2 className="font-bold text-secondary">Call Ahead</h2>
              <a className="mt-1 block text-sm text-muted hover:text-primary" href="tel:+16502898628">
                (650) 289-8628
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-2xl bg-primary p-8 text-white shadow-xl shadow-primary/20 md:flex-row md:items-center lg:p-12">
          <div>
            <div className="mb-4 flex text-accent" aria-label="5 star Yelp rating">
              {Array.from({ length: 5 }).map((_, index) => (
                <FaStar key={index} aria-hidden />
              ))}
            </div>
            <h2 className="text-3xl font-extrabold tracking-normal sm:text-4xl">Come find us on El Camino Real</h2>
            <p className="mt-3 max-w-2xl text-white/82">
              Breakfast before work, tacos at lunch, or seafood when the craving hits. The truck is open six days a week.
            </p>
          </div>
          <Link
            href="/location"
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-white px-7 text-base font-bold text-primary transition hover:bg-background"
          >
            Location & Hours
          </Link>
        </div>
      </section>
    </>
  );
}
