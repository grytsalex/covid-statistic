import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { watchRootSaga } from './sagas/rootSaga';
import { rootReducer } from "./reducer/rootReducer";

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware),
));

sagaMiddleware.run(watchRootSaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

