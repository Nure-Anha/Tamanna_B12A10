import React from "react";

const TermsPolicy = () => {
  return (
    <section className="min-h-screen bg-[#f1f6fa] mt-10 py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8">
        
        <h1 className="text-4xl font-bold text-center mb-6 text-black">
          Terms & Policies
        </h1>

        <p className="text-gray-600 text-center mb-10">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        {/* Terms of Service */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            1. Terms of Service
          </h2>
          <p className="text-gray-700 leading-relaxed">
            By using PawsNest, you agree to follow all applicable rules and
            regulations. Users must provide accurate information when listing
            or adopting pets. Any misuse of the platform may result in account
            suspension.
          </p>
        </div>

        {/* Adoption Policy */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            2. Adoption Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Adoption requests are subject to verification. PawsNest does not
            guarantee adoption approval. Our goal is to ensure the safety and
            well-being of all pets.
          </p>
        </div>

        {/* Privacy Policy */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            3. Privacy Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We respect your privacy. Personal information such as email and
            contact details are securely stored and never shared with third
            parties without consent.
          </p>
        </div>

        {/* User Responsibility */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            4. User Responsibilities
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Users are responsible for the accuracy of listings and respectful
            communication. Any fraudulent activity will be strictly handled.
          </p>
        </div>

        {/* Contact */}
        <div className="mt-10 border-t pt-6">
          <h2 className="text-2xl font-semibold mb-3">
            5. Contact Information
          </h2>
          <p className="text-gray-700">
            If you have any questions about our terms or policies, please
            contact us at{" "}
            <span className="font-medium text-[#106372]">
              nureanha99@gmail.com
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsPolicy;