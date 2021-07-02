import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";

import { Modal } from "../Modal";

describe("Modal", () => {
  const commonProps = {
    isOpen: true,
    closeModal: jest.fn(),
  };

  const initialState = {
    isLoading: false,
    countries: [],
    isOpen: true,
    currentCountry: "",
    errorMessage: "",
  };

  const mockStore = configureStore();
  let store;

  it("should match snapshot", () => {
    store = mockStore(initialState);
    expect(
      mount(
        <Provider store={store}>
          <Modal {...commonProps} />
        </Provider>
      )
    ).toMatchSnapshot();
  });
});
