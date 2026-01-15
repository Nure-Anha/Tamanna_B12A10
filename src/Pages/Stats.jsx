import { useEffect, useState } from "react";

const Stats = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch("https://tamanna-b12a10-backend.vercel.app/stats")
      .then(res => res.json())
      .then(data => setStats(data));
  }, []);
  console.log(stats);
  

  if (!stats) {
    return <span className="loading loading-dots loading-xl ml-160"></span>;
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
          Our Impact
        </h2>
        <p className="text-gray-600 mb-12">
          Trusted by pet lovers and shelters across the country
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-4xl font-bold text-indigo-600">
              {stats?.totalPets}+
            </h3>
            <p className="text-gray-600 mt-2">Pets Listed</p>
          </div>

          <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-4xl font-bold text-emerald-600">
              {stats?.totalAdoptions}+
            </h3>
            <p className="text-gray-600 mt-2">Pets Adopted</p>
          </div>

          <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-4xl font-bold text-pink-600">
              {stats?.families}+
            </h3>
            <p className="text-gray-600 mt-2">Happy Families</p>
          </div>

          <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-4xl font-bold text-sky-600">
              24/7
            </h3>
            <p className="text-gray-600 mt-2">Support</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;
