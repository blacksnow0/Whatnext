import { useParams } from "react-router-dom";
import { useState } from "react";

import { destinations } from "../data/destinations.js";

import Meta from "../seo/Meta.jsx";

import {
  organizationSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateTourSchema,
} from "../seo/structuredData.js";

import HeroSection from "../components/destination/HeroSection";

import StickyBookingBar from "../components/destination/StickyBookingBar";
import ExpeditionBrief from "../components/destination/ExpeditionBrief";
import TrekServices from "../components/destination/TrekServices";
import TrekItinerary from "../components/destination/TrekItinerary";

import DestinationRail from "../components/destination/DestinationRail";
import CallButton from "../components/destination/CallButton";

import { lazy, Suspense } from "react";

const DestinationGallery = lazy(
  () => import("../components/destination/DestinationGallery"),
);

const TestimonialsSection = lazy(
  () => import("../components/destination/TestimonialsSection"),
);

const FAQSection = lazy(() => import("../components/destination/FAQSection"));

import DepartureModal from "../modal/DepartureModal";
import FloatingEnquiryRail from "../components/destination/FloatingEnquiryRail.jsx";

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

  const schemas = [
    organizationSchema,

    generateFAQSchema(destination.faq),

    generateBreadcrumbSchema(destination),

    generateTourSchema(destination),
  ];

  return (
    <>
      <Meta
        title={destination.seo.title}
        description={destination.seo.description}
        image={destination.seo.image}
        canonical={destination.seo.canonical}
        schemas={schemas}
      />
      <main>
        <HeroSection destination={destination} />

        <DestinationRail />

        <FloatingEnquiryRail destination={destination}/>

        <CallButton />

        <ExpeditionBrief destination={destination} />

        <TrekServices destination={destination}/>
        

        <TrekItinerary destination={destination} />

        <Suspense fallback={null}>
          <DestinationGallery destination={destination} />
        </Suspense>

        <Suspense fallback={null}>
          <TestimonialsSection destination={destination} />
        </Suspense>

        <Suspense fallback={null}>
          <FAQSection destination={destination} />
        </Suspense>

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
