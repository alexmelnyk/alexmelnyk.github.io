import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';

//const middleware = [thunk];

//DEBUG
//import { composeWithDevTools } from 'redux-devtools-extension';
//import { createLogger}  from 'redux-logger';
//const logger = createLogger();
//middleware.push(logger);

const store = createStore(
  reducer
)

export default store;