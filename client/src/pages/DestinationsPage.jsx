import React from "react";
import { Link } from "react-router-dom";

import { destinations } from "../data/destinations";

import Meta from "../seo/Meta";

export default function Destinations() {
  return (
    <>
      <Meta
        title="Destinations | WhatNext Online"
        description="Explore premium Himalayan trekking experiences and curated adventure destinations across India."
        image="https://www.whatnextonline.in/og/destinations.jpg"
        canonical="https://www.whatnextonline.in/destinations"
      />

      <main className="min-h-screen bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-4 py-20">
          {/* HEADING */}
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.25em] text-gray-500 mb-3">
              Himalayan Experiences
            </p>

            <h1 className="text-4xl md:text-5xl font-bold font-ubuntu text-brand">
              Explore Our Destinations
            </h1>

            <p className="max-w-2xl mx-auto mt-5 text-gray-600 text-base md:text-lg leading-relaxed">
              Curated trekking experiences across the Himalayas
              designed for adventure seekers, nature lovers, and
              modern explorers.
            </p>
          </div>

          {/* GRID */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {destinations.map((dest) => (
              <Link
                key={dest.slug}
                to={`/destinations/${dest.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* IMAGE */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={dest.imageUrl}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* LOCATION */}
                  <div className="absolute bottom-5 left-5 text-white">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/70 mb-1">
                      {dest.location}
                    </p>

                    <h2 className="text-2xl font-bold font-ubuntu leading-tight">
                      {dest.name}
                    </h2>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5 space-y-4">
                  {/* TREK STATS */}
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-zinc-100 px-3 py-1 rounded-full">
                      {dest.duration}
                    </span>

                    <span className="text-xs bg-zinc-100 px-3 py-1 rounded-full">
                      {dest.difficulty}
                    </span>

                    <span className="text-xs bg-zinc-100 px-3 py-1 rounded-full">
                      {dest.bestSeason}
                    </span>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {dest.cardDescription}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-brand font-semibold text-sm">
                      Explore Trek
                    </span>

                    <span className="text-xl transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}