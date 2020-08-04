import React from 'react';
import renderer from 'react-test-renderer';
import NoPlaces from './no-places.jsx';


it(`NoPlaces component renders correctly`, () => {
  const tree = renderer
    .create(<NoPlaces
      activeCity={`Paris`}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
