import { takeLatest, put } from 'redux-saga/effects';
import { GET_COUNTRIES_REQUEST, DEFAULT_URL, SUMMARY_PARAM } from '../consts';
import { httpGet } from "../utils/request";
import {actionSetCountriesRequest} from "../actions";


export function* watchRootSaga () {
    yield takeLatest(GET_COUNTRIES_REQUEST, handleGetCountriesRequest);
}

export function* handleGetCountriesRequest () {
    try {
        const { Countries } = yield httpGet(DEFAULT_URL + SUMMARY_PARAM).then(res => res);
        const data = Countries.flat();
        yield put(actionSetCountriesRequest(data))
    } catch (e) {
        console.log(e);
    }
}