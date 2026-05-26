import { useEffect } from "react";

import {
  X,
  Mountain,
  ArrowRight,
} from "lucide-react";

export default function ExpeditionModal({
  isOpen,
  onClose,
  destination,
}) {
  useEffect(() => {
    document.body.style.overflow =
      isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow =
        "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md p-4">
      <div className="relative w-full max-w-md overflow-hidden rounded-[28px] bg-[#f5f3ef] shadow-2xl">
        
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white"
        >
          <X size={16} />
        </button>

        {/* TOP */}
        <div className="bg-gradient-to-b from-[#f2dfcc] to-transparent px-5 pt-6 pb-2">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
              <Mountain
                size={18}
                className="text-[#ff6b00]"
              />
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#ff6b00]">
                Expedition Enquiry
              </p>

              <h2 className="mt-1 text-3xl font-semibold leading-none text-black">
                {destination?.name ||
                  "Plan Your Trek"}
              </h2>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="px-5 pb-5">
          <form
            action="https://formsubmit.co/trek@whatnextonline.in"
            method="POST"
            className="space-y-3"
          >
            {/* HIDDEN */}
            <input
              type="hidden"
              name="_subject"
              value={`New Enquiry - ${
                destination?.name ||
                "Trek"
              }`}
            />

            <input
              type="hidden"
              name="_captcha"
              value="false"
            />

            <input
              type="hidden"
              name="_next"
              value="https://whatnextonline.in/thank-you"
            />

            <input
              type="hidden"
              name="destination"
              value={destination?.name}
            />

            {/* INPUTS */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="h-14 w-full rounded-2xl border-0 bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-black/5"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="h-14 w-full rounded-2xl border-0 bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-black/5"
            />

            <select
              name="month"
              className="h-14 w-full rounded-2xl border-0 bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-black/5"
            >
              <option>
                Preferred Month
              </option>

              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>September</option>
            </select>

            <textarea
              rows="4"
              name="message"
              placeholder="Tell us about your plan..."
              className="w-full rounded-2xl border-0 bg-white p-4 text-sm outline-none focus:ring-2 focus:ring-black/5"
            />

            {/* BUTTON */}
            <button
              type="submit"
              className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-black text-sm font-medium text-white transition hover:opacity-90"
            >
              Send Enquiry

              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}