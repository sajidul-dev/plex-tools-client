import React from 'react';
import toast from 'react-hot-toast';
import useTools from '../../hooks/useTools';
import Loading from '../Shared/Loading';

const ManageProducts = () => {
    const [tools, isLoading, refetch] = useTools()
    if (isLoading) {
        return <Loading />
    }

    const handleDelete = (id) => {
        const confirm = window.confirm("Are you sure?")
        if (confirm) {
            const url = `https://hidden-ravine-83246.herokuapp.com/deletetool/${id}`
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
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
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
                                <td>{tool.quantity}</td>
                                <td><button onClick={() => handleDelete(tool._id)} className='btn btn-xs btn-error'>Delete</button></td>
                            </tr>)
                        }




                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;