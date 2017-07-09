import * as type from '../constants/const';
import { defaultState } from  '../appConfig';

const cityState = (state = defaultState.cityState, action) => {

	switch (action.type){
        case type.SET_CITY_VALUE:
            return Object.assign({}, state, {
            	value: action.value
            })
            break;

        case type.SET_ERROR_TEXT:
            return Object.assign({}, state, {
            	errorText: action.value
            })
            break;        	     

        default:
            return state;
    }

}

export default cityState