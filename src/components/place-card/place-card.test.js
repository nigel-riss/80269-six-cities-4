import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';


const cardMock = {
  photo: `apartment-01.jpg`,
  isPremium: false,
  price: 70,
  description: `Canal View Prinsengracht`,
  type: `hotel`,
  rating: 3.7,
};


it(`PlaceCard renders correctly`, () => {
  const handleCardTitleClick = jest.fn();
  const handleCardMouseEnter = jest.fn();

  const tree = renderer.create(<PlaceCard
    {...cardMock}
    onCardTitleClick={handleCardTitleClick}
    onCardMouseEnter={handleCardMouseEnter}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
