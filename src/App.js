import { useCallback, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { If, Then, Else } from "react-if";
import { useEffect } from "react";
import { createStructuredSelector } from "reselect";

import "./App.css";
import { Header, Table, Loader, Modal } from "./components";
import {
  selectorGetCountries,
  selectorGetIsLoading,
  selectorGetModalIsOpen,
} from "./selectors";
import { actionGetCountriesRequest, actionSetModalIsOpen } from "./actions";
import { filterCountries } from "./utils";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetCountriesRequest());
  }, [dispatch]);

  const { isLoading, countries, isOpen } = useSelector(
    createStructuredSelector({
      isLoading: selectorGetIsLoading,
      countries: selectorGetCountries,
      isOpen: selectorGetModalIsOpen,
    }),
    shallowEqual
  );

  const handleOpenModal = useCallback(() => {
    dispatch(actionSetModalIsOpen(true));
  }, [dispatch]);

  const closeModal = useCallback(() => {
    dispatch(actionSetModalIsOpen(false));
  }, [dispatch]);

  const handleKeyDownClose = useCallback(
    (event) => {
      if (
        event.key === "Esc" ||
        event.key === "Escape" ||
        event.key === "Enter"
      ) {
        closeModal();
      }
    },
    [closeModal]
  );

  const handleOnChange = useCallback((e) => {
    setSearchTerm(e.target.value.toLowerCase());
  }, []);

  const filteredCountries = filterCountries(countries, searchTerm);

  console.log(searchTerm);

  return (
    <div className="App">
      <Header onChange={handleOnChange} />
      <If condition={isLoading}>
        <Then>
          <Loader />
        </Then>
        <Else>
          <Table countries={filteredCountries} openModal={handleOpenModal} />
        </Else>
      </If>
      <Modal
        isOpen={!isOpen}
        handleKeyDownClose={handleKeyDownClose}
        closeModal={closeModal}
      />
    </div>
  );
}

export default App;
