import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app.jsx';


const init = () => {
  const settings = {
    cardsCount: 7,
  };

  ReactDOM.render(
      <App
        cardsCount={settings.cardsCount}
      />,
      document.querySelector(`#root`)
  );
};

init();
