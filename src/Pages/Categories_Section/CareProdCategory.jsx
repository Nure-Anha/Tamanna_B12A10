import React, { useEffect, useState } from 'react';

const CareProdCategory = () => {

    const [careData , setCareData] = useState([]) ;
    const [loader , setLoader] = useState(true) ;
            useEffect(()=>{
                fetch(`https://tamanna-b12a10-backend.vercel.app/fulldata?category=Care Products`)
                .then(res => res.json())
                .then(data => {
                    setCareData(data) ;
                    setLoader(false) ;
                }) 
            } , [])
            console.log('Only caredata :' , careData) ;

    if(loader){
         return <div className="flex justify-center items-center h-screen">
                    <span className="loading loading-bars loading-xl"></span>
                </div>
    }
    return (
        <div className='p-10 bg-[#f1f6fa] text-black pb-30'>
            <title>Pets Care Products</title>
            
            <h3 className='text-center font-bold text-5xl mb-15 mt-5 text-black'>Your Pets Care Products</h3>


            <div className='grid  grid-cols-1  lg:grid-cols-3 gap-10'>
                {
                careData.map(i => <div key={i?._id} className="card bg-base-100 shadow-2xl p-5">
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

export default CareProdCategory;