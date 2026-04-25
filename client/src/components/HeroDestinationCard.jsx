// HeroDestinationCard.jsx

import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function HeroDestinationCard({
  name,
  image,
  images = [],
  price,
  id,
  description,
  featured = false,
  onSelect,
}) {
  const gallery = images.length ? images : [image];

  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setActiveIndex(0);

    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }

    if (featured) {
      setFade(true);
      const timer = setTimeout(() => setFade(false), 320);
      return () => clearTimeout(timer);
    }
  }, [id, featured]);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const index = Math.round(container.scrollLeft / container.offsetWidth);

    setActiveIndex(index);
  };

  const goToSlide = (dir) => {
    const container = scrollRef.current;
    if (!container) return;

    const next =
      dir === "next"
        ? Math.min(activeIndex + 1, gallery.length - 1)
        : Math.max(activeIndex - 1, 0);

    container.scrollTo({
      left: next * container.offsetWidth,
      behavior: "smooth",
    });

    setActiveIndex(next);
  };

  /* FEATURED CARD */
  if (featured) {
    return (
      <div
        className={`grid lg:grid-cols-2 overflow-hidden rounded-[28px] border border-neutral-200 bg-white transition-opacity duration-300 ${
          fade ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Image */}
        <div className="relative h-[320px] sm:h-[430px] lg:h-[620px] max-h-[620px]">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex h-full overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {gallery.map((img, index) => (
              <div key={index} className="w-full h-full shrink-0 snap-start">
                <img
                  src={img}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />

          {/* Badge */}
          <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.18em] font-semibold z-10">
            Most Booked
          </div>

          {/* Arrows Desktop */}
          {gallery.length > 1 && (
            <>
              <button
                onClick={() => goToSlide("prev")}
                className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full bg-black/30 backdrop-blur-md text-white z-20"
              >
                ←
              </button>

              <button
                onClick={() => goToSlide("next")}
                className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full bg-black/30 backdrop-blur-md text-white z-20"
              >
                →
              </button>
            </>
          )}

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {gallery.map((_, index) => (
              <span
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "w-6 bg-[#f97316]" : "w-2 bg-white/70"
                }`}
              />
            ))}
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

            <p className="hidden lg:block mt-5 text-neutral-300 leading-relaxed text-sm">
              {description}
            </p>
          </div>

          <div className="mt-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                Starting From
              </p>

              <p className="text-3xl font-semibold">₹{price}</p>
            </div>

            <Link
              to={`/destinations/${id}`}
              className="text-sm font-semibold flex items-center gap-2"
            >
              Explore
              <span className="text-[#f97316]">→</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  /* SMALL CARD */
  return (
    <div
      onClick={onSelect}
      className="group block cursor-pointer overflow-hidden rounded-[24px] border border-neutral-200 bg-[#fcfaf8]"
    >
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

            <Link
              to={`/destinations/${id}`}
              onClick={(e) => e.stopPropagation()}
              className="text-sm font-semibold flex items-center gap-2"
            >
              View
              <span className="text-[#f97316]">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
