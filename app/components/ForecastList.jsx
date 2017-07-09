import React from 'react';

import { api } from '../appConfig';

export default class ForecastList extends React.Component{

	constructor(props){
		super(props);
		this.getForecastList = this.getForecastList.bind(this);
	}

	getForecastList(){

		let forecastList = this.props.data.list;

		let list = forecastList.map((item, key) => {

			//remove first element from list because its yesterday forecast
			if (key === 0){
				return
			}

			let date = new Date(item.dt * 1000).toDateString();
			return(
				<li className = 'forecast-list__item' key = {key}>
					<div className = 'list-date'>
						<p>{date}</p>
						<img src={api.imageURL + item.weather[0].icon + '.png'}/>
					</div>
					<div className = 'list-temp'>
						<p className = 'list-temp__day'>{item.temp.day}</p>
						<p className = 'list-temp__night'>{item.temp.night}</p>
					</div>
					<div className = 'list-description'>{item.weather[0].main}</div>
				</li>
			)

		});

		return(

			<ul className = 'forecast-list__list'>
				{list}
			</ul>

		)

	}

	render(){
		return(
			<div className = 'forecast-list'>
				<h3 className = 'forecast-list__header'>Weather in {this.props.data.city.name}, {this.props.data.city.country}</h3>
				{this.getForecastList()}
			</div>
		)
	}

} 