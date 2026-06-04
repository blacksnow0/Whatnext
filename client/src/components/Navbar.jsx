import { Link } from "react-router-dom";
import { useState } from "react";

import logo from "../assets/images/whatnextlogo (1).png";


import { menuCards } from "../data/menuDetails";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-99 px-4 sm:px-6 lg:px-10 pt-3">
      <nav className="max-w-7xl mx-auto bg-white/92 backdrop-blur-md border border-neutral-200/80 rounded-[26px] shadow-sm overflow-hidden">
        {/* TOP BAR */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3">
          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2.5 shrink-0"
          >
            <img
              src={logo}
              alt="WhatNext Online logo"
              className="h-10 sm:h-11 w-auto object-contain"
            />

            <div className="hidden sm:block leading-tight">
              <p className="text-sm font-semibold tracking-tight text-black">
                WhatNext Online
              </p>

              <p className="text-[11px] tracking-wide text-neutral-500">
                Himalayan Experiences
              </p>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10 text-[15px] font-medium text-neutral-700">
            <Link
              to="/"
              className="relative hover:text-black transition after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
            >
              Home
            </Link>

            <Link
              to="/destinations"
              className="relative hover:text-black transition after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
            >
              Destinations
            </Link>

            <Link
              to="/about"
              className="relative hover:text-black transition after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
            >
              About
            </Link>
            <Link
              to="/contact-us"
              className="relative hover:text-black transition after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
            >
              Contact
            </Link>

            {/* CTA */}
            <a
              href="/destinations"
              rel="noreferrer"
              className="group flex items-center gap-2"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-white transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

              <span className="text-[11px] font-semibold tracking-[0.18em] text-black">
                BOOK NOW
              </span>
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden h-11 w-11 flex items-center justify-center rounded-full bg-gray-700"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-[1.5px] w-5 bg-white transition duration-300 ${
                  menuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />

              <span
                className={`block h-[1.5px] w-5 bg-white transition duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`block h-[1.5px] w-5 bg-white transition duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden  overflow-hidden transition-all duration-500 ${
            menuOpen ? "max-h-[900px] border-t border-neutral-200" : "max-h-0"
          }`}
        >
          <div className="px-5 py-5">
            {/* NAV LINKS */}
            <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">
              {[
                {
                  label: "Home",
                  href: "/",
                },

                {
                  label: "Destinations",
                  href: "/destinations",
                },

                {
                  label: "About",
                  href: "/about",
                },
                {
                  label: "Contact-us",
                  href: "/contact-us",
                },
              ].map((item, index, arr) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 shrink-0"
                >
                  <Link
                    to={item.href}
                    onClick={closeMenu}
                    className="relative text-[12px] uppercase tracking-[0.22em] font-semibold text-neutral-800 hover:text-[#f97316] transition-colors duration-300 group"
                  >
                    {item.label}

                    <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-[#f97316] transition-all duration-300 group-hover:w-full" />
                  </Link>

                  {index !== arr.length - 1 && (
                    <span className="text-neutral-300 text-sm">/</span>
                  )}
                </div>
              ))}
            </div>

            {/* FEATURED CARD */}
            <Link
              to={menuCards.featured.href}
              onClick={closeMenu}
              className="block mt-8 group"
            >
              <div className="relative overflow-hidden rounded-[24px] aspect-[1.5/1]">
                <img
                  src={menuCards.featured.image}
                  alt={menuCards.featured.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 p-5">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-white/70">
                    {menuCards.featured.subtitle}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold text-white leading-tight">
                    {menuCards.featured.title}
                  </h3>
                </div>
              </div>
            </Link>

            {/* SECONDARY CARDS */}
            <div className="grid grid-cols-2 gap-3 mt-3">
              {menuCards.secondary.map((card) => (
                <Link
                  key={card.title}
                  to={card.href}
                  onClick={closeMenu}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-[20px] aspect-square">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                    <div className="absolute bottom-0 left-0 p-3">
                      <h3 className="text-sm font-semibold text-white leading-tight">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* CTA */}
            <a
              href="/destinations"
              rel="noreferrer"
              className="mt-6 flex items-center gap-3"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-700 text-white text-lg">
                →
              </span>

              <span className="text-[11px] font-semibold tracking-[0.22em] text-black">
                BOOK NOW
              </span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
