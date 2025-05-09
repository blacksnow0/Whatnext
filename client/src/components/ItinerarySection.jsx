import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const ItinerarySection = ({ itinerary }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDay = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="font-garmond relative py-12 px-4 sm:px-8">
      {/* Section Header */}
      <div className="mb-12 relative t">
        <span className="block text-xs uppercase tracking-widest text-[#a2683d] font-medium mb-3">
          Plan Every Step
        </span>

        <h2 className="inline-block px-6 py-3 border-2 border-[#a2683d] text-4xl font-ubuntu font-bold text-[#3b2f24] bg-white/90 backdrop-blur-sm shadow-xl rounded-md tracking-wide">
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
            {/* Day Label and Toggle */}
            <div className="flex justify-between items-center gap-3 pr-2">
              <div className="flex font-ubuntu flex-col sm:flex-row sm:items-center gap-2">
                {/* Day Capsule */}
                <span className="inline-block  bg-[#ffffff] text-[#3d2b1f] text-md font-semibold px-4 py-2 rounded-full shadow-inner tracking-wide border-2 border-[#684421]">
                  {dayItem.day}
                </span>

                {/* Highlight Title */}
                <h3 className="text-lg ml-1 sm:text-xl font-semibold text-[#4b3621]">
                  {dayItem.highlight}
                </h3>
              </div>

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
