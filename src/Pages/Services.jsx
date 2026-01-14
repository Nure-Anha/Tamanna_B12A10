import React from "react";
import { FaPaw, FaHeart, FaHome, FaUserShield, FaSearch, FaHandsHelping } from "react-icons/fa";

const Services = () => {
  return (
    <section className="min-h-screen bg-[#f1f6fa] mt-10 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-black mb-4">
          Our Services
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Everything you need for safe, responsible, and loving pet adoption.
        </p>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* Service 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <div className="text-5xl text-sky-500 mb-4 flex justify-center">
              <FaPaw />
            </div>
            <h3 className="text-xl font-semibold mb-2">Pet Adoption</h3>
            <p className="text-gray-600 text-sm">
              Browse verified pets and find your perfect companion safely.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <div className="text-5xl text-green-500 mb-4 flex justify-center">
              <FaUserShield />
            </div>
            <h3 className="text-xl font-semibold mb-2">Verified Shelters</h3>
            <p className="text-gray-600 text-sm">
              We collaborate with trusted shelters to ensure ethical adoption.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <div className="text-5xl text-indigo-500 mb-4 flex justify-center">
              <FaSearch />
            </div>
            <h3 className="text-xl font-semibold mb-2">Pet Listings</h3>
            <p className="text-gray-600 text-sm">
              Easily create, update, and manage pet adoption listings.
            </p>
          </div>

          {/* Service 4 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <div className="text-5xl text-green-700 mb-4 flex justify-center">
              <FaHandsHelping />
            </div>
            <h3 className="text-xl font-semibold mb-2">Adoption Support</h3>
            <p className="text-gray-600 text-sm">
              Get assistance before, during, and after the adoption process.
            </p>
          </div>

          {/* Service 5 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <div className="text-5xl text-yellow-500 mb-4 flex justify-center">
              <FaHome />
            </div>
            <h3 className="text-xl font-semibold mb-2">Safe Homes</h3>
            <p className="text-gray-600 text-sm">
              Helping pets find loving and permanent homes.
            </p>
          </div>

          {/* Service 6 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <div className="text-5xl text-red-500 mb-4 flex justify-center">
              <FaHeart />
            </div>
            <h3 className="text-xl font-semibold mb-2">Care & Love</h3>
            <p className="text-gray-600 text-sm">
              Promoting responsible pet ownership and lifelong care.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;