import { IS_LOADING_SET, GET_COUNTRIES_REQUEST, SET_COUNTRIES_REQUEST } from './consts';

export const actionIsLoadingSet = payload => ({
    type: IS_LOADING_SET,
    payload,
});

export const actionGetCountriesRequest = payload => ({
    type: GET_COUNTRIES_REQUEST,
    payload
})

export const actionSetCountriesRequest = payload => ({
    type: SET_COUNTRIES_REQUEST,
    payload
})