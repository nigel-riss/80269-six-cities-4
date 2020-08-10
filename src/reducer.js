import {extend} from './utils/common.js';


const parseOffer = (offer) => ({
  id: offer[`id`],
  bedrooms: offer[`bedrooms`],
  city: {
    name: offer[`city`][`name`],
    location: {
      latitude: offer[`city`][`latitude`],
      longitude: offer[`city`][`longitude`],
      zoom: offer[`city`][`zoom`],
    },
  },
  description: offer[`description`],
  features: offer[`goods`],
  host: {
    id: offer[`host`][`id`],
    name: offer[`host`][`name`],
    avatar: offer[`host`][`avatar_url`],
    isPro: offer[`host`][`is_pro`],
  },
  isFavorite: offer[`is_favorite`],
  isPremium: offer[`is_premium`],
  location: {
    latitude: offer[`location`][`latitude`],
    longitude: offer[`location`][`longitude`],
    zoom: offer[`location`][`zoom`],
  },
  maxAdults: offer[`max_adults`],
  photos: offer[`images`],
  previewImage: offer[`preview_image`],
  price: offer[`price`],
  rating: offer[`rating`],
  title: offer[`title`],
  type: offer[`type`],
});


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
  LOAD_OFFERS: `LOAD_OFFERS`,
};


const ActionCreator = {
  loadOffers: (rawOffers) => {
    return {
      type: ActionType.LOAD_OFFERS,
      payload: rawOffers,
    };
  },

  selectCity: (city) => ({
    type: ActionType.SELECT_CITY,
    payload: city,
  }),

  selectOffers: (city) => ({
    type: ActionType.SELECT_OFFERS,
    payload: city,
  }),
};


const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(response.data));
        dispatch(ActionCreator.selectCity(response.data[0].city.name));
        dispatch(ActionCreator.selectOffers(getState().activeCity));
      });
  },
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload.map(parseOffer),
      });
    case ActionType.SELECT_CITY:
      return extend(state, {
        activeCity: action.payload,
      });
    case ActionType.SELECT_OFFERS:
      return extend(state, {
        activeOffers: filterOffersByCity(state.offers, action.payload),
      });
    default:
      return state;
  }
};


export {reducer, ActionType, ActionCreator, Operation};
