import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import PhotoGallery from "../components/PhotoGallery";
import ItinerarySection from "../components/ItinerarySection";
import PackageHighlights from "../components/PackageHiglights";
import BestTimeToVisit from "../components/BestTimeToVisit";

import { destinations } from "../utils/data";
import { useParams } from "react-router-dom";

const DestinationDetail = () => {
  const { id } = useParams();
  const destination = destinations.find((dest) => dest.id === id);

  const galleryImages = destination.galleryImages;

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
        <nav>
          <div className="max-w-6xl mx-auto overflow-x-auto scrollbar-hide">
            <div className="flex md:gap-6 whitespace-nowrap text-sm md:text-base">
              <a href="#overview" className="custom-nav-btn">
                Overview
              </a>
              <a href="#best-time" className="custom-nav-btn">
                Best Time
              </a>
              <a href="#itinerary" className="custom-nav-btn">
                Itinerary
              </a>
              <a href="#gallery" className="custom-nav-btn">
                Gallery
              </a>
              <a href="#highlights" className="custom-nav-btn">
                Highlights
              </a>
              <a href="#inclusions" className="custom-nav-btn">
                Inclusions
              </a>
            </div>
          </div>
        </nav>

        {/* Overview */}
        <section id="overview">
          <div className="mb-12 relative">
            <span className="block font-ubuntu text-xs uppercase tracking-widest text-brand font-medium mb-3">
              Where Adventure Begins
            </span>

            <h2 className="inline-block px-6 py-3 border-2  text-2xl md:text-4xl font-ubuntu text-brand bg-[#f4eef1] shadow-xl rounded-md tracking-wide">
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
          <button className="btn-primary">Book This Trek</button>
        </section>
      </div>
    </div>
  );
};

export default DestinationDetail;
