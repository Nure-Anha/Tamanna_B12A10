import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Pages/Authentication/Auth/AuthContext";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);

  const [myListings, setMyListings] = useState([]);
  const [myOrders, setMyOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    const fetchDashboardData = async () => {
      try {
        const listingsRes = await fetch(
          `https://tamanna-b12a10-backend.vercel.app/mylistings?email=${user.email}`
        );
        const ordersRes = await fetch(
          `https://tamanna-b12a10-backend.vercel.app/myorders?email=${user.email}`
        );

        const listingsData = await listingsRes.json();
        const ordersData = await ordersRes.json();

        setMyListings(listingsData);
        setMyOrders(ordersData);
        setLoading(false);
      } catch (error) {
        console.error("Dashboard error:", error);
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [user]);

  
  // Calculate total spent
    const totalSpent = myOrders.reduce((sum, order) => {
    return sum + (order.Price || 0);
    }, 0);


  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }


  const chartData = [
  {
    name: "Listings",
    count: myListings.length
  },
  {
    name: "Orders",
    count: myOrders.length
  }
];


  return (
    <div>
        <div className="p-6 bg-[#f1f6fa] min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-black">Dashboard Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* Total Listings */}
                <div className="bg-white p-6 rounded-xl shadow">
                <p className="text-gray-500 text-sm">Total Listings</p>
                <h2 className="text-3xl font-bold mt-2 text-black">{myListings.length}</h2>
                </div>

                {/* Total Orders */}
                <div className="bg-white p-6 rounded-xl shadow">
                <p className="text-gray-500 text-sm">Total Orders</p>
                <h2 className="text-3xl font-bold mt-2 text-black">{myOrders.length}</h2>
                </div>

                {/* Calculate total spent */}
                <div className="bg-white p-6 rounded-xl shadow">
                    <p className="text-gray-500 text-sm">Total Spent in Orders</p>
                    <h2 className="text-3xl font-bold mt-2 text-black">
                        {totalSpent} BDT
                    </h2>
                </div>


                {/* Account Status */}
                <div className="bg-white p-6 rounded-xl shadow">
                <p className="text-gray-500 text-sm">Account Status</p>
                <h2 className="text-2xl font-semibold mt-2 text-green-600">
                    Active
                </h2>
                </div>

            </div>
        </div>





        <div className="-mt-70 bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-4 text-black">Activity Overview</h2>

            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#3b82f6" radius={[6, 6, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>

    </div>
  );
};

export default DashboardHome;