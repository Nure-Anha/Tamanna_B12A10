import React from 'react';

const About = () => {
    return (
        <div>
            <div className="min-h-screen pt-24 pb-10 px-4 bg-[#f1f6fa]">
                <div className="ml-15 mr-15 mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold mb-4 text-black">About PawsNest</h1>
                        <p className="text-gray-500 max-w-2xl mx-auto"> A modern pet marketplace and management platform built for pet lovers.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="card bg-base-200 shadow-md">
                            <div className="card-body">
                                <h2 className="card-title text-indigo-500">What is PawsNest?</h2>
                                <p>PawsNest  is a pet marketplace and listing platform where users can browse pets and pet supplies. Authenticated users can add listings, manage their own listings, and view orders securely.</p>
                            </div>
                        </div>

                        <div className="card bg-base-200 shadow-md">
                            <div className="card-body">
                                <h2 className="card-title text-indigo-500">Our Purpose </h2>
                                <p>The purpose of this project is to provide a clean, responsive,and user-friendly platform with proper authentication and protected routes for a secure user experience.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20">
                    <h2 className="text-2xl font-bold text-center text-black mb-6">Key Features</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="card bg-base-200 shadow">
                            <div className="card-body ">
                                <div className='flex space-x-2 mx-auto'>
                                    <img className='w-5' src="/my_assets/pets.png" alt="" />
                                    <p>Browse pets & supplies</p>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-200 shadow">
                            <div className="card-body ">
                                <div className='flex space-x-2 mx-auto'>
                                    <img className='w-5' src="/my_assets/padlock.png" alt="" />
                                    <p>Secure authentication</p>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-200 shadow">
                            <div className="card-body ">
                                <div className='flex space-x-2 mx-auto'>
                                    <img className='w-5' src="/my_assets/add.png" alt="" />
                                    <p>Add & manage listings</p>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-200 shadow">
                            <div className="card-body ">
                                <div className='flex space-x-2 mx-auto'>
                                    <img className='w-5' src="/my_assets/open-box.png" alt="" />
                                    <p>View personal orders</p>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-200 shadow">
                            <div className="card-body ">
                                <div className='flex space-x-2 mx-auto'>
                                    <img className='w-5' src="/my_assets/crescent-moon.png" alt="" />
                                    <p>Light & dark mode</p>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-200 shadow">
                            <div className="card-body ">
                                <div className='flex space-x-2 mx-auto'>
                                    <img className='w-5' src="/my_assets/user-interface.png" alt="" />
                                    <p>Fully responsive design</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    </div>

                    <div className="mt-20 text-center">
                    <h2 className="text-2xl font-bold text-black  mb-4">Technologies Used</h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        
      <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 inset-ring inset-ring-red-600/10">
        React
      </span>
      <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 inset-ring inset-ring-yellow-600/20">
        React Router
      </span>
      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 inset-ring inset-ring-green-600/20">
        Firebase Authentication
      </span>
      <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 inset-ring inset-ring-blue-700/10">
        Node.js
      </span>
      <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 inset-ring inset-ring-indigo-700/10">
        Express.js
      </span>
      <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 inset-ring inset-ring-purple-700/10">
        MongoDB
      </span>
      <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 inset-ring inset-ring-pink-700/10">
        Tailwind CSS
      </span>
      <span className="inline-flex items-center rounded-md bg-sky-50 px-2 py-1 text-xs font-medium text-sky-700 inset-ring inset-ring-pink-700/10">
        DaisyUI
      </span>
    
                        
                    </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;