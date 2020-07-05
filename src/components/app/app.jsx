import React, {PureComponent} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';
import Property from '../property/property.jsx';
import {PlaceTypes} from '../../const.js';


class App extends PureComponent {
  constructor(props) {
    super(props);

    this._handleCardTitleClick = this._handleCardTitleClick.bind(this);
  }

  render() {
    const {offers} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp(offers)}
          </Route>
          <Route exact path="/property">
            <Property/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderApp(offers) {
    return (
      <Main
        offers={offers}
        onCardTitleClick={this._handleCardTitleClick}
      />
    );
  }

  _handleCardTitleClick() {}
}


App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    photo: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.oneOf(Object.values(PlaceTypes)).isRequired,
  })).isRequired,
};


export default App;
