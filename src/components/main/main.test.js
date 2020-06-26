import React from 'react';
import renderer from 'react-test-renderer';
import {Main} from './main.jsx';


const CARD_NAMES = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `It's an old house located out in the hills`,
  `An infamous murder happened here awhile back.`,
  `This small house looks like an old castle`,
];


it(`Main renders correctly`, () => {
  const handleCardTitleClick = jest.fn();

  const tree = renderer
    .create(<Main
      cardNames={CARD_NAMES}
      onCardTitleClick={handleCardTitleClick}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
