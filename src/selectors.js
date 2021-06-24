import { createSelector } from 'reselect';
import { initialState } from './reducer/rootReducer';

export const selectorGetAppState = state => state || initialState;

export const selectorGetCountries = createSelector(
    selectorGetAppState,
    state => state.countries,
);

export const selectorGetIsLoading = createSelector(
  selectorGetAppState,
  state => state.isLoading,
);

