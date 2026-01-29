import bestTimeImage from "../assets/images/mountain.jpg";

const BestTimeToVisit = ({ bestTimeToVisit }) => {
  return (
    <section
      id="best-time"
      className="font-garmond rounded-sm relative h-[200px] sm:h-[240px] md:h-[300px] lg:h-[360px] w-full overflow-hidden shadow-xl"
    >
      {/* Background Image */}
      <img
        src={bestTimeImage}
        alt="Scenic Trek Season"
        className="absolute inset-0 w-full h-full object-cover object-bottom"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/20 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 md:px-12">
        <span className="text-xs sm:text-sm uppercase tracking-wider font-bold text-[#ffffff] mb-2 sm:mb-3">
          Best Time to Visit
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-ubuntu mb-3 sm:mb-4 drop-shadow-md">
          {bestTimeToVisit}
        </h2>

        <p className="text-sm sm:text-base md:text-lg max-w-[90%] sm:max-w-lg md:max-w-xl leading-relaxed font-light">
          Step into blooming valleys, crisp air, and the most spectacular alpine
          views.
        </p>
      </div>
    </section>
  );
};

export default BestTimeToVisit;
