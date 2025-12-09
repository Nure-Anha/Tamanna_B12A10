import React, { useEffect, useState } from 'react';

const AccessoriesCategory = () => {

    const [accessoriesData , setAccessoriesData] = useState([]) ;
    const [loader , setLoader] = useState(true) ;
                useEffect(()=>{
                    fetch(`http://localhost:3000/fulldata?category=Accessories`)
                    .then(res => res.json())
                    .then(data => {
                        setAccessoriesData(data) ;
                        setLoader(false) ;
                    }) 
                } , [])
                console.log('Only accessoriesData :' , accessoriesData) ;

    if(loader){
         return <div className="flex justify-center items-center h-screen">
                    <span className="loading loading-bars loading-xl"></span>
                </div>
            }
    return (
        <div className='p-10 bg-[#f1f6fa] text-black pb-30'>
            <title>Pets Accessories</title>
            
            <h3 className='text-center font-bold text-5xl mb-15 mt-5 text-black'>All Your Pets Accessories</h3>


            <div className='grid grid-cols-3 gap-10'>
                {
                accessoriesData.map(i => <div key={i?._id} className="card bg-base-100 shadow-2xl p-5">
                    <figure>
                        <img className=' object-cover w-full h-60 rounded-2xl' src={i?.imageURL}  alt="Shoes" />
                    </figure>

                    <div className="card-body">
                        <h2 className="card-title mx-auto text-xl font-bold">{i?.name} </h2>
                        <div className='flex justify-between space-x-10'>
                            <p className='text-gray-400 font-semibold'>Category: {i?.category} </p>
                            <p className='text-gray-400 font-semibold'>Location: {i?.location} </p>
                        </div>
                        <p className='mx-auto font-bold text-orange-600 text-2xl'>{i?.price} BDT </p>
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default AccessoriesCategory;