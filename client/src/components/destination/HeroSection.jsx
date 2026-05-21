const HeroSection = ({ destination }) => {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      {/* Background */}
      <img
        src={destination.imageUrl}
        alt={destination.name}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-end">
        <div className="max-w-6xl mx-auto w-full px-5 sm:px-6 pb-16 sm:pb-20">
          <h1 className="mt-4 hidden sm:block md:text-7xl font-serif text-white leading-[0.95] max-w-3xl">
            {destination.name}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;