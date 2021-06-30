import Recovered from "../assets/recovered.svg";
import Confirmed from "../assets/confirmed.svg";
import Death from "../assets/deaths.svg";

export const filterCountries = (countries = [], str) => {
  if (!Array.isArray(countries) || typeof str !== "string") return [];

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

export const matchRowData = (key) => {
  if (typeof key !== "string") return {};

  const data = {
    totalConfirmed: { icon: Confirmed, text: "Total Confirmed" },
    totalDeaths: { icon: Death, text: "Total Death" },
    totalRecovered: { icon: Recovered, text: "Total Recovered" },
  };

  return data[key];
};
