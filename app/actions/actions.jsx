import * as type from '../constants/const';

import { fetchData } from '../libs/fetchData';

export const setCityValue = (value) => {

	return{
		type: type.SET_CITY_VALUE,
		value: value
	}

}

export const setErrorText = (value) => {

	return{
		type: type.SET_ERROR_TEXT,
		value: value
	}

}

export const setForecastPeriod = (period) => {

	return{
		type: type.SET_FORECAST_PERIOD,
		period: period
	}

}

export const getForecast = (url, body) => {

    if ((typeof body) === 'undefined'){
        body = {};
    }

    return (
        fetchData(type.REQUEST_FORECAST, type.RECEIVE_FORECAST, url, body)
    )

} 