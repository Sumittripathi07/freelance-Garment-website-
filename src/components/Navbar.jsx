import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-900 shadow-2xl h-16">
        <div className="container mx-auto flex justify-between items-center p-2">
          <div className="flex items-center space-x-4">
            <img
              className="w-28 ml-20 mt-3"
              src="https://cdn.prod.website-files.com/65c9a7c623ab16435fce4b7e/65c9cff1b980349c04253d27_logo.svg"
              alt="Company Logo"
            />
          </div>

          <nav className="flex space-x-12 mr-28 text-xl mt-2">
            <Link
              to="/"
              className="text-gray-700 hover:text-yellow-600 text-xl"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-yellow-600 text-xl"
            >
              About
            </Link>

            <div className="dropdown hover:">
              <button className="text-gray-900">Services</button>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>

            <Link
              to="/blogs"
              className="text-gray-700 hover:text-yellow-600 text-xl"
            >
              Benefits
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-yellow-600 text-xl"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
