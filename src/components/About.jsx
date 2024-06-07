import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
            <h2 className="text-4xl font-bold text-gray-700 mb-2">
              ABOUT [Company Name]
            </h2>
            <h3 className="text-xl font-semibold text-black mb-4">
              BEST Garment Company
            </h3>
            <p className="text-gray-700 mb-4 text-justify text-lg">
              Completely bootstrapped and fueled by ambition, [Your Company
              Name] was born out of a desire to provide accessible, high-quality
              clothing solutions to businesses, individuals, and emerging brands
              alike. With a deep-rooted understanding of the industry and a
              commitment to innovation, our founder embarked on a mission to
              disrupt the status quo..
            </p>
            <p className="text-gray-700 mb-4 text-justify text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              repellat repudiandae placeat ratione reiciendis quaerat, eos porro
              temporibus quibusdam consequuntur, voluptatibus nisi dolore hic.
              In earum doloremque enim deserunt delectus, inventore dolores
              optio cum obcaecati, voluptate corporis, provident illo maxime?
            </p>
          </div>
          <div className="w-4/12 h-full mt-20 md:ml-8">
            <img
              src="https://images.pexels.com/photos/8483487/pexels-photo-8483487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Team"
              className="shadow-lg  rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-white py-16 px-4">
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
              <p className="text-center text-lg">
                Your satisfaction is our top priority. We go above and beyond to
                ensure that every interaction with us exceeds your
                expectations..
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://najmbarea.com/wp-content/uploads/2023/08/best-product.png"
                alt="Best Prices"
                className="mb-4 w-28 bg-white rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-center text-lg">
                Whether you need one piece or a thousand, we offer the lowest
                MOQs to make our services accessible to everyone.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://najmbarea.com/wp-content/uploads/2023/08/flexibility.png"
                alt="Flexible"
                className="mb-4 w-28 bg-white rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-2">Flexible</h3>
              <p className="text-center text-lg">
                With a wide range of fabrics and printing options to choose
                from, you have the freedom to bring your vision to life in
                exactly the way you imagined.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://najmbarea.com/wp-content/uploads/2023/08/handshake.png"
                alt="Partnerships"
                className="mb-4 w-28 bg-white rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-2">Partnerships</h3>
              <p className="text-center text-lg">
                We take pride in our meticulous attention to detail and
                commitment to quality craftsmanship, ensuring that every garment
                we produce is of the highest standard.
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="bg-gray-900 text-white py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Connect With Us</h2>
        <p className="mb-8">
          Najm Barea Group significantly contributes to employment for locals
          and expatriates
        </p>
        <Link to="/contact">
        <button className="bg-yellow-600 text-white py-2 px-6 hover:bg-yellow-700  rounded-lg">
          Get In Touch
        </button>
        </Link>
      </div>
    </>
  );
};

export default About;
