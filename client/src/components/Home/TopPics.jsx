import DestinationCard from "../HeroDestinationCard";

import img1 from "../../assets/images/trip.jpeg";
import img2 from "../../assets/images/trip2.jpeg";
import img3 from "../../assets/images/trip3.jpeg";

// Standardized dummy data
const topDestinations = [
  {
    name: "Kagbhusandi",
    image: img1,
    description: "A tropical paradise with beautiful beaches and rich culture.",
    price: "12,000",
  },
  {
    name: "Lord Curzon Trail",
    image: img2,
    description: "Historic temples, alpine views, and timeless trails.",
    price: "10,000",
  },
  {
    name: "Hampta Pass",
    image: img3,
    description: "White snow passes, meadows, and stunning Himachal valleys.",
    price: "8,500",
  },
];

function TopPicks() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] leading-tight font-serif uppercase tracking-wider text-[#7e395b]">
          Top Picks
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
          />
        ))}
      </div>
    </section>
  );
}

export default TopPicks;
