import { Link, NavLink } from "react-router-dom";
import { ArrowRightCircle, Moon } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = (
    <ul className="flex flex-col md:flex-row gap-6 md:gap-8 text-lg font-medium">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-500 font-semibold"
              : "hover:text-indigo-500 transition"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-visas"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-500 font-semibold"
              : "hover:text-indigo-500 transition"
          }
        >
          About Me
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-visa"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-500 font-semibold"
              : "hover:text-indigo-500 transition"
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-added-visas"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-500 font-semibold"
              : "hover:text-indigo-500 transition"
          }
        >
          My Work
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-applications"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-500 font-semibold"
              : "hover:text-indigo-500 transition"
          }
        >
          Testimonials
        </NavLink>
      </li>
    </ul>
  );

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-white via-indigo-50 to-white shadow-md">
      <div className="container mx-auto py-4 px-6 flex items-center justify-between rounded-2xl">
        {/* Brand Section */}
        <Link to="/" className="flex items-center space-x-1">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Parves<span className="text-pink-500">.</span>
          </h1>
        </Link>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-900 focus:outline-none text-2xl"
          >
            {menuOpen ? "\u2715" : "\u2630"}
          </button>
        </div>

        {/* Centered Navigation */}
        {/* Show navLinks directly on desktop */}
        <div className="hidden md:flex bg-white p-4 rounded-full px-7">
          {navLinks}
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-white z-40 shadow-lg p-6 rounded-xl md:hidden`}
        >
          {navLinks}
        </motion.div>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-6">
          {/* <Moon className="w-6 h-6 cursor-pointer hover:text-gray-500" /> */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="flex items-center  text-xl gap-2 border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-100 transition"
          >
            Connect
            <motion.span
              initial={{ rotate: 0 }} // Initial rotation state
              whileHover={{ rotate: -45 }} // Rotate the arrow on hover
              transition={{ type: "spring", stiffness: 300, damping: 10 }} // Smooth spring animation
              className="flex items-center" // Ensure the icon is centered
            >
              <ArrowRightCircle className="size-8" />{" "}
              {/* Increased size of the icon */}
            </motion.span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
