import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Review from './Review';


const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () => fetch('http://localhost:5000/reviews').then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    function reverseArr(input) {
        let reversed = []
        for (var i = input.length - 1; i >= 0; i--) {
            reversed.push(input[i]);
        }
        return reversed;
    }
    const reverseResult = reverseArr(reviews)
    const result = reverseResult.slice(0, 3)

    return (
        <div>
            <p>Reviews: {reviews.length}</p>
            <div className='grid lg:grid-cols-3'>
                {
                    result.slice(-result.length).map(singleReview => <Review key={singleReview._id}
                        singleReview={singleReview}
                    ></Review>)
                }

            </div>
        </div>
    );
};

export default Reviews;