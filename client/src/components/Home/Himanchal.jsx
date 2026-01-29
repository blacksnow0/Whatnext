import DestinationCard from "../DestinationCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import triundImage from "../../assets/images/triundImage.jpeg";
import kheergangaImage from "../../assets/images/kheergangaImage.jpeg";
import spitiImage from "../../assets/images/spitiImage.jpeg";
import parvatiImage from "../../assets/images/parvatiImage.jpeg";
import bhriguImage from "../../assets/images/bhriguImage.jpeg";

import { useEffect } from "react";

const himachalDestinations = [
  {
    name: "Triund Trek",
    image: triundImage,
    description:
      "A short and scenic trek from McLeod Ganj with panoramic views of the Dhauladhar range.",
    price: "6,500",
  },
  {
    name: "Kheerganga Trek",
    image: kheergangaImage,
    description:
      "A spiritual and scenic journey through Parvati Valley, ending with natural hot springs.",
    price: "7,200",
  },
  {
    name: "Spiti Valley",
    image: spitiImage,
    description:
      "A cold desert mountain valley with ancient monasteries, rugged terrain, and stunning landscapes.",
    price: "14,000",
  },
  {
    name: "Parvati Valley",
    image: parvatiImage,
    description:
      "A tranquil region known for vibrant culture, lush pine forests, and the serene Parvati river.",
    price: "8,000",
  },
  {
    name: "Bhrigu Lake",
    image: bhriguImage,
    description:
      "A high-altitude alpine lake trek near Manali with sweeping views and meadows.",
    price: "9,500",
  },
];

function Himachal() {
  useEffect(() => {
    const heading = document.getElementById("himachal-heading");

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
      <div id="himachal-heading" className="relative text-center mb-16 ">
        <h2 className="text-[2rem] sm:text-[3rem] lg:text-[3.25rem] leading-tight font-serif uppercase tracking-[0.15em] text-[#7e395b]">
          Discover Himachal
        </h2>
        <div className="mt-3 w-24 h-[3px] bg-[#7e395b] mx-auto rounded-full"></div>

        {/* Mobile-only description */}
        <p className="block sm:hidden mt-4 text-sm text-[#4b4b50] max-w-xs mx-auto leading-relaxed opacity-90">
          From misty mountains to serene temples — experience the raw beauty and
          spiritual essence of Himanchal like never before.
        </p>
      </div>

      <Swiper
        modules={[Navigation]}
        loop={true}
        speed={600}
        navigation={{
          nextEl: ".himachal-next",
          prevEl: ".himachal-prev",
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
        {himachalDestinations.map((dest, idx) => (
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
            className="btn-primary himachal-prev"
            aria-label="Previous Destination"
          >
            &#8592; Prev
          </button>
          <button
            className="btn-primary himachal-next"
            aria-label="Next Destination"
          >
            Next &#8594;
          </button>
        </div>
      </Swiper>
    </div>
  );
}

export default Himachal;
