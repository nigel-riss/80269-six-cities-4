import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Main} from './main.jsx';


const CARD_NAMES = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `It's an old house located out in the hills`,
  `An infamous murder happened here awhile back.`,
  `This small house looks like an old castle`,
];


Enzyme.configure({
  adapter: new Adapter(),
});


it(`Card Title can be clicked`, () => {
  const handleCardTitleClick = jest.fn();

  const main = shallow(
      <Main
        onCardTitleClick={handleCardTitleClick}
        cardNames={CARD_NAMES}
      />
  );

  const cardTitles = main.find(`h2.place-card__name a`);

  cardTitles.forEach((cardTitle) => {
    cardTitle.simulate(`click`);
  });

  expect(handleCardTitleClick).toHaveBeenCalledTimes(CARD_NAMES.length);
});
