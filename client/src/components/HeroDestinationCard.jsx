import { Link } from "react-router-dom";

export default function HeroDestinationCard({
  name,
  image,
  description,
  price,
  id,
}) {
  return (
    <Link to={`destinations/${id}`}>
      <div className="w-full border-10 border-[#272727] max-w-md mx-auto aspect-[2/3] rounded-3xl overflow-hidden shadow-[0_12px_30px_-10px_rgba(0,0,0,0.4)] bg-[#0e0e0e] flex flex-col ">
        <div className="h-[70%] relative">
          <img
            src={image}
            alt="Destination"
            className="w-full h-full object-cover object-bottom"
          />
          <div className="absolute top-4 left-4 bg-black/40 text-white text-xs px-3 py-1 rounded-full backdrop-blur-md shadow-sm">
            Work fast. Live slow.
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          <div className="absolute inset-0 pointer-events-none z-10 grain-overlay" />
        </div>

        <div className="h-[30%] flex flex-col justify-between px-6 py-4 text-white bg-[#272727]">
          <div>
            <h2 className="font-ubuntu font-semibold group-hover:text-[#d8c4b6] transition-colors">
              {name.toUpperCase()}
            </h2>

            <h2 className="text-sm my-2 text-orange-200 font-semibold">
              ₹ {price}/-
            </h2>

            <p className="text-xs text-gray-400 mt-1 line-clamp-1 sm:line-clamp-2">
              {description}
            </p>
          </div>

          <div className="flex justify-between items-center mt-3">
            <button className="text-xs px-4 py-2 rounded-full border border-white hover:bg-white hover:text-black transition-all duration-300">
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
