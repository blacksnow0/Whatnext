// Hero.jsx

import { Link } from "react-router-dom";

import heroImage from "../../assets/images/heroImage.webp";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#d9ddd4]">
      {/* IMAGE */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Himalayan Journey"
          className="w-full h-full object-cover"
        />

        {/* CINEMATIC WASH */}
        <div className="absolute inset-0 bg-[#d9ddd4]/30 mix-blend-lighten" />

        {/* DARK FADE */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* HUGE CUT TYPO */}
      <div className="absolute top-[90px] sm:top-[110px] lg:top-[120px] left-0 z-20 pointer-events-none leading-none">
        <h1 className="text-[5rem] sm:text-[8rem] md:text-[10rem] lg:text-[14rem] xl:text-[17rem] font-serif tracking-[-0.08em] text-white">
          HIMALAYAN
        </h1>

        <h1 className="-mt-5 sm:-mt-8 lg:-mt-14 ml-10 sm:ml-16 lg:ml-24 text-[5rem] sm:text-[8rem] md:text-[10rem] lg:text-[14rem] xl:text-[17rem] font-serif tracking-[-0.08em] text-white">
          JOURNEYS
        </h1>
      </div>

      {/* FLOATING MICRO COPY */}
      <div className="absolute top-[48%] right-5 sm:right-8 lg:right-12 z-30 max-w-[220px] sm:max-w-xs">
        <p className="text-white/80 text-xs sm:text-sm lg:text-base leading-relaxed">
          Curated cinematic expeditions through the Garhwal
          Himalayas.
        </p>
      </div>

      {/* BOTTOM BAR */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 px-5 sm:px-8 lg:px-12 pb-5 sm:pb-8 lg:pb-10">
          {/* LEFT */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/50">
              WhatNext Online
            </p>

            <div className="mt-4 flex items-end gap-5">
              <span className="text-[4rem] sm:text-[6rem] lg:text-[8rem] leading-none font-serif text-white">
                03
              </span>

              <p className="max-w-[160px] sm:max-w-xs text-white/70 text-xs sm:text-sm leading-relaxed pb-2">
                Carefully crafted Himalayan experiences.
              </p>
            </div>
          </div>

          {/* RIGHT CTA */}
          <div className="flex items-center gap-6">
            <Link
              to="/destinations"
              className="group"
            >
              <div className="flex items-center gap-3">
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-white">
                  Explore
                </span>

                <span className="text-2xl text-white transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>

              <div className="mt-2 h-[1px] bg-white/70 origin-left transition-transform duration-300 group-hover:scale-x-75" />
            </Link>
          </div>
        </div>
      </div>

      {/* HUGE FADED NUMBER */}
      <div className="absolute right-[-20px] sm:right-[-40px] lg:right-[-70px] bottom-[-50px] lg:bottom-[-90px] pointer-events-none z-10">
        <h2 className="text-[13rem] sm:text-[18rem] lg:text-[30rem] leading-none font-black tracking-[-0.08em] text-white/10">
          03
        </h2>
      </div>
    </section>
  );
}