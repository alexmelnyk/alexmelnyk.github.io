import { 
    SET_EMPLOYEES,
    SORT_BY_NAME
} from '../app/constants.js';

export const setEmployees = (employees) => {
    return {
        type: SET_EMPLOYEES,
        employees: employees
    }
}

export const sortByName = (sortType) => {
    return {
        type: SORT_BY_NAME,
        sortType: sortType
    }
}