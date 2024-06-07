import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/7679454/pexels-photo-7679454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="About Us Background"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-6xl font-bold hover:text-yellow-600 cursor-pointer">
            Benefits
          </h1>
        </div>
        <div className="w-full h-36 bg-white rounded-t-full mt-[-4rem]"></div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-row">
          <div className="w-4/12 ml-56">
            <h2 className="text-4xl font-bold text-gray-700 mb-2">
              For Wholesalers and Retailers
            </h2>
            <h3 className="text-xl font-semibold text-black mb-4">
              BEST Garment Company
            </h3>
            <p className="text-gray-700 mb-4 text-justify text-lg">
              Our commitment to excellence ensures that you receive the highest
              quality garments, crafted with precision and care. We offer an
              extensive range of styles, fabrics, and designs to meet the
              diverse needs of your customers, helping you stay ahead of trends
              and satisfy every demand. We leverage our end-to-end supply chain
              management to offer competitive pricing without compromising on
              quality. This allows you to maximize your profit margins and offer
              your customers exceptional value. With our streamlined logistics
              and dedicated customer service team, you can count on timely
              deliveries. This reliability helps you maintain a consistent
              inventory, reducing the risk of stockouts and keeping your shelves
              filled with the latest products. We understand that every business
              has unique needs. Whether it’s custom labels, specific packaging,
              or exclusive designs, we offer flexible solutions tailored to your
              requirements. This adaptability ensures that you can offer
              personalized products that stand out in the market.
            </p>
          </div>
          <div className="w-5/12 h-full mt-24 md:ml-8">
            <img
              src="https://images.pexels.com/photos/16390580/pexels-photo-16390580/free-photo-of-jeans-on-hangers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Team"
              className="shadow-lg  rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-row">
          <div className="w-4/12 ml-56">
            <h2 className="text-4xl font-bold text-gray-700 mb-2">
              For Emerging Brands
            </h2>
            <h3 className="text-xl font-semibold text-black mb-4">
              BEST Garment Company
            </h3>
            <p className="text-gray-700 mb-4 text-justify text-lg">
              Starting a new brand can be daunting, but we&#39;re here to
              support you every step of the way. Our experts guide you from
              initial design concepts to final production, ensuring your vision
              becomes a reality.
            </p>
            <p className="text-gray-700 mb-4 text-justify text-lg">
              Emerging brands often struggle to access high-quality materials
              and experienced manufacturers. We provide premium fabrics, modern
              production facilities, and skilled craftsmanship, giving your
              brand a competitive edge.
            </p>
            <p className="text-gray-700 mb-4 text-justify text-lg">
              As your brand grows, our scalable solutions accommodate increasing
              production volumes seamlessly, ensuring you meet rising demand
              without compromising quality or delivery times.
            </p>

            <p className="text-gray-700 mb-4 text-justify text-lg">
              Today&#39;s consumers prioritize sustainable practices. We offer
              low minimum order quantities, allowing you to produce in smaller
              batches, effectively manage inventory, and test new designs
              without a significant upfront investment.
            </p>
          </div>
          <div className="w-5/12 h-full mt-24 md:ml-8">
            <img
              src="https://images.pexels.com/photos/16390571/pexels-photo-16390571/free-photo-of-close-up-of-jeans.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Team"
              className="shadow-lg  rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-row">
          <div className="w-4/12 ml-56">
            <h2 className="text-4xl font-bold text-gray-700 mb-2">
              For society
            </h2>
            <h3 className="text-xl font-semibold text-black mb-4">
              BEST Garment Company
            </h3>
            <p className="text-gray-700 mb-4 text-justify text-lg">
              We prioritize eco-friendly practices throughout our supply chain,
              sourcing organic materials and implementing energy-efficient
              manufacturing processes to reduce our environmental footprint and
              promote sustainability in the fashion industry.
            </p>
            <p className="text-gray-700 mb-4 text-justify text-lg">
              Our business model fosters partnerships with local artisans, small
              businesses, and manufacturers, providing fair wages and growth
              opportunities. This preserves traditional craftsmanship, boosts
              local economies, and supports community development.
            </p>

            <p className="text-gray-700 mb-4 text-justify text-lg">
              Committed to ensuring safe and fair working conditions, we adhere
              to strict labor standards, promoting worker well-being and
              contributing to a more equitable society. Investing in research
              and development drives innovation in sustainable fashion. We also
              offer educational programs and resources, fostering continuous
              improvement and awareness about sustainable and ethical practices
              within our community and beyond.
            </p>
          </div>
          <div className="w-5/12 h-full mt-24 md:ml-8">
            <img
              src="https://images.pexels.com/photos/2517866/pexels-photo-2517866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Team"
              className="shadow-lg  rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-white py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
        <p className="mb-8">
          [Company Name] Group significantly contributes to employment for
          locals and expatriates
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

export default Blog;
