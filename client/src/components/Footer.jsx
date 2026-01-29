import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#2a2a2e] text-[#cccbd1] py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Tagline */}
        <div>
          <h3 className="font-ubuntu text-3xl font-bold mb-3 tracking-widest text-orange-200">
            What next!
          </h3>
          <p className="text-sm max-w-xs leading-relaxed opacity-80">
            Discover your next unforgettable adventure with us.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 uppercase tracking-wider text-orange-200">
            Explore
          </h4>
          <ul className="space-y-2 text-sm cursor-pointer">
            <li>
              <a
                href="#overview"
                className="hover:underline hover:text-[#7e395b] transition-colors"
              >
                Overview
              </a>
            </li>
            <li>
              <a
                href="#best-time"
                className="hover:underline hover:text-[#7e395b] transition-colors"
              >
                Best Time
              </a>
            </li>
            <li>
              <a
                href="#itinerary"
                className="hover:underline hover:text-[#7e395b] transition-colors"
              >
                Itinerary
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className="hover:underline hover:text-[#7e395b] transition-colors"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#highlights"
                className="hover:underline hover:text-[#7e395b] transition-colors"
              >
                Highlights
              </a>
            </li>
            <li>
              <a
                href="#inclusions"
                className="hover:underline hover:text-[#7e395b] transition-colors"
              >
                Inclusions
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h4 className="font-semibold mb-4 uppercase tracking-wider text-orange-200">
            Get in Touch
          </h4>
          <p className="text-sm mb-3">Email: info@whatnextonline.in</p>
          <p className="text-sm mb-6">Phone: +91 7017502703</p>
          <div className="flex gap-4 text-orange-200">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="hover:text-[#bb7c9f] transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="hover:text-[#bb7c9f] transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-[#bb7c9f] transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:info@travellera.com"
              aria-label="Email"
              className="hover:text-[#bb7c9f] transition-colors"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h4 className="font-semibold mb-4 uppercase tracking-wider text-orange-200">
            Newsletter
          </h4>
          <p className="text-sm mb-4 max-w-xs opacity-80">
            Stay updated with exclusive offers and travel inspiration.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-grow rounded-full py-2 text-white placeholder-orange-200 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#7e395b] text-[#f4eef1] rounded-full px-4 py-2 font-semibold hover:bg-[#a06a7f] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 border-t border-[#7e395b]/30 pt-6 text-center text-sm opacity-70 text-[#cccbd1]">
        &copy; {new Date().getFullYear()} Travellera. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
