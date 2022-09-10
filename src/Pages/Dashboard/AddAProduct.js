import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AddAProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorageKey = '02edd5c413d22a736d8b7acfa51c03ac'

    const onSubmit = (data) => {
        const name = data.name
        const price = data.price
        const quantity = data.quantity
        const minimumOrder = data.minimumOrder
        const description = data.description
        const image = data.image[0]

        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`

        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url
                    const updatedUser = {
                        name,
                        img,
                        price,
                        quantity,
                        minimumOrder,
                        description
                    }
                    // send to database
                    fetch('https://plex-tools-server.vercel.app/addproduct', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                            "authorization": `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(updatedUser)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            toast.success("Added Product successfully")
                            reset()
                        })
                }
            })


    }

    return (
        <div className='flex flex-col justify-center'>
            <div className='w-6/12 mx-auto'>
                <h2 className='text-center text-3xl my-5'>Add A New Product</h2>
            </div>
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



                <div className="form-control w-full max-w-xs">
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
                </div>
                <input className='btn w-full max-w-xs btn-primary' type="submit" value="ADD PRODUCTS" />
            </form>
        </div>
    );
};

export default AddAProduct;