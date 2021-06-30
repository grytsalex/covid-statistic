import React from "react";
import { Modal } from "../Modal";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

describe("Modal", () => {
  const commonProps = {
    isOpen: true,
    closeModal: jest.fn(),
  };

  const initialState = {
    isLoading: false,
    countries: [],
    isOpen: false,
    currentCountry: "",
  };

  const mockStore = configureStore();
  let store;

  it("should match snapshot", () => {
    store = mockStore(initialState);
    expect(
      shallow(
        <Provider store={store}>
          <Modal {...commonProps} />
        </Provider>
      )
    ).toMatchSnapshot();
  });
});
