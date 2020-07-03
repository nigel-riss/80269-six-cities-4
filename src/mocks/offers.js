import {PlaceTypes} from '../const';

export default [
  {
    photo: `apartment-01.jpg`,
    isPremium: false,
    price: 70,
    description: `Canal View Prinsengracht`,
    type: PlaceTypes.HOTEL,
    rating: 3.7,
  }, {
    photo: `apartment-02.jpg`,
    isPremium: false,
    price: 150,
    description: `Nice, cozy, warm big bed apartment`,
    type: PlaceTypes.APARTMENT,
    rating: 4.7,
  }, {
    photo: `apartment-03.jpg`,
    isPremium: true,
    price: 300,
    description: `Beautiful &amp; luxurious house at great location`,
    type: PlaceTypes.HOUSE,
    rating: 4.5,
  }, {
    photo: `room.jpg`,
    isPremium: false,
    price: 20,
    description: `Wood and stone place`,
    type: PlaceTypes.ROOM,
    rating: 3.3,
  },
];
