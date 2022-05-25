import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const Users = () => {


    const { data: users, isLoading, refetch } = useQuery('alltools', () => fetch('http://localhost:5000/alluser', {
        method: 'GET',
        headers: {
            "authorization": `Bearer ${localStorage.getItem('accessToken')}`,
        },
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }

    const makeAdmin = (email) => {
        fetch(`https://mighty-island-89854.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            if (res.status === 403) {
                toast.error('Failed to make an admin')
            }
            return res.json()
        })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success(`Successfully made an admin`)
                }
            })
    }

    return (
        <div>
            <h2>Hello form users {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role !== 'admin' && <button onClick={() => makeAdmin(user.email)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                            <td><button className='btn btn-xs btn-error'>Delete</button></td>
                        </tr>)}


                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default Users;