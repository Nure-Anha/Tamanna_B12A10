import React from "react";

const ContactUs = () => {
  return (
    <section className="min-h-screen bg-[#f1f6fa] py-16 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-8">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-black mb-4">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-12">
          We’d love to hear from you. Reach out anytime!
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black">
              Get in Touch
            </h2>
            <p className="text-gray-700 mb-6">
              Have questions about adoption, listings, or partnerships? 
              Contact PawsNest and our team will respond as soon as possible.
            </p>

            <ul className="space-y-4 text-gray-700">
              <li>
                <span className="font-medium">Email:</span>{" "}
                nureanha99@gmail.com
              </li>
              <li>
                <span className="font-medium">Phone:</span>{" "}
                +880 1836 349 141
              </li>
              <li>
                <span className="font-medium">Address:</span>{" "}
                Dhaka, Bangladesh
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black">
              Send a Message
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg px-4 py-2 text-black"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-lg px-4 py-2 text-black"
                required
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full border rounded-lg px-4 py-2 text-black"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#106372] text-white py-2 rounded-lg hover:bg-[#0c3f75] transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;