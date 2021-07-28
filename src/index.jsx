/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

/* -------------------------- Internal Dependencies ------------------------- */
import App from "./App";
import { store } from "./app/store";
import * as serviceWorker from "./utils/serviceWorker";
import history from "./utils/history";

/* ---------------------------- Style Dependency ---------------------------- */
import "./assets/styles/index.css";

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
