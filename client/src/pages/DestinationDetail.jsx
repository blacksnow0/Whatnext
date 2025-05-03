// src/DestinationDetail.js

import React from "react";
import trip3 from "../assets/trip3.jpeg";

const DestinationDetail = () => {
  const destination = {
    name: "Paris",
    country: "France",
    description:
      "Known for its rich history, art, and culture, Paris is a top destination for travelers around the world.",
    imageUrl: trip3, // Placeholder image URL
    bestTimeToVisit: "April - June, September - November",
    attractions: [
      "Eiffel Tower",
      "Louvre Museum",
      "Notre-Dame Cathedral",
      "Champs-Élysées",
    ],
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Destination Header */}
      <div className="mb-6">
        <img
          className="w-full h-96 object-cover rounded-lg shadow-lg"
          src={destination.imageUrl}
          alt={destination.name}
        />
        <h1 className="text-4xl font-bold mt-4">{destination.name}</h1>
        <p className="text-xl text-gray-500">{destination.country}</p>
      </div>

      {/* Destination Description */}
      <div className="mb-6">
        <p className="text-lg">{destination.description}</p>
      </div>

      {/* Best Time to Visit */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Best Time to Visit</h2>
        <p className="text-lg text-gray-700">{destination.bestTimeToVisit}</p>
      </div>

      {/* Attractions */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Top Attractions</h2>
        <ul className="list-disc pl-6">
          {destination.attractions.map((attraction, index) => (
            <li key={index} className="text-lg text-gray-700">
              {attraction}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DestinationDetail;
