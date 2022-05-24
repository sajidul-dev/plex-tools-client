import React from 'react';
import { Link } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { img, name, description, minimumOrder, quantity } = tool
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={img} alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div class="card-actions justify-end">
                    <Link to='/purchase'><button class="btn btn-primary">Purchase</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Tool;