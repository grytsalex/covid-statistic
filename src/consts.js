// for actions
export const SET_IS_LOADING = "SET_IS_LOADING";
export const GET_COUNTRIES_REQUEST = "GET_COUNTRIES_REQUEST";
export const SET_COUNTRIES_REQUEST = "SET_COUNTRIES_REQUEST";
export const SET_MODAL_IS_OPEN = "SET_MODAL_IS_OPEN";
export const SET_CURRENT_COUNTRY = "SET_CURRENT_COUNTRY";
export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";

// for request
export const DEFAULT_URL = "https://api.covid19api.com/";
export const SUMMARY_PARAM = "summary";

// table header text
export const tableHeaderCells = {
  serialNumber: {
    text: "№",
    isSorted: false,
  },
  country: {
    text: "Country",
    isSorted: "true",
  },
  totalConfirmed: {
    text: "Total Confirmed",
    isSorted: true,
  },
};
