import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const [tools, setTools] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:5000/myorder?email=${user?.email}`)
            .then(res => {
                // if (res.status === 401 || res.status === 403) {
                //     signOut(auth)
                //     localStorage.removeItem("accessToken")
                //     navigate('/')
                // }
                // return res.json()
                res.json()
            })
            .then(data => {
                console.log(data);
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
                                    <td>{tool.patientName}</td>
                                    <td>{tool.date}</td>
                                    <td>{tool.slot}</td>
                                    <td>{tool.treatment}</td>
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