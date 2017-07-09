import { combineReducers } from 'redux';

import cityState from '../reducer/cityState';
import weatherState from '../reducer/weatherState';

const reduser = combineReducers({

    cityState: cityState,
    weatherState: weatherState

});

export default reduser