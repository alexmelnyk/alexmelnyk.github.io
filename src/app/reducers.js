import { combineReducers } from 'redux';

import employeesReducer from '../employees/employeesReducer.js';

const reducer = combineReducers({
    employees: employeesReducer
});

export default reducer;