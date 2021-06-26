// const filterCountries = (countries, str) => {};

export const columnSort = (a, b, sortDirection) => {
  if (a < b) {
    return sortDirection ? -1 : 1;
  }

  if (a > b) {
    return sortDirection ? 1 : -1;
  }

  return 0;
};
