import { Link } from "react-router-dom";
import snowboardingImage from "../../assets/images/snowboarding.jpeg";

export default function WinterSportsPreview() {
  return (
    <div className="mt-10">

      {/* ================= MOBILE DESIGN ================= */}
      <div className="block md:hidden px-4">
        <Link to="/winter-sports">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl group">

            {/* Image */}
            <div className="relative h-[260px]">
              <img
                src={snowboardingImage}
                alt="Winter Sports Auli"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>

            {/* Content Panel */}
            <div className="relative bg-white px-5 py-4">

              <div className="absolute -top-4 left-5 bg-white text-black text-[11px] px-3 py-1 rounded-full shadow">
                FEATURED EXPERIENCE
              </div>

              <h3 className="text-lg font-bold">
                Winter Sports in <span className="text-brand">Auli</span>
              </h3>

              <p className="text-sm text-gray-600 mt-1">
                Ski • Snowboard • Ride the Himalayas
              </p>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  Limited Winter Slots
                </span>

                <span className="flex items-center gap-2 text-brand font-semibold text-sm">
                  Explore
                  <span className="text-lg transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>

            </div>
          </div>
        </Link>
      </div>

      {/* ================= DESKTOP DESIGN ================= */}
      <div className="hidden md:block">
        <Link to="/winter-sports">
          <div className="relative group overflow-hidden rounded-2xl h-[200px] cursor-pointer shadow-xl">

            {/* Background Image */}
            <img
              src={snowboardingImage}
              alt="Winter Sports Auli"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center px-6 text-white">

              <span className="text-xs uppercase tracking-widest text-white/80">
                Featured Experience
              </span>

              <h3 className="text-2xl font-bold mt-1">
                Winter Sports in <span className="text-brand">Auli</span>
              </h3>

              <p className="text-sm text-white/80 mt-1 max-w-xs">
                Ski • Snowboard • Ride the Himalayas
              </p>

              <div className="mt-3 inline-flex items-center gap-2 font-semibold text-sm">
                Explore Experience
                <span className="text-lg transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>

            </div>
          </div>
        </Link>
      </div>

    </div>
  );
}
