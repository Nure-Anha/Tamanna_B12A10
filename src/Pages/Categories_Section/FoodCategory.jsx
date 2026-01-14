import React, { useEffect, useState } from 'react';

const FoodCategory = () => {

    const [foodData , setFoodData] = useState([]) ;
    const [loader , setLoader] = useState(true) ;
        useEffect(()=>{
            fetch(`https://tamanna-b12a10-backend.vercel.app/fulldata?category=Food`)
            .then(res => res.json())
            .then(data => {
                setFoodData(data) ;
                setLoader(false) ;
            }) 
        } , [])
        console.log('Only fooddata :' , foodData) ;

    if(loader){
         return <div className="flex justify-center items-center h-screen">
                    <span className="loading loading-bars loading-xl"></span>
                </div>
            }
    return (
        <div className='p-20 bg-[#f1f6fa] pb-30'>
            <title>Pets Food</title>
            
            <h3 className='text-center font-bold text-3xl mb-15 mt-5 text-black'>Your Pets Food</h3>


            <div className='grid grid-cols-1  lg:grid-cols-4 gap-5'>
                {
                foodData.map(i => <div key={i?._id} className="card bg-base-100 shadow-2xl p-3">
                    <figure>
                        <img className=' object-cover w-full h-40 rounded-md' src={i?.imageURL}  alt="Shoes" />
                    </figure>

                    <div className="card-body">
                        <h2 className="card-title mx-auto text-center font-bold text-base-content">{i?.name} </h2>
                        <div className='flex justify-between space-x-10'>
                            <p className='text-gray-400 font-semibold'>Category: {i?.category} </p>
                            <p className='text-gray-400 font-semibold'>Location: {i?.location} </p>
                        </div>
                        <p className='mx-auto font-bold text-orange-600 text-lg'>{i?.price} BDT </p>
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default FoodCategory;