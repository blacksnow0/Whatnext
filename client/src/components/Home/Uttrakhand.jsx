import DestinationCard from "../DestinationCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import valleyImage from "../../assets/images/valleyImage.jpeg";
import roopkundImage from "../../assets/images/roopkundImage.jpeg";
import pindariImage from "../../assets/images/pindariImage.jpeg";
import harkidunImage from "../../assets/images/harkidunImage.jpeg";
import kuariImage from "../../assets/images/trip2.jpeg";

import { useEffect } from "react";
const dummyDestinations = [
  {
    name: "Har Ki Dun",
    image: harkidunImage,
    description:
      "A cradle-shaped valley trek through ancient villages and forests, rich in local culture and scenic beauty.",
    price: "8,800",
  },
  {
    name: "Valley of Flowers",
    image: valleyImage,
    description:
      "A UNESCO World Heritage site, this trek offers a burst of colorful alpine flowers nestled in the Himalayas.",
    price: "7,500",
  },
  {
    name: "Roopkund Trek",
    image: roopkundImage,
    description:
      "A mysterious glacial lake trek known for its human skeletons and dramatic views of Trishul and Nanda Ghunti peaks.",
    price: "9,200",
  },
  {
    name: "Pindari Glacier",
    image: pindariImage,
    description:
      "A beginner-friendly glacier trek in the Kumaon region with spectacular views of Nanda Devi and other peaks.",
    price: "7,000",
  },
  {
    name: "Kuari Pass",
    image: kuariImage,
    description:
      "Known as the 'Curzon Trail', this trek offers majestic views of the Garhwal Himalayas, including Nanda Devi.",
    price: "8,000",
  },
];

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
      <div
        id="uttrakhand-heading"
        className="relative text-center mb-16 opacity-0 translate-y-8 transition-all duration-700"
      >
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
        {dummyDestinations.map((dest, idx) => (
          <SwiperSlide key={idx}>
            <DestinationCard
              name={dest.name}
              image={dest.image}
              description={dest.description}
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
