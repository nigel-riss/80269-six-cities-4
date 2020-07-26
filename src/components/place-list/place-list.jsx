import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';
import OfferTypes from '../../types/offer.js';


class PlaceList extends PureComponent {
  constructor(props) {
    super(props);

    this._handlePlaceCardMouseEnter = this._handlePlaceCardMouseEnter.bind(this);
  }

  render() {
    const {
      offers,
      onCardTitleClick,
      isNearPlaces,
    } = this.props;

    return (
      <div
        className={`${isNearPlaces ?
          `near-places__list` :
          `cities__places-list tabs__content`}
        places__list`}
      >
        {offers.map((offer, i) => (
          <PlaceCard
            offer={offer}
            key={`${i}-${name}`}
            onCardTitleClick={() => {
              onCardTitleClick(offer);
            }}
            onCardMouseEnter={() => {
              this._handlePlaceCardMouseEnter(offer);
            }}
            isNearPlaces={isNearPlaces}
          />
        ))}
      </div>
    );
  }

  _handlePlaceCardMouseEnter(offer) {
    this.setState({
      currentOffer: offer,
    });
  }
}


PlaceList.propTypes = {
  offers: PropTypes.arrayOf(OfferTypes).isRequired,
  onCardTitleClick: PropTypes.func,
  isNearPlaces: PropTypes.bool,
};


export default PlaceList;
