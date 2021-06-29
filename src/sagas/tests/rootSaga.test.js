import { testSaga } from "redux-saga-test-plan";
import { handleGetCountriesRequest, watchRootSaga } from "../rootSaga";
import { GET_COUNTRIES_REQUEST } from "../../consts";
import {
  actionSetCountriesRequest,
  actionSetErrorMessage,
  actionSetIsLoading,
} from "../../actions";
import { httpGet } from "../../utils";
import { put } from "redux-saga/effects";

jest.mock("../../utils", () => ({
  httpGet: jest.fn(() => ({
    then: jest.fn(() => new Promise((resolve, reject) => {})),
    catch: jest.fn(() => new Error("Get_Error")),
  })),
}));

describe("test saga", () => {
  it("should watch appropriate actions", () => {
    testSaga(watchRootSaga)
      .next()
      .takeLatest(GET_COUNTRIES_REQUEST, handleGetCountriesRequest)
      .next()
      .isDone();
  });

  describe("handleGetCountriesRequest", () => {
    const Countries = [{ Country: "Ukraine" }];
    const url = "https://api.covid19api.com/summary";

    it("should handle request", () => {
      testSaga(handleGetCountriesRequest)
        .next()
        .put(actionSetIsLoading(true))
        .next()
        .inspect(() =>
          httpGet(url).then((data) => expect(data).toEqual(Countries))
        )
        .next({ Countries })
        .put(actionSetCountriesRequest(Countries))
        .next()
        .put(actionSetErrorMessage(""))
        .next()
        .put(actionSetIsLoading(false))
        .next()
        .isDone();
    });

    it("should handle request with error", () => {
      const mockedError = new Error("network error");
      const error = "error";

      testSaga(handleGetCountriesRequest)
        .next()
        .put(actionSetIsLoading(true))
        .next()
        .inspect(() => httpGet(url).then((data) => expect(data).toEqual(error)))
        .throw(mockedError)
        // .put(
        //   actionSetErrorMessage("Sorry but service temporarily unavailable")
        // );
        .put(actionSetIsLoading(false))
        .next()
        .isDone();
    });
  });
});
