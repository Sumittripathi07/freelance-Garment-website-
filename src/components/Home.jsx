import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="font-title">
        {/* Top Bar */}

        {/* Header */}

        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center h-96"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/210661/pexels-photo-210661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative container mx-auto h-full flex items-center justify-center">
            <h2 className="text-white text-6xl font-bold">
              BUSINESS SETUP AND VISA SERVICES
            </h2>
          </div>
        </section>

        {/* Services Section */}
        <section className="container mx-auto py-16 text-center">
          <h3 className="text-3xl font-bold text-yellow-600 mb-4">
            Services Najm Barea Management Offers <br /> For Business Set Up &
            Visa Services
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg text-justify">
            Najm Barea Management offers comprehensive Business setup and visa
            Services in the UAE. Our expertise lies in providing seamless
            solutions for company formation, business registration, license
            renewal, and visa processing. Whether you are establishing a
            Mainland or Free Zone Company, our dedicated team ensures a smooth
            and efficient process, allowing you to focus on your core business
            activities.
          </p>
        </section>

        {/* Floating Contact Icons */}
        <div className="fixed bottom-4 right-4 space-y-4">
          <a
            href="tel:+971585080056"
            className="block bg-green-500 p-3 rounded-full shadow-lg"
          >
            <img src="https://placehold.co/24x24" alt="Phone Icon" />
          </a>
          <a
            href="https://wa.me/971585080056"
            className="block bg-green-500 p-3 rounded-full shadow-lg"
          >
            <img src="https://placehold.co/24x24" alt="WhatsApp Icon" />
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="bg-yellow-700 text-white p-20 w-6/12 h-96">
          <h2 className="text-2xl font-bold mb-4">
            Company Formation and License Services
          </h2>
          <p className="mb-4 text-justify">
            Najm Barea Management specializes in the forming and registering of
            Mainland and Free Zone companies. We assist you in navigating the
            legal and administrative procedures, ensuring compliance with all
            regulations. Our services include company formation, registration,
            and license renewal for Commercial, Professional, and Trade licenses
            with the Department of Economic Development (DED). We streamline the
            whole process, saving you time and effort.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://images.pexels.com/photos/851213/pexels-photo-851213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Company Formation"
            className="w-full h-96 object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img
            src="https://img.freepik.com/free-photo/man-hand-write-notebook_1150-1797.jpg?w=996&t=st=1717243499~exp=1717244099~hmac=566f8e5dc6635d9b54813fac8dd8cbd4b0239d8438f86343f2f76e5c4460f2c4"
            alt="Company Formation"
            className="w-full h-96 object-cover"
          />
        </div>
        <div className="bg-yellow-700 text-white p-20 w-6/12 h-96">
          <h2 className="text-2xl font-bold mb-4">
            Company Formation and License Services
          </h2>
          <p className="mb-4 text-justify">
            A valid tenancy contract is crucial for establishing your business
            presence. Najm Barea Management facilitates the registration of your
            tenancy contract with the Land Department (EJARI), ensuring
            compliance with the required regulations. Our team assists in
            securing the necessary documentation, making the registration
            process efficient and hassle-free.
          </p>
        </div>
      </div>

      <div className="text-center p-16">
        <h2 className="text-3xl font-semibold text-yellow-600 mb-8">
          Why Choose Najm Barea Management
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-justify">
          Najm Barea Management provides extensive assistance across UAE’s
          business registration, company formation, and visa approval. Beyond
          essentials, we guide you through setup and visa procedures, offering
          expert insights on regulations. Dedicated to your success, we ensure a
          seamless, efficient process.
        </p>
      </div>

      <div className="flex flex-col items-center py-10">
        <h2 className="text-3xl font-semibold text-center text-yellow-600 mb-8">
          Other Services
        </h2>
        <div className="flex flex-row gap-8 w-6/12">
          <div className="bg-white  shadow-2xl rounded-lg overflow-hidden">
            <img
              className="w-full h-48 object-cover"
              src="https://najmbarea.com/wp-content/uploads/2023/06/2.jpg"
              alt="Security Guard Services"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Security Guard Services
              </h3>
              <p className="text-gray-600">
                Najm Barea Security recognises the fact that security is of
                paramount importance...
              </p>
            </div>
          </div>
          <div className="bg-white  shadow-2xl rounded-lg overflow-hidden w-10/12">
            <img
              className="w-full h-48 object-cover"
              src="https://najmbarea.com/wp-content/uploads/2023/08/slider1.jpg"
              alt="Technical Services"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Technical Services</h3>
              <p className="text-gray-600">
                A subsidiary of the Najm Barea Group, Najm Barea Technical aims
                to become a leading manpower...
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-10">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold text-yellow-600 mb-6">
          Affiliated With The Following Departments
        </h2>
        <ul className="list-disc space-y-2 ml-96">
          <li>Tasheel (Labour) Services</li>
          <li>Dubai Economic Department</li>
          <li>Notary Services (Dubai Court)</li>
          <li>Emirates ID / Medical Services</li>
          <li>Ejari Services</li>
          <li>Immigration & Labour Works</li>
          <li>Certificate Attestation & Embassy Services</li>
          <li>Payroll Service Assistance (WPS)</li>
          <li>Dubai Chamber & Dubai Custom Services</li>
          <li>Trusted Sponsorship (Local Support)</li>
          <li>Trade License</li>
        </ul>
      </div>

      <div className="bg-gray-900 text-white py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Contact Us Today
        </h2>
        <p className="font-normal mb-8 max-w-3xl mx-auto w-full text-justify">
          Choose Najm Barea Management for Business setup and Visa Services, and
          experience a streamlined and hassle-free journey towards establishing
          your business in the UAE. Our dedicated team is ready to assist you
          with company formation, license renewal, visa processing, and other
          essential services. Contact us today to discuss your requirements and
          take the first step towards a successful business venture in the UAE.
        </p>
        <button className="bg-yellow-600 text-white py-3 px-6 text-lg font-semibold hover:bg-yellow-700 transition duration-300">
          Get in Touch
        </button>
      </div>

      <hr className="bg-yellow-600" />
    </>
  );
};

export default Home;
