import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/images/whatnextlogo (1).png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-10 pt-3">
      <nav className="max-w-7xl mx-auto bg-white/90 backdrop-blur-md border border-neutral-200 rounded-2xl shadow-sm">
        <div className="flex items-center justify-between px-4 sm:px-6 py-3">
          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3 shrink-0"
          >
            <img
              src={logo}
              alt="WhatNext Online logo"
              className="h-10 sm:h-11 w-auto object-contain"
            />

            <div className="hidden sm:block leading-tight">
              <p className="text-sm font-semibold tracking-tight">
                WhatNext Online
              </p>
              <p className="text-[11px] text-neutral-500">
                Himalayan Experiences
              </p>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-700">
            <Link to="/" className="hover:text-black transition">
              Home
            </Link>

            <Link
              to="/destinations"
              className="hover:text-black transition"
            >
              Destinations
            </Link>

            <Link to="/about" className="hover:text-black transition">
              About
            </Link>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 rounded-full bg-black text-white hover:opacity-90 transition"
            >
              Book Now
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden h-10 w-10 flex items-center justify-center rounded-full border border-neutral-300"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-[2px] w-5 bg-black transition ${
                  menuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-5 bg-black transition ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-5 bg-black transition ${
                  menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-80 border-t border-neutral-200" : "max-h-0"
          }`}
        >
          <div className="px-4 pb-4 pt-3 flex flex-col gap-4 text-sm font-medium text-neutral-700">
            <Link
              to="/"
              onClick={closeMenu}
              className="py-2 hover:text-black transition"
            >
              Home
            </Link>

            <Link
              to="/destinations"
              onClick={closeMenu}
              className="py-2 hover:text-black transition"
            >
              Destinations
            </Link>

            <Link
              to="/about"
              onClick={closeMenu}
              className="py-2 hover:text-black transition"
            >
              About
            </Link>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="mt-2 text-center px-5 py-3 rounded-full bg-black text-white"
            >
              Book Now
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}