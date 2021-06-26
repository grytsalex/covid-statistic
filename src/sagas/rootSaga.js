import { takeLatest, put } from "redux-saga/effects";
import { GET_COUNTRIES_REQUEST, DEFAULT_URL, SUMMARY_PARAM } from "../consts";
import { httpGet } from "../utils";
import { actionSetCountriesRequest, actionSetIsLoading } from "../actions";

export function* watchRootSaga() {
  yield takeLatest(GET_COUNTRIES_REQUEST, handleGetCountriesRequest);
}

export function* handleGetCountriesRequest() {
  yield put(actionSetIsLoading(true));
  try {
    const { Countries } = yield httpGet(DEFAULT_URL + SUMMARY_PARAM).then(
      (res) => res
    );

    yield put(actionSetCountriesRequest(Countries));
  } catch (e) {
    console.log(e);
  } finally {
    yield put(actionSetIsLoading(false));
  }
}
