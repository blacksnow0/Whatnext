import React from "react";
import { Link } from "react-router-dom";

import { destinations } from "../utils/data";
import { Helmet } from "react-helmet";

export default function Destinations() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* SEO */}
      <Helmet>
        <title>Destinations | WhatNext</title>
        <meta
          name="description"
          content="Explore the best Himalayan treks and travel destinations curated by WhatNext. Kagbhusandi Trek, Valley of Flowers, Satopanth Tal, Kuari Pass, Hampta Pass and more."
        />
        <link
          rel="canonical"
          href="https://www.whatnextonline.in/destinations"
        />
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 py-20 space-y-10">
        <h1 className="text-4xl font-ubuntu font-bold text-brand text-center mb-10">
          Our Destinations
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((dest) => (
            <Link
              key={dest.id}
              to={`/destinations/${dest.id}`}
              className="group bg-white border rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={dest.imageUrl}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-5 space-y-2">
                <h2 className="text-lg font-ubuntu font-semibold text-gray-900">
                  {dest.name}
                </h2>

                <p className="text-xs uppercase tracking-wider text-gray-500">
                  {dest.country}
                </p>

                <p className="text-sm text-gray-700 line-clamp-3">
                  {dest.description}
                </p>

                <p className="text-sm mt-2 text-brand font-medium">
                  View Details →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
