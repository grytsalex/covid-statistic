import {
  SET_IS_LOADING,
  GET_COUNTRIES_REQUEST,
  SET_COUNTRIES_REQUEST,
  SET_MODAL_IS_OPEN,
  SET_CURRENT_COUNTRY,
  SET_ERROR_MESSAGE,
} from "./consts";

export const actionSetIsLoading = (payload) => ({
  type: SET_IS_LOADING,
  payload,
});

export const actionGetCountriesRequest = () => ({
  type: GET_COUNTRIES_REQUEST,
});

export const actionSetCountriesRequest = (payload) => ({
  type: SET_COUNTRIES_REQUEST,
  payload,
});

export const actionSetModalIsOpen = (payload) => ({
  type: SET_MODAL_IS_OPEN,
  payload,
});

export const actionSetCurrentCountry = (payload) => ({
  type: SET_CURRENT_COUNTRY,
  payload,
});

export const actionSetErrorMessage = (payload) => ({
  type: SET_ERROR_MESSAGE,
  payload,
});
