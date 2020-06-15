import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app.jsx';


const CARD_NAMES = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `It's an old house located out in the hills`,
  `An infamous murder happened here awhile back.`,
  `This small house looks like an old castle`,
];


const init = () => {
  ReactDOM.render(
      <App
        cardNames={CARD_NAMES}
      />,
      document.querySelector(`#root`)
  );
};

init();
