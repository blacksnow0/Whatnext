import { useParams } from "react-router-dom";
import { useState } from "react";

import { destinations } from "../utils/data";

import HeroSection from "../components/destination/HeroSection";
import FAQSection from "../components/destination/FAQSection";
import StickyBookingBar from "../components/destination/StickyBookingBar";
import ExpeditionBrief from "../components/destination/ExpeditionBrief";
import TrekServices from "../components/destination/TrekServices";
import TrekItinerary from "../components/destination/TrekItinerary";
import DestinationGallery from "../components/destination/DestinationGallery";

import DepartureModal from "../modal/DepartureModal";
import DestinationRail from "../components/destination/DestinationRail";
import CallButton from "../components/destination/CallButton";

const DestinationDetail = () => {
  const { id } = useParams();
  const [showDepartures, setShowDepartures] = useState(false);

  const destination = destinations.find((dest) => dest.id === id);

  return (
    <main>
      <HeroSection destination={destination} />

      <DestinationRail/>

      <CallButton/>

      <ExpeditionBrief destination={destination} />

      <TrekServices destination={destination} />

      <TrekItinerary destination={destination} />

      <DestinationGallery destination={destination} />

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
  );
};

export default DestinationDetail;
