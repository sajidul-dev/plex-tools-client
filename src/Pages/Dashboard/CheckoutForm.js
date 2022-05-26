import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();

    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            setCardError(error.message)
            setSuccess('')
        } else {
            setCardError('')
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-xs btn-success mt-4' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-red-500'>{cardError}</p>}
            {success && <div className='text-green-500'>
                <p>{success}</p>
                {/* <p>Your transaction Id: <span className='text-orange-500 font-bold'>{transactionId}</span></p> */}
            </div>}
        </>
    );
};

export default CheckoutForm;