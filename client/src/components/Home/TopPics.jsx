// TopPicks.jsx

import { useMemo, useRef, useState } from "react";
import DestinationCard from "../HeroDestinationCard";
import { topDestinations } from "../../utils/data";

function TopPicks() {
  const [featuredId, setFeaturedId] = useState(topDestinations[0]?.id);
  const heroRef = useRef(null);

  const featured = useMemo(
    () => topDestinations.find((item) => item.id === featuredId),
    [featuredId]
  );

  const others = useMemo(
    () => topDestinations.filter((item) => item.id !== featuredId),
    [featuredId]
  );

  const handleSelect = (destination) => {
    setFeaturedId(destination.id);

    // Mobile / tablet only
    if (window.innerWidth < 1024 && heroRef.current) {
      setTimeout(() => {
        const y =
          heroRef.current.getBoundingClientRect().top +
          window.pageYOffset -
          90; // navbar breathing space

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }, 120);
    }
  };

  return (
    <div className="bg-gray-50 ">
      
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20">
      {/* Header */}
      <div className="grid lg:grid-cols-2 gap-8 items-end mb-10 sm:mb-14">
        <div>
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#f97316] font-semibold">
            This Season’s Top Picks
          </p>

          <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[0.95]">
            Journeys Worth
            <br />
            Booking Right Now
          </h2>
        </div>

        <div className="hidden lg:block lg:pl-10">
          <p className="text-sm sm:text-base text-neutral-500 leading-relaxed">
            High demand routes, curated stays and unforgettable mountain
            experiences.
          </p>
        </div>
      </div>

      {/* Featured */}
      <div ref={heroRef} className="mb-7 sm:mb-8">
        {featured && <DestinationCard {...featured} featured />}
      </div>

      {/* Small Cards */}
      <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {others.map((dest) => (
          <DestinationCard
            key={dest.id}
            {...dest}
            onSelect={() => handleSelect(dest)}
          />
        ))}
      </div>
    </section>
    </div>
  );
}

export default TopPicks;