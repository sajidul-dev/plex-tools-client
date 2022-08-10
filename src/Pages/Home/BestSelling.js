import React from 'react';
import { useNavigate } from 'react-router-dom';
import useTools from '../../hooks/useTools';
import Loading from '../Shared/Loading';

const BestSelling = () => {
    const [tools, isLoading] = useTools()
    const navigate = useNavigate()
    if (isLoading) {
        return <Loading />
    }
    const tool = tools[0]

    const handleNavigate = (id) => {
        navigate(`/purchase/${id}`)
    }
    return (
        <div className=''>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img data-aos="flip-left" src={tool.img} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <p className='mb-auto ml-[-45px] mt-8 bg-orange-500 text-white rounded-lg p-2 text-xl'>-20%</p>
                    <div>
                        <h1 className="text-5xl font-bold">{tool.name}</h1>
                        <p className="py-6">{tool.description}</p>
                        <button onClick={() => handleNavigate(tool._id)} className="btn btn-primary">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSelling;