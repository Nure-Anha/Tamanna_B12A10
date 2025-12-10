import React from 'react';

const PetHeroes = () => {

    const petHeroes = [
            {
                name: "Miraj Islam",
                role: "Adopter",
                image: "/my_assets/miraj.jpg",
                bio: "Gives love and care to rescued dogs and cats, ensuring they find happy homes."
            },
            {
                name: "Sadia Rahman",
                role: "Pet Caregiver",
                image: "/my_assets/sadia.jpg",
                bio: "Helps foster pets until they are adopted, provides medical care and love."
            },
            {
                name: "Fahim Ahmed",
                role: "Volunteer",
                image: "/my_assets/fahim.jpg",
                bio: "Supports rescue missions and spreads awareness about adoption."
            },
            {
                name: "Nabila Khan",
                role: "Adopter",
                image: "/my_assets/nabila.jpg",
                bio: "Adopted multiple pets and educates others on responsible pet ownership."
            }
    ];


    return (
        <div className='p-20 bg-[#F0F8FF]'>
        <h2 className='text-5xl font-bold text-center mb-12'>Meet Our Pet Heroes</h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>

        {petHeroes.map((i, index) => (
          <div key={index} className='bg-white shadow-2xl p-5 rounded-xl text-center'>
            <img className='w-24 mx-auto rounded-full mb-4 object-cover' src={i.image} alt={i.name} />
            <h3 className='text-xl font-bold dark:text-black'>{i.name}</h3>
            <p className='text-gray-500 mb-2'>{i.role}</p>
            <p className='text-gray-600 text-sm'>{i.bio}</p>
          </div>
        ))}

      </div>
    </div>
    );
};

export default PetHeroes;