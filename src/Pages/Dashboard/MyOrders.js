import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyOrders = () => {
    const [user, loading] = useAuthState(auth)
    const [tools, setTools] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:5000/myorder?email=${user?.email}`, {
            method: "GET",
            headers: {
                "authorization": `Bearer ${localStorage.getItem('accessToken')}`,
                "content-type": "application/json"
            },
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth)
                    localStorage.removeItem("accessToken")
                    navigate('/')
                }
                return res.json()
                // res.json()
            })
            .then(data => {
                if (loading) {
                    return <Loading />
                }
                setTools(data)
            })
    }, [user, navigate])
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
                            tools.map((tool, index) =>

                                <tr key={tool._id}>
                                    <th>{index + 1}</th>
                                    <td>{tool.name}</td>
                                    <td>{tool.toolName}</td>
                                    <td>{tool.quantity}</td>
                                    <td>$ {tool.price}</td>
                                    <td>
                                        {(tool.price && !tool.paid) && <Link to={`/dashboard/payment/${tool._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                    </td>
                                    <td>
                                        {(tool.price && tool.paid) && <div>
                                            <p><span className='text-success'>Paid</span></p>
                                            <p><small className='text-success'>TransactionId: {tool.transactionId}</small></p>
                                        </div>}
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;