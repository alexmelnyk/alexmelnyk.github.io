import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './appReducer';

const middleware = [thunk];

//DEBUG

import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger}  from 'redux-logger';
const logger = createLogger();
middleware.push(logger);

let store = createStore(appReducer, composeWithDevTools(
    applyMiddleware(...middleware)
));


export default store;