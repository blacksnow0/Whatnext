import { Link } from "react-router-dom";

export default function DestinationCard({
  name,
  image,
  description,
  price,
  id,
}) {
  return (
    <Link to={`/destinations/${id}`}>
      <div className="w-[90%] sm:w-full max-w-xs sm:max-w-md mx-auto rounded-2xl overflow-hidden  bg-[#1c1c1e] shadow-[0_12px_30px_-10px_rgba(0,0,0,0.4)] flex flex-col h-[450px] sm:h-[500px] lg:h-[480px]">
        {/* Image Section */}
        <div className="relative h-[60%]">
          <img
            src={image}
            alt={`Destination ${name}`}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute top-3 left-3 bg-black/40 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full backdrop-blur-md shadow-sm">
            Work fast. Live slow.
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          <div className="absolute inset-0 pointer-events-none z-10 grain-overlay" />
        </div>

        {/* Content Section */}
        <div className="h-[40%] px-4 py-3 flex flex-col justify-between text-white bg-[#2a2a2e]">
          <div>
            <h2 className="font-ubuntu font-semibold text-sm sm:text-base mb-1 text-[#f2f2f2]">
              {name.toUpperCase()}
            </h2>
            <h3 className="text-sm text-orange-200 font-medium mb-1">
              ₹ {price}/-
            </h3>
            <p className="text-xs text-gray-400 leading-snug line-clamp-2">
              {description}
            </p>
          </div>

          <div className="flex justify-between items-center mt-3">
            <button className="text-xs px-3 py-1.5 rounded-full border border-white hover:bg-white hover:text-black transition-all duration-300">
              Explore More
            </button>
            <span className="text-[10px] text-gray-500">
              web • brand • escape
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
