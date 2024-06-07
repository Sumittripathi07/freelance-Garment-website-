import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      

    

      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="lg:w-1/2 w-full">
          <img
            src="https://zyod-bucket.s3.ap-south-1.amazonaws.com/1705905609352_5969_Rectangle%201.png"
            alt="Fabric and plant"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="lg:w-1/2 w-full flex items-center justify-center bg-gray-100 p-8">
          <div className="max-w-md w-full">
            <div className="text-center mb-8">
              <img
                src="https://zyod-bucket.s3.ap-south-1.amazonaws.com/1687242230482_3658_zyodLogo.png"
                alt="Logo"
                className="mx-auto mb-4 w-40"
              />
              <h2 className="text-2xl font-semibold">
                Sign up to grab the latest trends
              </h2>
              <p className="text-gray-600">
                Welcome to the personalised shopping experiences with ZYOD.
              </p>
            </div>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="brandName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Enter your Brand Name
                </label>
                <input
                  type="text"
                  id="brandName"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your brand name"
                />
              </div>
              <div>
                <label
                  htmlFor="mobileNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Enter Mobile Number
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    +91
                  </span>
                  <input
                    type="text"
                    id="mobileNumber"
                    className="flex-1 min-w-0 block w-full px-3 py-2 border border-gray-300 rounded-none rounded-r-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter Mobile Number"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Continue
                </button>
              </div>
            </form>
            <div className="text-center mt-6">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Sign In
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-gray-200 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
            <div className="ml-40">
              <img
                src="https://najmbarea.com/wp-content/uploads/2023/08/Najm-Barea-Logo-size-1-vertical.png"
                className="mb-4 w-60"
              />
            </div>
            <div className="flex flex-row mr-56">
              <div className="mb-8 md:mb-0 md:mr-16 gap-10">
                <h3 className="text-lg font-semibold text-yellow-500 mb-2">
                  Dubai Office
                </h3>
                <p className="mb-2">
                  <span className="inline-block mr-2">
                    <i class="fa-solid fa-location-dot"></i>
                  </span>
                  Al Fahad Plaza, Office No. 52, <br /> 6th Floor Al Rigga,{" "}
                  <br />
                  Deira Dubai, UAE
                </p>
                <p className="mb-2">
                  <span className="inline-block mr-2">
                    <i class="fa-solid fa-phone"></i>
                  </span>
                  +971 58 5080056 <br /> +971 4 3261855
                </p>
                <p>
                  <span className="inline-block mr-2">
                    <i class="fa-solid fa-envelope"></i>
                  </span>
                  info@najmbarea.com
                </p>
                <div className="flex mt-4 space-x-4">
                  <a href="https://www.instagram.com/" aria-label="Instagram">
                    <i class="fa-brands fa-instagram fa-2xl"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100006539163202"
                    aria-label="Facebook"
                  >
                    <i class="fa-brands fa-square-facebook fa-2xl"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dayyan-shaikh/"
                    aria-label="LinkedIn"
                  >
                    <i class="fa-brands fa-linkedin fa-2xl"></i>
                  </a>
                  <a href="https://x.com/home?lang=en" aria-label="Twitter">
                    <i class="fa-brands fa-x-twitter fa-2xl"></i>
                  </a>
                </div>
              </div>
              <div className="ml-20">
                <h3 className="text-lg font-semibold text-yellow-500 mb-2">
                  India Office
                </h3>
                <p className="mb-2">
                  <span className="inline-block mr-2">
                    <i class="fa-solid fa-location-dot"></i>
                  </span>
                  Devidayal Compound, <br />
                  Reay Road East, <br />
                  Mumbai 4000010
                </p>
                <p className="mb-2">
                  <span className="inline-block mr-2">
                    <i class="fa-solid fa-phone"></i>
                  </span>
                  +91 82914 08981 <br /> +91 7820932970
                </p>
                <p>
                  <span className="inline-block mr-2">
                    <i class="fa-solid fa-envelope"></i>
                  </span>
                  info@brightstarconstructions.com
                </p>
                <p>
                  <span className="inline-block mr-2">
                    <i class="fa-solid fa-link"></i>
                  </span>
                  www.brightstarconstructions.com
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex space-x-4 ml-10">
                <a href="#" className="hover:underline">
                  Security Guard Services
                </a>
                <a href="#" className="hover:underline">
                  Technical Services
                </a>
                <a href="#" className="hover:underline">
                  Business Setup and Visa Services
                </a>
                <a href="#" className="hover:underline">
                  Career
                </a>
              </div>
              <p className="text-sm mr-16">
                &copy; Copyright 2023 Najm Barea Group. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
