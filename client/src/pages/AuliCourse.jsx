import React from "react";
import { Helmet } from "react-helmet";
import imageHero from "../assets/images/snowboard.jpeg";
import BookingSection from "../components/helper/BookingComponent";
import BestTimeToVisit from "../components/BestTimeToVisit";

export default function AuliCourse() {
  return (
    <div className="w-full text-gray-900">
      {/* SEO */}
      <Helmet>
        <title>
          Learn Skiing & Snowboarding in Auli | 7-Day Certified Course |
          WhatNext
        </title>
        <meta
          name="description"
          content="Join a beginner-friendly 7-day skiing & snowboarding course in Auli. Certified instructors, equipment, accommodation & meals included."
        />
        <link
          rel="canonical"
          href="https://www.whatnextonline.in/auli-skiing-course"
        />
      </Helmet>

      {/* HERO */}
      <section
        className="relative min-h-[85vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${imageHero})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Learn Skiing & Snowboarding in Auli
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl text-white/90">
            A 7-day beginner-friendly alpine course with certified instructors,
            safety-first training, and breathtaking Himalayan slopes.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#booking"
              className="bg-brand px-8 py-4 text-white font-semibold rounded-md"
            >
              Talk to an Instructor
            </a>
            <a
              href="#course"
              className="border border-white px-8 py-4 rounded-md"
            >
              View Course Details
            </a>
          </div>

          <div className="mt-8 flex gap-6 text-sm text-white/90">
            <span>✔ No prior experience needed</span>
            <span>✔ All gear included</span>
            <span>✔ Small groups</span>
          </div>
        </div>
      </section>

      {/* WHO IS THIS FOR */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Is This Course Right for You?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Complete Beginners",
                text: "Never skied before? We start from walking on snow and build confidence step by step.",
              },
              {
                title: "Adventure Seekers",
                text: "Physically active and ready to level up? Progress to longer runs and carving basics.",
              },
              {
                title: "Snowboard Curious",
                text: "Prefer a board over skis? Snowboarding is available on request with expert guidance.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU WILL LEARN */}
      <section id="course" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            What You’ll Learn in 7 Days
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-gray-700">
            {[
              "Balance & stance fundamentals",
              "Speed control (snowplough)",
              "Turning & carving basics",
              "Chair lift & slope etiquette",
              "Terrain awareness & safety",
              "Optional freestyle introduction",
            ].map((skill, i) => (
              <div key={i} className="p-6 border rounded-lg text-center">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ITINERARY */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">
            7-Day Learning Journey
          </h2>

          <div className="space-y-6">
            {[
              ["Day 1", "Arrival, orientation, gear fitting, safety briefing"],
              ["Day 2", "Snowplough braking, balance & gentle slopes"],
              ["Day 3", "Turning techniques & confidence runs"],
              ["Day 4", "Lift usage & intermediate slopes"],
              ["Day 5", "Terrain exploration & carving basics"],
              ["Day 6", "Freestyle intro & video feedback"],
              ["Day 7", "Final run & certification ceremony"],
            ].map(([day, desc], i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow border-l-4 border-brand"
              >
                <h3 className="font-semibold text-lg">{day}</h3>
                <p className="text-gray-700 mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Course Pricing
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Skiing Course",
                price: "₹29,999",
                desc: "Perfect for beginners focusing on balance and control.",
              },
              {
                title: "Snowboarding Course",
                price: "₹39,999",
                desc: "Ideal for thrill-seekers learning board control & freestyle.",
              },
            ].map((p, i) => (
              <div key={i} className="border p-8 rounded-xl shadow-lg bg-white">
                <h3 className="text-2xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-gray-700">{p.desc}</p>
                <p className="text-4xl font-bold text-brand mt-6">{p.price}</p>
                <p className="mt-4 text-sm text-gray-600">
                  All equipment, accommodation & meals included
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEST TIME */}
      <BestTimeToVisit bestTimeToVisit="Mid-December to March" />

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              [
                "Do I need prior experience?",
                "No, this course is designed for beginners.",
              ],
              [
                "Is snowboarding harder than skiing?",
                "Snowboarding has a steeper learning curve, but is fully guided.",
              ],
              [
                "Is it safe?",
                "Yes, certified instructors and safety gear are included.",
              ],
              ["What fitness level is required?", "Basic fitness is enough."],
            ].map(([q, a], i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-semibold">{q}</h4>
                <p className="text-gray-700 mt-2">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-20">
        <BookingSection />
      </section>
    </div>
  );
}
