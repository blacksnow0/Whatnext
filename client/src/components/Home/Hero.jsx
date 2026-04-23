import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import hero2 from "../../assets/images/trip4.jpeg";

export default function Hero() {
  const images = [hero2];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="bg-[#f7f7f4] text-black pt-20 md:pt-28 pb-14 md:pb-20 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-end">
          {/* LEFT */}
          <div>
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.28em] sm:tracking-[0.35em] text-neutral-500 mb-3 sm:mb-4">
              WhatNext Online
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.95] tracking-tight">
              Modern Himalayan
              <br />
              Journeys Ready
              <br />
              To Experience
            </h1>
          </div>

          {/* RIGHT */}
          <div className="lg:pl-10">
            <p className="text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed">
              Discover a smarter way to travel — curated mountain escapes,
              spiritual getaways, snow adventures and unforgettable stays across
              Uttarakhand & Himachal.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6">
              <Link
                to="/packages"
                className="text-sm font-medium border-b border-black pb-1 w-fit hover:opacity-70 transition"
              >
                Explore Packages
              </Link>

              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium border-b border-black pb-1 w-fit hover:opacity-70 transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div className="mt-8 sm:mt-10 rounded-2xl sm:rounded-3xl overflow-hidden relative h-[240px] sm:h-[340px] md:h-[420px] lg:h-[500px]">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Himalayan destination"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                currentImage === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* SECOND SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mt-14 sm:mt-20 lg:mt-24">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
              Why Choose
              <br />
              WhatNext?
            </h2>
          </div>

          <div>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              We design elegant, purpose-built journeys that belong in the
              mountains. Every trip is planned with local expertise, comfort,
              safety and premium experiences in mind.
            </p>

            <p className="mt-5 sm:mt-6 text-lg sm:text-xl font-medium leading-snug">
              Smart planning. Authentic travel. Timeless memories.
            </p>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 mt-12 sm:mt-14 border-t border-neutral-300">
          <div className="py-6 sm:py-8 pr-3 border-r border-b md:border-b-0 border-neutral-300">
            <h3 className="text-3xl sm:text-4xl font-semibold">500+</h3>
            <p className="text-xs sm:text-sm text-neutral-500 mt-2">
              Travelers Hosted
            </p>
          </div>

          <div className="py-6 sm:py-8 pl-3 md:pl-0 md:px-6 border-b md:border-b-0 md:border-r border-neutral-300">
            <h3 className="text-3xl sm:text-4xl font-semibold">10+</h3>
            <p className="text-xs sm:text-sm text-neutral-500 mt-2">
              Premium Routes
            </p>
          </div>

          <div className="py-6 sm:py-8 pr-3 border-r border-neutral-300">
            <h3 className="text-3xl sm:text-4xl font-semibold">99%</h3>
            <p className="text-xs sm:text-sm text-neutral-500 mt-2">
              Happy Guests
            </p>
          </div>

          <div className="py-6 sm:py-8 pl-3 md:pl-0 md:px-6">
            <h3 className="text-3xl sm:text-4xl font-semibold">24/7</h3>
            <p className="text-xs sm:text-sm text-neutral-500 mt-2">
              Support Team
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}