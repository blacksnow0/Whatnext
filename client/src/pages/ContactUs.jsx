import { useState } from "react";

import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  ChevronRight,
  Mountain,
  Compass,
  Tent,
  Backpack,
} from "lucide-react";

export default function Contact() {
  const [selectedAdventure, setSelectedAdventure] =
    useState("");

  const adventures = [
    {
      title: "Weekend Trek",
      icon: Mountain,
    },
    {
      title: "Himalayan Expedition",
      icon: Compass,
    },
    {
      title: "Backpacking Trip",
      icon: Backpack,
    },
    {
      title: "Custom Group Tour",
      icon: Tent,
    },
  ];

  return (
    <main className="bg-stone-50 pb-24 md:pb-0">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50 via-white to-stone-50" />

        <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl" />

        <div className="absolute right-0 top-20 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5 pt-28 md:pt-36 pb-16 md:pb-24">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-orange-500 uppercase tracking-[0.3em] text-xs font-semibold">
              Contact WhatNextOnline
            </p>

            <h1 className="mt-5 text-4xl sm:text-5xl md:text-7xl font-serif text-zinc-900 leading-[0.95]">
              Where Will The
              <br />
              Mountains Take
              <br />
              You Next?
            </h1>

            <p className="mt-6 text-base md:text-lg text-zinc-600 max-w-2xl mx-auto">
              Whether you're planning your first
              Himalayan trek or your next big
              adventure, our team is ready to help
              you find the perfect journey.
            </p>
          </div>
        </div>
      </section>

      {/* MOBILE QUICK ACTION */}
      <section className="md:hidden pb-10">
        <div className="max-w-6xl mx-auto px-5">
          <div className="bg-zinc-900 rounded-[32px] p-6 text-white overflow-hidden relative">
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-orange-500/20 blur-3xl" />

            <p className="text-white/70 text-sm">
              Need Immediate Assistance?
            </p>

            <h2 className="text-3xl font-serif mt-2 leading-tight">
              Talk To A Trek Expert
            </h2>

            <p className="mt-3 text-white/70 text-sm">
              Get help with trek selection,
              departures, transportation, packing
              lists and bookings.
            </p>

            <div className="grid grid-cols-2 gap-3 mt-6">
              <a
                href="tel:+917017502703"
                className="bg-white text-zinc-900 rounded-2xl py-4 text-center font-medium"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/917017502703"
                className="bg-orange-500 rounded-2xl py-4 text-center font-medium"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ADVENTURE SELECTOR */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center">
            <p className="uppercase tracking-[0.3em] text-orange-500 text-xs font-semibold">
              Start Here
            </p>

            <h2 className="mt-4 text-3xl md:text-5xl font-serif">
              What Are You Looking For?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {adventures.map(
              ({ title, icon: Icon }) => (
                <button
                  key={title}
                  onClick={() =>
                    setSelectedAdventure(title)
                  }
                  className={`rounded-[28px] border p-6 text-left transition-all ${
                    selectedAdventure === title
                      ? "bg-orange-500 text-white border-orange-500"
                      : "bg-white border-zinc-200 hover:border-orange-300"
                  }`}
                >
                  <Icon size={28} />

                  <h3 className="mt-6 font-semibold text-lg">
                    {title}
                  </h3>
                </button>
              )
            )}
          </div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="tel:+917017502703"
              className="bg-white rounded-[32px] p-6 md:p-8 border border-zinc-200 hover:-translate-y-1 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-orange-100 flex items-center justify-center">
                <Phone className="text-orange-500" />
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Call Us
              </h3>

              <p className="mt-2 text-zinc-600">
                Speak directly with our trek
                experts.
              </p>

              <p className="mt-4 font-medium">
                +91 7017502703
              </p>
            </a>

            <a
              href="https://wa.me/917017502703"
              target="_blank"
              rel="noreferrer"
              className="bg-white rounded-[32px] p-6 md:p-8 border border-zinc-200 hover:-translate-y-1 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-green-100 flex items-center justify-center">
                <MessageCircle className="text-green-600" />
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                WhatsApp
              </h3>

              <p className="mt-2 text-zinc-600">
                Get quick answers instantly.
              </p>

              <p className="mt-4 font-medium">
                Chat Now
              </p>
            </a>

            <a
              href="mailto:trek@whatnextonline.com"
              className="bg-white rounded-[32px] p-6 md:p-8 border border-zinc-200 hover:-translate-y-1 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                <Mail className="text-blue-600" />
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Email Us
              </h3>

              <p className="mt-2 text-zinc-600">
                Send your questions anytime.
              </p>

              <p className="mt-4 font-medium">
                trek@whatnextonline.com
              </p>
            </a>
          </div>
        </div>
      </section>
            {/* TRUST STATS */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              ["5000+", "Happy Trekkers"],
              ["50+", "Destinations"],
              ["4.9★", "Average Rating"],
              ["8+", "Years Experience"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="bg-white rounded-[28px] border border-zinc-200 p-6 text-center"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-zinc-900">
                  {number}
                </h3>

                <p className="mt-2 text-sm text-zinc-500">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + EXPERT PANEL */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
            {/* FORM */}
            <div className="bg-white rounded-[32px] md:rounded-[40px] p-6 md:p-10 border border-zinc-200 shadow-sm">
              <p className="uppercase tracking-[0.3em] text-orange-500 text-xs font-semibold">
                Start Your Journey
              </p>

              <h2 className="mt-4 text-3xl md:text-4xl font-serif text-zinc-900">
                Send An Enquiry
              </h2>

              <p className="mt-4 text-zinc-600">
                Tell us about your travel plans and
                we'll help you choose the perfect
                adventure.
              </p>

              <form className="mt-8 space-y-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full h-16 px-5 rounded-2xl border border-zinc-300 focus:outline-none focus:border-orange-500"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full h-16 px-5 rounded-2xl border border-zinc-300 focus:outline-none focus:border-orange-500"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full h-16 px-5 rounded-2xl border border-zinc-300 focus:outline-none focus:border-orange-500"
                />

                <input
                  type="text"
                  value={selectedAdventure}
                  onChange={() => {}}
                  placeholder="Adventure Type"
                  className="w-full h-16 px-5 rounded-2xl border border-zinc-300 bg-orange-50 focus:outline-none"
                />

                <input
                  type="text"
                  placeholder="Preferred Travel Month"
                  className="w-full h-16 px-5 rounded-2xl border border-zinc-300 focus:outline-none focus:border-orange-500"
                />

                <textarea
                  rows="6"
                  placeholder="Tell us about your travel plans..."
                  className="w-full p-5 rounded-2xl border border-zinc-300 focus:outline-none focus:border-orange-500 resize-none"
                />

                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-medium transition-all"
                >
                  Send Enquiry
                </button>
              </form>
            </div>

            {/* EXPERT PANEL */}
            <div className="bg-zinc-900 text-white rounded-[32px] md:rounded-[40px] p-8 md:p-10 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />

              <div className="relative">
                <p className="uppercase tracking-[0.3em] text-xs text-orange-400">
                  Trek Assistance
                </p>

                <h2 className="mt-4 text-4xl md:text-5xl font-serif leading-tight">
                  Talk To
                  <br />
                  Our Experts
                </h2>

                <p className="mt-6 text-zinc-300 leading-relaxed">
                  Whether you're a beginner or an
                  experienced trekker, we'll help
                  you choose the right trek,
                  departure date, fitness level,
                  transport options and gear.
                </p>

                <div className="mt-10 space-y-8">
                  <div className="flex gap-4">
                    <Phone className="text-orange-400 shrink-0" />

                    <div>
                      <p className="text-sm text-zinc-400">
                        Phone
                      </p>

                      <p className="font-medium mt-1">
                        +91 7017502703
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Mail className="text-orange-400 shrink-0" />

                    <div>
                      <p className="text-sm text-zinc-400">
                        Email
                      </p>

                      <p className="font-medium mt-1">
                        trek@whatnextonline.com
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <MapPin className="text-orange-400 shrink-0" />

                    <div>
                      <p className="text-sm text-zinc-400">
                        Support Hours
                      </p>

                      <p className="font-medium mt-1">
                        9:00 AM – 8:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 rounded-3xl bg-white/5 border border-white/10">
                  <p className="text-sm text-zinc-400">
                    Popular Questions
                  </p>

                  <ul className="mt-4 space-y-3 text-zinc-200">
                    <li>
                      • Which trek is best for beginners?
                    </li>

                    <li>
                      • What fitness level is required?
                    </li>

                    <li>
                      • Do you provide transportation?
                    </li>

                    <li>
                      • What gear should I carry?
                    </li>
                  </ul>
                </div>

                <div className="mt-10">
                  <a
                    href="/destinations"
                    className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300"
                  >
                    Explore Our Treks

                    <ChevronRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY TIMELINE */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-5">
          <div className="bg-white rounded-[40px] border border-zinc-200 p-8 md:p-12">
            <div className="text-center">
              <p className="uppercase tracking-[0.3em] text-orange-500 text-xs font-semibold">
                What Happens Next
              </p>

              <h2 className="mt-4 text-3xl md:text-5xl font-serif text-zinc-900">
                Your Journey Starts Here
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-10 mt-14">
              {[
                "Submit Your Enquiry",
                "Talk To Our Experts",
                "Choose Your Departure",
                "Start Your Adventure",
              ].map((step, index) => (
                <div key={step} className="text-center md:text-left">
                  <div className="w-14 h-14 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center font-bold mx-auto md:mx-0">
                    {index + 1}
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-zinc-900">
                    {step}
                  </h3>

                  <p className="mt-2 text-zinc-500 text-sm">
                    {index === 0 &&
                      "Tell us your preferences."}

                    {index === 1 &&
                      "Get personalized recommendations."}

                    {index === 2 &&
                      "Select the perfect departure."}

                    {index === 3 &&
                      "Prepare for an unforgettable trek."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
            {/* FINAL CTA */}
      <section className="pb-28 md:pb-24">
        <div className="max-w-6xl mx-auto px-5">
          <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 p-8 md:p-14 text-white">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

            <div className="relative text-center">
              <p className="uppercase tracking-[0.3em] text-xs text-orange-100">
                Ready For Adventure?
              </p>

              <h2 className="mt-4 text-4xl md:text-6xl font-serif leading-tight">
                The Mountains
                <br />
                Are Calling
              </h2>

              <p className="mt-6 max-w-2xl mx-auto text-orange-100 text-base md:text-lg">
                Discover breathtaking Himalayan
                treks, unforgettable experiences,
                and journeys that stay with you
                forever.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
                <a
                  href="/destinations"
                  className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-medium hover:scale-[1.02] transition-all"
                >
                  Explore Treks
                </a>

                <a
                  href="https://wa.me/917017502703"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-white/30 backdrop-blur-md px-8 py-4 rounded-2xl font-medium hover:bg-white/10 transition-all"
                >
                  Chat On WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE STICKY BAR */}
      <div className="fixed md:hidden bottom-4 left-4 right-4 z-50">
        <div className="bg-white border border-zinc-200 shadow-2xl rounded-2xl p-2 flex gap-2">
          <a
            href="tel:+917017502703"
            className="flex-1 bg-zinc-900 text-white py-4 rounded-xl text-center font-medium"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/917017502703"
            target="_blank"
            rel="noreferrer"
            className="flex-1 bg-orange-500 text-white py-4 rounded-xl text-center font-medium"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}