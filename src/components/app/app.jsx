import React, {PureComponent} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';
import Property from '../property/property.jsx';
import OfferTypes from '../../types/offer.js';


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
  offers: PropTypes.arrayOf(OfferTypes).isRequired,
};


export default App;
