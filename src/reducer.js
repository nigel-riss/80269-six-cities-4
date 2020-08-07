import {extend} from './utils/common.js';


const filterOffersByCity = (offers, cityName) => {
  return offers.filter((offer) => {
    return offer.city.name === cityName;
  });
};


const initialState = {
  activeCity: ``,
  activeOffers: [],
  offers: [],
};

const ActionType = {
  SELECT_CITY: `SELECT_CITY`,
  SELECT_OFFERS: `SELECT_OFFERS`,
  LOAD_OFFERS: ``
};


const ActionCreator = {
  selectCity: (city) => ({
    type: ActionType.SELECT_CITY,
    payload: city,
  }),

  selectOffers: (city, offers) => ({
    type: ActionType.SELECT_OFFERS,
    payload: filterOffersByCity(offers, city),
  }),
};


const Operation = {

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
