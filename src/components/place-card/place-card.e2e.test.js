import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.jsx';


const cardMock = {
  photo: `apartment-03.jpg`,
  isPremium: true,
  price: 170,
  description: ``,
  type: `hotel`,
  rating: 4.3,
};


Enzyme.configure({
  adapter: new Adapter()
});


it(`PlaceCard onCardMouseEnter handler recieves correct data on mouse enter`, () => {
  const handleCardMouseEnter = jest.fn();
  const handleCardTitleClick = jest.fn();

  const placeCard = shallow(<PlaceCard
    {...cardMock}
    onCardTitleClick={handleCardTitleClick}
    onCardMouseEnter={handleCardMouseEnter}
  />);

  placeCard.simulate(`mouseEnter`, cardMock);

  expect(handleCardMouseEnter).toHaveBeenCalledTimes(1);

  expect(handleCardMouseEnter.mock.calls[0][0]).toMatchObject(cardMock);
});
