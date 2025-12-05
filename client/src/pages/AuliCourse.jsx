import React from "react";
import BestTimeToVisit from "../components/BestTimeToVisit";
import imageHero from "../assets/images/snowboard.jpeg";
import BookingSection from "../components/helper/BookingComponent";

export default function AuliCourse() {
  const destination = {
    name: "Auli Skiing & Snowboarding Course",
    country: "Auli, Uttarakhand",
    imageUrl: imageHero,
    description:
      "Experience 7 days of adrenaline and learning in India’s premier snow sports destination. This course combines hands-on training, breathtaking landscapes, and a complete alpine experience for both beginners and thrill-seekers.",
    bestTimeToVisit: "Mid-December to March",
    highlights: [
      "7-day certified training with professional instructors",
      "Skiing & snowboarding gear included",
      "All meals and cozy mountain accommodation",
      "Group activities and guided slope sessions",
      "Breathtaking views of Nanda Devi and surrounding peaks",
    ],
    itinerary: [
      {
        day: "Day 1 – Arrival & Orientation",
        detail:
          "Arrive in Auli, one of India’s most stunning snow-clad destinations. You’ll check into your mountain lodge, meet fellow adventurers, and enjoy a cozy welcome dinner. Evening orientation covers course details, safety instructions, and gear familiarization. Sleep under the stars as snowflakes fall outside.",
      },
      {
        day: "Day 2 – Getting Started on the Slopes",
        detail:
          "Morning starts with a warm-up and introduction to your instructor team. Learn about balance, gliding techniques, snowplow basics, and slope etiquette. By afternoon, you’ll have your first hands-on experience on gentle slopes with real gear. Evening bonfire and reflection session with hot soup.",
      },
      {
        day: "Day 3 – Building Balance & Confidence",
        detail:
          "Now that you’re comfortable on the snow, you’ll dive into controlled descents, braking, and mastering turns. Instructors will guide you through dynamic drills to refine stance and edge control. End your day with a group movie night showcasing pro skiing and snowboarding clips for inspiration.",
      },
      {
        day: "Day 4 – Intermediate Techniques & Chair Lift Training",
        detail:
          "Today, you’ll graduate to intermediate slopes! Focus on linking turns, using the chair lift safely, and managing moderate gradients. Snowboarders begin carving techniques while skiers refine posture and control. Afternoon group challenge — your first mini race down the practice slope!",
      },
      {
        day: "Day 5 – Exploring Auli’s Alpine Terrain",
        detail:
          "A guided exploration day! Ride the ski lift to Auli’s higher slopes overlooking Nanda Devi. Experience advanced runs (optional for beginners) under close supervision. Learn edge pressure, carving, and freestyle basics. Capture GoPro-worthy moments surrounded by panoramic white peaks.",
      },
      {
        day: "Day 6 – Freestyle & Skill Mastery",
        detail:
          "Time to push limits! Depending on your progress, you’ll learn small jumps, backward glides, and balance tricks. Instructors conduct video feedback sessions to help fine-tune your form. Evening certificate practice runs and sunset view session with local music and dinner.",
      },
      {
        day: "Day 7 – Final Run & Certification Ceremony",
        detail:
          "Your final day begins with an early-morning practice run where you’ll showcase your progress. Later, gather for the official course wrap-up and certification ceremony. Exchange photos, laughter, and goodbyes with your group before departing — leaving with memories, skills, and new lifelong friends.",
      },
    ],
    inclusions: [
      "Accommodation (shared mountain cottages)",
      "All meals (breakfast, lunch, dinner)",
      "Certified instructors",
      "Skiing/Snowboarding equipment",
      "Lift passes & local transfers",
      "First aid & safety gear",
    ],
    exclusions: [
      "Travel to and from Auli",
      "Personal expenses",
      "Additional adventure activities",
      "Insurance (recommended separately)",
    ],
  };

  return (
    <div className="min-h-screen w-full text-gray-900">
      <Helmet>
        <title>
          Skiing & Snowboarding Course in Auli | 7-Day Winter Sports Package |
          WhatNext
        </title>

        <meta
          name="description"
          content="Join the 7-day skiing and snowboarding course in Auli, Uttarakhand. Includes certified instructors, gear, accommodation, meals, and breathtaking Himalayan views."
        />

        <meta
          name="keywords"
          content="Auli skiing course, Auli snowboarding, winter sports India, skiing in Uttarakhand, Auli winter trip, skiing lessons India, snow adventure, WhatNext"
        />

        <link
          rel="canonical"
          href="https://www.whatnextonline.in/winter-sports"
        />

        {/* OG Tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Auli Skiing & Snowboarding Course | Winter Sports Adventure"
        />
        <meta
          property="og:description"
          content="Learn skiing and snowboarding in Auli with certified instructors, gear, accommodation, meals, and group activities. Perfect for beginners and adventure lovers."
        />
        <meta
          property="og:image"
          content="https://www.whatnextonline.in/static/auli-skiing-hero.jpg"
        />
        <meta
          property="og:url"
          content="https://www.whatnextonline.in/winter-sports"
        />

        {/* JSON-LD Schema for Sports Activity */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SportsActivityLocation",
            name: "Auli Skiing & Snowboarding Course",
            description:
              "A 7-day skiing and snowboarding training program in Auli with certified instructors, meals, gear and accommodation.",
            sport: "Skiing, Snowboarding",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Auli",
              addressRegion: "Uttarakhand",
              addressCountry: "IN",
            },
            image: [
              "https://www.whatnextonline.in/static/auli-skiing-hero.jpg",
            ],
            provider: {
              "@type": "Organization",
              name: "WhatNext Online",
              url: "https://www.whatnextonline.in",
            },
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <div
        className="w-full min-h-[70vh] md:min-h-[85vh] bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: `url(${destination.imageUrl})` }}
      >
        <div className="absolute inset-0 bg-white/30" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-ubuntu font-bold text-brand drop-shadow-lg">
            {destination.name}
          </h1>
          <p className="text-xl text-brand mt-2 tracking-wide">
            {destination.country}
          </p>
        </div>
      </div>

      {/* Page Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 space-y-10">
        {/* Navigation */}
        <nav>
          <div className="max-w-6xl mx-auto overflow-x-auto scrollbar-hide">
            <div className="flex md:gap-6 whitespace-nowrap text-sm md:text-base">
              <a href="#overview" className="custom-nav-btn">
                Overview
              </a>
              <a href="#pricing" className="custom-nav-btn">
                Pricing
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
            <h2 className="inline-block px-6 py-3 border-2 text-2xl md:text-4xl font-ubuntu text-brand bg-[#f4eef1] shadow-xl rounded-md tracking-wide">
              About the Course
            </h2>
            <p className="mt-4 font-garmond text-base text-gray-700 font-light">
              {destination.description}
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="grid md:grid-cols-2 gap-8">
          <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition bg-white">
            <h3 className="text-2xl font-ubuntu font-semibold mb-2 text-brand">
              Skiing Course
            </h3>
            <p className="text-gray-700 mb-4">
              Perfect for beginners learning balance, control, and turns.
            </p>
            <p className="text-4xl font-bold text-brand mb-4">₹29,999</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>7 days of certified training</li>
              <li>All equipment included</li>
              <li>Accommodation & meals</li>
              <li>Lift passes & local transport</li>
            </ul>
          </div>

          <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition bg-white">
            <h3 className="text-2xl font-ubuntu font-semibold mb-2 text-brand">
              Snowboarding Course
            </h3>
            <p className="text-gray-700 mb-4">
              Ideal for thrill-seekers mastering balance, jumps, and freestyle
              basics.
            </p>
            <p className="text-4xl font-bold text-brand mb-4">₹39,999</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>7 days of certified training</li>
              <li>All equipment included</li>
              <li>Accommodation & meals</li>
              <li>Lift passes & local transport</li>
            </ul>
          </div>
        </section>

        {/* Best Time */}
        <BestTimeToVisit bestTimeToVisit={destination.bestTimeToVisit} />

        {/* Itinerary Section */}
        <section id="itinerary" className="py-10">
          <h2 className="text-3xl font-bold text-brand mb-6">
            Detailed Itinerary
          </h2>
          <div className="space-y-6">
            {destination.itinerary.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white border-l-4 border-brand shadow-md rounded-lg"
              >
                <h3 className="text-xl font-semibold text-brand mb-2">
                  {item.day}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

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

        {/* Booking */}
        <BookingSection />
      </div>
    </div>
  );
}
