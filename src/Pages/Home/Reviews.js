import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';


// .review-section {
//     border-radius: 0px;
//     background: #e0e0e0;
//     box-shadow: 17px 17px 34px #bababa,
//         -17px -17px 34px #ffffff;
//     width: 312px;
//     height: 450px;
// }

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () => fetch('http://localhost:5000/reviews').then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <p>Reviews: {reviews.length}</p>
        </div>
    );
};

export default Reviews;