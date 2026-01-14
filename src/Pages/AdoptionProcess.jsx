import { FaSearch, FaHandshake, FaHeart } from "react-icons/fa";

const AdoptionProcess = () => {
  return (
    <section className="pt-10 pl-20 pr-20 pb-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">

       
        <h2 className="text-3xl font-bold mb-4 text-black">
          How Adoption Works
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Adopting a pet is simple and rewarding. Follow these easy steps to
          bring a loving companion into your life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
        
          <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="text-4xl text-indigo-500 mb-4 flex justify-center">
              <FaSearch />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black">Browse Pets</h3>
            <p className="text-gray-600">
              Explore verified pet listings and find your perfect match.
            </p>
          </div>

          
          <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="text-4xl text-emerald-500 mb-4 flex justify-center">
              <FaHandshake />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black">Meet & Verify</h3>
            <p className="text-gray-600">
              Connect with owners or shelters and complete the verification.
            </p>
          </div>

       
          <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="text-4xl text-pink-500 mb-4 flex justify-center">
              <FaHeart />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black">Adopt & Love</h3>
            <p className="text-gray-600">
              Take your new friend home and start a beautiful journey together.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AdoptionProcess;
