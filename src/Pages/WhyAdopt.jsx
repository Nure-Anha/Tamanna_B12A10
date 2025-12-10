import React from 'react';

const WhyAdopt = () => {
    return (
        <div className='bg-[#FFF8F0] p-20 '>
            <div className='flex flex-col lg:flex-row lg:space-x-20 items-start'>
            
                <div className='mb-10 lg:mb-0'>
                    <img className='w-full max-w-md rounded-2xl' src="/my_assets/why.jpg" alt="Why Adopt" />
                </div>

               
                <div className='flex-1'>
                    <h3 className='text-5xl font-bold text-black mb-10'>Why Adopt from PawsNest?</h3>

                    <div className='flex flex-col space-y-4'>
                        <div className='flex items-center space-x-3'>
                            <img className='w-6 h-6' src="/my_assets/pets.png" alt="Icon" />
                            <span className='text-gray-500 text-lg'>Save a Life - Every adoption gives a pet a second chance.</span>
                        </div>

                        <div className='flex items-center space-x-3'>
                            <img className='w-6 h-6' src="/public/my_assets/veterinary.png" alt="Icon" />
                            <span className='text-gray-500 text-lg'>Reduce Overpopulation - Adoption helps control stray and abandoned pets.</span>
                        </div>

                        <div className='flex items-center space-x-3'>
                            <img className='w-6 h-6' src="/public/my_assets/sprout.png" alt="Icon" />
                            <span className='text-gray-500 text-lg'>Affordable & Responsible - Often lower cost than buying and includes vet checks.</span>
                        </div>

                        <div className='flex items-center space-x-3'>
                            <img className='w-6 h-6' src="/public/my_assets/home.png" alt="Icon" />
                            <span className='text-gray-500 text-lg'>Unconditional Love - Adopted pets are grateful and loyal companions.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyAdopt;