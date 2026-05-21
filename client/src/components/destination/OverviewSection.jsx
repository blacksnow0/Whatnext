const OverviewSection = ({ destination }) => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-32">
      <div>
        <p className="text-[#D6A76A] uppercase tracking-[5px] text-xs">
          The Experience
        </p>

        <h2 className="text-5xl md:text-7xl text-white font-serif leading-[1] mt-6">
          Journey Through
          <br />
          The Himalayas
        </h2>

        <p className="text-zinc-400 text-lg leading-[1.9] mt-12 max-w-3xl">
          {destination.overview}
        </p>
      </div>
    </section>
  );
};

export default OverviewSection;