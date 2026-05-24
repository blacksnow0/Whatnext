import Hero from "../components/Home/Hero";
import TopPics from "../components/Home/TopPics";
import Uttrakhand from "../components/Home/Uttrakhand";

import Meta from "../seo/Meta";

import {
  organizationSchema,
} from "../seo/structuredData";

export default function Home() {
  return (
    <div className="bg-white">
      <Meta
        title="WhatNext Online | Himalayan Treks, Winter Trips & Expeditions"
        description="Discover curated Himalayan trekking experiences, winter adventures and unforgettable mountain journeys across Uttarakhand & Himachal."
        image="https://www.whatnextonline.in/og/whatnextonline.webp"
        canonical="https://www.whatnextonline.in/"
        schemas={[
          organizationSchema,
        ]}
      />

      <h1 className="sr-only">
        Himalayan Treks &
        Adventure Experiences by
        WhatNext Online
      </h1>

      <Hero />

      <TopPics />

      <Uttrakhand />
    </div>
  );
}