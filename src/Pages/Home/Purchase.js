import { data } from 'autoprefixer';
import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Purchase = () => {
    // const [tool, setTool] = useState([])
    const { id } = useParams()
    const [user] = useAuthState(auth)
    const quantityRef = useRef('')
    const addressRef = useRef('')
    const phoneRef = useRef('')
    const [price, setPrice] = useState(0)
    const [quantityError, setQuantityError] = useState('')

    const { data: tool, isLoading, refetch } = useQuery('tool', () => fetch(`https://plex-tools-server.vercel.app/tool/${id}`, {
        method: "GET",
        headers: {
            "authorization": `Bearer ${localStorage.getItem('accessToken')}`,
            "content-type": "application/json"
        },
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    const placeOrder = (e) => {
        e.preventDefault()
        const inputQuantity = parseInt(quantityRef.current.value)
        const name = user.displayName
        const email = user.email
        const address = addressRef.current.value
        const phone = phoneRef.current.value
        const toolName = tool.name
        const toolId = tool._id

        setPrice(inputQuantity * tool.price)
        const order = {
            name,
            email,
            address,
            phone,
            quantity: inputQuantity,
            toolName,
            toolId,
            price: (tool.price * inputQuantity)
        }
        if (inputQuantity < tool.minimumOrder) {
            setQuantityError('Minimum order reqiure ')

        }
        else if (inputQuantity > tool.quantity) {
            setQuantityError('Maximum order exceeded')

        }
        else {
            setQuantityError('')
            fetch('https://plex-tools-server.vercel.app/order', {
                method: "PUT",
                headers: {
                    "authorization": `Bearer ${localStorage.getItem('accessToken')}`,
                    "content-type": "application/json"
                },
                body: JSON.stringify(order)
            })
                .then(res => {

                    res.json()
                })
                .then(data => {
                    refetch()
                    toast.success("Pursched confirm")
                })

        }
        e.target.reset()
    }

    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 mt-12'>

            <div className="card lg:card-side bg-base-100 w-4/5 mx-auto">
                <figure><img src={tool.img} alt="Album" className='mb-auto' /></figure>
                <div className="mx-8">
                    <h2 className="text-xl text-bold text-primary my-3">Product Name: {tool.name}</h2>
                    <p className='text-lg'><span className='font-bold'>Description:</span> {tool.description}</p>
                    <p className='font-bold text-lg'>Price: ${tool.price}/Unit</p>
                    <p className='font-bold text-lg'>Quantity: {tool.quantity} Unit</p>
                    <p className='font-bold text-lg'>Minimum Order: {tool.minimumOrder} Unit</p>
                </div>
            </div>
            <form onSubmit={placeOrder} className="form-control w-full max-w-xs mr-auto">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" readOnly value={user.displayName} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">Email</span>

                </label>
                <input type="text" readOnly value={user.email} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">Address</span>
                </label>
                <input ref={addressRef} type="text" placeholder="Your Address" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">Phone Number</span>
                </label>
                <input ref={phoneRef} type="text" placeholder="Your Number" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">Quantity</span>
                </label>
                <input ref={quantityRef} type="number" placeholder={`Minimun order ${tool.minimumOrder}`} className="input input-bordered w-full max-w-xs " />
                {
                    quantityError ? <p>{quantityError}</p> : <p>{`Subtotal: ${price}`}</p>
                }
                {/* <p className='text-red-500'>{quantityError ? `${quantityError}` : <p></p>}</p> */}
                <input type="submit" placeholder='' value='Place Order' className="input input-bordered w-full max-w-xs mt-5 btn btn-primary" />
            </form>
        </div>
    );
};

export default Purchase;