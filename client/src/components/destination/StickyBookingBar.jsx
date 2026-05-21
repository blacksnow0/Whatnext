const StickyBookingBar = ({ price }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 p-3">
      <div className="max-w-6xl mx-auto">
        <div className="backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl shadow-2xl px-4 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Price Section */}
            <div>
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-zinc-400">
                Starting From
              </p>

              <div className="flex items-end gap-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-white leading-none">
                  {price}
                </h2>

                <span className="text-xs sm:text-sm text-zinc-400 mb-1">
                  / person
                </span>
              </div>

              <p className="text-xs sm:text-sm text-orange-400 mt-1">
                Only 8 spots left
              </p>
            </div>

            {/* CTA */}
            <button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-400 transition-all duration-300 px-6 sm:px-8 py-4 rounded-xl text-white font-semibold shadow-lg hover:scale-[1.02] active:scale-95">
              Reserve Spot →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyBookingBar;