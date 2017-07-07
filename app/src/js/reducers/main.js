const initialState = 1;

import { SET_INCREASE } from '../constants';
import { SET_DECREASE } from '../constants';

const main = (state = initialState, action) => { 
    switch (action.type){
        case SET_INCREASE:
            return state + 1;
        case SET_DECREASE:
            return state - 1;    
        default:
            return state;
    }	
}

export default main;