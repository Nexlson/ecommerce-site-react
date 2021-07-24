import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

// set store and middleware
const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store