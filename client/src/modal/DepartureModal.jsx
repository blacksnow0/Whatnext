import { X } from "lucide-react";

const DepartureModal = ({
  isOpen,
  onClose,
  departures,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999]">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="absolute left-1/2 top-1/2 w-[92%] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-[32px] bg-white overflow-hidden">
        {/* Header */}
        <div className="flex items-start justify-between gap-6 px-6 sm:px-8 pt-6 sm:pt-8">
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
            <X
              size={18}
              className="text-zinc-700"
            />
          </button>
        </div>

        {/* List */}
        <div className="mt-8 border-t border-orange-100">
          {departures.map(
            (departure, index) => (
              <div
                key={index}
                className="grid grid-cols-[1fr_auto] items-center gap-6 px-6 sm:px-8 py-5 border-b border-orange-100"
              >
                {/* Left */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-zinc-900">
                    {departure.date}
                  </h3>

                  <p className="mt-1 text-sm text-zinc-500">
                    Valley Of Flowers Expedition
                  </p>
                </div>

                {/* Right */}
                <div className="text-right">
                  <p
                    className={`text-sm font-semibold ${
                      departure.status ===
                      "Available"
                        ? "text-green-600"
                        : "text-orange-500"
                    }`}
                  >
                    {departure.status}
                  </p>

                  <p className="mt-1 text-sm text-zinc-500">
                    {departure.seatsLeft} seats left
                  </p>
                </div>
              </div>
            )
          )}
        </div>

        {/* Footer */}
        <div className="px-6 sm:px-8 py-5 bg-orange-50/40">
          <p className="text-sm text-zinc-600 leading-relaxed">
            Departure batches are updated manually and
            may change based on weather conditions,
            permits, and seat availability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DepartureModal;