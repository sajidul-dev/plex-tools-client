import React from 'react';
import toast from 'react-hot-toast';

const UserRow = ({ user, index, refetch, setUser }) => {
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
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role !== 'admin' && <button onClick={() => makeAdmin(user.email)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                <td><label
                    for="delete-modal"
                    className="btn modal-button  btn-xs btn-error"
                    onClick={() => setUser(user)}
                >Delete</label></td>

            </tr>)
        </>
    );
};

export default UserRow;