// import React, { useContext } from "react";
// import { NavLink, Outlet, useNavigate } from "react-router";
// import { AuthContext } from "../Pages/Authentication/Auth/AuthContext";
// // import { AuthContext } from "../Auth/AuthContext";

// const DashboardLayout = () => {
//   const { user, signOutGoogle } = useContext(AuthContext);
// //   const navigate = useNavigate();

//  // handleLogOut 
//     const handleLogOut = () => {
//         signOutGoogle()
//         .then(() => {
//         // Sign-out successful.
//         }).catch((err) => {
//         // An error happened.
//             console.log('error logout :', err.message)
//         });
//     }


//   // handleLogoName
//       const navig = useNavigate() ;
//       const handleLogoName = () => {
//           navig("/") ;
//       }

//   return (
//     <div className="min-h-screen flex bg-[#f1f6fa]">
      
//       {/* Sidebar */}
//       <aside className="w-64 bg-indigo-500 text-white p-5 hidden md:block">
//         <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

//         <ul className="space-y-3">
//           <li>
//             <NavLink to="/dashboard" end className="hover:text-green-400">
//               Dashboard Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/dashboard/addlisting" className="hover:text-green-400">
//               Add Listing
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/dashboard/mylistings" className="hover:text-green-400">
//               My Listings
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/dashboard/myorders" className="hover:text-green-400">
//               My Orders
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/dashboard/profile" className="hover:text-green-400">
//               Profile
//             </NavLink>
//           </li>
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
        
//         {/* Top Navbar */}
//         <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
//           <div onClick={handleLogoName} className='flex cursor-pointer'>
//                         <img className='mt-3 w-12 h-10 rounded-full' src="/my_assets/petLogo.jpg" alt="" />
//                         <a  className="text-2xl lg:text-3xl font-bold bg-linear-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent mt-2">PawsNest Dashboard</a> 
//                     </div>

//           <div className="dropdown dropdown-end">
//             <label tabIndex={0} className="btn btn-ghost">
//               <img
//                 src={user?.photoURL || "https://i.ibb.co/2kR8GJH/user.png"}
//                 alt="profile"
//                 className="w-10 h-10 rounded-full"
//               />
//             </label>

//             <ul
//               tabIndex={0}
//               className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
//             >
//               <li>
//                 <NavLink to="/dashboard/profile">Profile</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/dashboard" end>Dashboard Home</NavLink>
//               </li>
//               <li>
//                 <button onClick={handleLogOut} className="text-red-500">
//                   Logout
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </header>

//         {/* Page Content */}
//         <main className="p-6 flex-1">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;



import React, { useContext } from "react";
import { AuthContext } from "../Pages/Authentication/Auth/AuthContext";
import { NavLink, Outlet, useNavigate } from "react-router";

const DashboardLayout = () => {
  const { user, signOutGoogle } = useContext(AuthContext);
  const navigate = useNavigate(); 

  const handleLogOut = () => {
    signOutGoogle().catch(err => console.log(err.message));
  };

  return (
    <div className="drawer lg:drawer-open min-h-screen bg-[#f1f6fa]">
      <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />

      
      <div className="drawer-content flex flex-col">

        
        <div className="navbar bg-white shadow ">
          <label htmlFor="my-drawer-1" className="btn btn-ghost text-black lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                                                        </svg>
                </label>

          <h2
            onClick={() => navigate("/")}
            className="text-xl font-bold bg-linear-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent cursor-pointer ml-2"
          >
            PawsNest Dashboard
          </h2>

         
          <div className="ml-auto dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost">
              <img
                src={user?.photoURL || "https://i.ibb.co/2kR8GJH/user.png"}
                className="w-10 h-10 rounded-full"
              />
            </label>

            <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><NavLink to="/dashboard/profile">Profile</NavLink></li>
              <li><NavLink to="/dashboard" end>Dashboard Home</NavLink></li>
              <li>
                <button onClick={handleLogOut} className="text-red-500">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>

       
        <main className="p-6 flex-1">
          <Outlet />
        </main>
      </div>

      
      <div className="drawer-side">
        <label htmlFor="my-drawer-1" className="drawer-overlay"></label>

        <aside className="w-64 bg-indigo-500 text-white p-6 min-h-full">
          <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

          <ul className="menu space-y-2">
            <li>
              <NavLink to="/dashboard" end className="hover:text-green-300">
                Dashboard Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/addlisting">Add Listing</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/mylistings">My Listings</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/myorders">My Orders</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/profile">Profile</NavLink>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default DashboardLayout;

