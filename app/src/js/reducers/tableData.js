const initialState = {
    status: null,
    data: [],
    time: null
};

import { REQUEST_TABLE_DATA } from '../constants';
import { RECEIVE_TABLE_DATA } from '../constants';

const tableData = (state = initialState, action) => { 
    switch (action.type){ 
        
        case REQUEST_TABLE_DATA:
            return {
                status: action.status,
                data: state.data,
                time: state.time 
            };
        
        case RECEIVE_TABLE_DATA:
            return {
                status: action.status,
                data: action.data,
                time: action.receivedAt
            }        
        
        default:
            return state;
    }	
}

export default tableData;