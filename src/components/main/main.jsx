import React from 'react';
import PropTypes from 'prop-types';
import CityList from '../city-list/city-list.jsx';
import PlaceSorting from '../place-sorting/place-sorting.jsx';
import withOpenedList from '../../hocs/with-opened-list/with-opened-list.js';
import PlaceList from '../place-list/place-list.jsx';
import Map from '../map/map.jsx';
import NoPlaces from '../no-places/no-places.jsx';
import OfferTypes from '../../types/offer.js';
import {getCityList} from '../../utils/common.js';


const PlaceSortingWrapped = withOpenedList(PlaceSorting);


const Main = (props) => {
  const {
    activeCity,
    activeOffers,
    activeSort,
    hoveredItem: hoveredOffer,
    offers,
    onCardTitleClick,
    onCityNameClick,
    onItemMouseEnter: onPlaceCardMouseEnter,
    onSortTypeSelect,
  } = props;

  const cities = getCityList(offers);

  const {
    latitude,
    longitude,
    zoom,
  } = (activeOffers && activeOffers[0]) ? activeOffers[0].city.location : {
    latitude: 0,
    longitude: 0,
    zoom: 12,
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {activeOffers.length === 0 ? (
        <NoPlaces/>
      ) : (
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <CityList
              activeCity={activeCity}
              cities={cities}
              onCityNameClick={onCityNameClick}
            />
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{activeOffers.length} place{activeOffers.length === 1 ? `` : `s`} to stay in {activeCity}</b>
                <PlaceSortingWrapped
                  activeSort={activeSort}
                  onSortTypeSelect={onSortTypeSelect}
                />
                <PlaceList
                  offers={activeSort.func(activeOffers)}
                  onCardTitleClick={onCardTitleClick}
                  onPlaceCardMouseEnter={onPlaceCardMouseEnter}
                />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map
                    // center={[latitude, longitude]}
                    // zoom={zoom}
                    center={[12, 32]}
                    zoom={12}
                    offers={activeOffers}
                    hoveredOffer={hoveredOffer}
                  />
                </section>
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};


Main.propTypes = {
  activeCity: PropTypes.string.isRequired,
  activeOffers: PropTypes.arrayOf(OfferTypes),
  activeSort: PropTypes.shape({
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    func: PropTypes.func.isRequired,
  }).isRequired,
  hoveredItem: OfferTypes,
  offers: PropTypes.arrayOf(OfferTypes).isRequired,
  onCardTitleClick: PropTypes.func.isRequired,
  onCityNameClick: PropTypes.func.isRequired,
  onItemMouseEnter: PropTypes.func.isRequired,
  onSortTypeSelect: PropTypes.func.isRequired,
};


export default Main;
