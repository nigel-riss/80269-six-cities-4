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
    latitude: offer[`latitude`],
    longitude: offer[`longitude`],
    zoom: offer[`zoom`],
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
  loadOffers: (offers) => {
    return {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    };
  },

  selectCity: (city) => ({
    type: ActionType.SELECT_CITY,
    payload: city,
  }),

  selectOffers: (offers, city) => ({
    type: ActionType.SELECT_OFFERS,
    // payload: filterOffersByCity(offers, city),
    payload: filterOffersByCity(offers.map(parseOffer), city),
  }),
};


const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(response.data));


        // TODO change this lately
        dispatch(ActionCreator.selectCity(response.data[0].city.name));
        dispatch(ActionCreator.selectOffers(getState().offers, getState().activeCity));
        console.log(getState());
      });
  },
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload,
      });
    case ActionType.SELECT_CITY:
      return extend(state, {
        activeCity: action.payload,
      });
    case ActionType.SELECT_OFFERS:
      return extend(state, {
        activeOffers: action.payload,
      });
    default:
      return state;
  }
};


export {reducer, ActionType, ActionCreator, Operation};
