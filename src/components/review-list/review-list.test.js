import React from 'react';
import renderer from 'react-test-renderer';
import ReviewList from './review-list.jsx';


const mock = [
  {
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 1,
    rating: 4,
    user: {
      avatarUrl: `img/avatar-max.jpg`,
      id: 4,
      isPro: false,
      name: `Max`,
    },
  },
  {
    comment: `Men are simple things. They can survive a whole weekend with only three things: beer, boxer shorts and batteries for the remote control.`,
    date: `2020-05-08T14:13:56.569Z`,
    id: 2,
    rating: 4.7,
    user: {
      avatarUrl: `img/avatar.svg`,
      id: 5,
      isPro: true,
      name: `Yuriy`,
    },
  },
  {
    comment: `I see you have something to talk about. Well, I have something to shout about. Infact something to sing about. But I'll just keep quiet and let you carry on.`,
    date: `2020-07-18T14:13:56.569Z`,
    id: 3,
    rating: 2.3,
    user: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 6,
      isPro: true,
      name: `Angelina`,
    },
  },
];


describe(`ReviewList renders correctly`, () => {
  it(`without inNearPlaces passed`, () => {
    const tree = renderer
      .create(<ReviewList
        reviews={mock}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`for Property component`, () => {
    const tree = renderer
      .create(<ReviewList
        reviews={mock}
        isNearPlaces={true}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`for Main component`, () => {
    const tree = renderer
      .create(<ReviewList
        reviews={mock}
        isNearPlaces={false}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
