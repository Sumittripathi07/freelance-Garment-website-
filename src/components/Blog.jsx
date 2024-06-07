import React from "react";
import { Link } from "react-router-dom";

const articles = [
  {
    title:
      "Building a Strong Partnership with Security Companies: Communication and Collaboration",
    image: "https://najmbarea.com/wp-content/uploads/2024/03/blog_2.jpg",
    link: "#",
  },
  {
    title:
      "Outsourcing Security: Pros and Cons for Affordability in Affordable Security Guard Services",
    image: "https://najmbarea.com/wp-content/uploads/2024/03/blog_1.jpg",
    link: "#",
  },
  {
    title:
      "VIP Protection: Ensuring Safety through Private Security Guards in the UAE",
    image:
      "https://najmbarea.com/wp-content/uploads/2024/02/vip-protection.jpg",
    link: "#",
  },

  {
    title:
      "VIP Protection: Ensuring Safety through Private Security Guards in the UAE",
    image: "https://najmbarea.com/wp-content/uploads/2024/02/emergency.jpg",
    link: "#",
  },

  {
    title:
      "VIP Protection: Ensuring Safety through Private Security Guards in the UAE",
    image: "https://najmbarea.com/wp-content/uploads/2023/11/blog-2.jpeg",
    link: "#",
  },

  {
    title:
      "VIP Protection: Ensuring Safety through Private Security Guards in the UAE",
    image:
      "https://najmbarea.com/wp-content/uploads/2023/11/portrait-male-security-guard-with-radio-station-camera-screens-new.jpeg",
    link: "#",
  },
];

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
            Our Blogs
          </h1>
        </div>
        <div className="w-full h-36 bg-white rounded-t-full mt-[-4rem]"></div>
      </div>

      <div className="container mx-auto py-8 px-4">
        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-8/12 ml-60">
          {articles.map((article, index) => (
            <div key={index} className="bg-white shadow-md overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                <a
                  href={article.link}
                  className="inline-block mt-4 bg-yellow-600 text-white py-2 px-4 hover:bg-yellow-700"
                >
                  READ MORE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-900 text-white py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
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

export default Blog;
