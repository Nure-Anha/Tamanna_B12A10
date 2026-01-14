import React, { useContext } from "react";
import { NavLink, Outlet, useNavigate } from "react-router";
import { AuthContext } from "../Pages/Authentication/Auth/AuthContext";
// import { AuthContext } from "../Auth/AuthContext";

const DashboardLayout = () => {
  const { user, signOutGoogle } = useContext(AuthContext);
//   const navigate = useNavigate();

 // handleLogOut 
    const handleLogOut = () => {
        signOutGoogle()
        .then(() => {
        // Sign-out successful.
        }).catch((err) => {
        // An error happened.
            console.log('error logout :', err.message)
        });
    }


  // handleLogoName
      const navig = useNavigate() ;
      const handleLogoName = () => {
          navig("/") ;
      }

  return (
    <div className="min-h-screen flex bg-[#f1f6fa]">
      
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-500 text-white p-5 hidden md:block">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

        <ul className="space-y-3">
          <li>
            <NavLink to="/dashboard" end className="hover:text-green-400">
              Dashboard Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addlisting" className="hover:text-green-400">
              Add Listing
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/mylistings" className="hover:text-green-400">
              My Listings
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myorders" className="hover:text-green-400">
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/profile" className="hover:text-green-400">
              Profile
            </NavLink>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        
        {/* Top Navbar */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <div onClick={handleLogoName} className='flex cursor-pointer'>
                        <img className='mt-3 w-12 h-10 rounded-full' src="/my_assets/petLogo.jpg" alt="" />
                        <a  className="text-2xl lg:text-3xl font-bold bg-linear-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent mt-2">PawsNest Dashboard</a> 
                    </div>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost">
              <img
                src={user?.photoURL || "https://i.ibb.co/2kR8GJH/user.png"}
                alt="profile"
                className="w-10 h-10 rounded-full"
              />
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/dashboard/profile">Profile</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard">Dashboard Home</NavLink>
              </li>
              <li>
                <button onClick={handleLogOut} className="text-red-500">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
