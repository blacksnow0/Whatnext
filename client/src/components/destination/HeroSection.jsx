import { useEffect, useState } from "react";
import { Images } from "lucide-react";

const HeroSection = ({ destination }) => {
  const [activeImage, setActiveImage] =
    useState(0);

  // Auto Change Images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) =>
        prev ===
        destination.gallery.length - 1
          ? 0
          : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [destination.gallery.length]);

  return (
    <section className="relative h-[60vh] sm:h-[65vh] overflow-hidden">
      {/* Background Images */}
      {destination.gallery.map(
        (image, index) => (
          <img
            key={index}
            src={image}
            alt={destination.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1800ms] ${
              activeImage === index
                ? "opacity-100"
                : "opacity-0"
            }`}
          />
        )
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-end">
        <div className="max-w-6xl mx-auto w-full px-5 sm:px-6 pb-14 sm:pb-20">
          {/* Location */}
          <p className="text-white/70 uppercase tracking-[0.25em] text-[10px] sm:text-xs">
            {destination.location}
          </p>

          {/* Title */}
          <h1 className="mt-4 text-4xl sm:text-6xl md:text-7xl font-serif text-white leading-[0.95] max-w-4xl">
            {destination.name}
          </h1>

          {/* Gallery Button */}
          <a
            href="#gallery"
            className="inline-flex items-center gap-3 mt-8 text-white border border-white/20 hover:border-white/40 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full transition-all duration-300"
          >
            <Images size={18} />

            <span className="text-sm font-medium">
              View Gallery
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;