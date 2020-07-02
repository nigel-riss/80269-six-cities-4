import PropTypes from 'prop-types';
import React from 'react';
import {Main} from '../main/main.jsx';


const handleCardTitleClick = () => {};


export const App = (props) => {
  const {offers} = props;

  return <Main
    offers={offers}
    onCardTitleClick={handleCardTitleClick}
  />;
};


App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    
  })).isRequired,
};
