import * as type from '../constants/const';
import { defaultState } from  '../appConfig';

const weatherState = (state = defaultState.weatherState, action) => {

	switch (action.type){
        case type.SET_FORECAST_PERIOD:
            return Object.assign({}, state, {
                period: action.period
            })
            break;

        case type.REQUEST_FORECAST:
            return Object.assign({}, state, {
                forecast: {
                    status: action.status,
                    data: state.data,
                    time: state.time
                }
            });
            break;

        case type.RECEIVE_FORECAST:
            return Object.assign({}, state, {
                forecast: {
                    status: action.status,
                    data: action.data,
                    time: action.receivedAt
                }
            });
            break;

        case type.RECEIVE_ERROR:
            return Object.assign({}, state, {
                forecast: {
                    status: type.RECEIVE_ERROR,
                    data: action.data,
                    time: action.receivedAt
                }
            });
            break;    	     

        default:
            return state;
    }

}

export default weatherState