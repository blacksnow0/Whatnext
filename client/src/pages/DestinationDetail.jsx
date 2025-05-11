import React from "react";
import trekImage from "../assets/trip4.jpeg";
import gallery1 from "../assets/trip1.jpeg";
import gallery2 from "../assets/trip2.jpeg";
import gallery3 from "../assets/trip3.jpeg";
import gallery4 from "../assets/kagbhusandi.jpeg";
import gallery5 from "../assets/hero3.jpeg";
import gallery6 from "../assets/trip.jpeg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import PhotoGallery from "../components/PhotoGallery";
import ItinerarySection from "../components/ItinerarySection";
import PackageHighlights from "../components/PackageHiglights";
import BestTimeToVisit from "../components/BestTimeToVisit";

const DestinationDetail = () => {
  const destination = {
    name: "Kagbhusandi Trek",
    country: "India",
    description:
      "Nestled in the Garhwal Himalayas, Kagbhusandi Trek offers breathtaking views, alpine meadows, and a spiritual escape into nature. It's a lesser-known gem ideal for experienced trekkers seeking solitude and serenity.",
    imageUrl: trekImage,
    bestTimeToVisit: "June - October",
    attractions: [
      "Kagbhusandi Lake",
      "Valley of Flowers",
      "Hemkund Sahib",
      "Joshimath",
    ],
    itinerary: [
      {
        day: "Day 1",
        highlight: "Arrival & Acclimatization in Joshimath",
        description:
          "Your adventure begins as you arrive in the quaint Himalayan town of Joshimath, nestled amidst steep mountain walls and pine forests. Spend the day acclimatizing to the altitude, exploring local temples like Narasimha Temple, or simply soaking in the peaceful mountain air. Evening briefings with your trek leader prepare you for the days ahead.",
      },
      {
        day: "Day 2",
        highlight: "Scenic Trek to Ghangaria",
        description:
          "Begin your trek with a beautiful ascent through dense forests, winding trails, and cascading waterfalls. The route from Govindghat to Ghangaria is a visual treat, with the Pushpawati River accompanying you along the way. Arrive at the serene village of Ghangaria — your gateway to the Valley of Flowers and Kagbhusandi Lake. Relax and recharge in the quietude of this alpine hamlet.",
      },
      {
        day: "Day 3",
        highlight: "Spiritual Hike to Kagbhusandi Lake",
        description:
          "This day marks the spiritual and physical high point of the journey. Embark on a challenging yet rewarding trek to the sacred Kagbhusandi Lake, cradled high in the Garhwal Himalayas. Surrounded by rugged cliffs and echoing silence, the emerald lake feels otherworldly. Mythology and mystique come alive here — it's believed that the lake is watched over by celestial crows and sages. Return to Ghangaria by evening, forever changed by what you’ve seen.",
      },
      {
        day: "Day 4",
        highlight: "Discover the Valley of Flowers",
        description:
          "Today, enter one of India’s most enchanting UNESCO World Heritage sites — the Valley of Flowers. Wander through a natural sanctuary bursting with rare Himalayan flora, colorful alpine blooms, and misty meadows. Witness nature’s raw canvas painted in a thousand hues as you trek deeper into the valley. It's not just a place — it’s a feeling. Return to Ghangaria with your soul uplifted.",
      },
      {
        day: "Day 5",
        highlight: "Descent & Departure from Joshimath",
        description:
          "Wrap up your journey with a descent back to Govindghat and a drive to Joshimath. Reflect on the memories forged — the friendships, the breathtaking landscapes, and the inner peace you found in the mountains. After a warm farewell and some last-minute local shopping, you’ll depart from Joshimath with a heart full of adventure and awe.",
      },
    ],

    highlights: [
      "6-day guided trek",
      "Camp under the stars",
      "All meals included",
      "Local guide and porter",
    ],
    inclusions: [
      "Accommodation in tents/lodges",
      "All meals during the trek",
      "Certified local guide",
      "First aid kit",
      "Entry and forest permits",
    ],
    exclusions: [
      "Transportation to base location",
      "Personal trekking gear",
      "Insurance",
      "Snacks & beverages",
    ],
    gallery: [gallery1, gallery2, gallery3, gallery4],
  };

  const galleryImages = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
  ];

  return (
    <div className="min-h-screen w-full text-gray-900">
      {/* Hero Section */}
      <div
        className="w-full min-h-[70vh] md:min-h-[85vh] bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: `url(${destination.imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-ubuntu font-bold text-white drop-shadow-lg">
            {destination.name}
          </h1>
          <p className="text-xl text-white/80 mt-2 tracking-wide">
            {destination.country}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 space-y-10">
        {/* Section Navigation */}
        <nav className="sticky top-[80px] z-30 bg-[#fdfaf7]/80 backdrop-blur-sm shadow-[inset_0_-1px_0_0_#e0d6cc] border-t border-[#f5eee7]">
          <div className="max-w-6xl mx-auto px-4 py-2 overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 md:gap-8 whitespace-nowrap text-sm md:text-base font-medium text-[#4b392e]">
              <a
                href="#overview"
                className="hover:text-[#a2683d] transition-colors duration-200"
              >
                Overview
              </a>
              <a
                href="#best-time"
                className="hover:text-[#a2683d] transition-colors duration-200"
              >
                Best Time
              </a>
              <a
                href="#itinerary"
                className="hover:text-[#a2683d] transition-colors duration-200"
              >
                Itinerary
              </a>
              <a
                href="#gallery"
                className="hover:text-[#a2683d] transition-colors duration-200"
              >
                Gallery
              </a>
              <a
                href="#highlights"
                className="hover:text-[#a2683d] transition-colors duration-200"
              >
                Highlights
              </a>
              <a
                href="#inclusions"
                className="hover:text-[#a2683d] transition-colors duration-200"
              >
                Inclusions
              </a>
            </div>
          </div>
        </nav>

        {/* Overview */}
        <section id="overview">
          <div className="mb-12 relative">
            <span className="block text-xs uppercase tracking-widest text-[#a2683d] font-medium mb-3">
              Where Adventure Begins
            </span>

            <h2 className="inline-block px-6 py-3 border-2 border-[#a2683d] text-2xl md:text-4xl font-ubuntu font-bold text-[#3b2f24] bg-white/90 backdrop-blur-sm shadow-xl rounded-md tracking-wide">
              About the Trek
            </h2>
            <p className="mt-4 font-garmond text-base text-gray-700 font-light">
              {destination.description}
            </p>
          </div>
        </section>

        {/* Best Time to Visit */}
        <BestTimeToVisit bestTimeToVisit={destination.bestTimeToVisit} />

        {/* Itinerary */}
        <ItinerarySection itinerary={destination.itinerary} />

        <PhotoGallery images={galleryImages} />

        {/* Highlights */}
        <PackageHighlights highlights={destination.highlights} />

        {/* Inclusions & Exclusions */}
        <section
          id="inclusions"
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          <div>
            <h2 className="text-3xl font-bold mb-4">Inclusions</h2>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              {destination.inclusions.map((item, index) => (
                <li key={index}>✔️ {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Exclusions</h2>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              {destination.exclusions.map((item, index) => (
                <li key={index}>❌ {item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Booking Button */}
        <section className="text-center pt-12">
          <button className="bg-[#88542f] hover:bg-[#6d4026] transition text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg">
            Book This Trek
          </button>
        </section>
      </div>
    </div>
  );
};

export default DestinationDetail;
