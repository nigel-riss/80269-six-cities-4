import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';


const offerMock = {
  photos: [
    `apartment-03.jpg`,
    `room.jpg`,
    `apartment-01.jpg`,
    `apartment-02.jpg`,
    `studio-01.jpg`,
    `apartment-01.jpg`,
  ],
  isPremium: true,
  price: 300,
  title: `Beautiful &amp; luxurious house at great location`,
  type: `House`,
  rating: 4.5,
  descriptionLines: [
    `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  ],
  bedrooms: 3,
  maxAdults: 2,
  host: {
    name: `Angelina`,
    avatar: `avatar-angelina.jpg`,
    inPro: true,
  },
  features: [
    `Wi-Fi`,
    `Washing machine`,
    `Towels`,
    `Heating`,
    `Coffee machine`,
    `Baby seat`,
    `Kitchen`,
    `Dishwasher`,
    `Cabel TV`,
    `Fridge`,
  ],
  location: [52.3909553943508, 4.85309666406198],
};


it(`PlaceCard renders correctly`, () => {
  const handleCardTitleClick = jest.fn();
  const handleCardMouseEnter = jest.fn();

  const tree = renderer
    .create(<PlaceCard
      offer={offerMock}
      onCardTitleClick={handleCardTitleClick}
      onCardMouseEnter={handleCardMouseEnter}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
