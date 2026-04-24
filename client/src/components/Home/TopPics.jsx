// TopPicks.jsx

import DestinationCard from "../HeroDestinationCard";
import { topDestinations } from "../../utils/data";

function TopPicks() {
  const featured = topDestinations[0];
  const others = topDestinations.slice(1);

  return (
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

        <div className="hidden lg:pl-10">
          <p className="text-sm sm:text-base text-neutral-500 leading-relaxed">
            High demand routes, curated stays and unforgettable mountain
            experiences.
          </p>

        </div>
      </div>

      {/* Featured */}
      {featured && (
        <div className="mb-7 sm:mb-8">
          <DestinationCard {...featured} featured />
        </div>
      )}

      {/* Grid */}
      <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {others.map((dest, index) => (
          <DestinationCard key={index} {...dest} />
        ))}
      </div>
    </section>
  );
}

export default TopPicks;