import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import OrderRow from './OrderRow';

const MyOrders = () => {
    const [user, loading] = useAuthState(auth)
    const [tools, setTools] = useState([])
    const navigate = useNavigate()


    useEffect(() => {
        fetch(`http://localhost:5000/myorder?email=${user?.email}`, {
            method: "GET",
            headers: {
                "authorization": `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth)
                    localStorage.removeItem("accessToken")
                    navigate('/')
                }
                return res.json()
            })
            .then(data => {
                setTools(data)
            })
    }, [user, navigate, loading])
    return (
        <div>
            <h2>My Orders {tools.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>ORDER BY</th>
                            <th>ITEM</th>
                            <th>Quantity</th>
                            <th>PRICE</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            tools.map((tool, index) => <OrderRow key={tool._id} tool={tool} index={index}></OrderRow>)
                        }




                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrders;