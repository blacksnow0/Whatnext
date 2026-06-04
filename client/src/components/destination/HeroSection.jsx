import { Images } from "lucide-react";

const HeroSection = ({
  destination,
}) => {
  return (
    <section
      id="hero"
      className="relative h-[72vh] sm:h-[78vh] lg:h-[92vh] overflow-hidden"
    >
      {/* DESKTOP VIDEO */}
      <div className="hidden md:block absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={destination.imageUrl}
          className="w-full h-full object-cover"
        >
          <source
            src={destination.videoUrl}
            type="video/mp4"
          />
        </video>
      </div>

      {/* MOBILE IMAGE */}
      <div className="block md:hidden absolute inset-0">
        <img
          src={destination.imageUrl}
          alt={`${destination.name} hero`}
          fetchPriority="high"
          width="1200"
          height="1600"
          className="w-full h-full object-cover"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/45" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-end">
        <div className="max-w-7xl mx-auto w-full px-5 sm:px-6 pb-14 sm:pb-20 lg:pb-28">
          {/* LOCATION */}
          <p className="text-white/70 uppercase tracking-[0.28em] text-[10px] sm:text-xs">
            {destination.location}
          </p>

          {/* TITLE */}
          <h1 className="mt-4 text-4xl sm:text-6xl lg:text-8xl font-serif text-white leading-[0.92] max-w-5xl">
            {destination.name}
          </h1>

          {/* CTA */}
          <a
            href="#gallery"
            aria-label="Explore trek itinerary"
            className="inline-flex items-center gap-3 mt-8 text-white border border-white/15 hover:border-white/30 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full transition-all duration-300"
          >
            <Images size={18} />

            <span className="text-sm font-medium">
              Gallery
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;