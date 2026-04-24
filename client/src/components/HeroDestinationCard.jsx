// HeroDestinationCard.jsx

import { Link } from "react-router-dom";

export default function HeroDestinationCard({
  name,
  image,
  price,
  id,
  featured = false,
}) {
  if (featured) {
    return (
      <Link to={`/destinations/${id}`} className="group block">
        <div className="grid lg:grid-cols-2 overflow-hidden rounded-[28px] border border-neutral-200 bg-white">
          {/* Image */}
          <div className="relative min-h-[280px] sm:min-h-[420px]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

            <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.18em] font-semibold">
              Most Booked
            </div>
          </div>

          {/* Content */}
          <div className="bg-[#2f2f2f] text-white p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#f97316] font-semibold">
                Featured Escape
              </p>

              <h3 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
                {name}
              </h3>
            </div>

            <div className="mt-8 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                  Starting From
                </p>

                <p className="text-3xl font-semibold">₹{price}</p>
              </div>

              <span className="text-sm font-semibold flex items-center gap-2">
                Explore
                <span className="text-[#f97316] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/destinations/${id}`} className="group block">
      <div className="overflow-hidden rounded-[24px] border border-neutral-200 bg-[#fcfaf8]">
        <div className="flex gap-4 p-4">
          {/* Image */}
          <div className="relative w-[110px] h-[110px] shrink-0 overflow-hidden rounded-2xl">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="min-w-0 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold tracking-tight line-clamp-1">
                {name}
              </h3>
            </div>

            <div className="mt-4 flex items-end justify-between gap-3">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-400">
                  From
                </p>

                <p className="text-lg font-semibold">₹{price}</p>

                <p className="text-[10px] text-[#f97316] font-semibold uppercase tracking-[0.14em] mt-1">
                  Few Slots Left
                </p>
              </div>

              <span className="text-sm font-semibold flex items-center gap-2">
                View
                <span className="text-[#f97316] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}