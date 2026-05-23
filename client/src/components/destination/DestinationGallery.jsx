import { useState } from "react";

import {
  ChevronLeft,
  ChevronRight,
  Expand,
  X,
} from "lucide-react";

const DestinationGallery = ({ destination }) => {
  const [activeImage, setActiveImage] =
    useState(0);

  const [lightbox, setLightbox] =
    useState(false);

  const nextImage = () => {
    setActiveImage((prev) =>
      prev ===
      destination.gallery.length - 1
        ? 0
        : prev + 1
    );
  };

  const prevImage = () => {
    setActiveImage((prev) =>
      prev === 0
        ? destination.gallery.length - 1
        : prev - 1
    );
  };

  return (
    <>
      <section id="gallery" className="bg-white py-10 sm:py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          {/* Heading */}
          <div className="max-w-2xl">
            <p className="text-[10px] uppercase tracking-[0.25em] text-orange-500 font-semibold">
              Expedition Gallery
            </p>

            <h2 className="mt-2 text-2xl sm:text-5xl font-serif text-zinc-900 leading-tight">
              Moments From The Journey
            </h2>
          </div>

          {/* ---------------- MOBILE ---------------- */}
          <div className="sm:hidden mt-8">
            {/* Main Image */}
            <div className="relative h-[430px] rounded-[28px] overflow-hidden">
              <img
                src={
                  destination.gallery[
                    activeImage
                  ]
                }
                loading="lazy"
                alt=""
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-white/70 uppercase tracking-[0.2em] text-[10px]">
                  Valley Of Flowers
                </p>

                <h3 className="mt-2 text-2xl font-serif text-white leading-tight max-w-[240px]">
                  Himalayan Expedition
                </h3>
              </div>

              <button
                onClick={() =>
                  setLightbox(true)
                }
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center"
              >
                <Expand
                  size={18}
                  className="text-white"
                />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center"
              >
                <ChevronLeft
                  size={18}
                  className="text-white"
                />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center"
              >
                <ChevronRight
                  size={18}
                  className="text-white"
                />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 overflow-x-auto mt-4 pb-1 no-scrollbar">
              {destination.gallery.map(
                (image, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      setActiveImage(index)
                    }
                    className={`relative min-w-[88px] h-[88px] rounded-2xl overflow-hidden border-2 transition-all ${
                      activeImage === index
                        ? "border-orange-500"
                        : "border-transparent"
                    }`}
                  >
                    <img
                      src={image}
                      loading="lazy"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                )
              )}
            </div>
          </div>

          {/* ---------------- DESKTOP ---------------- */}
          <div className="hidden sm:block mt-14">
            {/* Hero Image */}
            <div className="relative h-[760px] rounded-[40px] overflow-hidden group">
              <img
                src={destination.gallery[0]}
                loading="lazy"
                alt=""
                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-12 max-w-2xl">
                <p className="text-white/70 uppercase tracking-[0.28em] text-xs">
                  Valley Of Flowers
                </p>

                <h3 className="mt-5 text-6xl font-serif text-white leading-[0.95]">
                  Blooming Himalayan Meadows
                </h3>

                <p className="mt-6 text-lg text-white/80 leading-relaxed">
                  Endless alpine flowers, glacier-fed streams,
                  mountain trails, and monsoon valleys hidden deep
                  in the Himalayas.
                </p>
              </div>
            </div>

            {/* Editorial Caption Row */}
            <div className="flex items-center justify-between gap-10 mt-8">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.22em] text-orange-500 font-semibold">
                  Expedition Notes
                </p>

                <p className="mt-3 text-zinc-600 leading-relaxed">
                  The Valley of Flowers transforms during the
                  monsoon season into one of the most vibrant alpine
                  landscapes in the Himalayas.
                </p>
              </div>

              <div className="flex items-center gap-10 shrink-0">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                    Best Season
                  </p>

                  <h4 className="mt-2 text-lg font-semibold text-zinc-900">
                    Jul — Aug
                  </h4>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                    Difficulty
                  </p>

                  <h4 className="mt-2 text-lg font-semibold text-zinc-900">
                    Easy — Moderate
                  </h4>
                </div>
              </div>
            </div>

            {/* Horizontal Image Strip */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              {destination.gallery
                .slice(1, 4)
                .map((image, index) => (
                  <div
                    key={index}
                    className="relative h-[280px] overflow-hidden rounded-[28px] group"
                  >
                    <img
                      src={image}
                      loading="lazy"
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    <div className="absolute bottom-0 left-0 p-6">
                      <p className="text-white/70 uppercase tracking-[0.2em] text-[10px]">
                        Himalayas
                      </p>

                      <h3 className="mt-2 text-2xl font-serif text-white leading-tight">
                        {index === 0 &&
                          "Mountain Trails"}

                        {index === 1 &&
                          "Alpine Landscapes"}

                        {index === 2 &&
                          "Monsoon Valleys"}
                      </h3>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- LIGHTBOX ---------------- */}
      {lightbox && (
        <div className="fixed inset-0 bg-black z-[999] flex items-center justify-center">
          <button
            onClick={() =>
              setLightbox(false)
            }
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center"
          >
            <X
              size={22}
              className="text-white"
            />
          </button>

          <img
            src={
              destination.gallery[
                activeImage
              ]
            }
            loading="lazy"
            alt=""
            className="max-w-[92%] max-h-[85vh] object-contain rounded-2xl"
          />
        </div>
      )}
    </>
  );
};

export default DestinationGallery;