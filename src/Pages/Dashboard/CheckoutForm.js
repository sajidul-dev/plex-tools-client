import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../Shared/Loading';

const CheckoutForm = ({ tool }) => {
    const { price, name, email, _id } = tool

    const stripe = useStripe();
    const elements = useElements();

    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState("")
    const [success, setSuccess] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [processing, setProcessing] = useState(false)


    useEffect(() => {
        fetch('https://hidden-ravine-83246.herokuapp.com/create-payment-intent', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })

    }, [price])

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
            setProcessing(true)
        }


        // confirming card payment

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message)
            setSuccess('')
            setProcessing(false)
        }
        else {
            setCardError('')
            setTransactionId(paymentIntent.id)
            setSuccess("Congrats! Your payment is completed")


            // update payment to db
            const payment = {
                toolId: _id,
                transactionId: paymentIntent.id
            }
            fetch(`https://hidden-ravine-83246.herokuapp.com/order/${_id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    "authorization": `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)

            })
                .then(res => res.json())
                .then(data => {
                    setProcessing(false)
                    console.log(data);
                    toast.success("Payment successful")
                })
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
                <button className='btn btn-xs btn-success mt-4' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-red-500'>{cardError}</p>}
            {success && <div className='text-green-600'>
                <p>{success}</p>
                <p>Your transaction Id: <span className='text-orange-500 font-bold'>{transactionId}</span></p>
            </div>}
        </>
    );
};

export default CheckoutForm;