import React from 'react';
import { FaUsers, FaMoneyBillAlt, FaTools } from 'react-icons/fa';
import { MdRateReview } from 'react-icons/md';

const BusinessSummary = () => {
    return (
        <div className='w-4/5 mx-auto my-16'>
            <div class="stats stats-vertical lg:stats-horizontal shadow w-full">
                <div class="stat bg-[#307CA4] text-white">
                    <div class="stat-title flex justify-center text-5xl"><FaUsers /></div>
                    <div class="stat-value  text-center ">1000+ </div>
                    <div class="stat-desc text-center text-2xl ">CUSTOMERS</div>
                </div>
                <div class="stat bg-[#CDF6D7]">
                    <div class="stat-title flex justify-center text-5xl"><FaMoneyBillAlt /></div>
                    <div class="stat-value text-center">120M+ </div>
                    <div class="stat-desc text-center text-2xl ">ANNUAL REVENUE</div>
                </div>
                <div class="stat bg-[#3B2967] text-white">
                    <div class="stat-title flex justify-center text-5xl "><MdRateReview /></div>
                    <div class="stat-value text-center"> 33K+</div>
                    <div class="stat-desc text-center text-2xl">REVIEWS</div>
                </div>
                <div class="stat bg-[#AF815D] text-white">
                    <div class="stat-title flex justify-center text-5xl"><FaTools /></div>
                    <div class="stat-value text-center">50+</div>
                    <div class="stat-desc text-center text-2xl">TOOLS</div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;