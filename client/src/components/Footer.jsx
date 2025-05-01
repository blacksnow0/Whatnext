export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-12">
      <div className="text-sm text-gray-600">
        © {new Date().getFullYear()} What Next. All rights reserved.
      </div>
      <div className="mt-2 space-x-4 text-gray-500">
        <a href="/about" className="hover:text-[#88542f]">
          About
        </a>
        <a href="/contact" className="hover:text-[#88542f]">
          Contact
        </a>
        <a href="/privacy" className="hover:text-[#88542f]">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
