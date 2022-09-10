import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useTools from '../../hooks/useTools';
import Loading from '../Shared/Loading';

const ManageProducts = () => {
    const navigate = useNavigate()

    const [tools, isLoading, refetch] = useTools()
    if (isLoading) {
        return <Loading />
    }

    const handleDelete = (id) => {
        const confirm = window.confirm("Are you sure?")
        if (confirm) {
            const url = `https://plex-tools-server.vercel.app/deletetool/${id}`
            fetch(url, {
                method: "DELETE",
                headers: {
                    'content-type': 'application/json',
                    "authorization": `Bearer ${localStorage.getItem('accessToken')}`
                },
            })
                .then(res => res.json())
                .then(data => {
                    refetch()
                    toast.success("Item Deleted Successfully")
                    console.log(data);
                })
        }
    }

    const handleUpdate = (id) => {
        navigate(`/updateProduct/${id}`)

    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price/ <span className='text-xs'>unit</span></th>
                            <th>Quantity</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            tools.map((tool, index) => <tr>
                                <th>{index + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-12">
                                        <img src={tool.img} alt='' />
                                    </div>
                                </div></td>
                                <td>{tool.name}</td>
                                <td>$ {tool.price}</td>
                                <td>{tool.quantity}</td>
                                <td><>
                                    <button onClick={() => handleUpdate(tool._id)} className='btn btn-xs btn-primary mr-3'>Update</button>
                                    <button onClick={() => handleDelete(tool._id)} className='btn btn-xs btn-error'>Delete</button>
                                </></td>
                            </tr>)
                        }




                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;