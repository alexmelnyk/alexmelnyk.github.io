import React from 'react';

import TextField from 'material-ui/TextField';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { connect } from 'react-redux';

export default class Input extends React.Component {

	constructor(props){
		super(props)
	}

	getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }

    render(){
        return(

            <TextField
                className = {this.props.className}	
			    defaultValue = {this.props.defaultValue}
			    floatingLabelText = {this.props.floatingLabelText}
			    errorText= {this.props.errorText}
			    onBlur = {(e) => this.props.onBlur(e.target.value)}
			/>
        )
    }

}

Input.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};