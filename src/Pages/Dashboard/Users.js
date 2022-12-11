import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteModal from './DeleteModal';
import UserRow from './UserRow';

const Users = () => {
    const [user, setUser] = useState(null)

    const { data: users, isLoading, refetch } = useQuery('alltools', () => fetch('https://plex-tool-server.onrender.com/alluser', {
        method: 'GET',
        headers: {
            "authorization": `Bearer ${localStorage.getItem('accessToken')}`,
        },
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }



    return (
        <div>
            <h2>Hello form users {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

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
                        {
                            users.map((user, index) => <UserRow key={user._id} user={user} index={index} refetch={refetch} setUser={setUser}></UserRow>)
                        }

                    </tbody>
                </table>
            </div>
            {
                user && <DeleteModal
                    setUser={setUser}
                    user={user}
                    refetch={refetch}
                ></DeleteModal>
            }
        </div >
    );
};

export default Users;