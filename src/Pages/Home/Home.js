import React from 'react';
import BusinessSummary from '../BusinessSummary.js/BusinessSummary';
import Footer from '../Footer/Footer';
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
            <Footer />
        </div>
    );
};

export default Home;