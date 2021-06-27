import Recovered from "../assets/recovered.svg";
import Confirmed from "../assets/confirmed.svg";
import Death from "../assets/deaths.svg";

export const filterCountries = (countries = [], str) => {
  return countries?.filter((item) =>
    item?.Country.toLowerCase().startsWith(str)
  );
};

export const columnSort = (a, b, sortDirection) => {
  if (a < b) {
    return sortDirection ? -1 : 1;
  }

  if (a > b) {
    return sortDirection ? 1 : -1;
  }

  return 0;
};

export const matchIcons = (key) => {
  const icons = {
    TotalConfirmed: Confirmed,
    TotalDeath: Death,
    TotalRecovered: Recovered,
  };

  return icons[key];
};
