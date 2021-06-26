import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { If, Then, Else } from "react-if";
import { useEffect } from "react";

import "./App.css";
import { Header, Table, Loader } from "./components";
import { selectorGetCountries, selectorGetIsLoading } from "./selectors";
import { actionGetCountriesRequest } from "./actions";
import { createStructuredSelector } from "reselect";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetCountriesRequest());
  }, [dispatch]);

  const { isLoading, countries } = useSelector(
    createStructuredSelector({
      isLoading: selectorGetIsLoading,
      countries: selectorGetCountries,
    }),
    shallowEqual
  );

  return (
    <div className="App">
      <Header />
      <If condition={isLoading}>
        <Then>
          <Loader />
        </Then>
        <Else>
          <Table countries={countries} />
        </Else>
      </If>
    </div>
  );
}

export default App;
