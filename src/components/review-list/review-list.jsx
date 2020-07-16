import React from 'react';
import PropTypes from 'prop-types';
import ReviewItem from '../review-item/review-item.jsx';


const ReviewList = (props) => {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewItem/>
      ))}
    </ul>
  );
};


ReviewList.propTypes = {

};


export default ReviewList;
