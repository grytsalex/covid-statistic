import React, { useCallback, useState, useLayoutEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { If, Then, Else } from "react-if";
import { createStructuredSelector } from "reselect";

import "./App.css";
import { Header, Table, Loader, Modal, AlertComponent } from "./components";
import {
  selectorGetCountries,
  selectorGetIsLoading,
  selectorGetModalIsOpen,
  selectorGetErrorMessage,
} from "./selectors";
import {
  actionGetCountriesRequest,
  actionSetCurrentCountry,
  actionSetModalIsOpen,
} from "./actions";
import { filterCountries } from "./utils";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(actionGetCountriesRequest());
  }, [dispatch]);

  const { isLoading, countries, isOpen, errorMessage } = useSelector(
    createStructuredSelector({
      isLoading: selectorGetIsLoading,
      countries: selectorGetCountries,
      isOpen: selectorGetModalIsOpen,
      errorMessage: selectorGetErrorMessage,
    }),
    shallowEqual
  );

  const handleOpenModal = useCallback(
    (country) => {
      dispatch(actionSetModalIsOpen(true));
      dispatch(actionSetCurrentCountry(country));
    },
    [dispatch]
  );

  const closeModal = useCallback(() => {
    dispatch(actionSetModalIsOpen(false));
  }, [dispatch]);

  const handleOnChange = useCallback((e) => {
    setSearchTerm(e.target.value.toLowerCase());
  }, []);

  const filteredCountries = filterCountries(countries, searchTerm);

  return (
    <div className="App">
      <If condition={isLoading}>
        <Then>
          <Loader />
        </Then>
        <Else>
          <If condition={errorMessage}>
            <Then>
              <AlertComponent message={errorMessage} />
            </Then>
            <Else>
              <Header onChange={handleOnChange} />
              <Table
                countries={filteredCountries}
                openModal={handleOpenModal}
              />
            </Else>
          </If>
        </Else>
      </If>
      <Modal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
}

export default App;
