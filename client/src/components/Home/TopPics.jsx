import DestinationCard from "../HeroDestinationCard";

import img1 from "../../assets/images/trip.jpeg";
import img2 from "../../assets/images/trip2.jpeg";
import img3 from "../../assets/images/trip3.jpeg";

const dummyDestinations = [
  {
    name: "Kagbhusandi",
    image: img1,
    description: "A tropical paradise with beautiful beaches and rich culture.",
    price: "12,000",
  },
  {
    name: "Lord Kurzon Trail",
    image: img2,
    price: "10,000",
    description: "Historic temples, cherry blossoms, and timeless traditions.",
  },
  {
    name: "Hampta Pass",
    image: img3,
    description: "Whitewashed buildings, blue domes, and sunsets to die for.",
    price: "8,500",
  },
];

function TopPics() {
  return (
    <div className="px-6 py-8 max-w-7xl mx-auto">
      <div className="relative text-center mb-6">
        <h2 className="text-[1.5rem] sm:text-[2rem] lg:text-[2.75rem] leading-tight font-serif uppercase tracking-[0.15em] text-[#7e395b] ">
          Top Picks
        </h2>
        <div className="mt-3 w-24 h-[3px] bg-[#7e395b] mx-auto rounded-full"></div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {dummyDestinations.map((dest, idx) => (
          <DestinationCard
            key={idx}
            name={dest.name}
            image={dest.image}
            description={dest.description}
            price={dest.price}
          />
        ))}
      </div>
    </div>
  );
}

export default TopPics;
