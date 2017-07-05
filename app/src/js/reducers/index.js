import { combineReducers } from 'redux';

import mainReducer from './main';

const reduser = combineReducers({

	main: mainReducer
	
});

export default reduser