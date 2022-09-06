import React from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Tool = ({ tool }) => {
    const { img, name, description, minimumOrder, quantity, _id, price } = tool
    const navigate = useNavigate()

    const navigateToPurchase = () => {
        navigate(`/purchase/${_id}`)
    }

    return (
        <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title text-primary">{name}</h2>
                <p><span className='font-bold'>Price:</span> {price} /unit</p>
                <p><span className='font-bold'>Description:</span> {description.slice(0, 50)}...</p>
                <p><span className='font-bold'>Quantity:</span> {quantity} unit</p>
                <div className="card-actions justify-start">
                    <button onClick={navigateToPurchase} className="btn btn-primary">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;