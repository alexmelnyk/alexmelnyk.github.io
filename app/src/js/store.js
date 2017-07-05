import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';

import reducer from './reducers'

const middleware = [thunk];

//DEBUG
import { composeWithDevTools } from 'redux-devtools-extension';
import createLogger from 'redux-logger';
const logger = createLogger();
//middleware.push(logger);

let store = createStore(reducer, composeWithDevTools(
    applyMiddleware(...middleware)
));

export default store;