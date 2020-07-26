import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';
import {PlaceTypes} from '../../const.js';


const offersMock = [
  {
    id: 8,
    city: {
      location: {
        latitude: 48.864716,
        longitude: 2.349014,
        zoom: 11,
      },
      name: `Paris`,
    },
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
    type: PlaceTypes.ROOM,
    rating: 3.3,
    descriptionLines: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    ],
    bedrooms: 3,
    maxAdults: 2,
    host: {
      name: `Yuriy`,
      avatar: `avatar-max.jpg`,
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
    location: [48.884716, 2.409014],
  }, {
    id: 9,
    city: {
      location: {
        latitude: 50.935173,
        longitude: 6.953101,
        zoom: 11,
      },
      name: `Cologne`,
    },
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
    title: `Paris Canal View Prinsengracht`,
    type: PlaceTypes.HOTEL,
    rating: 3.7,
    descriptionLines: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    ],
    bedrooms: 3,
    maxAdults: 4,
    host: {
      name: `Yuriy`,
      avatar: `avatar-max.jpg`,
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
    location: [50.935173, 6.953101],
  }, {
    id: 10,
    city: {
      location: {
        latitude: 50.8407,
        longitude: 4.3542,
        zoom: 11,
      },
      name: `Brussels`,
    },
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
    title: `Paris Nice, cozy, warm big bed apartment`,
    type: PlaceTypes.APARTMENT,
    rating: 4.7,
    descriptionLines: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    ],
    bedrooms: 1,
    maxAdults: 2,
    host: {
      name: `Anonymus`,
      avatar: `avatar.svg`,
      inPro: false,
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
    location: [50.8407, 4.3542],
  },
];


it(`Main renders correctly`, () => {
  const handleCardTitleClick = jest.fn();

  const tree = renderer
    .create(<Main
      activeCity={`Paris`}
      activeOffers={offersMock.slice(0, 1)}
      offers={offersMock}
      onCityNameClick={() => {}}
      onCardTitleClick={handleCardTitleClick}
    />, {
      createNodeMock: () => {
        return document.createElement(`div`);
      },
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
