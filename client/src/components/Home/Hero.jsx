import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WinterSportsPreview from "../Home/WinterSportPrew";
import Typewriter from "../helper/Typewritter";

import heroImage from "../../assets/images/hero3.jpeg";
import heroImage2 from "../../assets/images/trip4.jpeg";
import heroImage3 from "../../assets/images/spitiImage.jpeg";
import heroImage4 from "../../assets/images/satopanth.jpeg";

const TYPEWRITER_WORDS = [
  "Mountains?",
  "Temples?",
  "Culture?",
  "Spirituality?",
  "Adventure?",
  "Nature?",
  "Heritage?",
  "Peace?",
];

const SLIDER_IMAGES = [heroImage, heroImage2, heroImage3, heroImage4];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDER_IMAGES.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND IMAGE SLIDER */}
      {SLIDER_IMAGES.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Adventure background"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 z-10" />

      {/* CONTENT */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 pt-32 pb-20 text-white text-center md:text-left">


        {/* MAIN HEADLINE */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
          What’s Next?
        </h1>

        {/* TYPEWRITER */}
        <div className="mt-6 text-xl md:text-3xl font-serif">
          <Typewriter words={TYPEWRITER_WORDS} />
        </div>

        {/* SUBTEXT */}
        <p className="mt-6 max-w-xl mx-auto md:mx-0 text-white/90">
          Discover snow adventures, Himalayan treks, and unforgettable
          experiences curated by experts.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

          <Link
            to="/winter-sports"
            className="px-8 py-3 bg-brand text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Explore Snow Adventures →
          </Link>

          <a
            href="https://www.youtube.com/watch?v=MDOXbRii-sg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-3 border border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition">
              Watch Experience Film
            </button>
          </a>
        </div>

        {/* TRUST STRIP */}
        <div className="mt-6 flex flex-wrap gap-6 justify-center md:justify-start text-sm text-white/80">
          <span>✔ 500+ Travelers</span>
          <span>✔ Certified Guides</span>
        </div>

        {/* OPTIONAL PREVIEW */}
        <div className="mt-10">
          <WinterSportsPreview />
        </div>
      </div>
    </section>
  );
}

export default Hero;
