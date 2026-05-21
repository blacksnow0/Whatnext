import {
  MapPinned,
  Clock3,
  UtensilsCrossed,
  Tent,
  ShieldCheck,
  Backpack,
} from "lucide-react";

const TrekServices = ({ destination }) => {
  const serviceSections = [
    {
      title: "Transport",
      icon: MapPinned,
      items: [
        `Route: ${destination.services.transport.route}`,
        `Pickup · ${destination.services.transport.pickup.location} (${destination.services.transport.pickup.time})`,
        `Drop · ${destination.services.transport.dropoff.location} (${destination.services.transport.dropoff.time})`,
      ],
    },

    {
      title: "Accommodation",
      icon: Tent,
      items: destination.services.stay,
    },

    {
      title: "Meals",
      icon: UtensilsCrossed,
      items: destination.services.meals,
    },

    {
      title: "Support",
      icon: Backpack,
      items: destination.services.support,
    },

    {
      title: "Safety & Essentials",
      icon: ShieldCheck,
      items: destination.services.essentials,
    },
  ];

  return (
    <section className=" py-10 sm:py-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-[10px] uppercase tracking-[0.25em] text-orange-500 font-semibold">
            Trek Services
          </p>

          <h2 className="mt-2 text-2xl sm:text-4xl font-serif text-zinc-900 leading-tight">
            Everything Arranged For The Journey
          </h2>
        </div>

        {/* Services */}
        <div className="mt-8 border-t border-orange-100">
          {serviceSections.map((section, index) => {
            const Icon = section.icon;

            return (
              <div
                key={section.title}
                className={`grid sm:grid-cols-[180px_1fr] gap-5 py-5 ${
                  index !== serviceSections.length - 1
                    ? "border-b border-orange-100"
                    : ""
                }`}
              >
                {/* Left */}
                <div>
                  <Icon size={18} className="text-orange-500" />

                  <h3 className="mt-2 text-base sm:text-lg font-semibold text-zinc-900">
                    {section.title}
                  </h3>
                </div>

                {/* Right */}
                <div className="space-y-2">
                  {section.items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-1 h-1 rounded-full bg-orange-500 mt-2 shrink-0" />

                      <p className="text-sm text-zinc-600 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-5 flex items-center gap-2 text-xs text-zinc-500">
          <Clock3 size={14} className="text-orange-500" />
          Timings may vary slightly depending on weather and road conditions.
        </div>
      </div>
    </section>
  );
};

export default TrekServices;
