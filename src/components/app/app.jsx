import React, {PureComponent} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js'; 
import Main from '../main/main.jsx';
import Property from '../property/property.jsx';
import PropTypes from 'prop-types';
import OfferTypes from '../../types/offer.js';


const Screens = {
  MAIN: `main`,
  PROPERTY: `property`,
};


class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentScreen: Screens.MAIN,
    };

    this._handleCardTitleClick = this._handleCardTitleClick.bind(this);
  }

  render() {
    const {offers} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/property">
            <Property
              offer={offers[0]}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderApp() {
    const {
      currentOffer,
      currentScreen,
    } = this.state;

    const {
      activeCity,
      activeOffers,
      offers,
      onCityNameClick,
    } = this.props;


    if (currentScreen === Screens.MAIN) {
      return (
        <Main
          activeCity={activeCity}
          activeOffers={activeOffers}
          offers={offers}
          onCardTitleClick={this._handleCardTitleClick}
          onCityNameClick={onCityNameClick}
        />
      );
    }

    if (currentScreen === Screens.PROPERTY) {
      return (
        <Property
          offer={currentOffer}
        />
      );
    }

    return null;
  }

  _handleCardTitleClick(offer) {
    this.setState({
      currentOffer: offer,
      currentScreen: Screens.PROPERTY,
    });
  }
}


App.propTypes = {
  offers: PropTypes.arrayOf(OfferTypes).isRequired,
};


const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
  activeOffers: state.activeOffers,
  offers: state.offers,
});

const mapDispatchToProps = (dispatch) => ({
  onCityNameClick(cityName) {
    dispatch(ActionCreator.selectCity(cityName));
    dispatch(ActionCreator.selectOffers(cityName));
  }
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
