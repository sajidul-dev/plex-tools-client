import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const ManageAllOrders = () => {
    const { data: allOrders, isLoading } = useQuery('allorders', () => fetch('http://localhost:5000/allorders', {
        method: 'GET',
        headers: {
            "authorization": `Bearer ${localStorage.getItem('accessToken')}`,
            "content-type": "application/json"
        },
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
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
                                <td>{order.price}</td>
                                <td><button className='btn btn-xs btn-success'>Shifted</button></td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;