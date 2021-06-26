import { useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { If, Then, Else } from "react-if";
import { useEffect } from "react";
import { createStructuredSelector } from "reselect";

import "./App.css";
import { Header, Table, Loader } from "./components";
import {
  selectorGetCountries,
  selectorGetIsLoading,
  selectorGetModalIsOpen,
} from "./selectors";
import { actionGetCountriesRequest, actionSetModalIsOpen } from "./actions";
import { Modal } from "./components/Modal";

function App() {
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
    console.log("WORK");
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

  return (
    <div className="App">
      <Header />
      <If condition={isLoading}>
        <Then>
          <Loader />
        </Then>
        <Else>
          <Table countries={countries} openModal={handleOpenModal} />
        </Else>
      </If>
      <Modal
        isOpen={isOpen}
        handleKeyDownClose={handleKeyDownClose}
        closeModal={closeModal}
      />
    </div>
  );
}

export default App;
