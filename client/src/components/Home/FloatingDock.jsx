// FloatingDock.jsx

import {
  PhoneCall,
  Instagram,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

export default function FloatingDock() {
  return (
    <div
      className="
        fixed
        right-4 lg:right-8
        bottom-5 lg:bottom-[10%]
        z-[999]
      "
    >
      <div
        className="
          flex flex-col
          items-center
          gap-3
        "
      >
        {/* WHATSAPP */}
        <a
          href="https://wa.me/7017502703"
          target="_blank"
          rel="noreferrer"
          className="group"
        >
          <div
            className="
              relative
              w-10 h-10
              rounded-full
              flex items-center justify-center
              text-white
              bg-[#25D366]
              shadow-[0_0_30px_rgba(37,211,102,0.65)]
              transition-all duration-300
              hover:scale-110
            "
          >
            {/* PULSE */}
            <div className="absolute inset-0 rounded-full bg-[#25D366] animate-float opacity-30" />

            {/* GLOW */}
            <div className="absolute inset-0 rounded-full bg-[#25D366] blur-2xl opacity-60 -z-10" />

            <FaWhatsapp size={18} />
          </div>
        </a>

        {/* CALL */}
        <a
          href="tel:+917017502703"
          className="group"
        >
          <div
            className="
              relative
              w-10 h-10
              rounded-full
              flex items-center justify-center
              text-white
              bg-[#2563eb]
              shadow-[0_0_30px_rgba(37,99,235,0.65)]
              transition-all duration-300
              hover:scale-110
            "
          >
            {/* PULSE */}
            <div className="absolute inset-0 rounded-full bg-[#2563eb] animate-float opacity-30" />

            {/* GLOW */}
            <div className="absolute inset-0 rounded-full bg-[#2563eb] blur-2xl opacity-60 -z-10" />

            <PhoneCall
              size={18}
              strokeWidth={2.3}
            />
          </div>
        </a>

        {/* INSTAGRAM */}
        <a
          href="https://instagram.com/whatnextonline"
          target="_blank"
          rel="noreferrer"
          className="group"
        >
          <div
            className="
              relative
              w-10 h-10
              rounded-full
              flex items-center justify-center
              text-white
              bg-gradient-to-br
              from-pink-500
              via-red-500
              to-yellow-500
              shadow-[0_0_30px_rgba(236,72,153,0.65)]
              transition-all duration-300
              hover:scale-110
            "
          >
            {/* PULSE */}
            <div className="absolute inset-0 rounded-full bg-pink-500 animate-float opacity-30" />

            {/* GLOW */}
            <div className="absolute inset-0 rounded-full bg-pink-500 blur-2xl opacity-60 -z-10" />

            <Instagram
              size={18}
              strokeWidth={2.3}
            />
          </div>
        </a>
      </div>
    </div>
  );
}