import { useEffect, useState } from "react";

import { ChevronRight, MessageCircle, X } from "lucide-react";

import { AnimatePresence, motion } from "framer-motion";

const DepartureModal = ({ isOpen, onClose, departures, destination }) => {
  const [activeMonth, setActiveMonth] = useState(0);

  // Lock Scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const currentMonth = departures[activeMonth];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999]">
          {/* Backdrop */}
          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.25,
            }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <div className="absolute inset-0 flex items-end justify-center p-3 sm:p-6 pointer-events-none">
            <motion.div
              initial={{
                y: "100%",
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: "100%",
                opacity: 0,
              }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full max-w-2xl rounded-[32px] bg-white overflow-hidden pointer-events-auto"
            >
              {/* Scrollable Content */}
              <div className="max-h-[85vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 z-10 bg-white border-b border-orange-100">
                  <div className="flex items-start justify-between gap-6 px-6 sm:px-8 pt-6 pb-5">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.25em] text-orange-500 font-semibold">
                        Fixed Departures
                      </p>

                      <h2 className="mt-3 text-2xl sm:text-4xl font-serif text-zinc-900 leading-tight">
                        Upcoming Trek Batches
                      </h2>
                    </div>

                    {/* Close */}
                    <button
                      onClick={onClose}
                      className="w-11 h-11 rounded-full border border-orange-100 flex items-center justify-center shrink-0 hover:bg-orange-50 transition"
                    >
                      <X size={18} className="text-zinc-700" />
                    </button>
                  </div>

                  {/* Months */}
                  <div className="flex gap-3 overflow-x-auto px-6 sm:px-8 pb-5 no-scrollbar">
                    {departures.map((month, index) => (
                      <button
                        key={month.month}
                        onClick={() => setActiveMonth(index)}
                        className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                          activeMonth === index
                            ? "bg-orange-500 text-white"
                            : "bg-zinc-100 text-zinc-600 hover:bg-orange-100"
                        }`}
                      >
                        {month.month}
                      </button>
                    ))}
                  </div>

                  <div className="px-6 sm:px-8 pb-5">
                    <a
                      href="#itinerary"
                      onClick={onClose}
                      className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-orange-500 transition-colors duration-300"
                    >
                      <span>
                        Planning your trek?{" "}
                        <span className="underline font-bold">
                          See complete itinerary
                        </span>
                      </span>

                      <ChevronRight size={16} />
                    </a>
                  </div>
                </div>

                {/* Date List */}
                <div className="px-6 sm:px-8 py-1">
                  {currentMonth.batches.map((batch, index) => {
                    const whatsappMessage = encodeURIComponent(
                      `Hi, I'm interested in the ${batch.date} batch for ${destination.name}. Please share the complete details.`,
                    );

                    const whatsappLink = `https://wa.me/7017502703?text=${whatsappMessage}`;

                    return (
                      <div
                        key={index}
                        className="flex items-center justify-between gap-4 py-4 border-b border-orange-100"
                      >
                        {/* Left */}
                        <div className="min-w-0">
                          <h3 className="text-base sm:text-lg font-semibold text-zinc-900 leading-none">
                            {batch.date}
                          </h3>

                          <div className="flex items-center gap-2 mt-2 text-sm">
                            <p
                              className={`font-medium ${
                                batch.status === "Available"
                                  ? "text-green-600"
                                  : "text-orange-500"
                              }`}
                            >
                              {batch.status}
                            </p>

                            <div className="w-1 h-1 rounded-full bg-zinc-300" />

                            <p className="text-zinc-500">
                              {batch.seatsLeft} left
                            </p>
                          </div>
                        </div>

                        {/* Action */}
                        <a
                          href={whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => {
                            window.gtag("event", "whatsapp_click", {
                              destination: destination.name,
                              batch: batch.date,
                            });
                          }}
                          className="h-10 px-4 rounded-full bg-yellow-600 hover:bg-yellow-500 text-white flex items-center gap-2 shrink-0 text-sm font-semibold transition-all duration-300 active:scale-95 shadow-sm"
                        >
                          <MessageCircle size={14} />

                          <span className="hidden sm:inline">Reserve Spot</span>

                          <ChevronRight size={15} />

                          <span className="hidden sm:inline">Inquire</span>
                        </a>
                      </div>
                    );
                  })}
                </div>

                {/* Footer */}
                <div className="px-6 sm:px-8 py-5 bg-orange-50/40 border-t border-orange-100">
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Departure batches are updated manually and may change based
                    on weather conditions, permits, and seat availability.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DepartureModal;
