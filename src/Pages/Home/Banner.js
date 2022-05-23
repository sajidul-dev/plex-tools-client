import React from 'react';

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-opacity-50">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src="https://wpbingosite.com/wordpress/vitic/wp-content/uploads/revslider/slider-2/slider-img2-2.png" alt='' class="sm:max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-lg font-bold">COMBO DEALS POWER TOOLS</h1>
                    <h1 class="text-7xl font-bold">OFFER 20% OFF</h1>
                    <p class="pt-3 font-bold">Circular Saw Tools Ace</p>
                    <p class="pb-6 font-bold">(Maintenance Kit)</p>
                    <button class="btn btn-primary rounded-full">Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;