import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// import hero1 from "../../assets/images/trip4.jpeg";
// import hero from "../../assets/images/badrinath-hero.jpeg";
import hero2 from "../../assets/images/badrinath-hero2.png";

export default function Hero() {
  const images = [hero2];
  const [currentImage, setCurrentImage] = useState(0);

  function CountUp({ end, suffix = "" }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const duration = 1800;
      const stepTime = 20;
      const increment = end / (duration / stepTime);

      const timer = setInterval(() => {
        start += increment;

        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }, [end]);

    return (
      <span className="tabular-nums">
        {count}
        {suffix}
      </span>
    );
  }

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
            <p className="hidden sm:block text-xs uppercase tracking-[0.35em] mb-4 font-medium">
              WhatNext Online
            </p>

            <h1 className="mt-4 sm:mt-2 max-w-5xl font-semibold tracking-tight leading-[0.95]">
              <span className="block text-[42px] sm:text-5xl md:text-6xl lg:text-7xl">
                Himalayan
              </span>

              <span className="block text-[42px] sm:text-5xl md:text-6xl lg:text-7xl">
                Journeys
              </span>

              <span className="block mt-2 sm:mt-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-neutral-500 tracking-normal">
                Curated for the modern traveler
              </span>

              <span className="block mt-1 sm:mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#f97316]">
                Ready To Experience
              </span>
            </h1>
          </div>

          {/* RIGHT */}
          <div className="lg:pl-10">
            <p className="hidden sm:block text-base md:text-lg text-neutral-600 leading-relaxed">
              Discover a smarter way to travel — curated mountain escapes,
              spiritual getaways, snow adventures and unforgettable stays across
              Uttarakhand & Himachal.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-5 sm:gap-8">
              <Link
                to="/packages"
                className="group w-fit text-sm font-semibold tracking-wide uppercase"
              >
                <span className="flex items-center gap-2">
                  Explore Packages
                  <span className="text-[#f97316] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>

                <span className="block h-[1px] w-full bg-black mt-2 origin-left scale-x-100 transition-transform duration-300 group-hover:scale-x-75"></span>
              </Link>

              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noreferrer"
                className="group w-fit text-sm font-semibold tracking-wide uppercase"
              >
                <span className="flex items-center gap-2">
                  Contact Us
                  <span className="text-[#f97316] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>

                <span className="block h-[1px] w-full bg-black mt-2 origin-left scale-x-100 transition-transform duration-300 group-hover:scale-x-75"></span>
              </a>
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div className="mt-8 sm:mt-10 rounded-2xl sm:rounded-3xl overflow-hidden relative h-[240px] sm:h-[340px] md:h-[420px] lg:h-[500px] ">
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
        {/* STATS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 mt-14 sm:mt-16 border-t border-neutral-300">
          <div className="py-7 sm:py-10 px-4 sm:px-6 border-r border-b lg:border-b-0 border-neutral-300">
            <h3 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black">
              <CountUp end={500} suffix="+" />
            </h3>

            <p className="mt-3 text-xs sm:text-sm uppercase tracking-[0.18em] text-neutral-500">
              Travelers Hosted
            </p>
          </div>

          <div className="py-7 sm:py-10 px-4 sm:px-6 border-b lg:border-b-0 lg:border-r border-neutral-300">
            <h3 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black">
              <CountUp end={10} suffix="+" />
            </h3>

            <p className="mt-3 text-xs sm:text-sm uppercase tracking-[0.18em] text-neutral-500">
              Premium Routes
            </p>
          </div>

          <div className="py-7 sm:py-10 px-4 sm:px-6 border-r border-neutral-300">
            <h3 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black">
              <CountUp end={99} suffix="%" />
            </h3>

            <p className="mt-3 text-xs sm:text-sm uppercase tracking-[0.18em] text-neutral-500">
              Happy Guests
            </p>
          </div>

          <div className="py-7 sm:py-10 px-4 sm:px-6">
            <h3 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black">
              <CountUp end={24} suffix="/7" />
            </h3>

            <p className="mt-3 text-xs sm:text-sm uppercase tracking-[0.18em] text-neutral-500">
              Support Team
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
