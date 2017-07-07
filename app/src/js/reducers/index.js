import { combineReducers } from 'redux';

import mainReducer from './main';
import tableDataReducer from './tableData';

const reduser = combineReducers({

	main: mainReducer,
	tableData: tableDataReducer
	
});

export default reduser