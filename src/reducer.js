import offers from './mocks/offers.js';
import {extend} from './utils/common.js';


const initialState = {
  city: `Amsterdam`,
  offers,
};

const ActionType = {
  SELECT_CITY: `SELECT_CITY`,
  GET_OFFERS: `GET_OFFERS`,
};


const filterOffersByCity = (offers, city) => {
  offers.filter((offer) => {
    return offer.city === city;
  });
};


const ActionCreator = {
  selectCity: (city) => ({
    type: ActionType.SELECT_CITY,
    payload: city,
  }),

  getOffers: (offers, city) => ({
    type: ActionType.GET_OFFERS,
    payload: filterOffersByCity(offers, city),
  }),
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELECT_CITY:
      return extend(state, {
        city: action.payload,
      });
    case ActionType.GET_OFFERS:
      return extend(state, {
        offers: action.payload,
      });
  }
};


export {reducer, ActionType, ActionCreator};
