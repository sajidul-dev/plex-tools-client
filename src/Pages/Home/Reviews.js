import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Review from './Review';


const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () => fetch('http://localhost:5000/reviews').then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    let reversed = []
    for (let i = reviews.length; i > 0; i--) {
        reversed.push(reviews[i])
    }
    console.log(reversed);
    return (
        <div>
            <p>Reviews: {reviews.length}</p>
            <div className='grid lg:grid-cols-3'>
                {
                    reviews.reverse().map(singleReview => <Review key={singleReview._id}
                        singleReview={singleReview}
                    ></Review>)
                }

            </div>
        </div>
    );
};

export default Reviews;