// TopPicks.jsx

import { useMemo, useRef, useState } from "react";

import DestinationCard from "../HeroDestinationCard";

import { topDestinations } from "../../data/topDestinations";

function TopPicks() {
  const [featuredId, setFeaturedId] =
    useState(topDestinations[0]?.id);

  const heroRef = useRef(null);

  const featured = useMemo(
    () =>
      topDestinations.find(
        (item) => item.id === featuredId
      ),
    [featuredId]
  );

  const others = useMemo(
    () =>
      topDestinations.filter(
        (item) => item.id !== featuredId
      ),
    [featuredId]
  );

  const handleSelect = (destination) => {
    setFeaturedId(destination.id);

    // MOBILE / TABLET SCROLL
    if (
      window.innerWidth < 1024 &&
      heroRef.current
    ) {
      setTimeout(() => {
        const y =
          heroRef.current.getBoundingClientRect()
            .top +
          window.pageYOffset -
          90;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }, 120);
    }
  };

  return (
    <div className="bg-[#f7f4ee]">
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-28">
        {/* HEADER */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-10 sm:mb-14">
          <div>
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-orange-500 font-semibold">
              Curated Himalayan Journeys
            </p>

            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-7xl font-serif text-zinc-900 leading-[0.92]">
              This Season’s
              <br />
              Top Picks
            </h2>
          </div>

          <div className="hidden lg:flex justify-end">
            <div className="max-w-sm">
              <p className="text-zinc-500 text-base leading-relaxed">
                A small collection of cinematic Himalayan
                expeditions crafted around glaciers,
                alpine landscapes, mythology, and
                unforgettable mountain experiences.
              </p>
            </div>
          </div>
        </div>

        {/* FEATURED DESTINATION */}
        <div
          ref={heroRef}
          className="mb-6 sm:mb-8"
        >
          {featured && (
            <DestinationCard
              {...featured}
              featured
            />
          )}
        </div>

        {/* SMALL DESTINATIONS */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {others.map((dest) => (
            <DestinationCard
              key={dest.id}
              {...dest}
              onSelect={() =>
                handleSelect(dest)
              }
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default TopPicks;