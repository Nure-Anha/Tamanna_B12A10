import React from 'react';
import Slider from './Slider';
import CategoriesBtn from '../Pages/Categories_Section/CategoriesBtn';
import RecentListings from '../Pages/RecentListings';
import WhyAdopt from '../Pages/WhyAdopt';
import PetHeroes from '../Pages/PetHeroes';
import AdoptionProcess from '../Pages/AdoptionProcess';
import Stats from '../Pages/Stats';
import Testimonials from '../Pages/Testimonials';
import FAQ from '../Pages/FAQ';
import News from '../Pages/News';

const Home = () => {
    return (
        <div className='bg-[#f1f6fa]'>

            <title>Home</title>

            <Slider></Slider>
            <CategoriesBtn></CategoriesBtn>
            <RecentListings></RecentListings>
            <AdoptionProcess></AdoptionProcess>
            <WhyAdopt></WhyAdopt>
            <Stats></Stats>
            <Testimonials></Testimonials>
            <PetHeroes></PetHeroes>
            <FAQ></FAQ>
            <News></News>

        </div>
    );
};

export default Home;