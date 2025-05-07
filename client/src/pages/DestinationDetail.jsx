import React from "react";
import trekImage from "../assets/trip4.jpeg";
import gallery1 from "../assets/trip1.jpeg";
import gallery2 from "../assets/trip2.jpeg";
import gallery3 from "../assets/trip3.jpeg";
import gallery4 from "../assets/kagbhusandi.jpeg";
import gallery5 from "../assets/hero3.jpeg";
import gallery6 from "../assets/trip.jpeg";
// At the top of your file
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import PhotoGallery from "../components/PhotoGallery";

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
      "Day 1: Arrival at Joshimath",
      "Day 2: Trek to Ghangaria",
      "Day 3: Visit Kagbhusandi Lake",
      "Day 4: Explore Valley of Flowers",
      "Day 5: Return to Joshimath & Departure",
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
    <div className="min-h-screen w-full text-gray-900 font-exo">
      {/* Hero Section */}
      <div
        className="w-full min-h-[70vh] md:min-h-[85vh] bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: `url(${destination.imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">
            {destination.name}
          </h1>
          <p className="text-xl text-white/80 mt-2 tracking-wide">
            {destination.country}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 space-y-20">
        {/* Overview */}
        <section>
          <h2 className="text-4xl font-bold mb-4">About the Trek</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {destination.description}
          </p>
        </section>

        {/* Best Time to Visit */}
        <section>
          <h2 className="text-4xl font-bold mb-4">Best Time to Visit</h2>
          <p className="text-lg text-gray-700">{destination.bestTimeToVisit}</p>
        </section>

        {/* Highlights */}
        <section>
          <h2 className="text-4xl font-bold mb-6">Package Highlights</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
            {destination.highlights.map((item, index) => (
              <li
                key={index}
                className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm"
              >
                ✅ {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Itinerary */}
        <section>
          <h2 className="text-4xl font-bold mb-6">Itinerary</h2>
          <ol className="space-y-3 list-decimal list-inside text-lg text-gray-700">
            {destination.itinerary.map((day, index) => (
              <li key={index}>{day}</li>
            ))}
          </ol>
        </section>

        <PhotoGallery images={galleryImages} />

        {/* Inclusions & Exclusions */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
