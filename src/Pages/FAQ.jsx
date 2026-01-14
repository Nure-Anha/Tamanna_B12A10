const FAQ = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-center items-center">
            <h2 className="text-3xl font-bold text-center mt-5 mb-8 text-black">Frequently Asked Questions</h2>
            <img className="w-7 mb-5" src="/my_assets/faq.png" alt="" />
        </div>

        <div className="space-y-4">
          <div className="collapse collapse-arrow bg-base-100 shadow">
            <input type="checkbox" />
            <div className="collapse-title font-medium">
              Is adoption free?
            </div>
            <div className="collapse-content">
              <p>Yes, all pets are free for adoption.</p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 shadow">
            <input type="checkbox" />
            <div className="collapse-title font-medium">
              Are pets verified?
            </div>
            <div className="collapse-content">
              <p>Yes, every listing goes through a verification process.</p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 shadow">
            <input type="checkbox" />
            <div className="collapse-title font-medium">
              Can I list my own pet?
            </div>
            <div className="collapse-content">
              <p>Yes, registered users can add listings from their dashboard.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;