import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import "./index.css";
import AppContainer from "./app/AppContainer";
import rootReducer from "./reducers";

// const offersRepository = new OffersRepository();
// const offers = offersRepository.getOffers();

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
