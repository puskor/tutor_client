import Carousel from '@/components/homepage/Carousel';
import Review from '@/components/homepage/Review';
import TutorHome from '@/components/homepage/TutorHome';
import WhyChooseUs from '@/components/homepage/WhyChooseUs';
import React from 'react';

const MainPage = () => {
    return (
        <div className=''>
            <Carousel/>
            <TutorHome/>
            <WhyChooseUs/>
            <Review/>
        </div>
    );
};

export default MainPage;