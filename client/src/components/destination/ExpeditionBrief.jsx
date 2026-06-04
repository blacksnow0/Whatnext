import {
  Clock3,
  Mountain,
  Activity,
  Route,
  MapPinned,
  Phone,
  Mail,
} from "lucide-react";

const ExpeditionBrief = ({ destination }) => {
  const infoItems = [
    {
      icon: MapPinned,
      label: "Location",
      value: destination.region,
    },

    {
      icon: Clock3,
      label: "Duration",
      value: destination.duration,
    },

    {
      icon: Mountain,
      label: "Max Altitude",
      value: destination.altitude,
    },

    {
      icon: Route,
      label: "Trekking",
      value: "37 km",
    },

    {
      icon: Activity,
      label: "Grade",
      value: destination.difficulty,
    },
  ];

  return (
    <section id="overview" className="relative z-20 -mt-10 sm:-mt-16">
      {/* Main Wrapper */}
      <div className="bg-[#faf7f6] rounded-t-[32px] sm:rounded-t-[48px] border-t border-orange-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-6 sm:py-8">
          {/* Mobile */}
          <div className="sm:hidden">
            {/* Title */}
            <div>
              <h2 className="text-2xl font-bold text-zinc-900">
                {destination.name}
              </h2>

              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                {destination.explorerNote}
              </p>
            </div>

            {/* Info */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-3 mt-6">
              {infoItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.value} className="flex items-center gap-2">
                    <Icon size={16} className="text-orange-500 shrink-0" />

                    <h3 className="text-sm font-medium text-zinc-900 leading-none">
                      {item.value}
                    </h3>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 -mx-5 bg-white sm:-mx-6 overflow-hidden border-y border-zinc-200">
              <div className="marquee-track py-3">
                <div className="marquee-content">
                  <span>July Batches Filling Fast</span>
                  <span>Peak Bloom Season</span>
                  <span>Small Group Departures</span>

                  {/* Duplicate */}
                  <span>July Batches Filling Fast</span>
                  <span>Peak Bloom Season</span>
                  <span>Small Group Departures</span>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="mt-3S pt-5 ">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                    Trek Support
                  </p>

                  <h3 className="mt-2 text-lg font-semibold text-zinc-900">
                    Planning Assistance
                  </h3>

                  <p className="mt-2 text-sm text-zinc-600 leading-relaxed max-w-xs">
                    Unsure about difficulty, fitness requirements or departures?
                    Our team can help.
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <a
                  href="tel:+917017502703"
                  className="flex items-center bg-white justify-between rounded-2xl border border-zinc-200 px-4 py-3 hover:border-zinc-300 transition"
                >
                  <div>
                    <p className="text-xs text-zinc-500">Call Us</p>

                    <p className="text-sm font-medium text-zinc-900">
                      +91 7017502703
                    </p>
                  </div>

                  <Phone size={16} className="text-orange-500" />
                </a>

                <a
                  href="mailto:trek@whatnextonline.in"
                  className="flex items-center bg-white justify-between rounded-2xl border border-zinc-200 px-4 py-3 hover:border-zinc-300 transition"
                >
                  <div>
                    <p className="text-xs text-zinc-500">Email Us</p>

                    <p className="text-sm font-medium text-zinc-900">
                      trek@whatnextonline.in
                    </p>
                  </div>

                  <Mail size={16} className="text-orange-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden sm:grid grid-cols-[1fr_auto] items-center gap-16 mt-4">
            {/* Left Info */}
            <div className="grid grid-cols-5 gap-12">
              {infoItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="relative">
                    {/* Divider */}
                    {index !== infoItems.length - 1 && (
                      <div className="absolute top-1 right-[-24px] h-14 w-px bg-orange-100" />
                    )}

                    {/* Icon */}
                    <Icon
                      size={22}
                      strokeWidth={2}
                      className="text-orange-500"
                    />

                    {/* Label */}
                    <p className="mt-4 text-[10px] uppercase tracking-[0.22em] text-zinc-400 font-semibold whitespace-nowrap">
                      {item.label}
                    </p>

                    {/* Value */}
                    <h3 className="mt-2 text-lg font-semibold text-zinc-900 leading-tight whitespace-nowrap">
                      {item.value}
                    </h3>
                  </div>
                );
              })}
            </div>

            {/* Right Contact */}
            <div className="pl-10 border-l border-orange-100">
              <p className="text-sm uppercase tracking-[0.18em] text-orange-500 font-semibold">
                Trek Support
              </p>

              <h3 className="mt-3 text-xl font-semibold text-zinc-900 leading-snug">
                Speak With Our Trek Expert
              </h3>

              <div className="flex flex-col gap-4 mt-6">
                {/* CALL */}
                <a
                  href="tel:+917017502703"
                  onClick={() => {
                    window.gtag("event", "call_click", {
                      source: "contact_section",
                    });
                  }}
                  className="flex items-center gap-3 transition hover:text-orange-500"
                >
                  <Phone size={18} className="text-orange-500" />

                  <span className="text-zinc-700 font-medium">
                    +91 7017502703
                  </span>
                </a>

                {/* EMAIL */}
                <a
                  href="mailto:trek@whatnextonline.in"
                  onClick={() => {
                    window.gtag("event", "email_click", {
                      source: "contact_section",
                    });
                  }}
                  className="flex items-center gap-3 transition hover:text-orange-500"
                >
                  <Mail size={18} className="text-orange-500" />

                  <span className="text-zinc-700 font-medium">
                    trek@whatnextonline.in
                  </span>
                </a>
              </div>

              <p className="mt-6 text-sm text-zinc-500">
                Monday — Saturday · 10 AM to 6 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpeditionBrief;
