export const defaultState = {

	cityState: {
		value: 'Kiev',
		errorText: ''
	},
	weatherState: {
		period: 2,
		forecast: {
			status: null,
        	data: {},
        	time: null
		}
	}

}

export const api = {
	forecastURL: 'http://api.openweathermap.org/data/2.5/forecast/daily',
	imageURL: 'http://openweathermap.org/img/w/',
	appid: 'fb93c2af85739e3029e7fe50649e41b5',
	units: 'metric'
}