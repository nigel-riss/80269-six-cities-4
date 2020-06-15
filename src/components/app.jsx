import PropTypes from 'prop-types';
import React from 'react';
import {Main} from './main.jsx';


export const App = (props) => {
  const {cardNames} = props;

  return <Main
    cardNames={cardNames}
  />;
};


App.propTypes = {
  cardNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};
