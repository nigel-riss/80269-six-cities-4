import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import CityList from '../city-list/city-list.jsx';
import PlaceSorting from '../place-sorting/place-sorting.jsx';
import PlaceList from '../place-list/place-list.jsx';
import Map from '../map/map.jsx';
import NoPlaces from '../no-places/no-places.jsx';
import OfferTypes from '../../types/offer.js';
import {getCityList} from '../../utils/common.js';
import Sorting from '../../utils/sort.js';


const SORT_POPULAR_INDEX = 0;


class Main extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeSort: Sorting[SORT_POPULAR_INDEX],
    };
  }

  render() {
    const {
      activeCity,
      activeOffers,
      offers,
      onCardTitleClick,
      onCityNameClick,
    } = this.props;

    const cities = getCityList(offers);

    const {
      latitude,
      longitude,
      zoom,
    } = activeOffers[0].city.location;

    const {
      activeSort,
    } = this.state;

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
            {activeOffers.length === 0 ? (
              <NoPlaces
                activeCity={activeCity}
              />
            ) : (
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{activeOffers.length} place{activeOffers.length === 1 ? `` : `s`} to stay in {activeCity}</b>
                  <PlaceSorting
                    activeSort={activeSort}
                    onSortTypeSelect={(sort) => {
                      this.setState({
                        activeSort: sort,
                      });
                    }}
                  />
                  <PlaceList
                    offers={activeOffers}
                    onCardTitleClick={onCardTitleClick}
                  />
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <Map
                      center={[latitude, longitude]}
                      zoom={zoom}
                      offers={activeOffers}
                      // currentOffer={}
                    />
                  </section>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    );
  }
}


Main.propTypes = {
  activeCity: PropTypes.string.isRequired,
  activeOffers: PropTypes.arrayOf(OfferTypes).isRequired,
  offers: PropTypes.arrayOf(OfferTypes).isRequired,
  onCardTitleClick: PropTypes.func.isRequired,
  onCityNameClick: PropTypes.func.isRequired,
};


export default Main;
