import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      

      

      <div className="relative">
        <img
          src="https://images.pexels.com/photos/851213/pexels-photo-851213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="About Us Background"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-6xl font-bold hover:text-yellow-600 cursor-pointer">
            ABOUT US
          </h1>
        </div>
        <div className="w-full h-36 bg-white rounded-t-full mt-[-4rem]"></div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-row">
          <div className="w-4/12 ml-56">
            <h2 className="text-4xl font-bold text-yellow-600 mb-2">
              ABOUT NAJM BAREA
            </h2>
            <h3 className="text-xl font-semibold text-black mb-4">
              BEST SECURITY GUARD AGENCY
            </h3>
            <p className="text-gray-700 mb-4">
              Principally in Human Capital Outsourcing, NAJM BAREA Group has
              played a meaningful role in providing gainful employment to the
              local community and expatriates alike for 20 years. NAJM BAREA is
              the best certified security guard company which provide best
              security services to your construction properties, commercial and
              residential properties.
            </p>
            <p className="text-gray-700 mb-4">
              At our best security guard agency, we strive for excellence in all
              aspects of our services, offering tailored solutions that address
              your unique requirements. We take pride in adapting and
              capitalising on emerging prospects in the ever-evolving business
              landscape.
            </p>
            <p className="text-gray-700">
              We offer{" "}
              <a href="#" className="text-blue-600 underline">
                best security guard services
              </a>
              , specializing in{" "}
              <a href="#" className="text-blue-600 underline">
                private security guard services in the UAE
              </a>
              .
            </p>
          </div>
          <div className="w-4/12 h-full mt-16 md:ml-8">
            <img
              src="https://najmbarea.com/wp-content/uploads/2023/07/abt-23.jpg"
              alt="Team"
              className="shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#b7772d] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <img
                src="https://najmbarea.com/wp-content/uploads/2023/08/badge.png"
                alt="Best Practices"
                className="mb-4 w-28 bg-white rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-2">Best Practices</h3>
              <p className="text-center">
                Reliable and trustworthy with the ability to meet deadlines and
                commitments.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://najmbarea.com/wp-content/uploads/2023/08/best-product.png"
                alt="Best Prices"
                className="mb-4 w-28 bg-white rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-center">
                Best quality services at cost-effective prices to improve your
                efficiency and maximise value.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://najmbarea.com/wp-content/uploads/2023/08/flexibility.png"
                alt="Flexible"
                className="mb-4 w-28 bg-white rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-2">Flexible</h3>
              <p className="text-center">
                We adapt and provide tailored solutions to meet your unique
                requirements.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://najmbarea.com/wp-content/uploads/2023/08/handshake.png"
                alt="Partnerships"
                className="mb-4 w-28 bg-white rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-2">Partnerships</h3>
              <p className="text-center">
                We foster lasting connections through top-notch customer service
                and swift resolution.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-white py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Connect With Us</h2>
        <p className="mb-8">
          Najm Barea Group significantly contributes to employment for locals
          and expatriates
        </p>
        <button className="bg-yellow-600 text-white py-2 px-6 hover:bg-yellow-700">
          Get In Touch
        </button>
      </div>

      
      
    </>
  );
};

export default About;
