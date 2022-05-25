import React from 'react';
import BusinessSummary from '../BusinessSummary.js/BusinessSummary';
import Banner from './Banner';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner />
            <Tools />
            <Reviews />
            <BusinessSummary />
        </div>
    );
};

export default Home;