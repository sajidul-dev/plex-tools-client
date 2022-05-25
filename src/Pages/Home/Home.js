import React from 'react';
import Footer from '../Footer/Footer';
import Banner from './Banner';
import BestSelling from './BestSelling';
import BusinessSummary from './BusinessSummary';
import ItemsSummary from './ItemsSummary';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner />
            <Tools />
            <Reviews />
            <ItemsSummary />
            <BestSelling />
            <BusinessSummary />
            <Footer />
        </div>
    );
};

export default Home;