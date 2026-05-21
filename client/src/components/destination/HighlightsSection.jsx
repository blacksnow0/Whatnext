const HighlightsSection = ({ highlights }) => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-32">
      <div className="mb-20">
        <p className="text-[#D6A76A] uppercase tracking-[5px] text-xs">
          Highlights
        </p>

        <h2 className="text-5xl md:text-7xl text-white font-serif leading-[1] mt-6">
          What Makes
          <br />
          This Trek Special
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-x-16 gap-y-20">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className="border-t border-white/10 pt-8"
          >
            <span className="text-[#D6A76A] text-sm tracking-[3px]">
              0{index + 1}
            </span>

            <h3 className="text-3xl text-white font-light leading-[1.4] mt-6">
              {highlight}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HighlightsSection;