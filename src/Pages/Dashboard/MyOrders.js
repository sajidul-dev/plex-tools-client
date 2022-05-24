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
        fetch(`http://localhost:5000/booking?user=${user.email}`, {
            method: "GET",
            headers: {
                "authorization": `Bearer ${localStorage.getItem('accessToken')}`,
                "content-type": "application/json"
            }
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
                            tools.map((appointment, index) =>

                                <tr key={appointment._id}>
                                    <th>{index + 1}</th>
                                    <td>{appointment.patientName}</td>
                                    <td>{appointment.date}</td>
                                    <td>{appointment.slot}</td>
                                    <td>{appointment.treatment}</td>
                                    <td>
                                        {(appointment.price && !appointment.paid) && <Link to={`/dashboard/payment/${appointment._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                    </td>
                                    <td>
                                        {(appointment.price && appointment.paid) && <div>
                                            <p><span className='text-success'>Paid</span></p>
                                            <p><small className='text-success'>TransactionId: {appointment.transactionId}</small></p>
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