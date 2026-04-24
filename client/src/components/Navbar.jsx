import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/images/whatnextlogo (1).png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-10 pt-3">
      <nav className="max-w-7xl mx-auto bg-white/92 backdrop-blur-md border border-neutral-200/80 rounded-[22px] shadow-sm">
        {/* TOP BAR */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-2.5">
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

            {/* CTA */}
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f97316] text-white transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

              <span className="text-[11px] font-semibold tracking-[0.18em] text-black">
                BOOK NOW
              </span>
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden h-10 w-10 flex items-center justify-center rounded-full bg-[#f97316]"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-[1px] w-5 bg-white transition ${
                  menuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-[1px] w-5 bg-white transition ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[1px] w-5 bg-white transition ${
                  menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-96 border-t border-neutral-200" : "max-h-0"
          }`}
        >
          <div className="px-5 py-5 flex flex-col gap-5 text-sm font-medium text-neutral-700">
            <Link
              to="/"
              onClick={closeMenu}
              className="hover:text-black transition"
            >
              Home
            </Link>

            <Link
              to="/destinations"
              onClick={closeMenu}
              className="hover:text-black transition"
            >
              Destinations
            </Link>

            <Link
              to="/about"
              onClick={closeMenu}
              className="hover:text-black transition"
            >
              About
            </Link>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="mt-2 flex items-center gap-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f97316] text-white">
                →
              </span>

              <span className="text-[11px] font-semibold tracking-[0.18em] text-black">
                BOOK NOW
              </span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}