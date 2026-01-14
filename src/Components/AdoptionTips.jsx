import React from "react";

const AdoptionTips = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 p-20">
      <h1 className="text-3xl font-bold mb-6 text-center">Adoption Tips</h1>
      <p className="text-gray-700 mb-4">
        Adopting a pet is a big decision! Here are some tips to make it smooth:
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Research the pet's breed and temperament before adoption.</li>
        <li>Make sure your home is ready for a new furry friend.</li>
        <li>Prepare for training and patience, especially in the first weeks.</li>
        <li>Visit shelters or rescues to interact with pets before deciding.</li>
        <li>Consider adoption fees, vaccinations, and long-term care costs.</li>
      </ul>
      <p className="mt-6 text-gray-600">
        Remember, adopting a pet is a lifetime commitment-love and care go a long way!
      </p>
    </div>
  );
};

export default AdoptionTips;
