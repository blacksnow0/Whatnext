import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
// import bgImage from "../assets/mountain.jpg";

const ItinerarySection = ({ itinerary }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDay = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="itinerary" className="font-garmond relative  ">
      <div className="mb-2 relative t">
        <span className="block text-xs font-ubuntu uppercase tracking-widest text-brand font-medium mb-3">
          Plan Every Step
        </span>

        <h2 className="inline-block px-6 py-3 border-2  text-2xl md:text-4xl font-ubuntu text-brand bg-[#f4eef1] shadow-xl rounded-md tracking-wide">
          Itinerary
        </h2>

        <p className="mt-4 text-base text-gray-700 font-light">
          Your journey mapped day by day — every ascent, every story, every
          view.
        </p>
      </div>

      <ol className="relative space-y-6 before:absolute before:top-0 before:left-[1.5rem] sm:before:left-[2rem] before:h-full before:w-[2px] before:bg-gradient-to-b from-[#c79a6d] via-[#f0dac5] to-[#c79a6d]">
        {itinerary.map((dayItem, index) => (
          <li
            key={index}
            onClick={() => toggleDay(index)}
            className="relative cursor-pointer transition-transform duration-200 hover:scale-[1.01] group"
          >
            <div className="flex  items-center gap-3 pr-2">
              <span className="text-[16px] font-semibold text-[#3a3a3a] border rounded-md bg-white px-[10px] py-[3px] whitespace-nowrap">
                {dayItem.day}
              </span>

              <h3 className="text-base sm:text-lg font-semibold text-[#4b3621]">
                {dayItem.highlight}
              </h3>

              <span className="text-[#6b4e2d] text-xl transition-transform duration-200 group-hover:rotate-180">
                {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
              </span>
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index
                  ? "max-h-96 opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-700 text-base leading-relaxed font-garmond px-1 sm:px-3">
                {dayItem.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default ItinerarySection;
