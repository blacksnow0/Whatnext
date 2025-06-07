import DestinationCard from "../DestinationCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { useEffect } from "react";
import { uttarakhand } from "../../utils/data";

function Uttrakhand() {
  useEffect(() => {
    const heading = document.getElementById("uttrakhand-heading");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          heading.classList.add("opacity-100", "translate-y-0");
          observer.disconnect();
        }
      },
      { threshold: 0.9 }
    );

    if (heading) observer.observe(heading);
  }, []);

  return (
    <div className="px-6 py-4 max-w-7xl mx-auto">
      <div id="uttrakhand-heading" className="relative text-center mb-16 ">
        <h2 className="text-[2rem] sm:text-[3rem] lg:text-[3.25rem] leading-tight font-serif uppercase tracking-[0.15em] text-[#7e395b]">
          Discover Uttrakhand
        </h2>
        <div className="mt-3 w-24 h-[3px] bg-[#7e395b] mx-auto rounded-full"></div>

        {/* Mobile-only description */}
        <p className="block sm:hidden mt-4 text-sm text-[#4b4b50] max-w-xs mx-auto leading-relaxed opacity-90">
          From misty mountains to serene temples — experience the raw beauty and
          spiritual essence of Uttrakhand like never before.
        </p>
      </div>

      <Swiper
        modules={[Navigation]}
        loop={true}
        speed={600}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {uttarakhand.map((dest, idx) => (
          <SwiperSlide key={idx}>
            <DestinationCard
              name={dest.name}
              image={dest.image}
              description={dest.description}
              id={dest.id}
              price={dest.price}
            />
          </SwiperSlide>
        ))}

        <div className="flex justify-center mt-10 mb-3 gap-6">
          <button
            className="btn-primary custom-prev"
            aria-label="Previous Destination"
          >
            &#8592; Prev
          </button>
          <button
            className="btn-primary custom-next"
            aria-label="Next Destination"
          >
            Next &#8594;
          </button>
        </div>
      </Swiper>
    </div>
  );
}

export default Uttrakhand;
