import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L2Mk9AhkEtg26q41M1mbPjisAIwUnQs18bQG9iXsOs7oKTyxYG75nl5RjP1R5vHcU25XCHjYzpQcXQKnIHLoWXP00qCF6rzp7');

const Payment = () => {
    const { id } = useParams()
    const url = `http://localhost:5000/order/${id}`
    const { data: tool, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: "GET",
        headers: {
            "authorization": `Bearer ${localStorage.getItem('accessToken')}`,
            "content-type": "application/json"
        }
    }).then(res => res.json()))


    if (isLoading) {
        return <Loading />
    }



    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className='text-success font-bold'> Hello, {tool.name}</p>
                    <h2 class="card-title">Pay for: {tool.toolName}</h2>
                    <p>Your Quantity is <span className='text-orange-700'>{tool.quantity}</span></p>
                    <p>Please pay: ${tool.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm tool={tool} />
                    </Elements>
                </div>
            </div>

        </div>
    );
};

export default Payment;