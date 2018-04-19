import { 
    SET_EMPLOYEES,
    SORT_BY_NAME 
} from '../app/constants.js';

import { defaultState } from '../app/appConfig.js';

const employeesReducer = (state = defaultState.employees, action) => {

    switch (action.type) {
        case SET_EMPLOYEES:
            return {...state, data: action.employees}
            break;
        
        case SORT_BY_NAME:
            const sortedEmployees = state.data.sort((a, b) => {
                if (a.first_name < b.first_name) {
                    return action.sortType === 'top' ? -1 : 1;
                }
                if (a.first_name > b.first_name) {
                    return action.sortType === 'top' ? 1 : -1;
                }

                return 0;
            })
            return {...state, data: sortedEmployees}
            break;

        default:
            return state;
    }    
}
    
export default employeesReducer;