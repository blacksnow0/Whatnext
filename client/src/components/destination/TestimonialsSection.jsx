import { useState } from "react";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const TestimonialsSection = ({
  destination,
}) => {
  const [active, setActive] =
    useState(0);

  const testimonial =
    destination.testimonials[
      active
    ];

  // NEXT
  const nextTestimonial = () => {
    setActive((prev) =>
      prev ===
      destination.testimonials
        .length -
        1
        ? 0
        : prev + 1
    );
  };

  // PREV
  const prevTestimonial = () => {
    setActive((prev) =>
      prev === 0
        ? destination
            .testimonials
            .length - 1
        : prev - 1
    );
  };

  // MOBILE SWIPE
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (
    e
  ) => {
    touchStartX =
      e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX =
      e.changedTouches[0].screenX;

    if (
      touchStartX - touchEndX >
      50
    ) {
      nextTestimonial();
    }

    if (
      touchEndX - touchStartX >
      50
    ) {
      prevTestimonial();
    }
  };

  return (
    <section
      id="testimonials"
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-[10px] uppercase tracking-[0.28em] text-orange-500 font-semibold">
            Trek Stories
          </p>

          <h2 className="mt-4 text-3xl sm:text-5xl font-serif text-zinc-900 leading-tight">
            Journeys remembered long after the mountains.
          </h2>
        </div>

        {/* Main Layout */}
        <div
          onTouchStart={
            handleTouchStart
          }
          onTouchEnd={
            handleTouchEnd
          }
          className="mt-14 grid lg:grid-cols-[420px_1fr] gap-10 lg:gap-20 items-center"
        >
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-[32px] aspect-[0.85]">
              <img
                src={
                  testimonial.image
                }
                alt={
                  testimonial.name
                }
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Tag */}
            <div className="absolute left-5 bottom-5 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2">
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/70">
                {
                  testimonial.highlight
                }
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            {/* Quote */}
            <p className="text-2xl sm:text-4xl lg:text-5xl font-serif text-zinc-900 leading-[1.18]">
              “
              {
                testimonial.quote
              }
              ”
            </p>

            {/* User */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-zinc-900">
                {
                  testimonial.name
                }
              </h3>

              <p className="mt-2 text-zinc-500">
                {
                  testimonial.location
                }{" "}
                •{" "}
                {
                  testimonial.trek
                }
              </p>
            </div>

            {/* Bottom Controls */}
            <div className="flex items-center justify-between mt-12">
              {/* Selectors */}
              <div className="flex items-center gap-3">
                {destination.testimonials.map(
                  (_, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        setActive(
                          index
                        )
                      }
                      className={`transition-all duration-300 ${
                        active ===
                        index
                          ? "w-12 bg-orange-500"
                          : "w-3 bg-zinc-300 hover:bg-zinc-400"
                      } h-3 rounded-full`}
                    />
                  )
                )}
              </div>

              {/* Desktop Arrows */}
              <div className="hidden lg:flex items-center gap-3">
                <button
                  onClick={
                    prevTestimonial
                  }
                  className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-100 transition-all duration-300"
                >
                  <ChevronLeft
                    size={18}
                  />
                </button>

                <button
                  onClick={
                    nextTestimonial
                  }
                  className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-400 transition-all duration-300 shadow-[0_8px_24px_rgba(249,115,22,0.25)]"
                >
                  <ChevronRight
                    size={18}
                  />
                </button>
              </div>
            </div>

            {/* Mobile Hint */}
            <p className="lg:hidden mt-6 text-sm text-zinc-400">
              Swipe to explore more stories.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;