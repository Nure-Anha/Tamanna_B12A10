import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Pages/Authentication/Auth/AuthContext';
import Theme from '../Pages/Theme';

const Header = () => {

    // handleLogoName
    const navigate = useNavigate() ;
    const handleLogoName = () => {
        navigate("/") ;
    }

    const {signOutGoogle , user} = useContext(AuthContext) ;
    console.log(user) ;

    // handleLogOut 
    const handleLogOut = () => {
        signOutGoogle()
        .then(() => {
        // Sign-out successful.
        }).catch(() => {
        // An error happened.
        });
    }


    // links 
    const links = <>
    <li className='font-bold '><NavLink to={"/"}>Home</NavLink></li>
    <li className='font-bold'><NavLink to={"/petsAndsupplies"}>Pets & Supplies</NavLink></li>
        {
            user && <>  <li className='font-bold'><NavLink to={"/addlisting"}>Add Listing</NavLink></li>
                        <li className='font-bold'><NavLink to={"/mylistings"}>My Listings</NavLink></li>
                        <li className='font-bold'><NavLink to={"/myorders"}>My Orders</NavLink></li>    </>
        }
    </>


   
    const [dark , setDark] = useState(false) ;
    // handleTheme
    const handleTheme = (e) => {
        // setDark(!dark) ;
        // if(setDark) {
        //     document.querySelector('html').setAttribute('data-theme' , 'dark') ;
        // }
        // else{
        //     document.querySelector('html').setAttribute('data-theme' , 'light') ;
        // }
        // setDark(d => {
            const theme = e.target.checked ? "dark" : "light" ;
            document.documentElement.setAttribute("data-theme", theme);
            setDark(e.target.checked);
        // })
    }
    console.log("dark" , dark) ;



    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                    <div onClick={handleLogoName} className='flex cursor-pointer'>
                        <img className='mt-3 w-12 h-10 rounded-full' src="/my_assets/petLogo.jpg" alt="" />
                        <a  className="text-3xl lg:text-5xl font-bold bg-linear-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent mt-2">PawsNest</a> 
                    </div>
          </div>

         <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
         </div>
                <div className="navbar-end">

                    {/* Theme */}
                    <label className="mr-20 flex cursor-pointer gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5" />
                            <path
                            d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                        </svg>
                        <input onClick={handleTheme} type="checkbox" checked={dark} className="toggle theme-controller" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </label>
                    {/* <div>
                        <Link className="mr-2.5 btn border-blue-500 hover:bg-blue-500 hover:text-white" to={'/login'}>Login</Link>
                        <Link className="btn border-violet-500 hover:bg-violet-500 hover:text-white" to={'/register'}>Register</Link>
                    </div> */}
                    {
                        user ? <div className='flex space-x-2.5 tooltip tooltip-left' data-tip={user.displayName} >
                        <img className='w-10 h-10 rounded-full' src={user.photoURL} alt="" />
                        <button onChange={handleLogOut} className="mr-2.5 btn border-blue-500 hover:bg-blue-500 hover:text-white">Logout</button>
                        </div> :  <div>
                        <Link className="mr-2.5 btn border-blue-500 hover:bg-blue-500 hover:text-white" to={'/login'}>Login</Link>
                        <Link className="btn border-violet-500 hover:bg-violet-500 hover:text-white" to={'/register'}>Register</Link>
                        </div>
                    }
                    
                </div>
        </div>
    );
};

export default Header;