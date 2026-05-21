import { useState } from "react";

import {
  ChevronDown,
  Clock3,
  Mountain,
  Route,
} from "lucide-react";

const TrekItinerary = ({ destination }) => {
  const [openDay, setOpenDay] =
    useState(null);

  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-[10px] uppercase tracking-[0.25em] text-orange-700 font-semibold">
            Trek Itinerary
          </p>

          <h2 className="mt-2 text-2xl sm:text-4xl font-serif text-zinc-900 leading-tight">
            Day By Day Expedition Plan
          </h2>
        </div>

        {/* Timeline */}
        <div className="mt-8 sm:mt-10 border-t border-orange-100">
          {destination.itinerary.map(
            (item, index) => {
              const isOpen =
                openDay === index;

              return (
                <div
                  key={item.day}
                  className="border-b border-orange-100"
                >
                  {/* Top */}
                  <button
                    onClick={() =>
                      setOpenDay(
                        isOpen ? null : index
                      )
                    }
                    className="w-full text-left py-5 sm:py-6"
                  >
                    <div className="flex items-start justify-between gap-6">
                      {/* Left */}
                      <div className="flex-1">
                        {/* Day */}
                        <p className="text-[10px] uppercase tracking-[0.22em] text-orange-700 font-semibold">
                          {item.day}
                        </p>

                        {/* Title */}
                        <h3 className="mt-2 text-lg sm:text-2xl font-semibold text-zinc-900 leading-snug">
                          {item.title}
                        </h3>

                        {/* Meta */}
                        <div className="flex flex-wrap gap-x-5 gap-y-3 mt-4">
                          <div className="flex items-center gap-2">
                            <Route
                              size={15}
                              className="text-orange-700"
                            />

                            <span className="text-sm text-zinc-600">
                              {item.distance}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <Clock3
                              size={15}
                              className="text-orange-700"
                            />

                            <span className="text-sm text-zinc-600">
                              {item.duration}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <Mountain
                              size={15}
                              className="text-orange-700"
                            />

                            <span className="text-sm text-zinc-600">
                              {item.altitude}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Dropdown Icon */}
                      <div className="pt-1">
                        <ChevronDown
                          size={20}
                          className={`text-orange-700 transition-transform duration-300 ${
                            isOpen
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </div>
                    </div>
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] pb-6"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-3xl">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default TrekItinerary;