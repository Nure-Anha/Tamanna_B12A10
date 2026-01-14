const News = () => {
  return (
    <section className="py-16 bg-emerald-500 text-white text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">
          Join PawsNest Today
        </h2>
        <p className="mb-6">
          Subscribe to get updates on new pets and adoption tips.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full sm:w-72 text-base-content"
          />
          <button className="btn bg-indigo-500 text-white border-0">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
