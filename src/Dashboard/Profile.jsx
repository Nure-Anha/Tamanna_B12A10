import React, { useContext, useState } from "react";
import { AuthContext } from "../Pages/Authentication/Auth/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  return (
    <div className="p-6 bg-[#f1f6fa] ">
      <h1 className="text-3xl font-bold mb-6 text-center text-black">My Profile</h1>

      <div className="bg-white rounded-xl shadow w-70 lg:w-120 mx-auto p-8">


        <div className="flex flex-col items-center text-center mb-8">
          <img
            src={photo || ""}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover  mb-4"
          />
          <h2 className="text-2xl font-semibold text-black">{name || "User Name"}</h2>
          <p className="text-gray-500">{user?.email}</p>
        </div>

      
        <form onSubmit={handleUpdate} className="grid grid-cols-1 gap-5">

          <div>
            <label className="label text-gray-500">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label text-gray-500">Photo URL</label>
            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label text-gray-500">Email</label>
            <input
              type="email"
              value={user?.email || ""}
              readOnly
              className="input input-bordered w-full bg-gray-100 text-black"
            />
          </div>

          <button className="btn btn-primary mt-4">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;