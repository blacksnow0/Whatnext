import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Compass,
  Backpack,
  Map,
  Image,
  HelpCircle,
} from "lucide-react";

const sections = [
  {
    id: "overview",
    label: "Overview",
    icon: Compass,
  },

  {
    id: "services",
    label: "Included",
    icon: Backpack,
  },

  {
    id: "itinerary",
    label: "Itinerary",
    icon: Map,
  },

  {
    id: "gallery",
    label: "Gallery",
    icon: Image,
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

  const [showHeader, setShowHeader] =
    useState(false);

  const [pillStyle, setPillStyle] =
    useState({});

  const navRef = useRef(null);

  /* ---------------- SHOW AFTER HERO ---------------- */

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

      setShowHeader(
        window.scrollY >
          heroBottom - 120
      );
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  /* ---------------- ACTIVE SECTION ---------------- */

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY + 220;

      let current =
        sections[0].id;

      for (const section of sections) {
        const element =
          document.getElementById(
            section.id
          );

        if (!element)
          continue;

        if (
          scrollPosition >=
          element.offsetTop
        ) {
          current =
            section.id;
        }
      }

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  /* ---------------- ACTIVE PILL ---------------- */

  useEffect(() => {
    if (!navRef.current) return;

    const activeButton =
      navRef.current.querySelector(
        `[data-id="${activeSection}"]`
      );

    if (!activeButton) return;

    setPillStyle({
      width:
        activeButton.offsetWidth,
      height:
        activeButton.offsetHeight,
      left:
        activeButton.offsetLeft,
      top: activeButton.offsetTop,
    });
  }, [activeSection]);

  /* ---------------- SCROLL TO SECTION ---------------- */

  const scrollToSection = (id) => {
    const element =
      document.getElementById(id);

    if (!element) return;

    const offset = 150;

    const top =
      element.getBoundingClientRect()
        .top +
      window.pageYOffset -
      offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  if (!showHeader) return null;

  return (
    <div
      className="
        fixed
        top-24
        left-1/2
        -translate-x-1/2
        z-50
        w-[92%]
        max-w-3xl
      "
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-full

          border
          border-white/40

          bg-white/55
          backdrop-blur-2xl

          shadow-[0_20px_60px_rgba(0,0,0,0.10)]

          px-2
          py-1.5
        "
      >
        {/* GLASS OVERLAY */}
        <div
          className="
            absolute
            inset-0
            rounded-full

            bg-gradient-to-b
            from-white/40
            to-white/10

            pointer-events-none
          "
        />

        {/* NAV */}
        <div
          ref={navRef}
          className="
            relative
            hidden
            md:flex
            items-center
            justify-center
            gap-1
          "
        >
          {/* ACTIVE SLIDER */}
          <div
            className="
              absolute
              rounded-full

              bg-gradient-to-r
              from-orange-500
              to-amber-500

              shadow-[0_10px_30px_rgba(249,115,22,0.30)]

              transition-all
              duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]
            "
            style={pillStyle}
          />

          {sections.map(
            (section) => {
              const Icon =
                section.icon;

              const isActive =
                activeSection ===
                section.id;

              return (
                <button
                  key={section.id}
                  data-id={
                    section.id
                  }
                  onClick={() =>
                    scrollToSection(
                      section.id
                    )
                  }
                  className={`
                    relative
                    z-10

                    flex
                    items-center
                    gap-2

                    px-5
                    py-2.5

                    rounded-full

                    text-sm
                    font-medium

                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "text-white"
                        : "text-zinc-600 hover:text-black"
                    }
                  `}
                >
                  <Icon
                    size={15}
                    strokeWidth={
                      2.2
                    }
                  />

                  {section.label}
                </button>
              );
            }
          )}
        </div>

        {/* MOBILE */}
        <div
          className="
            md:hidden
            flex
            items-center
            gap-2
            overflow-x-auto
            no-scrollbar
          "
        >
          {sections.map(
            (section) => {
              const Icon =
                section.icon;

              const isActive =
                activeSection ===
                section.id;

              return (
                <button
                  key={section.id}
                  onClick={() =>
                    scrollToSection(
                      section.id
                    )
                  }
                  className={`
                    shrink-0

                    flex
                    items-center
                    gap-2

                    px-4
                    py-2.5

                    rounded-full

                    text-xs
                    font-medium

                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-[0_10px_25px_rgba(249,115,22,0.28)]"
                        : "bg-white/40 text-zinc-700"
                    }
                  `}
                >
                  <Icon
                    size={14}
                  />

                  {section.label}
                </button>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default DestinationRail;