import React from 'react';
import renderer from 'react-test-renderer';
import CityList from './city-list.jsx';


const citiesMock = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`,
];


it(`CityList renders correctly`, () => {
  const tree = renderer
    .create(<CityList
      activeCity={`Paris`}
      cities={citiesMock}
      onCityNameClick={() => {}}
    />)
    .toJSON();


  expect(tree).toMatchSnapshot();
});
