import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.jpg";
import SearchBar from "./Searchbar";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarItems = ["internships", "jobs"];

  const naviagte = useNavigate();

  return (
    <nav className="flex items-center justify-between p-3 shadow-md bg-white">
      {/* Left: Logo */}
      <img
      onClick={()=>naviagte("/")}
        src={Logo}
        alt="Logo"
        className="h-6 w-auto sm:h-8 lg:h-10 object-contain cursor-pointer"
      />

      {/* Middle: SearchBar (hidden on very small screens) */}
      <div className="hidden sm:flex flex-1 justify-center px-4">
        <SearchBar />
      </div>

      {/* Right: Links + Hamburger */}
      <div className="flex items-center space-x-4">
        {/* Desktop links */}
        <ul className="hidden md:flex items-center space-x-6">
          {navbarItems.map((item, idx) => (
            <li key={idx}>
              <a
              onClick={()=>naviagte(`/${item}`)}
                className="text-gray-700 cursor-pointer hover:text-blue-600 font-medium transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
          <li>
            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition"
            >
              Login
            </Link>
          </li>
        </ul>

        {/* Hamburger (mobile only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-white shadow-md p-4 md:hidden z-50">
          <ul className="flex flex-col space-y-4">
            {navbarItems.map((item, idx) => (
              <li key={idx}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-700 hover:text-blue-600 font-medium transition"
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/login"
                className="block bg-blue-600 text-center text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
