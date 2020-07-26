export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getCityList = (offers) => {
  return offers.reduce((acc, offer) => {
    const cityName = offer.city.name;
    if (acc.indexOf(cityName) < 0) {
      acc.push(cityName);
    }
    return acc;
  }, []);
};
