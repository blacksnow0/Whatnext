import { useState } from "react";

import {
  ChevronDown,
} from "lucide-react";

const FAQSection = ({ destination }) => {
  const [activeFAQ, setActiveFAQ] =
    useState(0);

  return (
    <section id="faq" className=" py-10 sm:py-16">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-[10px] uppercase tracking-[0.25em] text-orange-500 font-semibold">
            Frequently Asked Questions
          </p>

          <h2 className="mt-2 text-2xl sm:text-5xl font-serif text-zinc-900 leading-tight">
            Important Trek Information
          </h2>

          <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed">
            Everything you should know before joining the Valley of Flowers expedition.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-8 sm:mt-12 border-t border-orange-100">
          {destination.faq.map(
            (item, index) => {
              const isOpen =
                activeFAQ === index;

              return (
                <div
                  key={item.question}
                  className="border-b border-orange-100"
                >
                  {/* Question */}
                  <button
                    onClick={() =>
                      setActiveFAQ(
                        isOpen ? null : index
                      )
                    }
                    className="w-full text-left py-5 sm:py-7"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex items-start gap-5">
                        {/* Number */}
                        <span className="text-orange-500 text-sm font-semibold mt-1 shrink-0">
                          {String(index + 1).padStart(
                            2,
                            "0"
                          )}
                        </span>

                        {/* Question */}
                        <h3 className="text-base sm:text-2xl font-serif text-zinc-900 leading-snug max-w-3xl">
                          {item.question}
                        </h3>
                      </div>

                      {/* Icon */}
                      <ChevronDown
                        size={20}
                        className={`text-orange-500 mt-1 shrink-0 transition-transform duration-300 ${
                          isOpen
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </div>
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] pb-6 sm:pb-8"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pl-9 sm:pl-12 max-w-3xl">
                        <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;