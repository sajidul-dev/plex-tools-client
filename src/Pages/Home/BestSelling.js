import React from 'react';
import useTools from '../../hooks/useTools';
import Loading from '../Shared/Loading';

const BestSelling = () => {
    const [tools, isLoading] = useTools()
    if (isLoading) {
        return <Loading />
    }
    const tool = tools[0]
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={tool.img} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 class="text-5xl font-bold">{tool.name}</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSelling;