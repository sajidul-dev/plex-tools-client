import React, { useEffect } from 'react';
import { useQuery } from 'react-query';

const DeleteModal = ({ user, setUser, refetch }) => {

    const confirmDelete = () => {

        fetch(`http://localhost:5000/deleteuser/${user.email}`, {
            method: "Delete",
            headers: {
                "authorization": `Bearer ${localStorage.getItem('accessToken')}`,
                "content-type": "application/json"
            },
        })
            .then(res => res.json())
            .then(data => {
                setUser(null)
                refetch()
            })

    }



    return (
        <div>
            <input type="checkbox" id="delete-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <label htmlFor="delete-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">Are you sure to delete this user?</h3>
                    <p class="py-4">Name: {user.name}</p>
                    <p class="py-4">Name: {user.email}</p>
                    <div class="modal-action">
                        <label for="my-modal" class="btn" onClick={confirmDelete}>Confirm</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;