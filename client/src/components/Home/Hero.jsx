import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

const REGIONS = [
  { name: "Himachal", image: heroImage3 },
  { name: "Nepal", image: heroImage2 },
  { name: "Uttarakhand", image: heroImage4 },
];

const SLIDER_IMAGES = [heroImage, heroImage2, heroImage3, heroImage4];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDER_IMAGES.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-20">
      <div className="hidden md:grid grid-cols-2 gap-6 items-center px-6 md:px-12 lg:px-20 py-20 max-w-7xl mx-auto">
        {/* LEFT TEXT CONTENT */}
        <div className="space-y-6 text-center md:text-left animate-fade-in-up">
          <h2 className="text-5xl lg:text-6xl font-extrabold leading-tight font-ubuntu">
            Discover <span className="text-brand">What’s Next!</span>
          </h2>

          <div className="text-start mt-8 text-xl sm:text-2xl md:text-5xl font-serif">
            <Typewriter words={TYPEWRITER_WORDS} />
          </div>

          <p className="text-lg text-gray-700 max-w-xl">
            Uncover breathtaking destinations, untold stories, and cultures
            waiting to be explored. Your next journey starts now.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex gap-4 justify-start">
            <Link to="/winter-sports" className="btn-primary">
              Snow Adventure
            </Link>

            <a
              href="https://www.youtube.com/watch?v=MDOXbRii-sg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 border border-bg-brand text-brand rounded-full font-semibold hover:bg-[#f3ebe5] transition">
                Watch Trailer
              </button>
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE SLIDER */}
        <div className="relative w-full h-[500px] overflow-hidden rounded-3xl shadow-2xl border-2">
          {SLIDER_IMAGES.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Hero slide ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))}

          {/* FIXED STICKY TEXT */}
          <div className="absolute bottom-2 right-4 bg-white bg-opacity-40 px-4 py-2 rounded shadow drop-shadow-2xl border-2 z-20">
            <span className="text-sm font-ubuntu text-brand font-medium">
              Get inspired and start your adventure 🌍
            </span>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden px-4 py-10 space-y-6 text-center animate-fade-in-up">
        <h2 className="font-ubuntu text-4xl font-extrabold leading-tight tracking-wide">
          What’s <span className="text-[#7e395b]">Next</span>
        </h2>

        <div className="text-2xl sm:text-2xl font-serif tracking-wide leading-snug">
          <Typewriter
            words={TYPEWRITER_WORDS}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </div>

        {/* CTA BUTTONS */}
        <div className="flex flex-col gap-4 items-center">
          <Link
            to="/winter-sports"
            className="px-6 py-3 bg-brand text-white rounded-full font-semibold shadow-md hover:shadow-lg hover:bg-[#6b314c] focus:outline-none focus:ring-2 focus:ring-[#7e395b] active:scale-95 transition-transform duration-300 w-full max-w-xs"
          >
            Snow Adventure
          </Link>

          <a
            href="https://www.youtube.com/watch?v=MDOXbRii-sg"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <button className="px-6 py-3 border border-bg-brand text-brand rounded-full font-semibold hover:bg-[#f3ebe5] focus:outline-none focus:ring-2 focus:ring-[#7e395b] transition w-full max-w-xs">
              Trailer
            </button>
          </a>
        </div>

        {/* REGIONS CIRCLE ICONS */}
        {/* <div className="flex justify-center gap-6 mt-4">
          {REGIONS.map(({ name, image }) => (
            <div
              key={name}
              role="button"
              tabIndex={0}
              aria-label={name}
              className="flex flex-col items-center cursor-pointer"
            >
              <div
                className="w-18 h-18 rounded-full bg-center bg-cover border-2 border-white shadow-md hover:scale-110 transition-transform duration-300"
                style={{ backgroundImage: `url(${image})` }}
              />
              <span className="mt-1 text-sm font-medium text-gray-700">
                {name}
              </span>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}

export default Hero;
