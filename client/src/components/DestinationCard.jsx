export default function DestinationCard({ name, image, description }) {
  return (
    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-80 h-[28rem] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 group mx-auto">
      {/* Background image */}
      <img
        src={image}
        alt="Card background"
        className="absolute inset-0 w-full h-full object-cover transition-all group-hover:opacity-90"
      />

      {/* Top title overlay */}
      <div className="absolute top-0 w-full p-4 sm:p-5 z-20 bg-gradient-to-b from-black/80 via-black/50 to-transparent">
        <h2 className="text-xl  sm:text-xl font-semibold  font-mono  text-neutral-100 drop-shadow-amber-900 group-hover:text-[#d8c4b6] transition-all">
          {name}
        </h2>
      </div>

      {/* Bottom description and button */}
      <div className="absolute bottom-0 w-full p-4 sm:p-6 text-white flex flex-col justify-between z-20 space-y-3 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
        <p className="text-xs sm:text-sm opacity-90 text-gray-300 leading-relaxed">
          {description}
        </p>
        <button className="cursor-pointer px-4 py-2 sm:px-6 sm:py-3 bg-[#88542f] text-white rounded-full font-semibold shadow-md hover:bg-[#5e2f12] transition-all duration-300 transform hover:translate-y-1">
          Explore More
        </button>
      </div>
    </div>
  );
}
