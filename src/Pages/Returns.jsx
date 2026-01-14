import React from "react";

const Returns = () => {
  return (
    <section className="min-h-screen bg-[#f1f6fa] py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8">

        <h1 className="text-4xl font-bold text-center text-black mb-6">
          Returns & Refund Policy
        </h1>

        <p className="text-gray-600 mb-8 text-center">
          We are committed to transparency and fairness in all adoption-related services.
        </p>

        {/* Section 1 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Adoption Returns</h2>
          <p className="text-gray-600">
            Since pet adoption involves living beings, adopted pets cannot be returned
            once the adoption process is completed, except in exceptional circumstances
            verified by our support team.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Supplies Fees</h2>
          <p className="text-gray-600">
            Supplies fees are generally non-refundable as they cover administrative costs.
          </p>
        </div>

        {/* Section 3 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Refund Eligibility</h2>
          <p className="text-gray-600">
            Refunds may be considered only if  supplies-product request is canceled
            before approval or due to technical or processing errors.
          </p>
        </div>

        {/* Section 4 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Refund Processing Time</h2>
          <p className="text-gray-600">
            Approved refunds will be processed within 7-10 business days
            through the original payment method.
          </p>
        </div>

        {/* Section 5 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Contact Support</h2>
          <p className="text-gray-600">
            If you have questions regarding returns or refunds, please contact
            our support team at <span className="font-medium">nureanha99@gmail.com</span>.
          </p>
        </div>

        <p className="text-sm text-gray-500 mt-8 text-center">
          Last updated: {new Date().getFullYear()}
        </p>

      </div>
    </section>
  );
};

export default Returns;