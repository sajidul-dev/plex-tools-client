import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const ManageAllOrders = () => {
    const { data: allOrders, isLoading, refetch } = useQuery('allorders', () => fetch('https://hidden-ravine-83246.herokuapp.com/allorders', {
        method: 'GET',
        headers: {
            "authorization": `Bearer ${localStorage.getItem('accessToken')}`,
            "content-type": "application/json"
        },
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }

    const handleShift = (id) => {
        const url = `https://hidden-ravine-83246.herokuapp.com/shifted/${id}`
        fetch(url, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                "authorization": `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                toast.success("Product shifted")
                refetch()
            })
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Tools</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrders.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.email}</td>
                                <td>{order.toolName}</td>
                                <td>{order.price}/{order.paid === true && <small className='text-success'>Paid</small>}</td>
                                {(order.paid === true && !order.shifted) && <td><button onClick={() => handleShift(order._id)} className='btn btn-xs btn-success'>Ready to Shift</button></td>}
                                <td>{order.shifted && <p className='text-primary'>Shifted</p>}</td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;