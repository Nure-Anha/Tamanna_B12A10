const Testimonials = () => {
  return (
    <section className="py-30 lg:py-16 bg-[#d8e9f7]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center items-center">
            <h2 className="text-3xl font-bold text-center mt-5 mb-10 text-black">What Our Users Say</h2>
            <img className="w-7 mb-10 ml-2" src="/my_assets/pets.png" alt="" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-600 mb-4">
              “Adopting from PawsNest was the best decision! The process was
              smooth and trustworthy.”
            </p>
            <h4 className="font-semibold text-black">— Sarah Ahmed</h4>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-600 mb-4">
              “Great platform for pet lovers. I found my best friend here 🐶”
            </p>
            <h4 className="font-semibold text-black">— Rahim Khan</h4>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-600 mb-4">
              “Verified listings and fast support. Highly recommended!”
            </p>
            <h4 className="font-semibold text-black">— Nusrat Jahan</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
