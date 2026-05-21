import { useState } from "react";

import {
  ChevronDown,
  Clock3,
  Mountain,
  Route,
} from "lucide-react";

const TrekItinerary = ({ destination }) => {
  const [openDay, setOpenDay] =
    useState(0);

  return (
    <section className="bg-white py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-[10px] uppercase tracking-[0.25em] text-orange-700 font-semibold">
            Trek Itinerary
          </p>

          <h2 className="mt-2 text-2xl sm:text-5xl font-serif text-zinc-900 leading-tight">
            Day By Day Expedition Plan
          </h2>
        </div>

        {/* Mobile Layout */}
        <div className="sm:hidden mt-8 border-t border-orange-100">
          {destination.itinerary.map(
            (item, index) => {
              const isOpen =
                openDay === index;

              return (
                <div
                  key={item.day}
                  className="border-b border-orange-100"
                >
                  <button
                    onClick={() =>
                      setOpenDay(
                        isOpen ? null : index
                      )
                    }
                    className="w-full text-left py-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-orange-700 font-semibold">
                          {item.day}
                        </p>

                        <h3 className="mt-2 text-lg font-semibold text-zinc-900">
                          {item.title}
                        </h3>

                        <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4">
                          <div className="flex items-center gap-2">
                            <Route
                              size={14}
                              className="text-orange-700"
                            />

                            <span className="text-sm text-zinc-600">
                              {item.distance}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <Clock3
                              size={14}
                              className="text-orange-700"
                            />

                            <span className="text-sm text-zinc-600">
                              {item.duration}
                            </span>
                          </div>
                        </div>
                      </div>

                      <ChevronDown
                        size={18}
                        className={`text-orange-700 transition-transform duration-300 ${
                          isOpen
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] pb-5"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm text-zinc-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:block mt-16">
          {destination.itinerary.map(
            (item, index) => {
              const isOpen =
                openDay === index;

              return (
                <div
                  key={item.day}
                  className="grid grid-cols-[90px_1fr] gap-10"
                >
                  {/* Left Timeline */}
                  <div className="relative flex flex-col items-center">
                    {/* Number */}
                    <div className="text-4xl lg:text-5xl font-serif text-orange-700/90 leading-none">
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </div>

                    {/* Line */}
                    {index !==
                      destination.itinerary
                        .length -
                        1 && (
                      <div className="w-px flex-1 bg-orange-100 mt-6" />
                    )}
                  </div>

                  {/* Right Content */}
                  <div
                    className={`pb-14 ${
                      index !==
                      destination.itinerary
                        .length -
                        1
                        ? "border-b border-orange-100"
                        : ""
                    }`}
                  >
                    {/* Top */}
                    <button
                      onClick={() =>
                        setOpenDay(
                          isOpen ? null : index
                        )
                      }
                      className="w-full text-left group"
                    >
                      <div className="flex items-start justify-between gap-10">
                        <div>
                          {/* Day */}
                          <p className="text-[11px] uppercase tracking-[0.25em] text-orange-700 font-semibold">
                            {item.day}
                          </p>

                          {/* Title */}
                          <h3 className="mt-3 text-3xl font-serif text-zinc-900 leading-tight transition-opacity duration-300 group-hover:opacity-80">
                            {item.title}
                          </h3>

                          {/* Meta */}
                          <div className="flex flex-wrap gap-x-8 gap-y-3 mt-6">
                            <div className="flex items-center gap-2">
                              <Route
                                size={16}
                                className="text-orange-700"
                              />

                              <span className="text-sm text-zinc-600">
                                {item.distance}
                              </span>
                            </div>

                            <div className="flex items-center gap-2">
                              <Clock3
                                size={16}
                                className="text-orange-500"
                              />

                              <span className="text-sm text-zinc-600">
                                {item.duration}
                              </span>
                            </div>

                            <div className="flex items-center gap-2">
                              <Mountain
                                size={16}
                                className="text-orange-500"
                              />

                              <span className="text-sm text-zinc-600">
                                {item.altitude}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Arrow */}
                        <ChevronDown
                          size={22}
                          className={`text-orange-500 mt-2 transition-transform duration-300 ${
                            isOpen
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </div>
                    </button>

                    {/* Expanded Content */}
                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 mt-8"
                          : "grid-rows-[0fr] opacity-70 mt-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-base text-zinc-600 leading-relaxed max-w-3xl">
                          {item.description}
                        </p>
                      </div>
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