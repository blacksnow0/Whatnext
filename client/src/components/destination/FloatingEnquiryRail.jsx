// FloatingEnquiryRail.jsx

import { useState } from "react";

import EnquiryModal from "../../modal/EnquiryModal";

export default function FloatingEnquiryRail() {
  const [isOpen, setIsOpen] =
    useState(false);

  return (
    <>
      {/* ================= DESKTOP ================= */}
      <button
        onClick={() =>
          setIsOpen(true)
        }
        className="
          hidden lg:flex

          fixed
          right-0
          top-[72%]
          -translate-y-1/2
          z-50

          items-center
          justify-center

          w-[44px]
          h-[138px]

          rounded-l-[16px]

          bg-[#2563eb]

          shadow-[-6px_10px_24px_rgba(37,99,235,0.16)]

          transition-all
          duration-300

          hover:w-[48px]
          hover:shadow-[-8px_14px_32px_rgba(37,99,235,0.22)]
        "
      >
        <span
          className="
            text-white

            text-[9px]
            font-medium
            uppercase

            tracking-[0.22em]

            [writing-mode:vertical-rl]
            rotate-180

            select-none
          "
        >
          Enquire
        </span>
      </button>

      {/* ================= MOBILE ================= */}
      <button
        onClick={() =>
          setIsOpen(true)
        }
        className="
          lg:hidden

          fixed
          right-0
          top-[70%]
          -translate-y-1/2
          z-50

          flex
          items-center
          justify-center

          w-[38px]
          h-[112px]

          rounded-l-[14px]

          bg-[#2563eb]

          shadow-[-5px_8px_20px_rgba(37,99,235,0.14)]

          transition-all
          duration-300

          active:w-[42px]
        "
      >
        <span
          className="
            text-white

            text-[8px]
            font-medium
            uppercase

            tracking-[0.18em]

            [writing-mode:vertical-rl]
            rotate-180

            select-none
          "
        >
          Enquire
        </span>
      </button>

      {/* ================= MODAL ================= */}
      <EnquiryModal
        isOpen={isOpen}
        onClose={() =>
          setIsOpen(false)
        }
      />
    </>
  );
}