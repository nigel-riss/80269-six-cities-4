import mockOffers from './mocks/offers.js';
import {extend} from './utils/common.js';


const filterOffersByCity = (offers, cityName) => {
  return offers.filter((offer) => {
    return offer.city.name === cityName;
  });
};


const initialState = (mockOffers && mockOffers.length) > 0 ? {
  activeCity: mockOffers[0].city.name,
  activeOffers: filterOffersByCity(mockOffers, mockOffers[0].city.name),
  offers: mockOffers,
} : {
  activeCity: ``,
  activeOffers: [],
  offers: [],
};

const ActionType = {
  SELECT_CITY: `SELECT_CITY`,
  SELECT_OFFERS: `SELECT_OFFERS`,
};


const ActionCreator = {
  selectCity: (city) => ({
    type: ActionType.SELECT_CITY,
    payload: city,
  }),

  selectOffers: (city) => ({
    type: ActionType.SELECT_OFFERS,
    payload: filterOffersByCity(mockOffers, city),
  }),
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELECT_CITY:
      return extend(state, {
        activeCity: action.payload,
      });
    case ActionType.SELECT_OFFERS:
      return extend(state, {
        activeOffers: action.payload,
      });
  }

  return state;
};


export {reducer, ActionType, ActionCreator};
