import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#18181b] text-[#d4d4d8]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        
        {/* BRAND */}
        <div>
          <h3 className="text-3xl font-semibold tracking-tight text-white">
            WhatNext Online
          </h3>

          <p className="mt-5 max-w-sm text-sm leading-7 text-neutral-400">
            Curated Himalayan trekking experiences designed
            for modern explorers seeking unforgettable mountain
            journeys.
          </p>

          <div className="mt-6 flex gap-4 text-white">
            <a
              href="https://instagram.com/whatnextonline"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#ff6b00]"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#ff6b00]"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="mailto:trek@whatnextonline.in"
              className="transition hover:text-[#ff6b00]"
            >
              <FaEnvelope size={18} />
            </a>
          </div>
        </div>

        {/* TREKS */}
        <div>
          <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#ff6b00]">
            Explore
          </h4>

          <ul className="space-y-3 text-sm text-neutral-400">
            <li>
              <a
                href="/#destinations"
                className="transition hover:text-white"
              >
                Popular Treks
              </a>
            </li>

            <li>
              <a
                href="/#gallery"
                className="transition hover:text-white"
              >
                Gallery
              </a>
            </li>

            <li>
              <a
                href="/#testimonials"
                className="transition hover:text-white"
              >
                Testimonials
              </a>
            </li>

            <li>
              <Link
                to="/about"
                className="transition hover:text-white"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* POLICIES */}
        <div>
          <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#ff6b00]">
            Policies
          </h4>

          <ul className="space-y-3 text-sm text-neutral-400">
            <li>
              <Link
                to="/about#cancellation-policy"
                className="transition hover:text-white"
              >
                Cancellation Policy
              </Link>
            </li>

            <li>
              <Link
                to="/contact-us"
                className="transition hover:text-white"
              >
                Contact Us
              </Link>
            </li>

            <li>
              <Link
                to="/about#booking-policy"
                className="transition hover:text-white"
              >
                Booking Policy
              </Link>
            </li>

            <li>
              <Link
                to="/about#privacy-policy"
                className="transition hover:text-white"
              >
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link
                to="/about#safety-guidelines"
                className="transition hover:text-white"
              >
                Safety Guidelines
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#ff6b00]">
            Contact
          </h4>

          <div className="space-y-4 text-sm text-neutral-400">
            <p>
              info@whatnextonline.in
            </p>

            <p>
              +91 7017502703
            </p>

            <p className="leading-7">
              Uttarakhand, India
            </p>

            <a
              href="https://wa.me/917017502703"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-2xl bg-[#ff6b00] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center text-sm text-neutral-500 md:flex-row">
          
          <p>
            © {new Date().getFullYear()} WhatNext Online.
            All rights reserved.
          </p>

          <p>
            Designed for modern Himalayan explorers.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;