import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import hero1 from "../../assets/images/hero3.jpeg";
import hero2 from "../../assets/images/trip4.jpeg";
import hero3 from "../../assets/images/spitiImage.jpeg";

export default function Hero() {
  const images = [hero1, hero2, hero3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Images */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Himalayan travel"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              currentImage === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 min-h-screen flex items-center">
        <div className="max-w-3xl">
          {/* Brand */}
          <p className="uppercase tracking-[0.35em] text-sm text-white/70 mb-4">
            WhatNext Online
          </p>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Your Next Himalayan
            <span className="block text-white/80">Story Starts Here</span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
            Curated treks, snow escapes, spiritual journeys, and unforgettable
            travel experiences across Uttarakhand & Himachal.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/packages"
              className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition"
            >
              Explore Packages
            </Link>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-black transition"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Trust Row */}
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/75">
            <span>500+ Travelers</span>
            <span>Verified Stays</span>
            <span>Local Experts</span>
            <span>24/7 Support</span>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}