const MONTHS = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`,
];


export const getMonthYear = (dateString) => {
  const date = new Date(dateString);
  return `${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
};
