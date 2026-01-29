import React from "react";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* SEO */}
      <Helmet>
        <title>About Us | WhatNext Online</title>

        <meta
          name="description"
          content="WhatNext Online curates memorable travel experiences including Himalayan treks, winter sports, destination events, and experiential journeys across India. Discover who we are and why thousands of travelers trust WhatNext."
        />

        <meta
          name="keywords"
          content="WhatNext, What Next Online, trekking company India, Auli events, Himalaya treks, adventure travel India, curated trips India"
        />

        <meta property="og:title" content="About WhatNext Online" />
        <meta
          property="og:description"
          content="WhatNext Online brings curated Himalayan treks, snow experiences, and unforgettable destination events such as Auli DJ Nights. Learn about our mission and story."
        />
        <meta property="og:url" content="https://www.whatnextonline.in/about" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.whatnextonline.in/static/whatnext-about-banner.jpg"
        />

        <link rel="canonical" href="https://www.whatnextonline.in/about" />

        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "WhatNext Online",
            url: "https://www.whatnextonline.in",
            logo: "https://www.whatnextonline.in/static/whatnext-logo.png",
            sameAs: [
              "https://instagram.com/whatnextonline",
              "https://www.facebook.com/whatnextonline",
            ],
            description:
              "WhatNext Online specializes in curated Himalayan treks, winter adventures, Auli events, and experiential travel packages across India.",
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="w-full bg-brand/10 py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-ubuntu font-bold text-brand">
          About WhatNext Online
        </h1>
        <p className="mt-3 text-gray-700 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Curating unforgettable experiences across the Himalayas — from treks
          to winter sports to destination events.
        </p>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-14 space-y-16">
        {/* Who We Are */}
        <section className="space-y-4">
          <h2 className="text-3xl font-ubuntu font-semibold text-brand">
            Who We Are
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            WhatNext Online is a travel experiences brand built with one simple
            idea — to help people discover what’s next. Whether it’s conquering
            a Himalayan trek, celebrating New Year in Auli’s snow-covered
            slopes, or experiencing curated adventure trips, our goal is to
            create journeys that feel authentic, safe, and unforgettable.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We bring together passion for exploration and professional trip
            planning to make adventure travel simple and accessible. From the
            moment you enquire to the moment you return home, we handle the
            details so you can focus entirely on the experience.
          </p>
        </section>

        {/* What We Do */}
        <section className="space-y-4">
          <h2 className="text-3xl font-ubuntu font-semibold text-brand">
            What We Do
          </h2>

          <ul className="space-y-4 text-gray-700 leading-relaxed">
            <li>
              <span className="font-semibold text-brand">
                • Curated Himalayan Treks
              </span>
              <p>
                Handpicked treks such as Kagbhusandi, Kuari Pass, Valley of
                Flowers, Satopanth, Hampta Pass and more — designed for all
                experience levels with safety and comfort in mind.
              </p>
            </li>

            <li>
              <span className="font-semibold text-brand">
                • Winter Sports & Snow Adventures
              </span>
              <p>
                From skiing and snowboarding courses in Auli to immersive winter
                getaways, we bring the thrill of the Himalayas to life.
              </p>
            </li>

            <li>
              <span className="font-semibold text-brand">
                • Auli Christmas & New Year Events
              </span>
              <p>
                One of our most loved offerings — DJ nights, bonfire evenings,
                local performers, snow activities, and a fully managed 3-day
                winter celebration in Auli every December.
              </p>
            </li>

            <li>
              <span className="font-semibold text-brand">
                • Custom Group Experiences
              </span>
              <p>
                We curate customized trips for student groups, corporate teams,
                friend circles, and private adventure seekers with complete
                planning, guidance, and support.
              </p>
            </li>
          </ul>
        </section>

        {/* Why Choose Us */}
        <section className="space-y-4">
          <h2 className="text-3xl font-ubuntu font-semibold text-brand">
            Why Choose WhatNext?
          </h2>

          <ul className="grid md:grid-cols-2 gap-6 text-gray-700">
            <li className="p-5 bg-white border shadow-sm rounded-xl">
              <h3 className="font-semibold mb-1 text-brand">
                Experienced Trip Coordination
              </h3>
              <p>
                Every itinerary is crafted with field expertise, safety checks,
                and local knowledge.
              </p>
            </li>

            <li className="p-5 bg-white border shadow-sm rounded-xl">
              <h3 className="font-semibold mb-1 text-brand">
                Traveler-First Approach
              </h3>
              <p>
                Transparent pricing, friendly support, and curated itineraries
                built to maximize comfort and memories.
              </p>
            </li>

            <li className="p-5 bg-white border shadow-sm rounded-xl">
              <h3 className="font-semibold mb-1 text-brand">
                Local Partnerships
              </h3>
              <p>
                We work closely with trusted local guides, homestays, and
                operators to ensure authentic experiences.
              </p>
            </li>

            <li className="p-5 bg-white border shadow-sm rounded-xl">
              <h3 className="font-semibold mb-1 text-brand">
                Seamless Digital Experience
              </h3>
              <p>
                Simple online booking, WhatsApp support, and quick confirmations
                ensure easy planning for every traveler.
              </p>
            </li>
          </ul>
        </section>

        {/* Mission */}
        <section>
          <h2 className="text-3xl font-ubuntu font-semibold text-brand">
            Our Mission
          </h2>
          <p className="mt-3 text-gray-700 text-lg leading-relaxed">
            To inspire and enable people to explore India’s most beautiful and
            lesser-known destinations — safely, comfortably, and with memories
            that last a lifetime.
          </p>
        </section>
      </div>
    </div>
  );
}
