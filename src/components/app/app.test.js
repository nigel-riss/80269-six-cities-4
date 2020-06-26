import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';


const CARD_NAMES = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `It's an old house located out in the hills`,
  `An infamous murder happened here awhile back.`,
  `This small house looks like an old castle`,
];


it(`App renders correctly`, () => {
  const tree = renderer
    .create(<App
      cardNames={CARD_NAMES}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
