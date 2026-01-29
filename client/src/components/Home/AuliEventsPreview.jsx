import React from "react";
import { Link } from "react-router-dom";
import christmasImg from "../../assets/images/auli-christmas-placeholder.jpeg";
import newyearImg from "../../assets/images/auli-newyear-placeholder.jpeg";

export default function AuliEventsPreview() {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      {/* Heading */}
      {/* Featured Banner */}
      <div className="marquee-wrapper relative uppercase overflow-hidden bottom-10 bg-brand border-y border-brand text-white font-extrabold py-2 px-10 mb-8">
        <div className="marquee-content flex ">
          <span>• Featured Winter Experience •</span>
          <span>• Limited Seats Available •</span>
          <span>• Early Bird Offer Active •</span>
          <span>• Auli Christmas & New Year 2025 •</span>

          {/* Spacer for clean separation between loops */}
          <span className="inline-block w-7"></span>
        </div>

        <div className="marquee-content flex">
          <span>• Featured Winter Experience •</span>
          <span>• Limited Seats Available •</span>
          <span>• Early Bird Offer Active •</span>
          <span>• Auli Christmas & New Year 2025 •</span>

          {/* Spacer again */}
          <span className="inline-block w-7"></span>
        </div>
        <div className="marquee-content flex">
          <span>• Featured Winter Experience •</span>
          <span>• Limited Seats Available •</span>
          <span>• Early Bird Offer Active •</span>
          <span>• Auli Christmas & New Year 2025 •</span>

          {/* Spacer again */}
          <span className="inline-block w-7"></span>
        </div>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-ubuntu font-bold text-brand mt-2">
          Auli Christmas & New Year 25-26
        </h2>
        <p className="text-sm text-gray-600 max-w-md mx-auto mt-2">
          Snow. Music. Bonfire nights. Celebrate your year-end above the clouds.
        </p>
      </div>

      {/* Event Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        {/* Christmas */}
        <div className="rounded-2xl border shadow-md bg-white overflow-hidden group">
          <div className="h-48 md:h-56 w-full overflow-hidden">
            <img
              src={christmasImg}
              alt="Auli Christmas DJ Night"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />
          </div>

          <div className="p-5 space-y-2">
            <h3 className="text-xl font-ubuntu font-semibold text-brand">
              Christmas DJ Night (24–26 Dec)
            </h3>
            <p className="text-sm text-gray-600">
              3-day snowy celebration with music, bonfire & mountain stay.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <Link
                to="/auli"
                className="px-4 py-2 rounded-full bg-brand text-white text-sm font-medium shadow hover:bg-brand/90 transition"
              >
                View Details
              </Link>
              <a
                href="https://wa.me/917017502703?text=Hi%2C%20I'm%20interested%20in%20the%20Auli%20Christmas%20Event"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-brand underline hover:text-brand/70"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>

        {/* New Year */}
        <div className="rounded-2xl border shadow-md bg-white overflow-hidden group">
          <div className="h-48 md:h-56 w-full overflow-hidden">
            <img
              src={newyearImg}
              alt="Auli New Year DJ Night"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />
          </div>

          <div className="p-5 space-y-2">
            <h3 className="text-xl font-ubuntu font-semibold text-brand">
              New Year DJ Night (31 Dec – 2 Jan)
            </h3>
            <p className="text-sm text-gray-600">
              Ring in 2026 with snow, music, bonfire & stunning Himalayan views.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <Link
                to="/auli"
                className="px-4 py-2 rounded-full bg-brand text-white text-sm font-medium shadow hover:bg-brand/90 transition"
              >
                View Details
              </Link>
              <a
                href="https://wa.me/917017502703?text=Hi%2C%20I'm%20interested%20in%20the%20Auli%20New%20Year%20Event"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-brand underline hover:text-brand/70"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
