import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import App from "./App";

describe("With React Testing Library", () => {
  const initialState = {
    isLoading: false,
    countries: [],
    isOpen: false,
    currentCountry: "",
  };
  const mockStore = configureStore();
  let store;

  it("Shows text 'statistic'", () => {
    store = mockStore(initialState);
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(getByText("statistic")).not.toBeNull();
  });
});
