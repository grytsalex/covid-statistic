import {
  SET_IS_LOADING,
  SET_COUNTRIES_REQUEST,
  SET_MODAL_IS_OPEN,
} from "../consts";

export const initialState = {
  isLoading: false,
  countries: [],
  isOpen: false,
};

export const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_IS_LOADING:
      return setIsLoading(state, payload);

    case SET_COUNTRIES_REQUEST:
      return setCountries(state, payload);

    case SET_MODAL_IS_OPEN:
      return setModalIsOpen(state, payload);

    default:
      return state;
  }
};

function setIsLoading(state, payload) {
  return {
    ...state,
    isLoading: payload,
  };
}

function setCountries(state, payload) {
  return {
    ...state,
    countries: payload,
  };
}

function setModalIsOpen(state, payload) {
  return {
    ...state,
    isOpen: payload,
  };
}
