import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

 const linkClass = (path) => {
  const base =
    "relative elegant-font transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300";
  const active =
    "text-yellow-600 font-semibold after:w-full";
  const inactive =
    "text-gray-800 hover:text-yellow-600 after:w-0 hover:after:w-full";
  return `${base} ${isActive(path) ? active : inactive}`;
};
  return (
    <header className="sticky top-0 bg-white z-50 shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="NY Ovals Logo" className="h-12 mr-2" />
          <Link
            to="/"
            className="text-3xl text-gradient bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent elegant-font"
          >
            NY Ovals
          </Link>
        </div>

        <nav className="flex space-x-6 text-lg font-serif items-center">
          <Link to="/" className={linkClass("/")}>Home</Link>
          <Link to="/gallery" className={linkClass("/gallery")}>Our Grounds</Link>
          <Link to="/upcomingEvents" className={linkClass("/upcomingEvents")}>Upcoming Events</Link>
          <Link to="/players" className={linkClass("/players")}>Players</Link>
          <div className="relative group">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className={location.pathname.includes("/events") ? "text-yellow-600 elegant-font font-semibold" : "text-gray-800 elegant-font hover:text-yellow-600"}
            >
              Gallery ▼
            </button>
            {showDropdown && (
              <div className="absolute top-8 left-0 bg-white border border-gray-200 rounded shadow-md py-2 z-50 w-48">
                <Link to="/events/beginners" className="block px-4 py-2 hover:bg-yellow-50 text-gray-700 elegant-font" onClick={() => setShowDropdown(false)}>
                  Beginners
                </Link>
                <Link to="/events/tournaments" className="block px-4 py-2 hover:bg-yellow-50 text-gray-700 elegant-font" onClick={() => setShowDropdown(false)}>
                  Tournaments
                </Link>
                <Link to="/events/ovalteam" className="block px-4 py-2 hover:bg-yellow-50 text-gray-700 elegant-font" onClick={() => setShowDropdown(false)}>
                  Meet our team
                </Link>
              </div>
            )}
          </div>

          <Link to="/contact" className={linkClass("/contact")}>Contact</Link>
        </nav>
      </div>

      {location.pathname === "/" && (
        <div
          className="h-[400px] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: "url('/images/nyovals-ariel.jpg')" }}
        >
          <div className="bg-black bg-opacity-50 p-6 rounded text-center text-white">
            <h1 className="text-4xl font-bold">NY Ovals</h1>
            <p className="text-lg mt-2">Cricket in the Heart of the Tri-City Area</p>
          </div>
        </div>
      )}
    </header>
  );
}