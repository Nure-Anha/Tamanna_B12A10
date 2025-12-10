import React from 'react';
import { useNavigate } from 'react-router';

const CategoriesBtn = () => {
    
    // handlePetCategories
    const navigate = useNavigate() ;
    const handlePetCategories = () => {
        navigate("/petsCategory")
    }

    // handleFoodCategories
    const navigate2 = useNavigate() ;
    const handleFoodCategories = () => {
        navigate2("/foodcategory")
    }

    // handleAccessoriesCategories
    const navigate3 = useNavigate() ;
    const handleAccessoriesCategories = () => {
        navigate3("/accessoriescategory")
    }

    // handleCareProdCategories
    const navigate4 = useNavigate() ;
    const handleCareProdCategories = () => {
        navigate4("/careprodcategory")
    }



    return (
        <div className='p-8 md:p-16 lg:p-20 pb-10 '>
            <p className='text-center font-bold text-5xl text-black'>Shop By Categories</p>
            <div className='mt-15 flex flex-wrap justify-center items-center gap-10'>
                <div onClick={handlePetCategories}>
                    <button className='btn bg-[#b9dff5] p-20 rounded-2xl border-0'><img className='w-18 bg-transparent' src="/my_assets/pet.png" alt="" /></button>
                    <p className='text-center mt-5 font-semibold text-gray-700'>Pets (Adoption) </p>
                </div>

                <div onClick={handleFoodCategories}>
                    <button className='btn bg-[#FEE6D4] p-20 rounded-2xl border-0'><img className='w-17 bg-transparent' src="/my_assets/pet-food.png" alt="" /></button>
                    <p className='text-center mt-5 font-semibold text-gray-700'>Pet Food </p>
                </div>

                <div onClick={handleAccessoriesCategories}>
                    <button className='btn bg-[#c2f8d7] p-20 rounded-2xl border-0'><img className='w-17 bg-transparent' src="/my_assets/Pet Accessories.png" alt="" /></button>
                    <p className='text-center mt-5 font-semibold text-gray-700'>Pet Accessories</p>
                </div>

                <div onClick={handleCareProdCategories}>
                    <button className='btn bg-[#F3E6FF] p-20 rounded-2xl border-0'><img className='w-17  bg-transparent' src="/my_assets/pills-bottle.png" alt="" /></button>
                    <p className='text-center mt-5 font-semibold text-gray-700'>Pet Care Products  </p>
                </div>
            </div>
        </div>
    );
};

export default CategoriesBtn;