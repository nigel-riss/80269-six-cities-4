import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {PlaceTypes} from '../../const.js';


class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);
  }


  render() {
    const {
      isPremium,
      onCardMouseEnter,
      onCardTitleClick,
      photos,
      price,
      rating,
      title,
      type,
    } = this.props;

    const photo = photos[0];
    const ratingWidth = `${Math.round(rating) * 20}%`;

    return (
      <article className="cities__place-card place-card"
        onMouseEnter={onCardMouseEnter}
      >
        {
          isPremium ?
            <div className="place-card__mark">
              <span>Premium</span>
            </div> :
            null
        }

        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={`img/${photo}`} width="260" height="200" alt="Place image" />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;
                {price}
              </b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: ratingWidth}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a
              href="#"
              onClick={onCardTitleClick}
            >
              {title}
            </a>
          </h2>
          <p className="place-card__type">
            {type}
          </p>
        </div>
      </article>
    );
  }
}


PlaceCard.propTypes = {
  isPremium: PropTypes.bool.isRequired,
  onCardMouseEnter: PropTypes.func.isRequired,
  onCardTitleClick: PropTypes.func.isRequired,
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(PlaceTypes)).isRequired,
};

export default PlaceCard;
