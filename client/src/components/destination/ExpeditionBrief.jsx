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
    <section className="relative z-20 -mt-10 sm:-mt-16">
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
            <div className="grid grid-cols-2 gap-y-8 gap-x-4 mt-8">
              {infoItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label}>
                    <Icon size={20} className="text-orange-500" />

                    <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-zinc-400 font-semibold">
                      {item.label}
                    </p>

                    <h3 className="mt-1 text-[15px] font-semibold text-zinc-900 leading-snug">
                      {item.value}
                    </h3>
                  </div>
                );
              })}
            </div>

            {/* Contact */}
            <div className="mt-10 pt-6 border-t border-orange-100">
              <p className="text-sm font-semibold text-zinc-900">
                Speak With a Trek Expert
              </p>

              <div className="flex flex-col gap-4 mt-5">
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-orange-500" />

                  <span className="text-sm text-zinc-700">+91 98765 43210</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-orange-500" />

                  <span className="text-sm text-zinc-700">hello@trek.com</span>
                </div>
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
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-orange-500" />

                  <span className="text-zinc-700 font-medium">
                    +91 98765 43210
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-orange-500" />

                  <span className="text-zinc-700 font-medium">
                    hello@trek.com
                  </span>
                </div>
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
