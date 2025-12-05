import React from "react";
import { Helmet } from "react-helmet";

import BookingForm from "../components/helper/BoookingComponentAuliEvent";

// Placeholder images – swap these with your real assets later
import auliHero from "../assets/images/auli-hero-placeholder.jpeg";
import christmasImg from "../assets/images/auli-christmas-placeholder.jpeg";
import newYearImg from "../assets/images/auli-newyear-placeholder.jpeg";

export default function AuliEventsPage() {
  // TODO: replace this with your actual WhatsApp number, e.g. "9198XXXXXXX"
  const WHATSAPP_NUMBER = "+917017502703";

  const whatsappBaseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

  const events = [
    {
      id: "christmas",
      name: "Auli Christmas DJ Night 2025",
      slug: "auli-christmas-dj-night-2025",
      datesLabel: "24–26 December 2025",
      startDateISO: "2025-12-24T10:00:00+05:30",
      endDateISO: "2025-12-25T12:00:00+05:30",
      image: christmasImg,
      price: 12000,
      tagline:
        "Celebrate Christmas in the snow with DJ sets, bonfire and Himalayan views.",
      shortDescription:
        "A 3-day Christmas celebration in the snowy slopes of Auli — arrival on Day 1, party night on Day 2, and a scenic departure on Day 3. Includes DJ night, bonfire, 5 meals, local performers, stay and transport from Rishikesh.",
    },
    {
      id: "new-year",
      name: "Auli New Year’s Eve DJ Night 2025–26",
      slug: "auli-new-year-dj-night-2025",
      datesLabel: "31 December 2025 – 2 January 2026",
      startDateISO: "2025-12-31T10:00:00+05:30",
      endDateISO: "2026-01-01T12:00:00+05:30",
      image: newYearImg,
      price: 12000,
      tagline:
        "Ring in the New Year above the clouds with snow, music and fireworks.",
      shortDescription:
        "A 3-day New Year celebration in Auli — arrival on Day 1, New Year’s Eve party on Day 2, and a peaceful snow morning departure on Day 3. Includes DJ night, bonfire, 5 meals, local performers, stay and transport from Rishikesh. ",
    },
  ];

  const generateWhatsAppUrl = (eventName) => {
    const text = `Hi, I'm interested in the ${eventName} package in Auli 2025. Please share details about availability, inclusions, add-ons (photoshoot, activities) and payment options.`;
    return `${whatsappBaseUrl}?text=${encodeURIComponent(text)}`;
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": events.map((event) => ({
      "@type": "Event",
      name: event.name,
      description:
        "DJ night, bonfire, 5 meals, local performers, stay in Auli and round-trip transportation from Rishikesh.",
      startDate: event.startDateISO,
      endDate: event.endDateISO,
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: {
        "@type": "Place",
        name: "Auli, Uttarakhand",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Auli",
          addressRegion: "Uttarakhand",
          addressCountry: "IN",
        },
      },
      image: [
        "https://www.whatnextonline.in/static/auli-hero-placeholder.jpeg",
      ],
      organizer: {
        "@type": "Organization",
        name: "WhatNext",
        url: "https://www.whatnextonline.in",
      },
      offers: {
        "@type": "Offer",
        price: event.price,
        priceCurrency: "INR",
        availability: "https://schema.org/LimitedAvailability",
        url: "https://www.whatnextonline.in/auli",
      },
    })),
  };

  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      {/* SEO + OpenGraph + Event Schema */}
      <Helmet>
        <title>
          Auli Christmas & New Year DJ Nights 2025 | Snow Party from Rishikesh |
          WhatNext
        </title>
        <meta
          name="description"
          content="Book Auli Christmas and New Year DJ Night 2025 packages with WhatNext. DJ sets, bonfire, 5 meals, local performers, stay in Auli and round-trip transportation from Rishikesh."
        />
        <meta
          name="keywords"
          content="Auli DJ night 2025, Auli New Year party, Auli Christmas party, Auli snow party, Rishikesh to Auli package, Auli New Year DJ, Auli Christmas DJ, Auli trip 2025"
        />
        <link rel="canonical" href="https://www.whatnextonline.in/auli" />

        {/* Open Graph for ads + social */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Auli Christmas & New Year DJ Nights 2025 | Snow Party Packages"
        />
        <meta
          property="og:description"
          content="Celebrate Christmas and New Year 2025 in Auli with DJ nights, bonfire, meals, local performers and mountain stay. Packages from Rishikesh to Auli and back."
        />
        <meta property="og:url" content="https://www.whatnextonline.in/auli" />
        <meta
          property="og:image"
          content="https://www.whatnextonline.in/static/auli-hero-placeholder.jpeg"
        />

        {/* JSON-LD Event schema */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero Section */}
      <section
        className="w-full min-h-[70vh] md:min-h-[85vh] bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: `url(${auliHero})` }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-3xl text-center px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-ubuntu font-bold text-white leading-tight drop-shadow-md">
            Auli Christmas & New Year DJ Nights 2025
          </h1>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#events"
              className="px-6 py-3 rounded-full bg-brand text-white font-semibold text-sm md:text-base 
        shadow-lg hover:shadow-xl hover:bg-brand/90 transition"
            >
              View Event Packages
            </a>

            <a
              href={generateWhatsAppUrl(
                "Auli Christmas & New Year DJ Nights 2025"
              )}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full border border-white/80 text-white font-semibold text-sm md:text-base 
        hover:bg-brand hover:text-white transition shadow-lg"
            >
              Book on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Sticky-ish internal navigation */}
      <div className="w-full border-b border-gray-200 bg-white/90 backdrop-blur sticky top-18 z-20">
        <nav className="max-w-6xl mx-auto px-4 md:px-6 overflow-x-auto scrollbar-hide">
          <div className="flex gap-3 md:gap-6 py-3 text-xs md:text-sm whitespace-nowrap">
            <a href="#overview" className="custom-nav-btn">
              Overview
            </a>
            <a href="#events" className="custom-nav-btn">
              Events
            </a>
            <a href="#highlights" className="custom-nav-btn">
              Highlights
            </a>
            <a href="#itinerary" className="custom-nav-btn">
              Itinerary
            </a>
            <a href="#inclusions" className="custom-nav-btn">
              Inclusions
            </a>
            <a href="#travel" className="custom-nav-btn">
              Travel & Stay
            </a>
            <a href="#gallery" className="custom-nav-btn">
              Gallery
            </a>
            <a href="#faq" className="custom-nav-btn">
              FAQ
            </a>
            <a href="#booking" className="custom-nav-btn">
              Booking
            </a>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 space-y-16">
        {/* Overview */}
        <section id="overview">
          <div className="mb-6">
            <span className="block font-ubuntu text-xs uppercase tracking-[0.3em] text-brand font-medium mb-2">
              Winter in the Himalayas
            </span>
            <h2 className="inline-block px-4 md:px-6 py-2 md:py-3 border-2 text-xl md:text-3xl font-ubuntu text-brand bg-[#f4eef1] shadow-md rounded-md tracking-wide">
              Why Auli for Christmas & New Year?
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-[2fr,1.2fr] items-start">
            <div className="space-y-4 text-gray-700 font-light leading-relaxed">
              <p>
                Auli is one of India’s most iconic winter destinations – a
                secluded Himalayan ski town perched above Joshimath, overlooking
                the mighty Nanda Devi and surrounding peaks. In December and
                January, the slopes transform into a snow-covered amphitheatre,
                where pine forests, gondola rides and crisp mountain air create
                the perfect setting for an unforgettable year-end celebration.
              </p>
              <p>
                This curated experience is designed for travellers who want more
                than just a hotel party. You get DJ nights in the snow, a
                crackling bonfire, 5 included meals, local Garhwali performers,
                comfortable stay in Auli and fully managed transportation from
                Rishikesh to Auli and back – so you can focus on making
                memories, not managing logistics.
              </p>
              <p>
                Whether you are travelling with friends, your partner or a small
                group, the idea is simple – spend Christmas and New Year in the
                mountains, surrounded by fresh snow, good music and even better
                stories.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-gray-200 shadow-sm bg-white space-y-4">
              <h3 className="font-ubuntu text-lg font-semibold text-brand">
                Quick Snapshot
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  • Location: Auli, Uttarakhand (via Rishikesh & Joshimath)
                </li>
                <li>• Events: Christmas DJ Night & New Year’s Eve DJ Night</li>
                <li>• Group type: Mixed, friendly, experiential travellers</li>
                <li>• Meals: 5 meals included in each event package</li>
                <li>• Stay: Comfortable stay in Auli (shared rooms)</li>
                <li>• Transport: Rishikesh → Auli → Rishikesh included</li>
                <li>• Photoshoot: Available as an add-on</li>
                <li>• Entertainment: DJ, bonfire & local performers</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section id="events" className="space-y-8">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-2xl md:text-3xl font-ubuntu font-semibold text-brand">
              Choose Your Event
            </h2>
            <p className="text-xs md:text-sm text-gray-500">
              Early bird price:{" "}
              <span className="font-semibold text-brand">₹12,000</span> per
              person (limited seats)
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {events.map((event) => (
              <article
                key={event.id}
                className="border rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition"
              >
                <div className="h-48 md:h-56 w-full overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 md:p-6 space-y-3">
                  <p className="text-xs uppercase tracking-[0.25em] text-gray-500 font-semibold">
                    {event.id === "christmas"
                      ? "Christmas Special"
                      : "New Year’s Eve"}
                  </p>
                  <h3 className="text-lg md:text-xl font-ubuntu font-semibold text-gray-900">
                    {event.name}
                  </h3>
                  <p className="text-sm text-gray-600">{event.datesLabel}</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {event.shortDescription}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <div>
                      <p className="text-xs text-gray-500">Early bird price</p>
                      <p className="text-2xl font-bold text-brand">
                        ₹{event.price.toLocaleString("en-IN")}
                      </p>
                      <p className="text-[11px] text-gray-500">
                        Per person • All inclusive*
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <a
                        href={generateWhatsAppUrl(event.name)}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-full bg-brand text-white text-xs md:text-sm font-medium hover:bg-brand/90 shadow-md text-center"
                      >
                        WhatsApp to Book
                      </a>
                      <a
                        href="#booking"
                        className="text-[11px] text-brand underline text-center"
                      >
                        See booking details
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="text-xs text-gray-500">
            *All inclusive refers to meals, stay, event access and
            transportation from Rishikesh and back. Photoshoot and certain
            activities are available as add-ons.
          </p>
        </section>

        {/* Highlights */}
        <section id="highlights" className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-ubuntu font-semibold text-brand">
            Experience Highlights
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-5 rounded-xl border bg-white shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">
                Snow DJ Night & Bonfire
              </h3>
              <p className="text-sm text-gray-700">
                Dance to curated DJ sets in the middle of a winter wonderland
                while the bonfire keeps you warm. Expect a mix of commercial,
                Bollywood and upbeat electronic music.
              </p>
            </div>
            <div className="p-5 rounded-xl border bg-white shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">
                Local Performers & Culture
              </h3>
              <p className="text-sm text-gray-700">
                Enjoy live performances by local artists from the Garhwal region
                – music, folk elements and stories that give you a real sense of
                the mountains beyond just the views.
              </p>
            </div>
            <div className="p-5 rounded-xl border bg-white shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">
                Hassle-Free Travel from Rishikesh
              </h3>
              <p className="text-sm text-gray-700">
                Start and end your journey in Rishikesh. Transportation from
                Rishikesh to Auli and back is included, so you don’t have to
                worry about bookings, transfers or coordination.
              </p>
            </div>
            <div className="p-5 rounded-xl border bg-white shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">
                5 Included Meals
              </h3>
              <p className="text-sm text-gray-700">
                Stay well-fed through the mountain cold with 5 carefully planned
                meals – a mix of hearty, familiar and local flavours so you’re
                always comfortable and energised.
              </p>
            </div>
            <div className="p-5 rounded-xl border bg-white shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Stay in Auli</h3>
              <p className="text-sm text-gray-700">
                Stay in shared accommodation in Auli so you wake up to snowy
                views instead of just driving up for the party and heading back.
                More time in the snow, less time on the road.
              </p>
            </div>
            <div className="p-5 rounded-xl border bg-white shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">
                Optional Photoshoot Add-On
              </h3>
              <p className="text-sm text-gray-700">
                If you’d like, opt for a dedicated photoshoot add-on and get
                professionally captured pictures in the snow, at viewpoints and
                during the event – perfect for memories and socials.
              </p>
            </div>
          </div>
        </section>

        {/* Itinerary */}
        <section id="itinerary" className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-ubuntu font-semibold text-brand">
            3-Day Event Itinerary
          </h2>

          <p className="text-sm text-gray-600">
            Both Christmas and New Year events follow this upgraded 3-day
            format. Five meals are included across the stay.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Christmas Event */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                Christmas DJ Night • 24–26 December 2025
              </h3>

              <div className="space-y-4 text-sm text-gray-700">
                <div className="p-4 border-l-4 border-brand bg-white rounded-md shadow-sm">
                  <p className="font-semibold mb-1">Day 1 – Arrival in Auli</p>
                  <p>
                    Start from Rishikesh and ascend through Devprayag, Srinagar
                    and Joshimath. Reach Auli, check in, enjoy views and settle
                    in. Evening at leisure with dinner included.
                  </p>
                </div>

                <div className="p-4 border-l-4 border-brand bg-white rounded-md shadow-sm">
                  <p className="font-semibold mb-1">
                    Day 2 – Christmas DJ Night
                  </p>
                  <p>
                    Explore snow, relax at your stay and gear up for the
                    evening. The Christmas DJ Night begins after sunset — music,
                    bonfire, 5 meals across your stay, and live local
                    performers.
                  </p>
                </div>

                <div className="p-4 border-l-4 border-brand bg-white rounded-md shadow-sm">
                  <p className="font-semibold mb-1">
                    Day 3 – Departure to Rishikesh
                  </p>
                  <p>
                    Wake up to a crisp winter morning, enjoy breakfast, click
                    photos or opt for the photoshoot add-on. Drive back to
                    Rishikesh with unforgettable memories.
                  </p>
                </div>
              </div>
            </div>

            {/* New Year Event */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                New Year’s Eve DJ Night • 31 Dec 2025 – 2 Jan 2026
              </h3>

              <div className="space-y-4 text-sm text-gray-700">
                <div className="p-4 border-l-4 border-brand bg-white rounded-md shadow-sm">
                  <p className="font-semibold mb-1">Day 1 – Arrival in Auli</p>
                  <p>
                    Drive from Rishikesh to Auli, check in and enjoy the
                    snow-covered surroundings. Dinner included. Rest early or
                    explore nearby viewpoints.
                  </p>
                </div>

                <div className="p-4 border-l-4 border-brand bg-white rounded-md shadow-sm">
                  <p className="font-semibold mb-1">
                    Day 2 – New Year’s Eve Party
                  </p>
                  <p>
                    Spend the day relaxing and exploring. By evening, the New
                    Year’s Eve DJ night begins — bonfire, music, local artists
                    and a countdown in the mountains under the stars.
                  </p>
                </div>

                <div className="p-4 border-l-4 border-brand bg-white rounded-md shadow-sm">
                  <p className="font-semibold mb-1">
                    Day 3 – Snow Morning & Return
                  </p>
                  <p>
                    Welcome the new year with a serene Himalayan sunrise,
                    breakfast, and your return journey to Rishikesh.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inclusions & Exclusions */}
        <section id="inclusions" className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl md:text-3xl font-ubuntu font-semibold text-brand mb-3">
              What’s Included
            </h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                ✔️ Round-trip transportation: Rishikesh → Auli → Rishikesh
              </li>
              <li>✔️ Comfortable stay in Auli (shared rooms)</li>
              <li>✔️ 5 meals included in each event package</li>
              <li>✔️ DJ night party access</li>
              <li>✔️ Bonfire during the event night (weather-permitting)</li>
              <li>✔️ Performances by local artists/performers</li>
              <li>✔️ Basic trip coordination and on-ground support</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-ubuntu font-semibold text-brand mb-3">
              What’s Not Included
            </h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>❌ Travel to and from Rishikesh</li>
              <li>❌ Photoshoot add-on (available separately)</li>
              <li>❌ Personal expenses, shopping and tips</li>
              <li>
                ❌ Any additional adventure activities not mentioned as included
              </li>
              <li>❌ Travel insurance (recommended)</li>
            </ul>
          </div>
        </section>

        {/* Travel & Stay */}
        <section id="travel" className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-ubuntu font-semibold text-brand">
            Travel & Stay Details
          </h2>
          <div className="space-y-4 text-sm text-gray-700">
            <p>
              Both events start and end in{" "}
              <span className="font-semibold">Rishikesh</span>. You’ll receive
              the exact reporting time and location after your booking is
              confirmed. From there, you travel with the group towards Auli via
              Joshimath, with planned breaks for food and washrooms.
            </p>
            <p>
              In Auli, you stay in shared accommodation suited for winter – with
              basic amenities, comfortable bedding and common areas to relax.
              The idea is not ultra-luxury, but a warm, cozy stay that keeps you
              close to the snow and the event location.
            </p>
            <p>
              Road conditions in the mountains can vary in winter, so timing and
              exact routes may shift slightly based on safety and weather. Our
              priority is always your safety, followed by comfort and
              experience.
            </p>
          </div>
        </section>

        {/* Gallery Placeholder */}
        <section id="gallery" className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-ubuntu font-semibold text-brand">
            Gallery (Coming Soon)
          </h2>
          <p className="text-sm text-gray-700">
            This section will soon feature real photos and videos from Auli
            Christmas and New Year events – DJ nights, bonfires, views and
            behind-the-scenes moments. For now, we are using placeholder images.
            Once your media is ready, simply replace the image imports at the
            top of this file with actual event photos.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-ubuntu font-semibold text-brand">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 text-sm text-gray-700">
            <div>
              <p className="font-semibold">
                Is this trip suitable for beginners who have never been to snow?
              </p>
              <p>
                Yes. This experience is designed for first-time as well as
                repeat visitors to the mountains. The focus is on celebration,
                views and comfort – not extreme adventure.
              </p>
            </div>
            <div>
              <p className="font-semibold">
                Is alcohol allowed during the event?
              </p>
              <p>
                Alcohol policy may depend on local regulations and property
                rules closer to the event dates. You’ll receive exact details in
                your pre-trip briefing over WhatsApp.
              </p>
            </div>
            <div>
              <p className="font-semibold">
                What should I pack for Auli in December/January?
              </p>
              <p>
                Winter layers, thermals, gloves, woollen cap, good shoes with
                grip, socks, moisturiser, lip balm and any personal medication.
                Once you book, you’ll get a detailed packing list.
              </p>
            </div>
            <div>
              <p className="font-semibold">What is the group size?</p>
              <p>
                To keep the experience comfortable and manageable, we keep group
                sizes limited. Once early bird seats are filled, prices and
                availability may change.
              </p>
            </div>
            <div>
              <p className="font-semibold">How do I confirm my booking?</p>
              <p>
                Click on the WhatsApp button, share your event preference
                (Christmas or New Year), number of people and basic details.
                You’ll receive payment instructions and confirmation over
                WhatsApp.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section id="booking" className="space-y-4">
          <BookingForm whatsappNumber="7017502703" />
        </section>
      </main>
    </div>
  );
}
