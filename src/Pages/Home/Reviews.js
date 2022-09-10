import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Review from './Review';


const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () => fetch('https://plex-tools-server.vercel.app/reviews').then(res => res.json()))

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
    const result = reverseResult.slice(0, 6)

    return (
        <div className=''>
            <p className='my-8 text-3xl text-center text-primary'>What out client says-</p>
            <div data-aos="zoom-in" className='grid lg:grid-cols-3 px-12 gap-12'>
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