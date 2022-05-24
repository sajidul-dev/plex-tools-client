import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { img, name, description, minimumOrder, quantity, _id } = tool
    const navigate = useNavigate()

    const navigateToPurchase = () => {
        navigate(`/purchase/${_id}`)
    }

    return (
        <div class="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={img} alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div class="card-actions justify-end">
                    <button onClick={navigateToPurchase} class="btn btn-primary">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;