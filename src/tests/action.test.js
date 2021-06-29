import {
  SET_IS_LOADING,
  GET_COUNTRIES_REQUEST,
  SET_COUNTRIES_REQUEST,
  SET_MODAL_IS_OPEN,
  SET_CURRENT_COUNTRY,
} from "../consts";

import {
  actionSetIsLoading,
  actionGetCountriesRequest,
  actionSetCountriesRequest,
  actionSetModalIsOpen,
  actionSetCurrentCountry,
} from "../actions";

describe("App Actions", () => {
  it("actionSetModalIsOpen", () => {
    const payload = true;

    expect(actionSetModalIsOpen(payload)).toEqual({
      type: SET_MODAL_IS_OPEN,
      payload,
    });
  });

  it("actionSetCurrentCountry", () => {
    const payload = "Ukraine";

    expect(actionSetCurrentCountry(payload)).toEqual({
      type: SET_CURRENT_COUNTRY,
      payload,
    });
  });

  it("actionSetCountriesRequest", () => {
    const payload = [{ Country: "Ukraine" }];

    expect(actionSetCountriesRequest(payload)).toEqual({
      type: SET_COUNTRIES_REQUEST,
      payload,
    });
  });

  it("actionGetCountriesRequest", () => {
    expect(actionGetCountriesRequest()).toEqual({
      type: GET_COUNTRIES_REQUEST,
    });
  });

  it("actionSetIsLoading", () => {
    const payload = true;

    expect(actionSetIsLoading(payload)).toEqual({
      type: SET_IS_LOADING,
      payload,
    });
  });
});
