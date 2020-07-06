import React from 'react';
import renderer from 'react-test-renderer';
import Property from '../property/property.jsx';


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
  bedroomsCount: 3,
  maxAdultsCount: 2,
  host: {
    name: `Angelina`,
    avatar: `avatar-angelina.jpg`,
    isSuper: true,
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
};


it(`Property component renders correncty`, () => {
  const tree = renderer
    .create(<Property
      offer={offerMock}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
