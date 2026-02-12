import React from "react";
import { Helmet } from "react-helmet";
import imageHero from "../assets/images/skiing.png";

import BookingSection from "../components/helper/BookingComponent";
import BestTimeToVisit from "../components/BestTimeToVisit";

import { packages } from "../utils/data/auliCourses";



export default function AuliCourse() {
  return (
    <div className="bg-white text-gray-900 relative">
      
      {/* ================= SEO ================= */}
      <Helmet>
        <title>Ski Courses In Auli | Professional Ski Training | WhatNext</title>
        <meta
          name="description"
          content="Premium skiing courses in Auli. Beginner to professional programs with certified instructors and complete equipment support."
        />
        <link
          rel="canonical"
          href="https://www.whatnextonline.in/auli-skiing-course"
        />
      </Helmet>

      {/* ================= HERO ================= */}
      <section
        className="relative min-h-[85vh] md:min-h-screen bg-cover bg-center flex items-end md:items-center"
        style={{ backgroundImage: `url(${imageHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 to-black/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 pb-10 md:pb-0 grid md:grid-cols-2 gap-8 items-center text-white">
          <div>
            <span className="uppercase tracking-widest text-xs md:text-sm text-white/70">
              Auli · Uttarakhand
            </span>

            <h1 className="text-3xl md:text-6xl font-bold mt-3 leading-tight">
              Learn <span className="text-brand">Skiing</span>
              <br className="hidden md:block" />
              Like a Pro
            </h1>

            <p className="mt-3 md:mt-5 text-sm md:text-lg text-white/90 max-w-xl">
              Premium ski training programs with certified coaches and real
              slope experience.
            </p>

            <div className="flex flex-col md:flex-row gap-3 md:gap-4 mt-5">
              <a
                href="#packages"
                className="bg-white text-center text-black py-3 px-6 rounded-full font-semibold"
              >
                View Programs
              </a>

              <a
                href="#booking"
                className="border border-white/40 text-center py-3 px-6 rounded-full"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PACKAGE SELECTOR ================= */}
      <section id="packages" className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Choose Your Program
          </h2>

          <div className="flex flex-col gap-4">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`p-5 rounded-xl border transition ${
                  pkg.featured
                    ? "border-brand bg-brand/5 shadow-lg"
                    : "bg-white shadow"
                }`}
              >
                {/* IMAGE */}
                {pkg.image && (
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}

                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-sm md:text-lg">
                    {pkg.name}
                  </h3>

                  {pkg.featured && (
                    <span className="text-xs bg-brand text-white px-3 py-1 rounded-full">
                      Best Value
                    </span>
                  )}
                </div>

                <p className="text-sm text-gray-600 mt-1">{pkg.title}</p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-xl font-bold text-brand">
                    {pkg.price}
                  </span>

                  <a
                    href={`/winter-sports/${pkg.id}`}
                    className="bg-brand text-white px-5 py-2 rounded-full text-sm"
                  >
                    Select
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BEST TIME ================= */}
      <BestTimeToVisit bestTimeToVisit="Mid December to March" />

      {/* ================= BOOKING ================= */}
      <section id="booking" className="py-16 bg-gray-50">
        <BookingSection />
      </section>
    </div>
  );
}
