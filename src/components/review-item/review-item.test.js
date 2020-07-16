import React from 'react';
import renderer from 'react-test-renderer';
import ReviewItem from './review-item.jsx';


const mock = {
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
};


describe(`ReviewItem renders correctly`, () => {
  it(`without inNearPlaces passed`, () => {
    const tree = renderer
      .create(<ReviewItem
        review={mock}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`for Property component`, () => {
    const tree = renderer
      .create(<ReviewItem
        review={mock}
        isNearPlaces={true}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`for Main component`, () => {
    const tree = renderer
      .create(<ReviewItem
        review={mock}
        isNearPlaces={false}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
