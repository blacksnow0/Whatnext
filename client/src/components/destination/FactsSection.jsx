const HeroSection = ({ destination }) => {
  return (
    <section className="relative h-screen overflow-hidden">
      <img
        src={destination.imageUrl}
        alt={destination.name}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 h-full flex items-end">
        <div className="max-w-6xl mx-auto px-6 pb-24 w-full">
          <p className="uppercase tracking-[6px] text-sm text-[#D6A76A]">
            {destination.location}
          </p>

          <h1 className="text-6xl md:text-8xl font-serif text-white max-w-4xl leading-[0.95] mt-6">
            {destination.name}
          </h1>

          <p className="mt-8 text-zinc-300 max-w-2xl text-lg leading-relaxed">
            {destination.tagline}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;