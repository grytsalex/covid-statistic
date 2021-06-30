import {
  selectorGetAppState,
  selectorGetCountries,
  selectorGetCurrentCountryData,
  selectorGetIsLoading,
  selectorGetModalIsOpen,
} from "../selectors";
import { initialState } from "../reducer/rootReducer";

const appState = {
  isLoading: false,
  countries: [],
  isOpen: false,
  errorMessage: "",
  currentCountry: "",
};

describe("App Selectors", () => {
  it("Should return the initial state.", () => {
    expect(selectorGetAppState(initialState)).toEqual(appState);
  });

  it("Should return isLoading", () => {
    expect(selectorGetIsLoading(initialState)).toEqual(appState.isLoading);
  });

  it("Should return isOpen", () => {
    expect(selectorGetModalIsOpen(initialState)).toEqual(appState.isOpen);
  });

  it("Should return countries", () => {
    expect(selectorGetCountries(initialState)).toEqual(appState.countries);
  });

  it("Should return current country data", () => {
    const initialState = {
      countries: [
        {
          Country: "Ukraine",
          TotalConfirmed: 1,
          TotalDeaths: 2,
          TotalRecovered: 3,
        },
      ],
      currentCountry: "Ukraine",
    };

    const expectedResult = {
      countryName: "Ukraine",
      countryData: {
        totalConfirmed: 1,
        totalDeaths: 2,
        totalRecovered: 3,
      },
    };
    expect(selectorGetCurrentCountryData(initialState)).toEqual(expectedResult);
  });
});
