import React from 'react';
import PropTypes from 'prop-types';
import ReviewItem from '../review-item/review-item.jsx';
import ReviewTypes from '../../types/review.js';


const ReviewList = (props) => {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((review, i) => (
        <ReviewItem
          key={i}
          review={review}
        />
      ))}
    </ul>
  );
};


ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(ReviewTypes).isRequired,
};


export default ReviewList;
