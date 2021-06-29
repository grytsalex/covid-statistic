import { takeLatest, put } from "redux-saga/effects";
import { GET_COUNTRIES_REQUEST, DEFAULT_URL, SUMMARY_PARAM } from "../consts";
import { httpGet } from "../utils";
import {
  actionSetCountriesRequest,
  actionSetErrorMessage,
  actionSetIsLoading,
} from "../actions";

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
    yield put(actionSetErrorMessage(""));
  } catch (error) {
    if (error?.response?.status === 503) {
      yield put(
        actionSetErrorMessage("Sorry but service temporarily unavailable")
      );
    }
  } finally {
    yield put(actionSetIsLoading(false));
  }
}
