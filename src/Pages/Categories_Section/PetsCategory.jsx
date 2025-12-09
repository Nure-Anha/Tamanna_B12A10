import React, {useEffect, useState } from 'react';

const PetsCategory = () => {


    const [petData , setPetData] = useState([]) ;
    useEffect(()=>{
        fetch(`http://localhost:3000/fulldata?category=Pets`)
        .then(res => res.json())
        .then(data => setPetData(data)) 
    } , [])
    console.log('Only Petdata :' , petData) ;



    return (
        <div className='p-10 bg-[#f1f6fa] text-black'>
            <title>Pets (Adoption)</title>
            
            <h3 className='text-center font-bold text-5xl mb-15 mt-5 text-black'>All your Pets for Adoption</h3>


            <div className='grid grid-cols-3 gap-10'>
                {
                petData.map(i => <div key={i?._id} className="card bg-base-100 shadow-2xl p-5">
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

export default PetsCategory;