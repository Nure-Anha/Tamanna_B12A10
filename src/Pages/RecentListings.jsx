import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';

const RecentListings = () => {

    const [recent , setRecent] = useState([]) ;
    useEffect(()=> {
        fetch("https://tamanna-b12a10-backend.vercel.app/recent")
        .then(res => res.json()) 
        .then(data => setRecent(data)) 
    } , [])
    console.log("recent Data: ", recent) ;


    // handleSeeDetails
    const navigate = useNavigate() ;
    const handleSeeDetails = (id) => {
        navigate(`/listingdetails/${id}`) ;

    }

            
    return (
        <div className='pl-20 pr-20 pt-10 pb-10'>
           <h3 className='text-center font-bold text-3xl mb-5  text-black'>Recently Listed Items</h3>


            <div className='grid grid-cols-1  lg:grid-cols-4 gap-10'>
                {
                recent.map(i => <motion.div initial={{ scale: 1.5 }} animate={{ scale: 1 , transition: { duration: 1 } }}> <div key={i?._id} className="card bg-base-100 shadow-md p-3">
                    <figure>
                        <img className=' object-cover w-full h-40 rounded-md' src={i?.imageURL}  alt="Shoes" />
                    </figure>

                    <div className="card-body">
                        <h2 className="card-title mx-auto text-center">{i?.name} </h2>
                        <div className='flex justify-between space-x-5'>
                            <p className='text-gray-400 font-semibold '>Category: {i?.category} </p>
                            <p className='text-gray-400 font-semibold '>Location: {i?.location} </p>
                        </div>
                        <p className='mx-auto font-bold text-orange-600 text-lg'>{i?.price} BDT </p>
                    </div>
                    <div className="card-actions justify-center mt-2">
                        <button onClick={() => handleSeeDetails(i?._id)} className="btn bg-sky-500 text-white p-3">See Details</button>
                        </div>
                </div> </motion.div>)
                }
            </div>
        </div>
    );
};

export default RecentListings;