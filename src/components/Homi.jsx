import React, { useState, useEffect } from "react";

const articles = [
  {
    title:
      "At comapny name, our custom manufacturing sevice is tailored to meet the unique needs of every client.",
    image:
      "https://images.pexels.com/photos/12879401/pexels-photo-12879401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#",
  },
  {
    title:
      "Elevate your wardrobe with our premium garment business services. We offer custom tailoring, high-quality fabric.",
    image:
      "https://images.pexels.com/photos/7621039/pexels-photo-7621039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#",
  },
  {
    title:
      "Experience unparalleled craftsmanship and personalized fashion solutions tailored to your unique style.",
    image:
      "https://images.pexels.com/photos/20433641/pexels-photo-20433641/free-photo-of-close-up-of-clothes-hanging-on-clothing-racks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#",
  },
];

const images = [
  "https://images.pexels.com/photos/6153893/pexels-photo-6153893.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/5864245/pexels-photo-5864245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full h-screen bg-cover bg-center">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-full object-cover"
        />
        <div class="absolute inset-0 flex flex-col justify-center items-center text-center text-white w-6/12 mx-auto">
          <h1 className="text-justify text-5xl font-bold">
            Our goal is to provide a one-stop solution for all your clothing
            needs, whether you are a business, company, restaurant, wholesaler,
            retailer, emerging brand, or even an individual.
          </h1>
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
      >
        &#10095;
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Homi = () => {
  return (
    <>
      <div>
        {/* Header */}

        {/* Image Slider */}

        <ImageSlider />
      </div>

      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-700">Our Services</h2>
        </div>
        <div className="container mx-auto py-8 px-4">
          <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-8/12 ml-60">
            {articles.map((article, index) => (
              <div key={index} className="bg-white shadow-md overflow-hidden  rounded-lg">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-justify">
                  <h3 className="text-lg font-semibold mb-2">
                    {article.title}
                  </h3>
                  <a
                    href={article.link}
                    className="inline-block mt-4 bg-gray-700 text-white py-2 px-4 hover:bg-yellow-700 
                  ml-16  rounded-lg"
                  >
                    READ MORE
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-gray-100 py-8">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
          Prestigious Clients We Serve
        </h2>
        <div className="flex flex-wrap justify-center items-center space-x-24">
          <img
            src="https://cdn.prod.website-files.com/65c9a7c623ab16435fce4b7e/663b471786662e91526efd6e_cactus.webp"
            alt="APCC"
            className="w-40 h-36 bg-gray-900  rounded-lg"
          />
          <img
            src="https://cdn.prod.website-files.com/65c9a7c623ab16435fce4b7e/6630f81b684804d1a9afaa56_4Artboard%202%20copy%203.webp"
            alt="Marina Fitness"
            className="w-40 h-36 bg-gray-900  rounded-lg"
          />
          <img
            src="https://cdn.prod.website-files.com/65c9a7c623ab16435fce4b7e/6630f81bcd738895007368ac_3Artboard%202%20copy%202.webp"
            alt="Azizi"
            className="w-40 h-36 bg-gray-900  rounded-lg"
          />
          <img
            src="https://cdn.prod.website-files.com/65c9a7c623ab16435fce4b7e/6630f81e6d6f18662669860d_11Artboard%202%20copy%2010.webp"
            alt="Latinem Securities"
            className="w-40 h-36 bg-gray-900  rounded-lg"
          />
          <img
            src="https://cdn.prod.website-files.com/65c9a7c623ab16435fce4b7e/663b4716b92b5d7cbd475252_anima.webp"
            alt="Lootah"
            className="w-40 h-36 bg-gray-900  rounded-lg"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-row">
          <div className="w-4/12 ml-56">
            <h2 className="text-4xl font-bold text-gray-700 mb-2 ">
              ABOUT [Company Name]
            </h2>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              BEST GARMENT COMPANY
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

      <div className="bg-gray-900 text-white p-8 flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 p-4">
          <button className="border border-white text-white py-2 px-4 rounded-full mb-4">
            Our Mission
          </button>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            REVOLUTIONING FASHION MANUFACTURING THROUGH TECHNOLOGY
          </h1>
          <p className="text-lg mb-6 text-justify">
            Our mission at [Your Company Name] is twofold: to provide affordable
            clothing solutions with the lowest MOQs to everyone, and to promote
            sustainability in the fashion industry. We believe in supporting
            small-scale manufacturers, vendors, and printers who are striving to
            make a living, empowering them to thrive in a competitive market.
          </p>
        </div>
        <div className="md:w-1/2 p-4">
          <img
            src="https://images.pexels.com/photos/2249290/pexels-photo-2249290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Fashion Model"
            className=" rounded-lg"
          />
        </div>
      </div>

      <div className=" py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center bg-gray-100">
            <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-full mb-4 text-2xl">
              WHAT WE OFFER
            </button>
            <p className="text-2xl font-bold text-gray-900 mt-4 text-justify w-10/12 mx-auto">
              At [Your Company Name], we offer end-to-end clothing manufacturing
              services tailored to meet the diverse needs of our clients.
              Whether you need one piece or a thousand, got you
              covered with the lowest Minimum Order Quantities (MOQs) in the
              market. Our dedication to affordability is matched only by our
              insistence on using the best fabrics, offering the finest printing
              and designing options, ensuring that every garment meets the
              highest standards of quality.
            </p>
            <button className="bg-black text-white py-2 px-6 rounded-full mt-8">
              Know More &rarr;
            </button>
          </div>
          <div className="grid grid-rows sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <img
              src="https://images.pexels.com/photos/1409217/pexels-photo-1409217.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Design to Delivery"
              className="w-full h-80  rounded-lg"
            />
            <img
              src="https://images.pexels.com/photos/2737702/pexels-photo-2737702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Inventory Risk"
              className="w-full h-80  rounded-lg"
            />
            <img
              src="https://images.pexels.com/photos/15055154/pexels-photo-15055154/free-photo-of-close-up-of-needles-thread-tape-measure-and-blade-lying-on-blue-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Faster Delivery"
              className="w-full h-80  rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homi;
