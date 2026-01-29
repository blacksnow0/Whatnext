import { FaLeaf } from "react-icons/fa"; // or choose any suitable icon

const PackageHighlights = ({ highlights }) => {
  return (
    <section id="highlights" className="font-garamond">
      {/* Header */}
      <div className="mb-10 relative">
        <span className="block text-xs uppercase tracking-widest text-brand font-ubuntu font-medium mb-2">
          Why Choose This Trek
        </span>

        <h2 className="inline-block px-6 py-3 border-2  text-2xl md:text-4xl font-ubuntu text-brand bg-[#f4eef1] shadow-xl rounded-md tracking-wide">
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
            className="flex items-start gap-4 p-5 bg-[#f4eef1] border border-[#7e395b] rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mt-1 text-[#7e395b]">
              <FaLeaf className="text-2xl" />
            </div>
            <p className="text-[#4a3a4b] text-base leading-relaxed font-medium">
              {item}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PackageHighlights;
