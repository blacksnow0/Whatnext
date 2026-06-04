import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { ChevronLeft, ChevronRight, Expand, X, Play } from "lucide-react";

const DestinationGallery = ({ destination }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [lightbox, setLightbox] = useState(false);

  const gallery = destination.gallery;

  const activeItem = gallery[activeIndex];

  const nextItem = () => {
    setActiveIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  const prevItem = () => {
    setActiveIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  return (
    <>
      <section id="gallery" className="bg-white py-14 sm:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Heading */}
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.28em] text-orange-500 font-semibold">
              Expedition Gallery
            </p>

            <h2 className="mt-3 text-3xl sm:text-5xl lg:text-6xl font-serif text-zinc-900 leading-tight">
              Moments From The Journey
            </h2>
          </div>

          {/* ---------------- MOBILE ---------------- */}
          <div className="lg:hidden mt-8">
            <Swiper
              modules={[Pagination]}
              pagination={{
                clickable: true,
              }}
              spaceBetween={16}
              slidesPerView={1}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              className="gallery-swiper"
            >
              {gallery.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    onClick={() => {
                      setActiveIndex(index);
                      setLightbox(true);
                    }}
                    className="relative overflow-hidden rounded-[28px] aspect-[4/3] bg-zinc-100"
                  >
                    {item.type === "image" ? (
                      <img
                        src={item.src}
                        alt={item.title || ""}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <video
                        src={item.src}
                        muted
                        autoPlay
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="flex items-end justify-between">
                        <div>
                          <h3 className="text-white font-semibold text-lg">
                            {item.title || `Photo ${index + 1}`}
                          </h3>

                          <p className="text-white/80 text-sm mt-1">
                            {index + 1} / {gallery.length}
                          </p>
                        </div>

                        {item.type === "video" && (
                          <div className="bg-white/15 backdrop-blur-md rounded-full px-3 py-1 flex items-center gap-2">
                            <Play size={14} className="fill-white text-white" />

                            <span className="text-xs text-white">Reel</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* ---------------- DESKTOP ---------------- */}
          <div className="hidden lg:grid grid-cols-12 gap-5 mt-16 auto-rows-[220px]">
            {gallery.map((item, index) => {
              const layouts = [
                "col-span-7 row-span-2",
                "col-span-5 row-span-1",
                "col-span-5 row-span-1",
                "col-span-4 row-span-1",
                "col-span-4 row-span-1",
                "col-span-4 row-span-1",
              ];

              return (
                <div
                  key={index}
                  onClick={() => {
                    setActiveIndex(index);

                    setLightbox(true);
                  }}
                  className={`relative overflow-hidden rounded-[32px] cursor-pointer group ${
                    layouts[index % layouts.length]
                  }`}
                >
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <video
                      src={item.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  <button className="absolute top-5 right-5 w-11 h-11 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <Expand size={18} className="text-white" />
                  </button>

                  {item.type === "video" && (
                    <div className="absolute bottom-5 left-5 flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full">
                      <Play size={14} className="text-white fill-white" />

                      <span className="text-sm text-white">Video</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- LIGHTBOX ---------------- */}
      {lightbox && (
        <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center p-4">
          <button
            onClick={() => setLightbox(false)}
            className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center"
          >
            <X size={22} className="text-white" />
          </button>

          <button
            onClick={prevItem}
            className="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center"
          >
            <ChevronLeft size={22} className="text-white" />
          </button>

          <button
            onClick={nextItem}
            className="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center"
          >
            <ChevronRight size={22} className="text-white" />
          </button>

          {activeItem.type === "image" ? (
            <img
              src={activeItem.src}
              alt=""
              className="max-w-full max-h-[88vh] object-contain rounded-2xl"
            />
          ) : (
            <video
              src={activeItem.src}
              controls
              autoPlay
              className="max-w-full max-h-[88vh] rounded-2xl"
            />
          )}
        </div>
      )}
    </>
  );
};

export default DestinationGallery;
