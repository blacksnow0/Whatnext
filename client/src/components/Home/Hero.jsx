import heroImage from "../../assets/images/hero3.jpeg";
function Hero() {
  return (
    <section className="pt-20">
      <div className="hidden md:grid grid-cols-2 gap-6 items-center px-6 md:px-12 lg:px-20 py-20 max-w-7xl mx-auto ">
        <div className="space-y-6 text-center md:text-left animate-fade-in-up">
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight font-ubuntu">
            Discover <span className="text-brand">What’s Next!</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-xl">
            Uncover breathtaking destinations, untold stories, and cultures
            waiting to be explored. Your next journey starts now.
          </p>
          <div className="flex gap-4 justify-start">
            <button className="btn-primary">Explore Destinations</button>
            <a
              href="https://www.youtube.com/watch?v=MDOXbRii-sg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className=" cursor-alias px-6 py-3 border border-bg-brand text-brand rounded-full font-semibold hover:bg-[#f3ebe5] transition">
                Watch Trailer
              </button>
            </a>
          </div>
        </div>

        <div className="relative border-2 rounded-3xl overflow-hidden shadow-2xl animate-fade-in">
          <img
            src={heroImage}
            alt="Travel Hero"
            className="w-full h-full object-cover object-center max-h-[500px]"
          />
          <div className="absolute bottom-2 border-2 right-4 bg-white bg-opacity-40 px-4 py-2 rounded shadow drop-shadow-2xl ">
            <span className="text-sm text-[#8B4513] font-medium">
              Inspire your adventure 🌍
            </span>
          </div>
        </div>
      </div>

      <div className="block md:hidden px-4 py-10 space-y-6 text-center animate-fade-in-up">
        <h1 className="text-4xl font-extrabold leading-tight">
          What’s <span className="text-[#7e395b]">Next</span>
        </h1>
        <img
          src={heroImage}
          alt="Travel Hero"
          className="w-full max-h-[300px] object-cover border-4 rounded-xl shadow-lg"
        />
        <p className="text-base text-gray-700 px-4">
          Uncover breathtaking destinations and cultures waiting to be explored.
        </p>
        <div className="flex flex-col gap-4 items-center">
          <button className="px-6 py-3 bg-brand text-white rounded-full font-semibold shadow-md hover:bg-[#6b314c] active:scale-95 transition-transform duration-300 w-full max-w-xs">
            Explore
          </button>

          <a
            href="https://www.youtube.com/watch?v=MDOXbRii-sg"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <button className="px-6 py-3 border border-bg-brand text-brand rounded-full font-semibold hover:bg-[#f3ebe5] transition w-full max-w-xs">
              Trailer
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
