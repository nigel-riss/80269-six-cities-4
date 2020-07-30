export default [
  {
    type: `popular`,
    name: `Popular`,
    func(offers) {
      return offers.slice();
    },
  },
  {
    type: `priceAscending`,
    name: `Price: low to high`,
    func(offers) {
      const sortedOffers = offers.slice();
      return sortedOffers.sort((a, b) => {
        return a.price - b.price;
      });
    },
  },
  {
    type: `priceDescending`,
    name: `Price: high to low`,
    func(offers) {
      const sortedOffers = offers.slice();
      return sortedOffers.sort((a, b) => {
        return b.price - a.price;
      });
    },
  },
  {
    type: `byRating`,
    name: `Top rated first`,
    func(offers) {
      const sortedOffers = offers.slice();
      return sortedOffers.sort((a, b) => {
        return b.rating - a.rating;
      });
    },
  },
];
