const InclusionSection = ({
  inclusions,
  exclusions,
}) => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-32">
      <div className="grid md:grid-cols-2 gap-20">
        {/* INCLUSIONS */}
        <div>
          <p className="text-[#D6A76A] uppercase tracking-[5px] text-xs">
            Included
          </p>

          <h2 className="text-5xl text-white font-serif mt-6">
            What's Included
          </h2>

          <div className="mt-16 space-y-8">
            {inclusions.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 border-b border-white/10 pb-6"
              >
                <span className="text-[#D6A76A] text-xl">
                  +
                </span>

                <p className="text-zinc-300 text-lg leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* EXCLUSIONS */}
        <div>
          <p className="text-[#D6A76A] uppercase tracking-[5px] text-xs">
            Excluded
          </p>

          <h2 className="text-5xl text-white font-serif mt-6">
            Not Included
          </h2>

          <div className="mt-16 space-y-8">
            {exclusions.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 border-b border-white/10 pb-6"
              >
                <span className="text-zinc-500 text-xl">
                  —
                </span>

                <p className="text-zinc-400 text-lg leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InclusionSection;