import React from 'react';
import ReactStars from 'react-rating-stars-component';
import './Review.css'

const Review = ({ singleReview }) => {
    const { review, img, rating, name } = singleReview
    return (
        <div className='review-section '>
            <div className=''>
                <img class="mask mask-circle w-1/5" src={img ? img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD116U9ZCk8bEaanCeB5rSCC2uqY5Ka_2_EA&usqp=CAU'} alt='' />
                <div className='ms-3 mt-2'>
                    <h5>{name}</h5>
                    <p>Director at Envato LLC</p>
                </div>
            </div>
            <div className='d-flex justify-item-center align-items-center'>
                <ReactStars
                    count={5}
                    value={rating}
                    size={40}
                    activeColor="#ffd700"
                />

            </div>
            <p>Excellent variety. I would recommend this for anyone who wants to try a perfume without breaking the bank or being stuck with a scent that you cannot stand. You can spray the card and let the scent dry down to get a true scent experience.Well worth the money to try them out. </p>
        </div>
    );
};

export default Review;