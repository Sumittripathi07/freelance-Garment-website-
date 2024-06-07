import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <hr />
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
          <div className="flex flex-col mb-6 md:mb-0">
            <h1 className="text-2xl font-bold mb-2">[COMPANY LOGO]</h1>
            <p className="mb-6 text-xl">One-stop-solution for Fashion Manufacturing</p>
            <p className="text-xl"> 
              Reach us at{" "}
              <a href="mailto:hello@zyod.com" className="text-blue-400">
                Company Website Link
              </a>
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.facebook.com"
                className="hover:text-gray-400"
              >
                <i className="fab fa-facebook-f fa-xl"></i>
              </a>
              <a
                href="https://www.instagram.com"
                className="hover:text-gray-400"
              >
                <i className="fab fa-instagram fa-xl"></i>
              </a>
              <a
                href="https://www.linkedin.com"
                className="hover:text-gray-400"
              >
                <i className="fab fa-linkedin-in fa-xl"></i>
              </a>
              <a href="https://www.twitter.com" className="hover:text-gray-400">
              <i class="fa-brands fa-twitter fa-xl"></i>
              </a>
            </div>
          </div>
          <div className="flex flex-col mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold mb-2">Quick Links</h2>
            <Link to="/about" className="text-xl hover:text-yellow-600">
              About
            </Link>
            <Link to="/blogs" className="text-xl hover:text-yellow-600">
              Benefits
            </Link>
            <Link to="/contact" className="text-xl hover:text-yellow-600">
              Contact
            </Link>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center mb-2">
              <i className="fas fa-phone-alt mr-2"></i>
              <span className="text-lg">+91-8448288830</span>
            </div>
            <div className="flex items-center mb-2">
              <i className="fas fa-envelope mr-2"></i>
              <a href="mailto:hello@zyod.com" className="text-blue-400 text-lg">
                dayyan.shaikh973@gmail.com
              </a>
            </div>
            <div className="flex items-center mb-2">
              <i className="fas fa-map-marker-alt mr-2"></i>
              <span className="text-lg">
                Krushna Nagr - 706, Tower C,Unitech Cyberpark, <br />Sector 39, Gurgaon,
                122001
              </span>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <a href="#" className="hover:text-gray-400 text-lg">
            Privacy Policy
          </a>
        </div>
        <div className="mt-4 text-center text-gray-500 text-lg">
          <p>Copyright © 2023-2024 Powered By [COMPANY NAME].</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
