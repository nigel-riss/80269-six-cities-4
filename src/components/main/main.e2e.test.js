import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';


const offersMock = [
  {
    photo: `apartment-01.jpg`,
    isPremium: false,
    price: 70,
    description: `Canal View Prinsengracht`,
    type: `hotel`,
    rating: 3.7,
  }, {
    photo: `apartment-02.jpg`,
    isPremium: false,
    price: 150,
    description: `Nice, cozy, warm big bed apartment`,
    type: `apartment`,
    rating: 4.7,
  }, {
    photo: `apartment-03.jpg`,
    isPremium: true,
    price: 300,
    description: `Beautiful &amp; luxurious house at great location`,
    type: `house`,
    rating: 4.5,
  }, {
    photo: `room.jpg`,
    isPremium: false,
    price: 20,
    description: `Wood and stone place`,
    type: `room`,
    rating: 3.3,
  },
];


Enzyme.configure({
  adapter: new Adapter(),
});


it(`Card Title can be clicked`, () => {
  const handleCardTitleClick = jest.fn();

  const main = mount(
      <Main
        onCardTitleClick={handleCardTitleClick}
        offers={offersMock}
      />
  );

  const cardTitles = main.find(`h2.place-card__name a`);

  cardTitles.forEach((cardTitle) => {
    cardTitle.simulate(`click`);
  });

  expect(handleCardTitleClick).toHaveBeenCalledTimes(offersMock.length);
});
