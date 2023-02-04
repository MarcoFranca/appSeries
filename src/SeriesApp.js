import React from 'react';
import Router from "./Router";
import {Provider} from "react-redux";
import {store} from "./redux/store/store";

const SeriesApp = () => (
    <Provider store={store}>
        <Router />
    </Provider>

);

export default SeriesApp;
