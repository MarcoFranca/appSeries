import {applyMiddleware, createStore} from "redux";
import rootReducer from "../reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import reduxThunk from "redux-thunk"

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(reduxThunk)
));
