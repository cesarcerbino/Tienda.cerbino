import { applyMiddleware, combineReducers, createStore } from "redux";

import { categoryReducer } from "./reducers/index";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  category: categoryReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
