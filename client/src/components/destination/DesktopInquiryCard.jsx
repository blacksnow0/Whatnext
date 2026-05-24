import { useState } from "react";

import {
  CalendarDays,
  ShieldCheck,
} from "lucide-react";

const DesktopInquiryCard = ({
  destination,
}) => {
  const [formData, setFormData] =
    useState({
      name: "",
      phone: "",
      month: "",
    });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,

      [e.target.name]:
        e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-28">
        <div className="rounded-3xl border border-white bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)] overflow-hidden">
          {/* TOP */}
          <div className="p-7 border-b border-white">
            <div className="inline-flex items-center gap-2 text-orange-500 text-xs uppercase tracking-[0.25em] font-semibold">
              <CalendarDays size={14} />

              Trek Inquiry
            </div>

            <h3 className="mt-4 text-2xl font-serif text-zinc-900 leading-tight">
              Upcoming Batches
              Filling Fast
            </h3>

            <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
              Get latest availability,
              batch dates and trek
              guidance from our
              Himalayan team.
            </p>

            {/* TRUST */}
            <div className="mt-5 flex items-center gap-2 text-xs text-zinc-500">
              <ShieldCheck
                size={14}
                className="text-orange-500"
              />

              Response within
              15–30 minutes
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="p-7 space-y-4"
          >
            {/* NAME */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs uppercase tracking-[0.2em] text-zinc-500 mb-2"
              >
                Full Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={
                  handleChange
                }
                placeholder="Your name"
                className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-orange-400"
              />
            </div>

            {/* PHONE */}
            <div>
              <label
                htmlFor="phone"
                className="block text-xs uppercase tracking-[0.2em] text-zinc-500 mb-2"
              >
                Phone Number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={
                  handleChange
                }
                placeholder="+91 98765 43210"
                className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-orange-400"
              />
            </div>

            {/* MONTH */}
            <div>
              <label
                htmlFor="month"
                className="block text-xs uppercase tracking-[0.2em] text-zinc-500 mb-2"
              >
                Preferred Month
              </label>

              <select
                id="month"
                name="month"
                value={formData.month}
                onChange={
                  handleChange
                }
                className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-orange-400"
              >
                <option value="">
                  Select Month
                </option>

                <option value="June">
                  June
                </option>

                <option value="July">
                  July
                </option>

                <option value="August">
                  August
                </option>

                <option value="September">
                  September
                </option>
              </select>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full rounded-2xl bg-orange-500 hover:bg-orange-600 text-white py-3.5 text-sm font-semibold transition-all duration-300"
            >
              Check Availability
            </button>
          </form>

          {/* FOOTER */}
          <div className="px-7 pb-7">
            <div className="rounded-2xl bg-white border border-orange-100 px-4 py-3 text-xs text-zinc-500 leading-relaxed">
              Limited monsoon
              departures available for{" "}
              {destination.name}.
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DesktopInquiryCard;