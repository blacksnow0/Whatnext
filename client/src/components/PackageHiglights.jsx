import { FaLeaf } from "react-icons/fa"; // or choose any suitable icon

const PackageHighlights = ({ highlights }) => {
  return (
    <section id="highlights" className="font-garamond">
      {/* Header */}
      <div className="mb-10 relative">
        <span className="block text-xs uppercase tracking-widest text-[#a2683d] font-medium mb-2">
          Why Choose This Trek
        </span>

        <h2 className="inline-block px-6 py-3 border-2 border-[#a2683d] text-2xl md:text-4xl font-ubuntu font-bold text-[#3b2f24] bg-white/90 backdrop-blur-sm shadow-xl rounded-md tracking-wide">
          Package Highlights
        </h2>

        <p className="mt-4 text-base text-gray-700 font-garmond max-w-2xl">
          Handpicked experiences that make this journey unforgettable — nature,
          culture, comfort, and thrill all in one.
        </p>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {highlights.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-4 p-5 bg-[#fdfaf7] border border-[#e3d5c6] rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="mt-1 text-[#88542f]">
              <FaLeaf className="text-xl" />
            </div>
            <p className="text-gray-800 text-base leading-relaxed">{item}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PackageHighlights;
