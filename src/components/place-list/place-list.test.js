import React from 'react';
import renderer from 'react-test-renderer';
import PlaceList from './place-list.jsx';


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


it(`PlaceList renders correctly`, () => {
  const handleCardTitleClick = jest.fn();

  const tree = renderer
    .create(<PlaceList
      offers={offersMock}
      onCardTitleClick={handleCardTitleClick}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
