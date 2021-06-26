import {
  SET_IS_LOADING,
  GET_COUNTRIES_REQUEST,
  SET_COUNTRIES_REQUEST,
} from "./consts";

export const actionSetIsLoading = (payload) => ({
  type: SET_IS_LOADING,
  payload,
});

export const actionGetCountriesRequest = (payload) => ({
  type: GET_COUNTRIES_REQUEST,
  payload,
});

export const actionSetCountriesRequest = (payload) => ({
  type: SET_COUNTRIES_REQUEST,
  payload,
});
