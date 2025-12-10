import React from 'react';
import Slider from './Slider';
import CategoriesBtn from '../Pages/Categories_Section/CategoriesBtn';
import RecentListings from '../Pages/RecentListings';
import WhyAdopt from '../Pages/WhyAdopt';
import PetHeroes from '../Pages/PetHeroes';

const Home = () => {
    return (
        <div className='bg-[#f1f6fa]'>

            <title>Home</title>

            <Slider></Slider>
            <CategoriesBtn></CategoriesBtn>
            <RecentListings></RecentListings>
            <WhyAdopt></WhyAdopt>
            <PetHeroes></PetHeroes>

        </div>
    );
};

export default Home;