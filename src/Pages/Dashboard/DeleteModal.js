import React from 'react';

const DeleteModal = ({ user, setUser, refetch }) => {

    const confirmDelete = () => {

        fetch(`https://plex-tool-server.onrender.com/deleteuser/${user.email}`, {
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
            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="delete-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Are you sure to delete this user?</h3>
                    <p className="py-4">Name: {user.name}</p>
                    <p className="py-4">Name: {user.email}</p>
                    <div className="modal-action">
                        <label for="my-modal" className="btn" onClick={confirmDelete}>Confirm</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;