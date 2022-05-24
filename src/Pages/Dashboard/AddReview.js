import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
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
            email: user.email
        }
        fetch('http://localhost:5000/addreview', {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userReview)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div>
            <form onSubmit={handleAddReview}>
                <textarea name='review' class="textarea textarea-bordered" placeholder="Please insert your review"></textarea>
                <p>Your Rating:  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    value={ratings}
                    size={40}
                    activeColor="#ffd700"
                /></p>

                <input type="submit" value='Add Review' class="input input-bordered w-full max-w-xs btn btn-primary" />
            </form>
        </div>
    );
};

export default AddReview;