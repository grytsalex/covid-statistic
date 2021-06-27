import { createSelector } from "reselect";
import { initialState } from "./reducer/rootReducer";

export const selectorGetAppState = (state) => state || initialState;

export const selectorGetCountries = createSelector(
  selectorGetAppState,
  (state) => state.countries
);

export const selectorGetIsLoading = createSelector(
  selectorGetAppState,
  (state) => state.isLoading
);

export const selectorGetModalIsOpen = createSelector(
  selectorGetAppState,
  (state) => state.isOpen
);

export const selectorGetCurrentCountryData = createSelector(
  selectorGetCountries,
  selectorGetAppState,
  (countries, { currentCountry }) => {
    const temp = countries?.find((item) => item?.Country === currentCountry);
    return {
      countryName: temp?.Country,
      countryData: {
        totalConfirmed: temp?.TotalConfirmed,
        totalDeaths: temp?.TotalDeaths,
        totalRecovered: temp?.TotalRecovered,
      },
    };
  }
);
