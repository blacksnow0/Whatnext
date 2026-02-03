import { useState } from "react";
import loveImage from "../assets/images/val/isha.jpg";
import loveImage2 from "../assets/images/val/isha2.jpg";
import loveImage3 from "../assets/images/val/isha3.jpg";
import loveImage4 from "../assets/images/val/isha4.jpg";
import loveImage5 from "../assets/images/val/isha5.jpg";
import loveImage6 from "../assets/images/val/isha6.jpg";
import love from "../assets/images/val/love.jpg"

export default function Ily() {

  const images = [
    loveImage,
    loveImage2,
    loveImage3,
    loveImage4,
    loveImage5,
    loveImage6
  ];

  const [active, setActive] = useState(0);
  const [position, setPosition] = useState({ top: "65%", left: "50%" });
  const [accepted, setAccepted] = useState(false);

  const moveButton = () => {
    const top = Math.random() * 60 + 20;
    const left = Math.random() * 60 + 20;

    setPosition({
      top: `${top}%`,
      left: `${left}%`
    });
  };

  return (
    <div className="h-screen w-screen bg-white flex items-center justify-center relative overflow-hidden">

      {!accepted ? (
        <div className="flex flex-col items-center w-full">

          {/* STORY CAROUSEL */}
          <div className="w-full px-6 mb-6">
            <div
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
              onScroll={(e) => {
                const index = Math.round(
                  e.target.scrollLeft / (e.target.offsetWidth * 0.75)
                );
                setActive(index);
              }}
            >
              {images.map((img, index) => (
                <div
                  key={index}
                  className="snap-center shrink-0 w-[70%] flex justify-center"
                >
                  <img
                    src={img}
                    alt="Valentine"
                    className={`w-52 h-52 object-cover rounded-2xl border transition ${
                      active === index
                        ? "border-pink-400 scale-100"
                        : "border-transparent scale-95 opacity-80"
                    }`}
                  />
                </div>
              ))}
            </div>

            {/* DOT INDICATORS */}
            <div className="flex justify-center gap-2 mt-3">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    active === i ? "bg-pink-500" : "bg-pink-200"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* TEXT */}
          <h1 className="text-2xl font-semibold text-pink-600 mb-8 px-6 text-center">
            Will you be my Valentine? ❤️
          </h1>

          {/* YES BUTTON */}
          <button
            onClick={() => setAccepted(true)}
            className="bg-pink-500 text-white px-10 py-3 rounded-full shadow active:scale-95 transition"
          >
            Yes
          </button>

          {/* NO BUTTON */}
          <button
            onMouseEnter={moveButton}
            onTouchStart={moveButton}
            style={{
              position: "absolute",
              top: position.top,
              left: position.left,
              transform: "translate(-50%, -50%)"
            }}
            className="bg-gray-300 text-gray-700 px-8 py-3 rounded-full shadow-sm transition-all"
          >
            No
          </button>

        </div>
      ) : (
        <div className="relative h-screen w-screen">

  {/* BACKGROUND IMAGE */}
  <img
    src={love}
    alt="Accepted"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* DARK OVERLAY FOR TEXT READABILITY */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* CONTENT */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

    <h1 className="text-3xl font-semibold text-white mb-2">
      YAY ❤️
    </h1>

    <p className="text-white text-lg">
      BUU I LOVE YOU
    </p>

  </div>

</div>
      )}

    </div>
  );
}