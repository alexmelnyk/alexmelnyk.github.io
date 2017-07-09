import React from 'react';
import { connect } from 'react-redux';

import Button from './Button';


import { setForecastPeriod } from '../actions/actions';

const mapStateToProps = (state) => {
    return {
        weatherState : state.weatherState
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    	setForecastPeriod: (period) => {
    		dispatch(setForecastPeriod(period));
    	}
    }
};

export class PeriodSelect extends React.Component{

	constructor(props){
		super(props);
		this.getPeriod = this.getPeriod.bind(this);
	}

	getPeriod(){
		let period = this.props.weatherState.period

		//begin from 2 because first element is yesterday forecast
		if (period === 2){
			return 'Today'
		}

		if (period === 3){
			return 'Tomorrow'
		}

		if (period === 8){
			return 'Week'
		}

		if (period === 17){
			return '16 days'
		}

		return period

	}

	render(){
		return(
			<div className = 'period-select'>
				<p className = 'period-select__period'>period: {this.getPeriod()}</p>
				<div className = 'period-select__buttons'>
					<Button
						className = 'period-select__today'
	                    label = 'Today'
	                    onClick = {() => this.props.setForecastPeriod(2)}
	                    primary = {this.props.weatherState.period === 2 ? true : false}
	                />
					<Button
						className = 'period-select__tomorrow'
	                    label = 'Tomorrow'
	                    onClick = {() => this.props.setForecastPeriod(3)}
	                    primary = {this.props.weatherState.period === 3 ? true : false}
	                />
					<Button
						className = 'period-select__week'
	                    label = 'Week'
	                    onClick = {() => this.props.setForecastPeriod(8)}
	                    primary = {this.props.weatherState.period === 8 ? true : false}
	                />
					<Button
						className = 'period-select__month'
	                    label = '16 days'
	                    onClick = {() => this.props.setForecastPeriod(17)}
	                    primary = {this.props.weatherState.period === 17 ? true : false}
	                />  
				</div>                                   
			</div>
		)
	}

}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PeriodSelect)