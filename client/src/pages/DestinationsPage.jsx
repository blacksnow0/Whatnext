import React from "react";
import { Link } from "react-router-dom";

import { valleyGallery } from "../data/galleries/valleyGallery";
import { satopanthGallery } from "../data/galleries/satopanthGallery";

const heroGallery = [...satopanthGallery, ...valleyGallery];

import { destinations } from "../data/destinations";

import Meta from "../seo/Meta";

export default function Destinations() {
  return (
    <>
      <Meta
        title="Destinations | WhatNext Online"
        description="Curated Himalayan expeditions designed for explorers seeking deeper mountain journeys."
        image="https://www.whatnextonline.in/og/destinations.jpg"
        canonical="https://www.whatnextonline.in/destinations"
      />

      <main className="bg-[#f5f1ea] overflow-hidden">
        {/* ---------------- HERO ---------------- */}
        <section className="relative h-screen overflow-hidden border-b border-black/5 bg-[#f5f1ea] flex flex-col">
          {/* BACKGROUND GLOW */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] rounded-full bg-orange-200/30 blur-3xl" />

            <div className="absolute bottom-[-250px] left-[-100px] w-[450px] h-[450px] rounded-full bg-zinc-300/40 blur-3xl" />
          </div>

          {/* HUGE BACKGROUND WORD */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h2 className="hidden lg:block text-[22vw] leading-none font-black text-black/[0.03]">
              HIMALAYA
            </h2>
          </div>

          {/* ---------------- DESKTOP ---------------- */}
          <div className="hidden lg:flex relative z-10 h-full flex-col">
            {/* TOP CONTENT */}
            <div className="max-w-7xl mx-auto w-full px-8 pt-20">
              <div className="max-w-5xl">
                <p className="text-[11px] uppercase tracking-[0.35em] text-orange-500 font-semibold">
                  WhatNext Online
                </p>

                <h1 className="mt-8 text-[8rem] leading-[0.82] font-serif text-zinc-900">
                  We Don’t
                  <br />
                  Sell Treks.
                </h1>

                <p className="mt-8 max-w-2xl text-lg text-zinc-600 leading-relaxed">
                  We create cinematic Himalayan journeys filled with glaciers,
                  mythology, alpine landscapes, silence, and unforgettable
                  mountain experiences.
                </p>
              </div>

              {/* FLOATING NOTE */}
              <div className="flex justify-end -mt-10 relative z-20">
                <div className="max-w-sm bg-white/60 backdrop-blur-xl border border-black/5 rounded-[32px] p-7 shadow-xl rotate-[-3deg]">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-orange-500 font-semibold">
                    Expedition Philosophy
                  </p>

                  <p className="mt-4 text-zinc-700 leading-relaxed">
                    Only three expeditions. Intentionally curated. Designed for
                    people who want to truly feel the Himalayas instead of
                    simply checking destinations off a list.
                  </p>
                </div>
              </div>
            </div>

            {/* MARQUEE */}
            <div className="relative mt-auto pb-8 overflow-hidden">
              {/* EDGE FADES */}
              <div className="absolute left-0 top-0 bottom-0 w-40 z-20 bg-gradient-to-r from-[#f5f1ea] to-transparent" />

              <div className="absolute right-0 top-0 bottom-0 w-40 z-20 bg-gradient-to-l from-[#f5f1ea] to-transparent" />

              {/* TRACK */}
              <div className="marquee-track flex gap-5 w-max px-5">
                {[...heroGallery, ...heroGallery].map((item, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden shrink-0 w-[320px] h-[420px] bg-zinc-200"
                  >
                    {item.type === "image" ? (
                      <img
                        src={item.src}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <video
                        src={item.src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ---------------- MOBILE ---------------- */}
          <div className="lg:hidden relative z-10 h-full flex flex-col">
            {/* CONTENT */}
            <div className="px-5 pt-10 relative">
              {/* TOP ROW */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-[1px] bg-orange-500" />

                  <p className="text-[10px] uppercase tracking-[0.32em] text-orange-500 font-semibold">
                    WhatNext Online
                  </p>
                </div>

                <div className="px-3 py-2 rounded-full bg-white/60 backdrop-blur-md border border-black/5">
                  <p className="text-[9px] uppercase tracking-[0.22em] text-zinc-600">
                    03 Expeditions
                  </p>
                </div>
              </div>

              {/* TYPO BLOCK */}
              <div className="mt-10 relative">
                {/* BACKGROUND WORD */}
                <h2 className="absolute -top-6 left-0 text-[5.5rem] font-black leading-none text-black/[0.04]">
                  WNO
                </h2>

                <h1 className="relative text-[4.3rem] leading-[0.82] font-serif text-zinc-900">
                  Himalayan
                  <br />
                  Journeys
                </h1>
              </div>

              {/* FLOATING NOTE */}
              <div className="mt-8 flex justify-end">
                <div className="max-w-[240px] bg-white/70 backdrop-blur-xl border border-black/5 rounded-[24px] p-5 shadow-xl rotate-[-4deg]">
                  <p className="text-[9px] uppercase tracking-[0.28em] text-orange-500 font-semibold">
                    Expedition Note
                  </p>

                  <p className="mt-3 text-sm text-zinc-700 leading-relaxed">
                    Crafted for people who want glaciers, silence, mythology,
                    and unforgettable Himalayan landscapes.
                  </p>
                </div>
              </div>

              {/* BOTTOM META */}
              <div className="mt-8 flex items-end justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-400">
                    Region
                  </p>

                  <h3 className="mt-2 text-lg font-medium text-zinc-900">
                    Garhwal Himalayas
                  </h3>
                </div>

                <a
                  href="#destination"
                  className="w-14 h-14 rounded-full bg-orange-500 shadow-lg flex items-center justify-center"
                >
                  <span className="text-white text-xl">↘</span>
                </a>
              </div>
            </div>

            {/* MOBILE MARQUEE */}
            <div className="relative mt-auto pb-5 overflow-hidden">
              {/* TOP FADE */}
              <div className="absolute inset-x-0 top-0 h-20 z-20 bg-gradient-to-b from-[#f5f1ea] to-transparent" />

              {/* TRACK */}
              <div className="mobile-marquee flex gap-4 w-max px-4">
                {[...heroGallery, ...heroGallery].map((item, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden shrink-0 w-[220px] h-[300px] "
                  >
                    {item.type === "image" ? (
                      <img
                        src={item.src}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <video
                        src={item.src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- DESTINATION 01 ---------------- */}
        <section id='destination' className="relative py-24 sm:py-36">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-10 items-end">
              {/* IMAGE */}
              <Link
                to={`/destinations/${destinations[0].slug}`}
                className="group relative lg:col-span-7"
              >
                <div className="overflow-hidden rounded-[36px]">
                  <img
                    src={destinations[0].imageUrl}
                    alt={destinations[0].name}
                    className="w-full aspect-[4/5] object-cover transition-transform duration-[1800ms] group-hover:scale-105"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-[36px]" />

                <div className="absolute bottom-0 left-0 p-7 sm:p-10">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-white/70">
                    Expedition 01
                  </p>

                  <h2 className="mt-3 text-4xl sm:text-6xl font-serif text-white leading-[0.9]">
                    {destinations[0].name}
                  </h2>
                </div>
              </Link>

              {/* FLOATING TEXT */}
              <div className="lg:col-span-5 lg:-ml-20 relative z-10">
                <div className="bg-[#faf7f2]/90 backdrop-blur-xl border border-black/5 rounded-[36px] p-8 sm:p-12 shadow-2xl">
                  <div className="flex items-center gap-4">
                    <span className="text-5xl font-serif text-orange-500">
                      01
                    </span>

                    <div className="w-16 h-[1px] bg-zinc-300" />
                  </div>

                  <p className="mt-8 text-zinc-600 text-lg leading-relaxed">
                    {destinations[0].cardDescription}
                  </p>

                  <div className="mt-10 flex flex-wrap gap-3">
                    <div className="px-4 py-2 rounded-full bg-zinc-100 text-sm">
                      {destinations[0].duration}
                    </div>

                    <div className="px-4 py-2 rounded-full bg-zinc-100 text-sm">
                      {destinations[0].difficulty}
                    </div>

                    <div className="px-4 py-2 rounded-full bg-zinc-100 text-sm">
                      {destinations[0].bestSeason}
                    </div>
                  </div>

                  <div className="mt-10 flex items-center gap-3 text-orange-500">
                    <span className="text-sm uppercase tracking-[0.2em]">
                      Explore Journey
                    </span>

                    <span className="text-2xl">→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* HUGE FLOATING TEXT */}
          <div className="absolute right-[-100px] bottom-10 hidden lg:block pointer-events-none">
            <h2 className="text-[10rem] font-black text-black/[0.03] leading-none">
              FLOWERS
            </h2>
          </div>
        </section>

        {/* ---------------- CENTER QUOTE ---------------- */}
        <section className="py-24 sm:py-32">
          <div className="max-w-5xl mx-auto px-5 sm:px-6 text-center">
            <p className="text-[12px] uppercase tracking-[0.4em] text-zinc-400">
              Himalayan Journal
            </p>

            <h2 className="mt-8 text-4xl sm:text-6xl lg:text-7xl font-serif text-zinc-900 leading-[1]">
              Some Journeys
              <br />
              Stay Long After
              <br />
              The Mountains End.
            </h2>
          </div>
        </section>

        {/* ---------------- TWO COLUMN TREKS ---------------- */}
        <section className="pb-28 sm:pb-40">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-14">
            {destinations.slice(1).map((dest, index) => (
              <Link
                key={dest.slug}
                to={`/destinations/${dest.slug}`}
                className={`group relative ${
                  index === 1 ? "lg:translate-y-24" : ""
                }`}
              >
                {/* IMAGE */}
                <div className="overflow-hidden rounded-[36px] shadow-xl">
                  <img
                    src={dest.imageUrl}
                    alt={dest.name}
                    className={`w-full object-cover transition-transform duration-[1600ms] group-hover:scale-105 ${
                      index === 0 ? "aspect-[4/5]" : "aspect-[3/4]"
                    }`}
                  />
                </div>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-[36px]" />

                {/* NUMBER */}
                <div className="absolute top-6 left-6">
                  <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    <span className="text-white font-semibold">
                      0{index + 2}
                    </span>
                  </div>
                </div>

                {/* TEXT */}
                <div className="absolute bottom-0 left-0 p-7 sm:p-10">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/70">
                    {dest.location}
                  </p>

                  <h2 className="mt-4 text-4xl sm:text-5xl font-serif text-white leading-[0.92]">
                    {dest.name}
                  </h2>

                  <p className="mt-5 text-white/80 leading-relaxed max-w-md">
                    {dest.cardDescription}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-sm text-white">
                      {dest.duration}
                    </div>

                    <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-sm text-white">
                      {dest.difficulty}
                    </div>
                  </div>
                </div>

                {/* HUGE TYPO */}
                <div className="absolute -bottom-8 right-2 hidden lg:block pointer-events-none">
                  <h2 className="text-[7rem] font-black text-white/10 leading-none">
                    0{index + 2}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
