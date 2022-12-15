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
        <div className='bg-[url(https://i.ibb.co/v119z4J/scattered-forcefields-1.png)]'>
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