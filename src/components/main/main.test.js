import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';


const offersMock = [
  {
    photos: [
      `apartment-01.jpg`,
      `room.jpg`,
      `apartment-02.jpg`,
      `apartment-03.jpg`,
      `studio-01.jpg`,
      `apartment-01.jpg`,
    ],
    isPremium: false,
    price: 70,
    title: `Canal View Prinsengracht`,
    type: `Hotel`,
    rating: 3.7,
    descriptionLines: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    ],
    bedroomsCount: 3,
    maxAdultsCount: 4,
    host: {
      name: `Yuriy`,
      avatar: `avatar-max.jpg`,
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
  }, {
    photos: [
      `apartment-02.jpg`,
      `room.jpg`,
      `apartment-01.jpg`,
      `apartment-03.jpg`,
      `studio-01.jpg`,
      `apartment-01.jpg`,
    ],
    isPremium: false,
    price: 150,
    title: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    rating: 4.7,
    descriptionLines: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    ],
    bedroomsCount: 1,
    maxAdultsCount: 2,
    host: {
      name: `Anonymus`,
      avatar: `avatar.svg`,
      isSuper: false,
    },
    features: [
      `Wi-Fi`,
      `Ultra hi-end PC`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Kitchen`,
      `Dishwasher`,
      `Fridge`,
    ],
  }, {
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
  }, {
    photos: [
      `room.jpg`,
      `apartment-01.jpg`,
      `studio-01.jpg`,
      `apartment-02.jpg`,
      `apartment-03.jpg`,
      `apartment-01.jpg`,
    ],
    isPremium: false,
    price: 20,
    title: `Wood and stone place`,
    type: `Private room`,
    rating: 3.3,
    descriptionLines: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    ],
    bedroomsCount: 3,
    maxAdultsCount: 2,
    host: {
      name: `Yuriy`,
      avatar: `avatar-max.jpg`,
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
  },
];


it(`Main renders correctly`, () => {
  const handleCardTitleClick = jest.fn();

  const tree = renderer
    .create(<Main
      offers={offersMock}
      onCardTitleClick={handleCardTitleClick}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
