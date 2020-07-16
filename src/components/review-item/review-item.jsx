import React from 'react';
import ReviewTypes from '../../types/review.js';


const ReviewItem = (props) => {
  const {review} = props;

  const {
    comment,
    date,
    rating,
    user,
  } = review;

  const {
    avatarUrl,
    name,
  } = user;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${Math.round(rating) * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>
          {/* {`${commentDate.getM} ${}`} */}
        </time>
      </div>
    </li>
  );
};


ReviewItem.propTypes = {
  review: ReviewTypes.isRequired,
};


export default ReviewItem;
