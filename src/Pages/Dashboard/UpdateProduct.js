import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import useTools from '../../hooks/useTools'
import Loading from '../Shared/Loading';


const UpdateProduct = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorageKey = '02edd5c413d22a736d8b7acfa51c03ac'
    const id = useParams('id')

    const [tools, isLoading, refetch] = useTools()
    if (isLoading) {
        return <Loading />
    }
    const matched = tools.find(singleTool => singleTool._id == id.id)
    // console.log(matched);

    const onSubmit = (data) => {
        const name = data.name
        const price = data.price
        const quantity = data.quantity
        const minimumOrder = data.minimumOrder
        const description = data.description


        const updatedUser = {
            name,
            price,
            quantity,
            minimumOrder,
            description
        }
        console.log(updatedUser);
        // // send to database
        // fetch('https://plex-tool-server.onrender.com/addproduct', {
        //     method: "POST",
        //     headers: {
        //         'content-type': 'application/json',
        //         "authorization": `Bearer ${localStorage.getItem('accessToken')}`
        //     },
        //     body: JSON.stringify(updatedUser)
        // })
        //     .then(res => res.json())
        //     .then(inserted => {
        //         toast.success("Added Product successfully")
        //         reset()
        //     })


    }


    return (
        <div className='flex flex-col justify-center'>
            <div className='w-6/12 mx-auto'>
                <h2 className='text-center text-3xl my-5'>UPDATE PRODUCT</h2>
            </div>
            <section className='grid lg:grid-cols-2 sm:grid-cols-1 mt-8'>
                <div className='w-4/6 mx-auto bg-slate-300 rounded-2xl'>
                    <img className='w-4/6 mx-auto border border-b-gray-50 mt-3' src={matched.img} alt="" />
                    <div className='pl-5 font-semibold'>
                        <h1>Name: {matched.name}</h1>
                        <h1>Price: $ {matched.price}/unit</h1>
                        <h1>Quantity: {matched.quantity} unit</h1>
                        <h1>Minimum Order: {matched.minimumOrder} unit</h1>
                        <h1>Description: {matched.description} unit</h1>
                    </div>
                </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className='w-6/12 mx-auto'>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Tools Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Tools Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Tools name is required"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' &&
                                    <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Tool Price"
                                className="input input-bordered w-full max-w-xs"
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: "Price is required"
                                    }

                                })}
                            />
                            <label className="label">
                                {errors.price?.type === 'required' &&
                                    <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Tool quantity"
                                className="input input-bordered w-full max-w-xs"
                                {...register("quantity", {
                                    required: {
                                        value: true,
                                        message: "Quantity is required"
                                    }

                                })}
                            />
                            <label className="label">
                                {errors.quantity?.type === 'required' &&
                                    <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Minimum Order</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Minimum Order"
                                className="input input-bordered w-full max-w-xs"
                                {...register("minimumOrder", {
                                    required: {
                                        value: true,
                                        message: "LinkedIn is required"
                                    }

                                })}
                            />
                            <label className="label">
                                {errors.minimumOrder?.type === 'required' &&
                                    <span className="label-text-alt text-red-500">{errors.minimumOrder.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Tool Description"
                                className="input input-bordered w-full max-w-xs"
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: "Description is required"
                                    }

                                })}
                            />
                            <label className="label">
                                {errors.description?.type === 'required' &&
                                    <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                            </label>
                        </div>



                        {/* <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input
                                type="file"
                                className="input  w-full max-w-xs"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: "Image is required"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.image?.type === 'required' &&
                                    <span className="label-text-alt text-red-500">{errors.image.message}</span>}

                            </label>
                        </div> */}
                        <input className='btn w-full max-w-xs btn-primary' type="submit" value="UPDATE PRODUCT" />
                    </form>
                </div>
            </section>
        </div>
    );
};

export default UpdateProduct;