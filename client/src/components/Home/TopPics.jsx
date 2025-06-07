import DestinationCard from "../HeroDestinationCard";

import { topDestinations } from "../../utils/data";

function TopPicks() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <span className="text-sm sm:text-base uppercase tracking-widest text-[#a55b7a] font-semibold">
          This Season’s Top Picks
        </span>
        <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] leading-tight font-serif uppercase tracking-wider text-[#7e395b]">
          Most Popular Treks Right Now
        </h2>
        <div className="mt-2 w-24 h-1 bg-[#7e395b] mx-auto rounded-full" />
      </div>

      {/* Cards Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {topDestinations.map((dest, index) => (
          <DestinationCard
            key={index}
            name={dest.name}
            image={dest.image}
            description={dest.description}
            price={dest.price}
            id={dest.id}
          />
        ))}
      </div>
    </section>
  );
}

export default TopPicks;
