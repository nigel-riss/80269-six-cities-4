import PropTypes from 'prop-types';
import React from 'react';
import {Main} from '../main/main.jsx';


const handleCardTitleClick = () => {};


export const App = (props) => {
  const {cardNames} = props;

  return <Main
    cardNames={cardNames}
    onCardTitleClick={handleCardTitleClick}
  />;
};


App.propTypes = {
  cardNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};
