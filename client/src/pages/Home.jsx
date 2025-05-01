import DestinationCard from "../components/DestinationCard";
import heroImage from "../assets/hero3.jpeg";
import img1 from "../assets/trip1.jpeg";
import img2 from "../assets/trip2.jpeg";
import img3 from "../assets/trip3.jpeg";

const dummyDestinations = [
  {
    name: "Kagbhusandi",
    image: img1,
    description: "A tropical paradise with beautiful beaches and rich culture.",
  },
  {
    name: "Lord Kurzon Trail",
    image: img2,
    description: "Historic temples, cherry blossoms, and timeless traditions.",
  },
  {
    name: "Hampta Pass",
    image: img3,
    description: "Whitewashed buildings, blue domes, and sunsets to die for.",
  },
];

export default function Home() {
  return (
    <section className="min-h-screen">
      {/* Desktop/Tablet Version */}
      <div className="hidden md:grid grid-cols-2 gap-6 items-center px-6 md:px-12 lg:px-20 py-20 max-w-7xl mx-auto">
        <div className="space-y-6 text-center md:text-left animate-fade-in-up">
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
            Discover <span className="text-[#693008]">What’s Next!</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-xl">
            Uncover breathtaking destinations, untold stories, and cultures
            waiting to be explored. Your next journey starts now.
          </p>
          <div className="flex gap-4 justify-start">
            <button className="px-6 py-3 bg-[#562705] text-white rounded-full font-semibold shadow hover:bg-[#5e2f12] transition">
              Explore Destinations
            </button>
            <a
              href="https://www.youtube.com/watch?v=MDOXbRii-sg" // replace with your actual trailer URL
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className=" cursor-alias px-6 py-3 border border-[#8B4513] text-[#8B4513] rounded-full font-semibold hover:bg-[#f3ebe5] transition">
                Watch Trailer
              </button>
            </a>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-fade-in">
          <img
            src={heroImage}
            alt="Travel Hero"
            className="w-full h-full object-cover object-bottom max-h-[500px]"
          />
          <div className="absolute bottom-4 right-4 bg-white bg-opacity-40 px-4 py-2 rounded shadow">
            <span className="text-sm text-[#8B4513] font-medium">
              Inspire your adventure 🌍
            </span>
          </div>
        </div>
      </div>

      <div className="block md:hidden px-4 py-10 space-y-6 text-center animate-fade-in-up">
        <h1 className="text-4xl font-extrabold leading-tight">
          What’s <span className="text-[#693008]">Next</span>
        </h1>
        <img
          src={heroImage}
          alt="Travel Hero"
          className="w-full max-h-[300px] object-cover  rounded-xl shadow-lg"
        />
        <p className="text-base text-gray-700 px-4">
          Uncover breathtaking destinations and cultures waiting to be explored.
        </p>
        <div className="flex flex-col gap-4 items-center">
          <button className="px-6 py-3 bg-[#562705] text-white rounded-full font-semibold shadow hover:bg-[#5e2f12] transition w-full max-w-xs">
            Explore
          </button>
          <a
            href="https://www.youtube.com/watch?v=MDOXbRii-sg" // replace with your actual trailer URL
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-3 border border-[#8B4513] text-[#8B4513] rounded-full font-semibold hover:bg-[#f3ebe5] transition w-full max-w-xs">
              Trailer
            </button>
          </a>
        </div>
      </div>

      {/* Shared Content: Destination Cards */}
      <div className="px-6 py-12 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#8B4513] mb-8 text-center">
          Top Picks For You
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {dummyDestinations.map((dest, idx) => (
            <DestinationCard
              key={idx}
              name={dest.name}
              image={dest.image}
              description={dest.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
