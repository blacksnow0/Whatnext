import { useEffect, useState } from "react";

import {
  Compass,
  Map,
  Camera,
  HelpCircle,
  Layers3,
} from "lucide-react";

const sections = [
  {
    id: "overview",
    label: "Overview",
    icon: Compass,
  },

  {
    id: "services",
    label: "Services",
    icon: Layers3,
  },

  {
    id: "itinerary",
    label: "Itinerary",
    icon: Map,
  },

  {
    id: "gallery",
    label: "Gallery",
    icon: Camera,
  },

  {
    id: "faq",
    label: "FAQ",
    icon: HelpCircle,
  },
];

const DestinationRail = () => {
  const [activeSection, setActiveSection] =
    useState("overview");

  const [showRail, setShowRail] =
    useState(false);

  // SHOW AFTER HERO
  useEffect(() => {
    const handleScroll = () => {
      const hero =
        document.getElementById(
          "hero"
        );

      if (!hero) return;

      const heroBottom =
        hero.offsetTop +
        hero.offsetHeight;

      setShowRail(
        window.scrollY >
          heroBottom - 120
      );
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  // ACTIVE SECTION TRACKING
  useEffect(() => {
    const observer =
      new IntersectionObserver(
        (entries) => {
          let visibleSection =
            activeSection;

          let maxRatio = 0;

          entries.forEach((entry) => {
            if (
              entry.isIntersecting &&
              entry.intersectionRatio >
                maxRatio
            ) {
              maxRatio =
                entry.intersectionRatio;

              visibleSection =
                entry.target.id;
            }
          });

          if (
            visibleSection !==
            activeSection
          ) {
            setActiveSection(
              visibleSection
            );
          }
        },
        {
          threshold: [
            0.15, 0.25, 0.4, 0.6,
          ],

          rootMargin:
            "-10% 0px -45% 0px",
        }
      );

    sections.forEach((section) => {
      const element =
        document.getElementById(
          section.id
        );

      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [activeSection]);

  // SCROLL TO SECTION
  const scrollToSection = (id) => {
    const element =
      document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      {/* DESKTOP */}
      {showRail && (
        <div className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-40">
          <div className="flex flex-col gap-2 px-2 py-3 rounded-l-2xl bg-black/25 backdrop-blur-2xl border border-white/10 border-r-0 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
            {sections.map(
              (section) => {
                const Icon =
                  section.icon;

                const isActive =
                  activeSection ===
                  section.id;

                return (
                  <button
                    key={
                      section.id
                    }
                    onClick={() =>
                      scrollToSection(
                        section.id
                      )
                    }
                    className="group relative flex items-center justify-center"
                  >
                    {/* TOOLTIP */}
                    <div className="absolute right-12 px-3 py-1.5 rounded-full bg-black text-white text-[11px] whitespace-nowrap opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
                      {
                        section.label
                      }
                    </div>

                    {/* ICON */}
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "bg-[#f97316] text-white shadow-[0_6px_20px_rgba(249,115,22,0.28)]"
                          : "bg-white/5 text-white/70 hover:bg-white/10"
                      }`}
                    >
                      <Icon
                        size={15}
                      />
                    </div>
                  </button>
                );
              }
            )}
          </div>
        </div>
      )}

      {/* MOBILE */}
      {showRail && (
        <div className="lg:hidden fixed right-0 top-[58%] -translate-y-1/2 z-40">
          <div className="flex flex-col gap-2 px-2 py-3 rounded-l-2xl bg-black/25 backdrop-blur-2xl border border-white/10 border-r-0 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
            {sections.map(
              (section) => {
                const Icon =
                  section.icon;

                const isActive =
                  activeSection ===
                  section.id;

                return (
                  <button
                    key={
                      section.id
                    }
                    onClick={() =>
                      scrollToSection(
                        section.id
                      )
                    }
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? "bg-[#f97316] text-white shadow-[0_6px_20px_rgba(249,115,22,0.25)]"
                        : "bg-white/5 text-white/70 hover:bg-white/10"
                    }`}
                  >
                    <Icon
                      size={15}
                    />
                  </button>
                );
              }
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default DestinationRail;