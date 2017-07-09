import React from 'react';
import { connect } from 'react-redux';

import { setCityValue, setErrorText } from '../actions/actions';

import Input from './Input';
import Button from './Button';


const mapStateToProps = (state) => {
    return {
        cityState : state.cityState
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setCityValue: (value) => {
        	dispatch(setCityValue(value));
        },
        setErrorText: (value) => {
        	dispatch(setErrorText(value));
        }
    }
};

export class CitySelect extends React.Component{

	constructor(props){
		super(props);
		this.isCityEmpty = this.isCityEmpty.bind(this);
		this.setError = this.setError.bind(this);
	}

	isCityEmpty(){

		let city = this.props.cityState.value;
		return city.length > 0 ? false : true

	}

	setError(){

		let errorText = this.isCityEmpty() === true ? 'You have to fill this field' : '';
		this.props.setErrorText(errorText);

	}

	render(){
		return(

			<div className = 'city-select'>
				<Input
					className = 'city-select__input'
					defaultValue = {this.props.cityState.value}
					floatingLabelText = 'Choose city'
					onBlur = {this.props.setCityValue}
					errorText = {this.props.cityState.errorText}
				/>
				<Button
					className = 'city-select__button'
                    label = 'Choose'
                    onClick = {this.setError}
                    primary = {true}
                />
			</div>

		)
	}

} 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CitySelect)