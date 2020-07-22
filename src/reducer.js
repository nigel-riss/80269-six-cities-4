import offers from './mocks/offers.js';


const initialState = {
  city: `Amsterdam`,
  offers,
};

const ActionType = {
  SELECT_CITY: `SELECT_CITY`,
  GET_OFFERS: `GET_OFFERS`,
};


const ActionCreator = {
  selectCity: (city) => ({
    type: ActionType.SELECT_CITY,
    payload: city,
  }),

  getOffers: (offers, city) => ({
    type: ActionType.GET_OFFERS,
    payload
  }),
};


const reducer = (state = initialState, action) => {

};

export {reducer, ActionType, ActionCreator};
