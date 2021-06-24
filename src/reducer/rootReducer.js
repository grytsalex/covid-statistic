import { IS_LOADING_SET, SET_COUNTRIES_REQUEST } from '../consts';

export const initialState = {
    isLoading: false,
    countries: [],
}

export const rootReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch(type) {
        case IS_LOADING_SET:
            return setIsLoading(state, payload);

        case SET_COUNTRIES_REQUEST:
            return setCountries(state, payload);

        default: return state;
    }
}

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