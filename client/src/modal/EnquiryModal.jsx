// EnquiryModal.jsx

import { useEffect } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  X,
  ArrowRight,
  Mountain,
} from "lucide-react";

export default function EnquiryModal({
  isOpen,
  onClose,
}) {
  /* ESC CLOSE */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [onClose]);

  /* LOCK BODY */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow =
        "hidden";
    } else {
      document.body.style.overflow =
        "auto";
    }

    return () => {
      document.body.style.overflow =
        "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999]"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          {/* BACKDROP */}
          <motion.div
            onClick={onClose}
            className="
              absolute inset-0
              bg-black/45
              backdrop-blur-md
            "
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
            }}
          />

          {/* ====================================================== */}
          {/* ==================== DESKTOP ========================== */}
          {/* ====================================================== */}

          <div className="hidden md:flex items-center justify-center min-h-screen p-8">
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 30,
                scale: 0.96,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                w-full
                max-w-5xl

                overflow-hidden

                rounded-[42px]

                border border-white/10

                bg-white/78
                backdrop-blur-3xl

                shadow-[0_40px_120px_rgba(0,0,0,0.22)]

                grid
                grid-cols-2
              "
            >
              {/* GLOW */}
              <div className="absolute top-[-80px] right-[-40px] w-[280px] h-[280px] bg-orange-200/60 rounded-full blur-3xl" />

              <div className="absolute bottom-[-120px] left-[-80px] w-[240px] h-[240px] bg-zinc-200/70 rounded-full blur-3xl" />

              {/* LEFT PANEL */}
              <div className="relative p-12 border-r border-black/5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">
                      <Mountain
                        size={22}
                        className="text-orange-500"
                      />
                    </div>

                    <p className="text-[10px] uppercase tracking-[0.35em] text-orange-500 font-semibold">
                      Expedition Enquiry
                    </p>
                  </div>

                  <h2 className="mt-10 text-6xl leading-[0.9] tracking-[-0.06em] font-serif text-zinc-900">
                    Plan This
                    <br />
                    Trek.
                  </h2>

                  <p className="mt-8 max-w-md text-zinc-600 leading-relaxed text-lg">
                    Speak with our team regarding
                    batches, weather conditions,
                    transport and preparation.
                  </p>
                </div>

                {/* FOOTNOTE */}
                <div className="pt-10">
                  <p className="text-sm text-zinc-400">
                    Our expedition team usually
                    replies within a few hours.
                  </p>
                </div>
              </div>

              {/* RIGHT PANEL */}
              <div className="relative p-12 flex items-center">
                {/* CLOSE */}
                <button
                  onClick={onClose}
                  className="
                    absolute
                    top-6
                    right-6

                    w-11
                    h-11

                    rounded-full

                    bg-black/[0.04]

                    hover:bg-black/[0.08]

                    transition-all
                    duration-300

                    flex
                    items-center
                    justify-center
                  "
                >
                  <X
                    size={18}
                    className="text-zinc-700"
                  />
                </button>

                {/* FORM */}
                <form className="w-full space-y-5">
                  {/* NAME */}
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="
                        w-full
                        h-16

                        rounded-2xl

                        border border-zinc-200

                        bg-white/80

                        px-6

                        text-[15px]

                        outline-none

                        transition-all
                        duration-300

                        focus:border-orange-400
                        focus:ring-4
                        focus:ring-orange-100
                      "
                    />
                  </div>

                  {/* PHONE */}
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="
                        w-full
                        h-16

                        rounded-2xl

                        border border-zinc-200

                        bg-white/80

                        px-6

                        text-[15px]

                        outline-none

                        transition-all
                        duration-300

                        focus:border-orange-400
                        focus:ring-4
                        focus:ring-orange-100
                      "
                    />
                  </div>

                  {/* MONTH */}
                  <div>
                    <select
                      className="
                        w-full
                        h-16

                        rounded-2xl

                        border border-zinc-200

                        bg-white/80

                        px-6

                        text-[15px]

                        outline-none

                        transition-all
                        duration-300

                        focus:border-orange-400
                        focus:ring-4
                        focus:ring-orange-100
                      "
                    >
                      <option>
                        Preferred Month
                      </option>

                      <option>
                        June
                      </option>

                      <option>
                        July
                      </option>

                      <option>
                        August
                      </option>

                      <option>
                        September
                      </option>
                    </select>
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your plan..."
                      className="
                        w-full

                        rounded-2xl

                        border border-zinc-200

                        bg-white/80

                        px-6
                        py-5

                        text-[15px]

                        resize-none

                        outline-none

                        transition-all
                        duration-300

                        focus:border-orange-400
                        focus:ring-4
                        focus:ring-orange-100
                      "
                    />
                  </div>

                  {/* BUTTON */}
                  <button
                    type="submit"
                    className="
                      group
                      relative

                      overflow-hidden

                      w-full
                      h-16

                      rounded-2xl

                      bg-zinc-900
                      text-white

                      transition-all
                      duration-500

                      hover:bg-black
                      hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)]
                    "
                  >
                    {/* SHIMMER */}
                    <div
                      className="
                        absolute inset-0

                        translate-x-[-100%]

                        bg-gradient-to-r
                        from-transparent
                        via-white/10
                        to-transparent

                        transition-transform
                        duration-1000

                        group-hover:translate-x-[100%]
                      "
                    />

                    <span className="relative z-10 flex items-center justify-center gap-3 text-[15px] font-medium">
                      Send Enquiry

                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* ====================================================== */}
          {/* ===================== MOBILE ========================= */}
          {/* ====================================================== */}

          <div className="md:hidden absolute inset-x-0 bottom-0">
            <motion.div
              initial={{
                y: "100%",
              }}
              animate={{
                y: 0,
              }}
              exit={{
                y: "100%",
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative

                rounded-t-[34px]

                bg-white

                shadow-[0_-20px_60px_rgba(0,0,0,0.2)]

                px-5
                pt-5
                pb-8
              "
            >
              {/* HANDLE */}
              <div className="w-14 h-1.5 rounded-full bg-zinc-300 mx-auto" />

              {/* CLOSE */}
              <button
                onClick={onClose}
                className="
                  absolute
                  top-5
                  right-5

                  w-10
                  h-10

                  rounded-full

                  bg-zinc-100

                  flex
                  items-center
                  justify-center
                "
              >
                <X
                  size={18}
                  className="text-zinc-700"
                />
              </button>

              {/* CONTENT */}
              <div className="mt-8">
                <p className="text-[10px] uppercase tracking-[0.35em] text-orange-500 font-semibold">
                  Expedition Enquiry
                </p>

                <h2 className="mt-4 text-4xl leading-[0.95] tracking-[-0.05em] font-serif text-zinc-900">
                  Plan This Trek.
                </h2>

                <p className="mt-4 text-sm text-zinc-500 leading-relaxed">
                  Speak with our team regarding
                  weather, batches and preparation.
                </p>

                {/* FORM */}
                <form className="mt-8 space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="
                      w-full
                      h-14

                      rounded-2xl

                      border border-zinc-200

                      px-5

                      text-sm

                      outline-none

                      focus:border-orange-400
                      focus:ring-4
                      focus:ring-orange-100
                    "
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="
                      w-full
                      h-14

                      rounded-2xl

                      border border-zinc-200

                      px-5

                      text-sm

                      outline-none

                      focus:border-orange-400
                      focus:ring-4
                      focus:ring-orange-100
                    "
                  />

                  <select
                    className="
                      w-full
                      h-14

                      rounded-2xl

                      border border-zinc-200

                      px-5

                      text-sm

                      outline-none

                      focus:border-orange-400
                      focus:ring-4
                      focus:ring-orange-100
                    "
                  >
                    <option>
                      Preferred Month
                    </option>

                    <option>
                      June
                    </option>

                    <option>
                      July
                    </option>

                    <option>
                      August
                    </option>

                    <option>
                      September
                    </option>
                  </select>

                  <textarea
                    rows={4}
                    placeholder="Tell us about your plan..."
                    className="
                      w-full

                      rounded-2xl

                      border border-zinc-200

                      px-5
                      py-4

                      text-sm

                      resize-none

                      outline-none

                      focus:border-orange-400
                      focus:ring-4
                      focus:ring-orange-100
                    "
                  />

                  <button
                    type="submit"
                    className="
                      w-full
                      h-14

                      rounded-2xl

                      bg-zinc-900
                      text-white

                      text-sm
                      font-medium
                    "
                  >
                    Send Enquiry
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}