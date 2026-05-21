import { FaWhatsapp } from "react-icons/fa";

const StickyBookingBar = ({
  price,
  onOpenDepartures,
  name,
}) => {
  const whatsappMessage =
    encodeURIComponent(
      `Hi, I'm interested in the ${name}. Please share the upcoming batch details.`,
    );

  const whatsappLink = `https://wa.me/7017502703?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 p-3">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 backdrop-blur-2xl px-4 py-3 lg:px-8 lg:py-5 shadow-[0_-8px_30px_rgba(0,0,0,0.18)]">
          {/* LEFT */}
          <div className="pr-4 lg:pr-8 shrink-0">
            <p className="text-[8px] uppercase tracking-[0.28em] text-zinc-100 lg:text-[10px]">
              Starting From
            </p>

            <div className="flex items-end gap-1 mt-1 lg:mt-2">
              <h2 className="text-xl font-bold text-white leading-none lg:text-4xl">
                {price}
              </h2>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-2 lg:gap-4 shrink-0">
            {/* CTA */}
            <button
              onClick={
                onOpenDepartures
              }
              className="h-11 px-4 rounded-xl bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold transition-all duration-300 active:scale-95 whitespace-nowrap lg:h-14 lg:px-8 lg:text-base lg:rounded-2xl shadow-[0_8px_24px_rgba(249,115,22,0.25)]"
            >
              Check Availability
            </button>

            {/* WHATSAPP */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center shrink-0 transition-all duration-300 active:scale-95 lg:w-14 lg:h-14 shadow-[0_8px_24px_rgba(37,211,102,0.25)]"
            >
              <FaWhatsapp
                size={20}
                className="text-white lg:w-7 lg:h-7"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyBookingBar;