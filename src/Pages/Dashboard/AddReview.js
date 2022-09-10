import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import ReactStars from 'react-rating-stars-component';
import auth from '../../firebase.init';

const AddReview = () => {
    const [ratings, setRatings] = useState(0)
    const [user] = useAuthState(auth)


    const ratingChanged = (newRating) => {
        setRatings(newRating);
    };
    const handleAddReview = (e) => {
        e.preventDefault()
        const review = e.target.review.value
        const userReview = {
            rating: ratings,
            review,
            email: user.email,
            name: user.displayName
        }
        fetch('https://plex-tools-server.vercel.app/addreview', {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userReview)
        })
            .then(res => res.json())
            .then(data => {
                toast.success("Thanks for review!!")
                console.log(data)
            })
    }

    return (
        <div className='mt-12 ml-8'>
            <form onSubmit={handleAddReview} >
                <textarea name='review' className="textarea textarea-bordered" placeholder="Please insert your review"></textarea>
                <p>Your Rating:  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    value={ratings}
                    size={40}
                    activeColor="#ffd700"
                /></p>

                <input type="submit" value='Add Review' className="input input-bordered w-full max-w-xs btn btn-primary" />
            </form>
        </div>
    );
};

export default AddReview;