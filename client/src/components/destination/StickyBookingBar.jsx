import { FaWhatsapp } from "react-icons/fa";

const StickyBookingBar = ({ price, onOpenDepartures, name }) => {
  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in the ${name}. Please share the upcoming batch details.`,
  );

  const whatsappLink = `https://wa.me/7017502703?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 p-3">
  <div className="max-w-5xl mx-auto">
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 backdrop-blur-2xl px-4 py-3 shadow-[0_-8px_30px_rgba(0,0,0,0.18)]">
      {/* Left */}
      <div className="pr-4">
        <p className="text-[8px] uppercase tracking-[0.28em] text-zinc-100">
          Starting From
        </p>

        <div className="flex items-end gap-1 mt-1">
          <h2 className="text-xl sm:text-2xl font-bold text-white leading-none">
            {price}
          </h2>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">
        {/* CTA */}
        <button
          onClick={onOpenDepartures}
          className="h-11 px-4 sm:px-5 rounded-xl bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold transition-all duration-300 active:scale-95 whitespace-nowrap"
        >
          Check Availability
        </button>

        {/* WhatsApp */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center shrink-0 transition-all duration-300 active:scale-95"
        >
          <FaWhatsapp
            size={20}
            className="text-white"
          />
        </a>
      </div>
    </div>
  </div>
</div>
  );
};

export default StickyBookingBar;
