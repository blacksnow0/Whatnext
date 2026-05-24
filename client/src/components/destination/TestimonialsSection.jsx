import { useRef, useState } from "react";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const TestimonialsSection = ({
  destination,
}) => {
  const [active, setActive] =
    useState(0);

  const [animating, setAnimating] =
    useState(false);

  const touchStartX =
    useRef(0);

  const touchEndX = useRef(0);

  const testimonial =
    destination.testimonials[
      active
    ];

  /* CHANGE SLIDE */
  const changeSlide = (newIndex) => {
    if (animating) return;

    setAnimating(true);

    setTimeout(() => {
      setActive(newIndex);

      setTimeout(() => {
        setAnimating(false);
      }, 80);
    }, 180);
  };

  const nextTestimonial = () => {
    const next =
      active ===
      destination.testimonials
        .length -
        1
        ? 0
        : active + 1;

    changeSlide(next);
  };

  const prevTestimonial = () => {
    const prev =
      active === 0
        ? destination
            .testimonials
            .length - 1
        : active - 1;

    changeSlide(prev);
  };

  /* SWIPE */
  const handleTouchStart = (
    e
  ) => {
    touchStartX.current =
      e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current =
      e.changedTouches[0].screenX;

    if (
      touchStartX.current -
        touchEndX.current >
      50
    ) {
      nextTestimonial();
    }

    if (
      touchEndX.current -
        touchStartX.current >
      50
    ) {
      prevTestimonial();
    }
  };

  return (
    <section
      id="testimonials"
      className="relative py-16 lg:py-28 overflow-hidden bg-[#efefef]"
    >
      {/* BACKGROUND TYPO */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <h2 className="text-[28vw] lg:text-[18vw] leading-none font-black tracking-[-0.08em] text-black/[0.03]">
          STORIES
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6">
        {/* HEADER */}
        <div className="flex items-end justify-between gap-10">
          <div>
  <p className="text-[10px] uppercase tracking-[0.4em] text-orange-500 font-semibold">
    Testimonials
  </p>

  <h2 className="mt-5 text-[16vw] lg:text-[9rem] leading-none tracking-[-0.08em] font-serif text-zinc-900">
    Stories
  </h2>
</div>

          {/* DESKTOP CONTROLS */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={
                prevTestimonial
              }
              className="w-12 h-12 rounded-full border border-zinc-200 bg-white/70 backdrop-blur-xl flex items-center justify-center hover:bg-zinc-100 transition-all duration-300"
            >
              <ChevronLeft
                size={18}
              />
            </button>

            <button
              onClick={
                nextTestimonial
              }
              className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-400 transition-all duration-300 shadow-[0_10px_30px_rgba(249,115,22,0.35)]"
            >
              <ChevronRight
                size={18}
              />
            </button>
          </div>
        </div>

        {/* MAIN CARD */}
        <div
          onTouchStart={
            handleTouchStart
          }
          onTouchEnd={
            handleTouchEnd
          }
          className={`mt-12 lg:mt-16 transition-all duration-500 ${
            animating
              ? "opacity-0 translate-y-5"
              : "opacity-100 translate-y-0"
          }`}
        >
          <div className="relative overflow-hidden rounded-[12px] lg:rounded-[26px] bg-black">
            {/* IMAGE */}
            <div className="relative h-[340px] sm:h-[420px] lg:h-[560px]">
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

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* TOP META */}
              <div className="absolute top-5 left-5 right-5 lg:top-8 lg:left-8 lg:right-8 flex items-center justify-between">
                <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/70">
                    {
                      testimonial.highlight
                    }
                  </p>
                </div>

                <div className="hidden sm:block bg-white/10 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/70">
                    Himalayan Expedition
                  </p>
                </div>
              </div>

              {/* HUGE QUOTE */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-8 lg:p-12">


                {/* BOTTOM */}
                <div className="mt-8 lg:mt-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                  {/* USER */}
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-semibold text-white">
                      {
                        testimonial.name
                      }
                    </h3>

                    <p className="mt-2 text-white/60">
                      {
                        testimonial.location
                      }{" "}
                      •{" "}
                      {
                        testimonial.trek
                      }
                    </p>
                  </div>

                  {/* MOBILE CONTROLS */}
                  <div className="lg:hidden flex items-center justify-between gap-6">
                    {/* DOTS */}
                    <div className="flex items-center gap-2">
                      {destination.testimonials.map(
                        (
                          _,
                          index
                        ) => (
                          <button
                            key={index}
                            onClick={() =>
                              changeSlide(
                                index
                              )
                            }
                            className={`h-2 rounded-full transition-all duration-300 ${
                              active ===
                              index
                                ? "w-10 bg-orange-500"
                                : "w-2 bg-white/40"
                            }`}
                          />
                        )
                      )}
                    </div>

                    {/* ARROWS */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={
                          prevTestimonial
                        }
                        className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white"
                      >
                        <ChevronLeft
                          size={16}
                        />
                      </button>

                      <button
                        onClick={
                          nextTestimonial
                        }
                        className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-[0_8px_24px_rgba(249,115,22,0.35)]"
                      >
                        <ChevronRight
                          size={16}
                        />
                      </button>
                    </div>
                  </div>

                  {/* DESKTOP DOTS */}
                  <div className="hidden lg:flex items-center gap-3">
                    {destination.testimonials.map(
                      (
                        _,
                        index
                      ) => (
                        <button
                          key={index}
                          onClick={() =>
                            changeSlide(
                              index
                            )
                          }
                          className={`h-3 rounded-full transition-all duration-300 ${
                            active ===
                            index
                              ? "w-14 bg-orange-500"
                              : "w-3 bg-white/40 hover:bg-white/70"
                          }`}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* HUGE NUMBER */}
              <div className="absolute right-[-10px] bottom-[-30px] lg:right-[-20px] lg:bottom-[-50px] pointer-events-none">
                <h2 className="text-[9rem] sm:text-[12rem] lg:text-[20rem] leading-none font-black tracking-[-0.08em] text-white/10">
                  0
                  {active + 1}
                </h2>
              </div>
            </div>
          </div>

          {/* MOBILE HINT */}
          <p className="lg:hidden mt-5 text-center text-sm text-zinc-400">
            Swipe to explore more stories.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;