import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BiSolidFoodMenu } from "react-icons/bi";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-blue-900  p-4 fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white  text-3xl font-semibold">
          <BiSolidFoodMenu />
        </div>
        <h2 className="text-white  text-2xl font-semibold">
          Recipe Finder Application
        </h2>
        <div className="hidden md:flex space-x-4">
          <Link
            to="/"
            className={`${
              location.pathname === "/" ? "text-white" : "text-gray-300"
            } hover:text-white`}
          >
            Home
          </Link>
          <Link
            to="/favourite"
            className={`${
              location.pathname === "/favourite"
                ? "text-white"
                : "text-gray-300"
            } hover:text-white`}
          >
            Favourite
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center py-8">
            <Link
              to="/"
              className={`${
                location.pathname === "/" ? "text-gray-300" : "text-white"
              } hover:text-gray-300`}
            >
              Home
            </Link>
            <Link
              to="/favourite"
              className={`${
                location.pathname === "/favourite"
                  ? "text-gray-300"
                  : "text-white"
              } hover:text-gray-300`}
            >
              Favourite
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
