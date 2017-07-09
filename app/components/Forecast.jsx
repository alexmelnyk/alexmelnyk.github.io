import React from 'react';
import { connect } from 'react-redux';

import Progress from './Progress';
import ForecastList from './ForecastList';

import { getForecast } from '../actions/actions';
import { api } from '../appConfig';

const mapStateToProps = (state) => {
    return {
        weatherState : state.weatherState,
        cityState : state.cityState
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    	getForecast: (url, body) => {
    		dispatch(getForecast(url, body));
    	}
    }
};

export class Forecast extends React.Component{

	constructor(props){
		super(props);
		this.getForecast = this.getForecast.bind(this);
	}

	getForecast(cnt, city){
		let url = api.forecastURL;
		let params = {
			'q': city,
			'units': api.units,
			'cnt' : cnt,
			'appid': api.appid 
		}
		params = Object.keys(params).map((i) => i + '=' + params[i]).join('&');
		this.props.getForecast(url + '?' + params, {}); 
	}

	componentWillMount(){
		this.getForecast(this.props.weatherState.period, this.props.cityState.value)
	}

	componentWillReceiveProps(nextProps){
        if (nextProps.weatherState.period !== this.props.weatherState.period ||
        	nextProps.cityState.value !== this.props.cityState.value){
            this.getForecast(nextProps.weatherState.period, nextProps.cityState.value);
        }
    }

	render(){

		if (this.props.weatherState.forecast.status === null || this.props.weatherState.forecast.status === 'MAKE_REQUEST'){
			return(
				<Progress/>
			)
		}

		if (this.props.weatherState.forecast.status === 'DONE'){
			return(
				<ForecastList data={this.props.weatherState.forecast.data}/>
			)
		}

		if (this.props.weatherState.forecast.status === 'RECEIVE_ERROR'){
			return(
				<h3 className = "error-text">City not found</h3>
			)
		}		
	}

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Forecast)