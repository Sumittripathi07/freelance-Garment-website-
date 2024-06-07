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
    </>
  );
};

export default Contact;
