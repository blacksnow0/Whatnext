import { Link } from "react-router-dom";
import logo from "../assets/images/whatnextlogo (1).png";

export default function Navbar() {
  return (
    <nav className="flex fixed w-full top-0 z-50 justify-between items-center p-4 shadow-md bg-white">
      <Link to="/" className="hover:text-[#88542f]">
        <img src={logo} alt="What Next logo" className="h-10 w-auto" />
      </Link>

      <div className="space-x-4 text-xs tracking-wider font-semibold">
        <Link to="/" className="hover:text-[#88542f]">
          Home
        </Link>
        <Link to="/destinations" className="hover:text-[#88542f]">
          Destinations
        </Link>
        <Link to="/about" className="hover:text-[#88542f]">
          About
        </Link>
      </div>
    </nav>
  );
}
