import React, {PureComponent} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';
import Property from '../property/property.jsx';
import {PlaceTypes} from '../../const.js';


const Screens = {
  MAIN: `main`,
  PROPERTY: `property`,
};


class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentScreen: Screens.MAIN
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
              offer={offers[2]}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderApp() {
    const {offers} = this.props;
    const {
      currentOffer,
      currentScreen,
    } = this.state;


    if (currentScreen === Screens.MAIN) {
      return (
        <Main
          offers={offers}
          onCardTitleClick={this._handleCardTitleClick}
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
  offers: PropTypes.arrayOf(PropTypes.shape({
    bedrooms: PropTypes.number.isRequired,
    location: PropTypes.arrayOf(PropTypes.number).isRequired,
    descriptionLines: PropTypes.arrayOf(PropTypes.string).isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    host: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      inPro: PropTypes.bool.isRequired,
    }).isRequired,
    isPremium: PropTypes.bool.isRequired,
    maxAdults: PropTypes.number.isRequired,
    photos: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.values(PlaceTypes)).isRequired,
  })).isRequired,
};


export default App;
