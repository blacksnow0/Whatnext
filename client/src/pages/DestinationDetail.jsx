import { useParams } from "react-router-dom";
import { useState } from "react";

import { destinations } from "../data/destinations.js";

import Meta from "../seo/Meta.jsx";

import HeroSection from "../components/destination/HeroSection";
import FAQSection from "../components/destination/FAQSection";
import StickyBookingBar from "../components/destination/StickyBookingBar";
import ExpeditionBrief from "../components/destination/ExpeditionBrief";
import TrekServices from "../components/destination/TrekServices";
import TrekItinerary from "../components/destination/TrekItinerary";
import DestinationGallery from "../components/destination/DestinationGallery";
import DestinationRail from "../components/destination/DestinationRail";
import CallButton from "../components/destination/CallButton";
import TestimonialsSection from "../components/destination/TestimonialsSection";

import DepartureModal from "../modal/DepartureModal";

const DestinationDetail = () => {
  const { slug } = useParams();

  const [showDepartures, setShowDepartures] = useState(false);

  const destination = destinations.find((dest) => dest.slug === slug);

  // SAFETY FALLBACK
  if (!destination) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-white">
        <h1 className="text-2xl font-semibold">Destination not found</h1>
      </main>
    );
  }

  return (
    <>
      <Meta
        title={destination.seo.title}
        description={destination.seo.description}
        image={destination.seo.image}
        canonical={destination.seo.canonical}
      />
      <main>
        <HeroSection destination={destination} />

        <DestinationRail />

        <CallButton />

        <ExpeditionBrief destination={destination} />

        <TrekServices destination={destination} />

        <TrekItinerary destination={destination} />

        <DestinationGallery destination={destination} />

        <TestimonialsSection destination={destination} />

        <FAQSection destination={destination} />

        <StickyBookingBar
          price={destination.price}
          name={destination.name}
          onOpenDepartures={() => setShowDepartures(true)}
        />

        <DepartureModal
          isOpen={showDepartures}
          onClose={() => setShowDepartures(false)}
          departures={destination.departures}
          destination={destination}
        />
      </main>
    </>
  );
};

export default DestinationDetail;
