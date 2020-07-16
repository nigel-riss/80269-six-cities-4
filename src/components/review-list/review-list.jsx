import React from 'react';
import PropTypes from 'prop-types';
import ReviewItem from '../review-item/review-item.jsx';


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
  reviews: PropTypes.arrayOf(PropTypes.shape({
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    user: {
      avatarUrl: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isPro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    },
  })).isRequired,
};


export default ReviewList;
